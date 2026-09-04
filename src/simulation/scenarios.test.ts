import { describe, it, expect } from 'vitest';
import { SCENARIOS } from './scenarios';

describe('Scenarios Specification Compliance', () => {
  const REQUIRED_IDS = [
    'baseline',
    'ai_acceleration',
    'energy_crisis',
    'global_connectivity',
    'autonomous_cities',
    'infrastructure_collapse',
    'optimistic_future'
  ];

  it('contains all 7 required scenarios from specification', () => {
    const ids = SCENARIOS.map(s => s.id);
    for (const req of REQUIRED_IDS) {
      expect(ids).toContain(req);
    }
  });

  it('ensures each scenario defines positive multipliers and valid descriptions', () => {
    SCENARIOS.forEach(sc => {
      expect(sc.name.length).toBeGreaterThan(0);
      expect(sc.badge.length).toBeGreaterThan(0);
      expect(sc.description.length).toBeGreaterThan(10);
      expect(sc.color).toMatch(/^#[0-9a-fA-F]{6}$/);

      expect(sc.multipliers.aiCompute).toBeGreaterThan(0);
      expect(sc.multipliers.energyProduction).toBeGreaterThan(0);
      expect(sc.multipliers.renewablePercent).toBeGreaterThan(0);
      expect(sc.multipliers.satelliteCount).toBeGreaterThan(0);
    });
  });
});
