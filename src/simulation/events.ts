import { DynamicEvent, SimulationMetrics } from '../types/simulation';

export const PRESET_EVENTS: Omit<DynamicEvent, 'id' | 'timestamp' | 'yearSnapshot' | 'active'>[] = [
  {
    title: 'Frontier AI Compute Spike',
    description: 'Autonomous multi-agent synthesis initiates self-improving training runs, spiking global FLOP demand across European and US clusters.',
    severity: 'WARNING',
    subsystem: 'ai',
    durationSeconds: 45,
    impacts: [
      { metric: 'aiComputeExaflops', deltaPercent: 35 },
      { metric: 'coolingStressPercent', deltaPercent: 40 },
      { metric: 'gridStressPercent', deltaPercent: 22 },
      { metric: 'networkLatencyMs', deltaPercent: 15 }
    ],
    mitigationProtocol: 'Initiate dynamic load-shedding to subsea cryogenic data centers and throttle non-critical inference batches.'
  },
  {
    title: 'Orbital Geomagnetic Storm / Satellite Disruption',
    description: 'Coronal Mass Ejection (CME) triggers severe ionospheric scintillation, disrupting 22% of LEO laser cross-links.',
    severity: 'CRITICAL',
    subsystem: 'satellites',
    durationSeconds: 60,
    impacts: [
      { metric: 'satelliteCoveragePercent', deltaPercent: -28 },
      { metric: 'orbitalHealthPercent', deltaPercent: -35 },
      { metric: 'opticalLaserBandwidthTbps', deltaPercent: -45 },
      { metric: 'networkLatencyMs', deltaPercent: 65 }
    ],
    mitigationProtocol: 'Orient satellite solar arrays into drag-reduction safe mode and switch transoceanic traffic to subsea fiber routes.'
  },
  {
    title: 'Regional Energy Shortage & Brownouts',
    description: 'Prolonged atmospheric stalling reduces wind and solar generation by 40% across continental corridors, draining battery reserves.',
    severity: 'CRITICAL',
    subsystem: 'energy',
    durationSeconds: 50,
    impacts: [
      { metric: 'energyProductionTWh', deltaPercent: -22 },
      { metric: 'gridStressPercent', deltaPercent: 55 },
      { metric: 'batteryStorageGWh', deltaPercent: -40 },
      { metric: 'globalSystemHealth', deltaPercent: -18 }
    ],
    mitigationProtocol: 'Ramp up secondary commercial fusion reactors and activate industrial demand-response automation.'
  },
  {
    title: 'Hyperscale Subsea Data Center Online',
    description: '10GW modular underwater data center cluster deployed in the North Sea, operating with zero freshwater consumption and 1.02 PUE.',
    severity: 'INFO',
    subsystem: 'cloud',
    durationSeconds: 70,
    impacts: [
      { metric: 'dataCenterCapacityGW', deltaPercent: 12 },
      { metric: 'coolingStressPercent', deltaPercent: -25 },
      { metric: 'computeEfficiency', deltaPercent: 18 },
      { metric: 'globalSystemHealth', deltaPercent: 8 }
    ],
    mitigationProtocol: 'Route high-density foundation model fine-tuning to the Nordic marine cluster.'
  },
  {
    title: 'Room-Temp Superconductor Breakthrough',
    description: 'Commercial deployment of ambient-pressure superconducting transmission lines cuts electrical distribution losses by 92%.',
    severity: 'INFO',
    subsystem: 'energy',
    durationSeconds: 80,
    impacts: [
      { metric: 'gridStressPercent', deltaPercent: -38 },
      { metric: 'computeEfficiency', deltaPercent: 32 },
      { metric: 'energyConsumptionTWh', deltaPercent: -12 },
      { metric: 'globalSystemHealth', deltaPercent: 15 }
    ],
    mitigationProtocol: 'Accelerate superconductor retrofitting for all tier-4 metro distribution nodes.'
  },
  {
    title: 'Mass Robot Deployment in Urban Infrastructure',
    description: 'Autonomous humanoid fleet passes 100M active units globally, managing autonomous transit and smart-grid maintenance.',
    severity: 'ADVISORY',
    subsystem: 'robotics',
    durationSeconds: 55,
    impacts: [
      { metric: 'robotPopulationMillions', deltaPercent: 25 },
      { metric: 'automationEfficiencyPercent', deltaPercent: 18 },
      { metric: 'robotEnergyDemandGW', deltaPercent: 20 },
      { metric: 'edgeComputeLoadPercent', deltaPercent: 15 }
    ],
    mitigationProtocol: 'Prioritize decentralized edge-computing protocols to prevent cloud uplink saturation.'
  },
  {
    title: 'Transoceanic Subsea Cable Severance',
    description: 'Dual deepwater tectonic event damages major transatlantic and transpacific fiber trunklines simultaneously.',
    severity: 'CRITICAL',
    subsystem: 'network',
    durationSeconds: 65,
    impacts: [
      { metric: 'subseaCableIntegrityPercent', deltaPercent: -34 },
      { metric: 'globalBandwidthPbps', deltaPercent: -26 },
      { metric: 'networkLatencyMs', deltaPercent: 85 },
      { metric: 'globalSystemHealth', deltaPercent: -22 }
    ],
    mitigationProtocol: 'Reroute all critical telemetry packets across LEO optical laser mesh and activate autonomous cable repair submersibles.'
  },
  {
    title: 'Extreme Global Cloud Demand Surge',
    description: 'Global rollout of real-time neural avatar rendering and autonomous driving consensus networks triggers record cloud traffic.',
    severity: 'WARNING',
    subsystem: 'cloud',
    durationSeconds: 40,
    impacts: [
      { metric: 'cloudDemandEBMonth', deltaPercent: 48 },
      { metric: 'dataCenterUtilization', deltaPercent: 22 },
      { metric: 'globalBandwidthPbps', deltaPercent: 20 },
      { metric: 'gridStressPercent', deltaPercent: 16 }
    ],
    mitigationProtocol: 'Enforce dynamic neural compression and enable peer-to-peer neighborhood edge caching.'
  }
];

export function createRandomEvent(year: number): DynamicEvent {
  const template = PRESET_EVENTS[Math.floor(Math.random() * PRESET_EVENTS.length)];
  return {
    ...template,
    id: `event-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`,
    timestamp: Date.now(),
    yearSnapshot: year,
    active: true
  };
}

export function applyEventsToMetrics(base: SimulationMetrics, events: DynamicEvent[]): SimulationMetrics {
  const result = { ...base };

  for (const ev of events) {
    if (!ev.active) continue;
    for (const impact of ev.impacts) {
      const currentVal = result[impact.metric] as number;
      if (typeof currentVal === 'number') {
        const factor = 1 + (impact.deltaPercent / 100);
        // Ensure values remain within physically meaningful boundaries
        let newVal = currentVal * factor;
        if (impact.metric.toString().includes('Percent') || impact.metric === 'globalSystemHealth' || impact.metric === 'resilienceScore') {
          newVal = Math.max(2, Math.min(100, newVal));
        } else {
          newVal = Math.max(0.1, newVal);
        }
        (result[impact.metric] as number) = newVal;
      }
    }
  }

  // Recalculate system health status based on compound metrics
  const health = result.globalSystemHealth;
  if (health >= 85 && result.gridStressPercent < 80) {
    result.healthStatus = 'NOMINAL';
  } else if (health >= 65 && result.gridStressPercent < 90) {
    result.healthStatus = 'ELEVATED_STRESS';
  } else if (health >= 40) {
    result.healthStatus = 'CRITICAL_RISK';
  } else {
    result.healthStatus = 'CASCADE_FAILURE';
  }

  return result;
}
