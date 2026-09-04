import { describe, it, expect } from 'vitest';
import { SCENARIOS } from '../simulation/scenarios';
import { PRESET_EVENTS, applyEventsToMetrics } from '../simulation/events';
import { BASELINE_YEARS } from '../simulation/constants';
import { calculateSimulationFrame } from '../simulation/engine';

describe('Simulation Systemic Coherence & Scenarios', () => {
  it('contains all 7 required scenarios with non-zero valid multipliers', () => {
    const requiredScenarioIds = [
      'baseline',
      'ai_acceleration',
      'energy_crisis',
      'global_connectivity',
      'autonomous_cities',
      'infrastructure_collapse',
      'optimistic_future'
    ];

    expect(SCENARIOS.length).toBe(7);
    requiredScenarioIds.forEach(id => {
      const found = SCENARIOS.find(s => s.id === id);
      expect(found).toBeDefined();
      expect(found?.multipliers.aiCompute).toBeGreaterThan(0);
      expect(found?.multipliers.energyProduction).toBeGreaterThan(0);
      expect(found?.multipliers.satelliteCount).toBeGreaterThan(0);
    });
  });

  it('contains all required dynamic event archetypes', () => {
    const titles = PRESET_EVENTS.map(e => e.title.toLowerCase());
    expect(titles.some(t => t.includes('ai compute') || t.includes('spike'))).toBe(true);
    expect(titles.some(t => t.includes('satellite') || t.includes('geomagnetic'))).toBe(true);
    expect(titles.some(t => t.includes('energy') || t.includes('shortage'))).toBe(true);
    expect(titles.some(t => t.includes('data center') || t.includes('hyperscale'))).toBe(true);
    expect(titles.some(t => t.includes('superconductor') || t.includes('breakthrough'))).toBe(true);
    expect(titles.some(t => t.includes('robot'))).toBe(true);
    expect(titles.some(t => t.includes('cable') || t.includes('severance'))).toBe(true);
    expect(titles.some(t => t.includes('cloud') || t.includes('demand'))).toBe(true);
  });

  it('correctly simulates Optimistic Future scenario with fusion and clean power abundance', () => {
    const optimistic = SCENARIOS.find(s => s.id === 'optimistic_future')!;
    const frame = calculateSimulationFrame(2035, optimistic, [], 0);

    expect(frame.renewableEnergyPercent).toBeGreaterThan(BASELINE_YEARS[2035].renewableEnergyPercent);
    expect(frame.gridStressPercent).toBeLessThan(BASELINE_YEARS[2035].gridStressPercent);
    expect(frame.resilienceScore).toBeGreaterThan(BASELINE_YEARS[2035].resilienceScore);
    expect(frame.healthStatus).toBe('NOMINAL');
  });

  it('safely handles concurrent active events without exploding bounds', () => {
    const base = BASELINE_YEARS[2035];
    const events = PRESET_EVENTS.map((p, i) => ({
      ...p,
      id: `ev-${i}`,
      timestamp: Date.now(),
      yearSnapshot: 2035,
      active: true
    }));

    const result = applyEventsToMetrics(base, events);
    expect(result.globalSystemHealth).toBeGreaterThanOrEqual(2);
    expect(result.globalSystemHealth).toBeLessThanOrEqual(100);
    expect(result.renewableEnergyPercent).toBeLessThanOrEqual(100);
    expect(result.renewableEnergyPercent).toBeGreaterThanOrEqual(0);
    expect(result.gridStressPercent).toBeLessThanOrEqual(100);
  });
});
