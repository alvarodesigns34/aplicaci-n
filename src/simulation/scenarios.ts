import { ScenarioDefinition } from '../types/simulation';

export const SCENARIOS: ScenarioDefinition[] = [
  {
    id: 'baseline',
    name: 'Baseline 2035',
    badge: 'STANDARD RUN',
    description: 'Projected technological convergence with gradual transition to commercial fusion and orbital megaconstellations.',
    rationale: 'Balanced expansion of AI infrastructure, controlled grid strain, and steady satellite mesh deployment.',
    color: '#00f0ff',
    multipliers: {
      aiCompute: 1.0,
      energyProduction: 1.0,
      renewablePercent: 1.0,
      batteryStorage: 1.0,
      satelliteCount: 1.0,
      networkBandwidth: 1.0,
      roboticsCount: 1.0,
      coolingEfficiency: 1.0,
    }
  },
  {
    id: 'ai_acceleration',
    name: 'AI Acceleration',
    badge: 'HYPER-COMPUTE',
    description: 'Exponential breakthrough in frontier models and autonomous reasoning agents. Massive demand on data centers and electric grids.',
    rationale: 'Compute demand triples; hyperscalers face acute thermal cooling bottlenecks and localized grid brownouts.',
    color: '#a855f7',
    multipliers: {
      aiCompute: 3.2,
      energyProduction: 1.08,
      renewablePercent: 0.94,
      batteryStorage: 1.15,
      satelliteCount: 1.25,
      networkBandwidth: 2.1,
      roboticsCount: 1.85,
      coolingEfficiency: 0.75, // cooling stress rises
    }
  },
  {
    id: 'energy_crisis',
    name: 'Energy Crisis',
    badge: 'GRID DEFICIT',
    description: 'Delayed fusion scaling combined with rare-earth bottlenecks for batteries leads to severe electrical deficits.',
    rationale: 'Hyperscale clusters are throttled by 35%, packet latency surges due to node power cycling, and system health degrades.',
    color: '#ffb000',
    multipliers: {
      aiCompute: 0.62,
      energyProduction: 0.78,
      renewablePercent: 0.72,
      batteryStorage: 0.55,
      satelliteCount: 0.90,
      networkBandwidth: 0.75,
      roboticsCount: 0.70,
      coolingEfficiency: 0.60,
    }
  },
  {
    id: 'global_connectivity',
    name: 'Global Connectivity',
    badge: 'OPTICAL MESH',
    description: 'Massive rollout of optical inter-satellite laser links (VLEO) and hollow-core subsea fiber eliminating the digital divide.',
    rationale: 'Sub-10ms global latency achieved even across remote continents; quantum entanglement key routing active across all oceans.',
    color: '#38bdf8',
    multipliers: {
      aiCompute: 1.25,
      energyProduction: 1.05,
      renewablePercent: 1.10,
      batteryStorage: 1.20,
      satelliteCount: 2.1,
      networkBandwidth: 3.5,
      roboticsCount: 1.3,
      coolingEfficiency: 1.15,
    }
  },
  {
    id: 'autonomous_cities',
    name: 'Autonomous Cities',
    badge: 'CYBER-METROPOLIS',
    description: 'Megacities achieve 90%+ automation in transport, logistics, power distribution, and civil maintenance.',
    rationale: 'Humanoid and drone populations surge to 250M+; edge compute clusters handle 75% of local inference in real time.',
    color: '#00ff9d',
    multipliers: {
      aiCompute: 1.9,
      energyProduction: 1.18,
      renewablePercent: 1.15,
      batteryStorage: 1.45,
      satelliteCount: 1.4,
      networkBandwidth: 2.4,
      roboticsCount: 3.8,
      coolingEfficiency: 1.10,
    }
  },
  {
    id: 'infrastructure_collapse',
    name: 'Infrastructure Collapse',
    badge: 'SYSTEMIC HAZARD',
    description: 'Severe Carrington-class solar geomagnetic storm synchronizes with a multi-region subsea cable cascade failure.',
    rationale: '40% of orbital satellites knocked into safe mode; global routing falls back to fragmented terrestrial radio meshes.',
    color: '#ff3366',
    multipliers: {
      aiCompute: 0.38,
      energyProduction: 0.68,
      renewablePercent: 0.65,
      batteryStorage: 0.40,
      satelliteCount: 0.35,
      networkBandwidth: 0.28,
      roboticsCount: 0.45,
      coolingEfficiency: 0.40,
    }
  },
  {
    id: 'optimistic_future',
    name: 'Optimistic Future',
    badge: 'SYMBIOSIS 2035',
    description: 'Commercial magnetic confinement fusion scales ahead of schedule, paired with room-temperature superconductors.',
    rationale: 'Clean energy abundance brings marginal power costs toward zero; subsea submerged data centers achieve PUE 1.02.',
    color: '#10b981',
    multipliers: {
      aiCompute: 2.4,
      energyProduction: 1.45,
      renewablePercent: 1.35,
      batteryStorage: 2.2,
      satelliteCount: 1.8,
      networkBandwidth: 2.9,
      roboticsCount: 2.2,
      coolingEfficiency: 1.6,
    }
  }
];
