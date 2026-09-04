import { describe, it, expect } from 'vitest';
import { GLOBAL_NODES, SUBSEA_CABLES, generateSatellites } from './worldData';

describe('3D Geospatial World Data Verification', () => {
  it('verifies all global nodes have valid geographic coordinates', () => {
    expect(GLOBAL_NODES.length).toBeGreaterThan(10);
    GLOBAL_NODES.forEach(node => {
      expect(node.lat).toBeGreaterThanOrEqual(-90);
      expect(node.lat).toBeLessThanOrEqual(90);
      expect(node.lon).toBeGreaterThanOrEqual(-180);
      expect(node.lon).toBeLessThanOrEqual(180);

      expect(node.metrics.loadPct).toBeGreaterThanOrEqual(0);
      expect(node.metrics.loadPct).toBeLessThanOrEqual(100);
      expect(node.name.length).toBeGreaterThan(0);
    });
  });

  it('verifies subsea cable routes are well-formed', () => {
    expect(SUBSEA_CABLES.length).toBeGreaterThanOrEqual(4);
    SUBSEA_CABLES.forEach(cable => {
      expect(cable.points.length).toBeGreaterThanOrEqual(2);
      expect(cable.capacityTbps).toBeGreaterThan(0);
      expect(cable.healthPct).toBeGreaterThan(0);
    });
  });

  it('generates orbital satellite constellation with Keplerian parameters', () => {
    const sats = generateSatellites(64);
    expect(sats.length).toBe(64);
    sats.forEach(sat => {
      expect(sat.altitudeKm).toBeGreaterThan(400);
      expect(sat.velocityKmh).toBeGreaterThan(20000);
      expect([53, 70]).toContain(sat.inclinationDeg);
    });
  });
});
