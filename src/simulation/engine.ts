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
  const baselineRef = { ...base };
  const mult = scenario.multipliers;

  // 1. Apply scenario multipliers to primary variables
  base.aiComputeExaflops *= mult.aiCompute;
  base.energyProductionTWh *= mult.energyProduction;
  base.renewableEnergyPercent = Math.min(99.5, Math.max(10, base.renewableEnergyPercent * mult.renewablePercent));
  base.batteryStorageGWh *= mult.batteryStorage;
  base.activeSatellites = Math.round(base.activeSatellites * mult.satelliteCount);
  base.globalBandwidthPbps *= mult.networkBandwidth;
  base.robotPopulationMillions *= mult.roboticsCount;
  base.coolingStressPercent = Math.min(98, Math.max(10, base.coolingStressPercent / mult.coolingEfficiency));

  // --- MATHEMATICAL INTERDEPENDENCY EQUATIONS (relative to baseline milestone) ---

  // 2. AI Compute dictates Data Center Capacity, Cloud Demand, and Cooling Stress
  const computeRatio = base.aiComputeExaflops / baselineRef.aiComputeExaflops;
  if (computeRatio !== 1) {
    base.dataCenterCapacityGW *= (1 + (computeRatio - 1) * 0.45);
    base.cloudDemandEBMonth *= (1 + (computeRatio - 1) * 0.40);
    base.coolingStressPercent = Math.min(98, Math.max(10, base.coolingStressPercent + (computeRatio - 1) * 6));
    base.aiAdoptionRate = Math.min(99.9, Math.max(5, base.aiAdoptionRate * (computeRatio >= 1 ? 1 + (computeRatio - 1) * 0.08 : computeRatio)));
  }

  // 3. Data Centers + Robotics power delta updates energy consumption
  const deltaDCGW = base.dataCenterCapacityGW - baselineRef.dataCenterCapacityGW;
  const dcPowerDeltaTWh = (deltaDCGW * 8760 * (base.dataCenterUtilization / 100) * base.pueAverage) / 1000;
  const deltaRobotsM = base.robotPopulationMillions - baselineRef.robotPopulationMillions;
  const robotPowerDeltaTWh = (deltaRobotsM * base.robotEnergyDemandGW * 8760) / (Math.max(1, baselineRef.robotPopulationMillions) * 1000);
  base.energyConsumptionTWh = Math.max(1000, base.energyConsumptionTWh + dcPowerDeltaTWh + robotPowerDeltaTWh);

  // 4. Grid Stress calculation:
  // Evaluates shift in generation vs consumption balance buffered by battery reserves
  const baseMargin = (baselineRef.energyProductionTWh - baselineRef.energyConsumptionTWh) / baselineRef.energyProductionTWh;
  const curMargin = (base.energyProductionTWh - base.energyConsumptionTWh) / base.energyProductionTWh;
  const marginShift = curMargin - baseMargin;
  const batteryShiftRatio = (base.batteryStorageGWh - baselineRef.batteryStorageGWh) / Math.max(1, baselineRef.batteryStorageGWh);
  const rawGridStress = baselineRef.gridStressPercent - (marginShift * 110) - (batteryShiftRatio * 8);
  base.gridStressPercent = Math.max(8, Math.min(98, rawGridStress));

  // 5. Satellite Constellation impact on Coverage, Laser Mesh, and Latency
  const satRatio = base.activeSatellites / Math.max(1, baselineRef.activeSatellites);
  base.satelliteCoveragePercent = Math.min(
    99.9,
    Math.max(15, baselineRef.satelliteCoveragePercent * (satRatio >= 1 ? 1 + (satRatio - 1) * 0.04 : satRatio))
  );
  base.opticalLaserBandwidthTbps = Math.max(10, baselineRef.opticalLaserBandwidthTbps * Math.sqrt(satRatio));

  let latencyFactor = 1 / Math.max(0.3, Math.sqrt(satRatio));
  if (base.gridStressPercent > 75) {
    const stressPenalty = (base.gridStressPercent - 75) * 0.02;
    latencyFactor += stressPenalty;
    base.subseaCableIntegrityPercent = Math.max(35, baselineRef.subseaCableIntegrityPercent - (base.gridStressPercent - 75) * 0.4);
  }
  base.networkLatencyMs = Math.max(0.8, baselineRef.networkLatencyMs * latencyFactor);

  // 6. Automation Efficiency & Urban Edge Compute
  const robotRatio = base.robotPopulationMillions / Math.max(1, baselineRef.robotPopulationMillions);
  base.automationEfficiencyPercent = Math.min(
    99.5,
    Math.max(20, baselineRef.automationEfficiencyPercent * (robotRatio >= 1 ? 1 + (robotRatio - 1) * 0.06 : robotRatio))
  );
  base.edgeComputeLoadPercent = Math.min(
    98,
    Math.max(10, baselineRef.edgeComputeLoadPercent * (robotRatio >= 1 ? 1 + (robotRatio - 1) * 0.05 : robotRatio))
  );

  // 7. Stochastic micro-fluctuation for alive HUD realism
  if (tickSeed > 0) {
    const noise = (Math.sin(tickSeed * 0.12) + Math.cos(tickSeed * 0.23)) * 0.005;
    base.aiComputeExaflops *= (1 + noise * 0.3);
    base.networkLatencyMs = Math.max(0.8, base.networkLatencyMs * (1 + noise * 0.5));
    base.gridStressPercent = Math.max(5, Math.min(99, base.gridStressPercent + noise * 2));
  }

  // 8. Composite Global System Health Synthesis (calibrated relative to baseline milestone)
  const gridStressDelta = base.gridStressPercent - baselineRef.gridStressPercent;
  const latencyRatio = base.networkLatencyMs / Math.max(0.1, baselineRef.networkLatencyMs);
  const coolingDelta = base.coolingStressPercent - baselineRef.coolingStressPercent;
  const orbitalDelta = baselineRef.orbitalHealthPercent - base.orbitalHealthPercent;
  const cableDelta = baselineRef.subseaCableIntegrityPercent - base.subseaCableIntegrityPercent;

  const healthDeduction = 
    (Math.max(0, gridStressDelta) * 0.35) +
    (Math.max(0, latencyRatio - 1) * 18) +
    (Math.max(0, coolingDelta) * 0.20) +
    (Math.max(0, orbitalDelta) * 0.30) +
    (Math.max(0, cableDelta) * 0.30);

  const healthBonus = 
    (Math.max(0, -gridStressDelta) * 0.15) +
    (Math.max(0, 1 - latencyRatio) * 8);

  base.globalSystemHealth = Math.max(
    5,
    Math.min(99.5, baselineRef.globalSystemHealth - healthDeduction + healthBonus)
  );

  base.resilienceScore = Math.max(
    10,
    Math.min(
      99.5,
      baselineRef.resilienceScore +
      ((base.batteryStorageGWh - baselineRef.batteryStorageGWh) / Math.max(1, baselineRef.batteryStorageGWh)) * 12 +
      (base.automationEfficiencyPercent - baselineRef.automationEfficiencyPercent) * 0.25 -
      healthDeduction * 0.5
    )
  );

  // 9. Apply dynamic events overlay
  const finalMetrics = applyEventsToMetrics(base, activeEvents);

  return finalMetrics;
}
