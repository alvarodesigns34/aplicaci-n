import { SimulationMetrics, Year, ScenarioDefinition, DynamicEvent } from '../types/simulation';
import { BASELINE_YEARS } from './constants';
import { applyEventsToMetrics } from './events';

const MILESTONES: Year[] = [2030, 2035, 2040, 2050];

/**
 * Linearly or exponentially interpolate between two milestone values.
 */
function interpolate(a: number, b: number, t: number, isExp = false): number {
  if (isExp && a > 0 && b > 0) {
    return Math.exp(Math.log(a) + t * (Math.log(b) - Math.log(a)));
  }
  return a + (b - a) * t;
}

/**
 * Computes interpolated baseline metrics for any floating-point year between 2030 and 2050.
 */
export function getInterpolatedBaseline(year: number): SimulationMetrics {
  if (year <= MILESTONES[0]) return { ...BASELINE_YEARS[MILESTONES[0]] };
  if (year >= MILESTONES[MILESTONES.length - 1]) return { ...BASELINE_YEARS[MILESTONES[MILESTONES.length - 1]] };

  // Find bounding interval
  let idx = 0;
  for (let i = 0; i < MILESTONES.length - 1; i++) {
    if (year >= MILESTONES[i] && year <= MILESTONES[i + 1]) {
      idx = i;
      break;
    }
  }

  const y0 = MILESTONES[idx];
  const y1 = MILESTONES[idx + 1];
  const t = (year - y0) / (y1 - y0);

  const m0 = BASELINE_YEARS[y0];
  const m1 = BASELINE_YEARS[y1];

  const result: SimulationMetrics = {
    // Exponential growth metrics
    aiComputeExaflops: interpolate(m0.aiComputeExaflops, m1.aiComputeExaflops, t, true),
    cloudDemandEBMonth: interpolate(m0.cloudDemandEBMonth, m1.cloudDemandEBMonth, t, true),
    globalBandwidthPbps: interpolate(m0.globalBandwidthPbps, m1.globalBandwidthPbps, t, true),
    robotPopulationMillions: interpolate(m0.robotPopulationMillions, m1.robotPopulationMillions, t, true),
    fusionOutputTWh: interpolate(m0.fusionOutputTWh, m1.fusionOutputTWh, t, true),
    batteryStorageGWh: interpolate(m0.batteryStorageGWh, m1.batteryStorageGWh, t, true),
    activeSatellites: interpolate(m0.activeSatellites, m1.activeSatellites, t, true),
    opticalLaserBandwidthTbps: interpolate(m0.opticalLaserBandwidthTbps, m1.opticalLaserBandwidthTbps, t, true),
    computeEfficiency: interpolate(m0.computeEfficiency, m1.computeEfficiency, t, true),
    autonomousAgentCount: interpolate(m0.autonomousAgentCount, m1.autonomousAgentCount, t, true),

    // Linear / S-Curve metrics
    aiAdoptionRate: interpolate(m0.aiAdoptionRate, m1.aiAdoptionRate, t),
    dataCenterCapacityGW: interpolate(m0.dataCenterCapacityGW, m1.dataCenterCapacityGW, t),
    dataCenterUtilization: interpolate(m0.dataCenterUtilization, m1.dataCenterUtilization, t),
    pueAverage: interpolate(m0.pueAverage, m1.pueAverage, t),
    coolingStressPercent: interpolate(m0.coolingStressPercent, m1.coolingStressPercent, t),
    energyProductionTWh: interpolate(m0.energyProductionTWh, m1.energyProductionTWh, t),
    energyConsumptionTWh: interpolate(m0.energyConsumptionTWh, m1.energyConsumptionTWh, t),
    renewableEnergyPercent: interpolate(m0.renewableEnergyPercent, m1.renewableEnergyPercent, t),
    gridStressPercent: interpolate(m0.gridStressPercent, m1.gridStressPercent, t),
    carbonIntensityGCO2: interpolate(m0.carbonIntensityGCO2, m1.carbonIntensityGCO2, t),
    satelliteCoveragePercent: interpolate(m0.satelliteCoveragePercent, m1.satelliteCoveragePercent, t),
    orbitalHealthPercent: interpolate(m0.orbitalHealthPercent, m1.orbitalHealthPercent, t),
    spaceWeatherIndex: interpolate(m0.spaceWeatherIndex, m1.spaceWeatherIndex, t),
    networkLatencyMs: interpolate(m0.networkLatencyMs, m1.networkLatencyMs, t, true), // decreases exponentially
    subseaCableIntegrityPercent: interpolate(m0.subseaCableIntegrityPercent, m1.subseaCableIntegrityPercent, t),
    quantumMeshCoveragePercent: interpolate(m0.quantumMeshCoveragePercent, m1.quantumMeshCoveragePercent, t),
    automationEfficiencyPercent: interpolate(m0.automationEfficiencyPercent, m1.automationEfficiencyPercent, t),
    robotEnergyDemandGW: interpolate(m0.robotEnergyDemandGW, m1.robotEnergyDemandGW, t),
    urbanPopulationBillions: interpolate(m0.urbanPopulationBillions, m1.urbanPopulationBillions, t),
    smartCitySaturationPercent: interpolate(m0.smartCitySaturationPercent, m1.smartCitySaturationPercent, t),
    edgeComputeLoadPercent: interpolate(m0.edgeComputeLoadPercent, m1.edgeComputeLoadPercent, t),
    globalSystemHealth: interpolate(m0.globalSystemHealth, m1.globalSystemHealth, t),
    healthStatus: 'NOMINAL',
    resilienceScore: interpolate(m0.resilienceScore, m1.resilienceScore, t),
  };

  return result;
}

/**
 * Applies mathematical interdependencies and scenario multipliers.
 */
export function calculateSimulationFrame(
  year: number,
  scenario: ScenarioDefinition,
  activeEvents: DynamicEvent[],
  tickSeed: number
): SimulationMetrics {
  const base = getInterpolatedBaseline(year);
  const mult = scenario.multipliers;

  // Apply scenario multipliers
  base.aiComputeExaflops *= mult.aiCompute;
  base.energyProductionTWh *= mult.energyProduction;
  base.renewableEnergyPercent = Math.min(99.5, base.renewableEnergyPercent * mult.renewablePercent);
  base.batteryStorageGWh *= mult.batteryStorage;
  base.activeSatellites = Math.round(base.activeSatellites * mult.satelliteCount);
  base.globalBandwidthPbps *= mult.networkBandwidth;
  base.robotPopulationMillions *= mult.roboticsCount;
  base.coolingStressPercent = Math.min(98, Math.max(10, base.coolingStressPercent / mult.coolingEfficiency));

  // --- MATHEMATICAL INTERDEPENDENCY EQUATIONS ---

  // 1. AI Compute dictates Data Center Power requirements
  // Higher compute increases required data center capacity and power draw
  const aiPowerDemandFactor = (base.aiComputeExaflops / 135) * 0.45 + 0.55;
  base.dataCenterCapacityGW *= aiPowerDemandFactor;

  // 2. Data Centers + Robots dictate consumption
  // Power needed for DC: Capacity * Utilization * PUE
  const dcPowerAnnualTWh = (base.dataCenterCapacityGW * 8760 * (base.dataCenterUtilization / 100) * base.pueAverage) / 1000;
  const robotPowerAnnualTWh = (base.robotEnergyDemandGW * (base.robotPopulationMillions / 90) * 8760) / 1000;
  base.energyConsumptionTWh += (dcPowerAnnualTWh * 0.6 + robotPowerAnnualTWh * 0.4);

  // 3. Grid Stress calculation:
  // Ratio of consumption to production modified by battery buffering
  const energyMarginRatio = (base.energyProductionTWh - base.energyConsumptionTWh) / base.energyProductionTWh;
  let rawGridStress = 60 - (energyMarginRatio * 150);
  // Battery buffering mitigates stress
  const batteryBufferFactor = Math.min(1.0, base.batteryStorageGWh / 10000);
  rawGridStress -= (batteryBufferFactor * 15);
  base.gridStressPercent = Math.max(10, Math.min(98, rawGridStress));

  // 4. Satellite Coverage & Laser Bandwidth impact on Latency
  // More satellites and optical mesh lower global latency
  const satRatio = Math.min(2.5, base.activeSatellites / 50000);
  base.satelliteCoveragePercent = Math.min(99.9, base.satelliteCoveragePercent * (0.8 + 0.2 * satRatio));
  base.opticalLaserBandwidthTbps *= Math.sqrt(satRatio);

  // High grid stress degrades routing infrastructure
  if (base.gridStressPercent > 75) {
    const stressPenalty = (base.gridStressPercent - 75) * 0.8;
    base.networkLatencyMs += stressPenalty;
    base.subseaCableIntegrityPercent = Math.max(40, base.subseaCableIntegrityPercent - stressPenalty * 0.3);
  }

  // 5. Automation Efficiency impacts Infrastructure Resilience
  base.automationEfficiencyPercent = Math.min(99, base.automationEfficiencyPercent * (base.robotPopulationMillions > 50 ? 1.05 : 0.95));

  // 6. Stochastic micro-fluctuation for alive HUD realism
  const noise = (Math.sin(tickSeed * 0.12) + Math.cos(tickSeed * 0.23)) * 0.008;
  base.aiComputeExaflops *= (1 + noise * 0.5);
  base.networkLatencyMs = Math.max(1.2, base.networkLatencyMs * (1 + noise * 0.8));
  base.gridStressPercent = Math.max(5, Math.min(99, base.gridStressPercent + noise * 4));

  // 7. Composite Global System Health Synthesis
  const energyHealth = Math.max(0, Math.min(100, 100 - (base.gridStressPercent - 30) * 1.2));
  const networkHealth = (base.subseaCableIntegrityPercent * 0.4 + base.satelliteCoveragePercent * 0.4 + Math.max(0, 100 - base.networkLatencyMs * 2) * 0.2);
  const computeHealth = Math.max(0, 100 - (base.coolingStressPercent - 30) * 1.1);
  const orbitalHealth = base.orbitalHealthPercent;

  base.globalSystemHealth = Math.max(
    5,
    Math.min(99.9, energyHealth * 0.35 + networkHealth * 0.30 + computeHealth * 0.20 + orbitalHealth * 0.15)
  );
  base.resilienceScore = Math.max(
    10,
    Math.min(99.5, (base.batteryStorageGWh / 100) * 0.2 + base.automationEfficiencyPercent * 0.4 + base.globalSystemHealth * 0.4)
  );

  // 8. Apply dynamic events overlay
  const finalMetrics = applyEventsToMetrics(base, activeEvents);

  return finalMetrics;
}
