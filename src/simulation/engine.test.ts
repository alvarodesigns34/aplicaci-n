import { describe, it, expect } from 'vitest';
import { getInterpolatedBaseline, calculateSimulationFrame } from './engine';
import { SCENARIOS } from './scenarios';
import { PRESET_EVENTS, createRandomEvent, applyEventsToMetrics } from './events';
import { BASELINE_YEARS } from './constants';

describe('Simulation Engine - Mathematical Dynamics', () => {
  it('interpolates baseline values accurately at exact milestone years', () => {
    const base2030 = getInterpolatedBaseline(2030);
    expect(base2030.aiComputeExaflops).toBeCloseTo(BASELINE_YEARS[2030].aiComputeExaflops, 1);

    const base2035 = getInterpolatedBaseline(2035);
    expect(base2035.aiComputeExaflops).toBeCloseTo(BASELINE_YEARS[2035].aiComputeExaflops, 1);

    const base2050 = getInterpolatedBaseline(2050);
    expect(base2050.aiComputeExaflops).toBeCloseTo(BASELINE_YEARS[2050].aiComputeExaflops, 1);
  });

  it('smoothly interpolates intermediate fractional years', () => {
    const y2032_5 = getInterpolatedBaseline(2032.5);
    expect(y2032_5.aiComputeExaflops).toBeGreaterThan(BASELINE_YEARS[2030].aiComputeExaflops);
    expect(y2032_5.aiComputeExaflops).toBeLessThan(BASELINE_YEARS[2035].aiComputeExaflops);

    expect(y2032_5.networkLatencyMs).toBeLessThan(BASELINE_YEARS[2030].networkLatencyMs);
    expect(y2032_5.networkLatencyMs).toBeGreaterThan(BASELINE_YEARS[2035].networkLatencyMs);
  });

  it('applies AI Acceleration scenario multipliers and interdependencies', () => {
    const baselineScenario = SCENARIOS.find(s => s.id === 'baseline')!;
    const aiScenario = SCENARIOS.find(s => s.id === 'ai_acceleration')!;

    const baseFrame = calculateSimulationFrame(2035, baselineScenario, [], 0);
    const aiFrame = calculateSimulationFrame(2035, aiScenario, [], 0);

    // AI Compute should surge significantly
    expect(aiFrame.aiComputeExaflops).toBeGreaterThan(baseFrame.aiComputeExaflops * 2.5);

    // High compute must drive higher data center power and energy consumption
    expect(aiFrame.dataCenterCapacityGW).toBeGreaterThan(baseFrame.dataCenterCapacityGW);
    expect(aiFrame.energyConsumptionTWh).toBeGreaterThan(baseFrame.energyConsumptionTWh);

    // Cooling stress should be elevated
    expect(aiFrame.coolingStressPercent).toBeGreaterThan(baseFrame.coolingStressPercent);
  });

  it('applies Energy Crisis scenario correctly', () => {
    const energyCrisis = SCENARIOS.find(s => s.id === 'energy_crisis')!;
    const crisisFrame = calculateSimulationFrame(2035, energyCrisis, [], 0);

    expect(crisisFrame.energyProductionTWh).toBeLessThan(BASELINE_YEARS[2035].energyProductionTWh);
    expect(crisisFrame.gridStressPercent).toBeGreaterThan(BASELINE_YEARS[2035].gridStressPercent);
  });

  it('correctly applies dynamic event impacts and health recalculation', () => {
    const base = getInterpolatedBaseline(2035);
    const event = {
      ...PRESET_EVENTS[1], // Orbital Geomagnetic Storm
      id: 'test-event-1',
      timestamp: Date.now(),
      yearSnapshot: 2035,
      active: true
    };

    const updated = applyEventsToMetrics(base, [event]);

    // Satellite coverage and laser bandwidth should drop
    expect(updated.satelliteCoveragePercent).toBeLessThan(base.satelliteCoveragePercent);
    expect(updated.opticalLaserBandwidthTbps).toBeLessThan(base.opticalLaserBandwidthTbps);
    expect(updated.networkLatencyMs).toBeGreaterThan(base.networkLatencyMs);
  });

  it('maintains nominal health across all baseline milestones without artificial stress spikes', () => {
    const baselineScenario = SCENARIOS.find(s => s.id === 'baseline')!;
    [2030, 2035, 2040, 2050].forEach(y => {
      const frame = calculateSimulationFrame(y, baselineScenario, [], 0);
      expect(frame.healthStatus).toBe('NOMINAL');
      expect(frame.globalSystemHealth).toBeGreaterThan(80);
      expect(frame.gridStressPercent).toBeLessThan(70);
    });
  });

  it('correctly shifts system status into CASCADE_FAILURE under Infrastructure Collapse', () => {
    const collapseScenario = SCENARIOS.find(s => s.id === 'infrastructure_collapse')!;
    const collapseFrame = calculateSimulationFrame(2035, collapseScenario, [], 0);

    expect(collapseFrame.activeSatellites).toBeLessThan(BASELINE_YEARS[2035].activeSatellites);
    expect(collapseFrame.networkLatencyMs).toBeGreaterThan(BASELINE_YEARS[2035].networkLatencyMs);
    expect(collapseFrame.globalSystemHealth).toBeLessThan(50);
    expect(['CRITICAL_RISK', 'CASCADE_FAILURE']).toContain(collapseFrame.healthStatus);
  });

  it('correctly boosts connectivity under Global Connectivity scenario', () => {
    const connScenario = SCENARIOS.find(s => s.id === 'global_connectivity')!;
    const connFrame = calculateSimulationFrame(2035, connScenario, [], 0);

    expect(connFrame.activeSatellites).toBeGreaterThan(BASELINE_YEARS[2035].activeSatellites);
    expect(connFrame.networkLatencyMs).toBeLessThan(BASELINE_YEARS[2035].networkLatencyMs);
    expect(connFrame.globalBandwidthPbps).toBeGreaterThan(BASELINE_YEARS[2035].globalBandwidthPbps);
  });

  it('correctly boosts robotics and automation under Autonomous Cities scenario', () => {
    const autoCities = SCENARIOS.find(s => s.id === 'autonomous_cities')!;
    const cityFrame = calculateSimulationFrame(2035, autoCities, [], 0);

    expect(cityFrame.robotPopulationMillions).toBeGreaterThan(BASELINE_YEARS[2035].robotPopulationMillions * 2);
    expect(cityFrame.automationEfficiencyPercent).toBeGreaterThan(BASELINE_YEARS[2035].automationEfficiencyPercent);
  });

  it('generates well-formed random events', () => {
    const randEvent = createRandomEvent(2035);
    expect(randEvent.id).toBeDefined();
    expect(randEvent.title).toBeDefined();
    expect(randEvent.impacts.length).toBeGreaterThan(0);
    expect(randEvent.durationSeconds).toBeGreaterThan(0);
  });
});
