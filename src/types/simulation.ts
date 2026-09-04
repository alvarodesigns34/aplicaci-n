export type Year = 2030 | 2035 | 2040 | 2050;

export type SystemHealthStatus = 'NOMINAL' | 'ELEVATED_STRESS' | 'CRITICAL_RISK' | 'CASCADE_FAILURE';

export type SubsystemType = 
  | 'ai'
  | 'energy'
  | 'cloud'
  | 'satellites'
  | 'network'
  | 'robotics'
  | 'cities';

export interface SimulationMetrics {
  // AI & Compute
  aiComputeExaflops: number;        // Total global AI compute in ExaFLOPs
  aiAdoptionRate: number;           // % 0-100 of global workflows augmented
  computeEfficiency: number;        // PFLOPS per megawatt
  autonomousAgentCount: number;     // Active autonomous digital agents (Billions)

  // Data Centers & Cloud
  dataCenterCapacityGW: number;     // Total grid power reserved by data centers
  dataCenterUtilization: number;    // % 0-100 load
  pueAverage: number;               // Power Usage Effectiveness (1.02 to 1.45)
  cloudDemandEBMonth: number;       // Exabytes per month
  coolingStressPercent: number;     // % thermal cooling stress

  // Energy & Grid
  energyProductionTWh: number;      // Annual global production
  energyConsumptionTWh: number;     // Annual global consumption
  renewableEnergyPercent: number;   // % clean (solar, wind, fusion, nuclear)
  fusionOutputTWh: number;          // TWh from commercial fusion plants
  batteryStorageGWh: number;        // Global grid-scale storage reserve
  gridStressPercent: number;        // 0-100% stress on transmission lines
  carbonIntensityGCO2: number;      // gCO2/kWh

  // Satellites & Orbital
  activeSatellites: number;         // Count of active LEO/VLEO/MEO satellites
  satelliteCoveragePercent: number; // Global geographical population coverage
  opticalLaserBandwidthTbps: number;// Inter-satellite laser link capacity
  orbitalHealthPercent: number;     // Health factor against space weather / collision
  spaceWeatherIndex: number;        // 0-10 Solar activity / geomagnetic flux

  // Network & Communications
  globalBandwidthPbps: number;      // Petabits per second aggregate bandwidth
  networkLatencyMs: number;         // Global average ping / RTT latency
  subseaCableIntegrityPercent: number; // Subsea infrastructure health
  quantumMeshCoveragePercent: number;  // Quantum Key Distribution & entanglement mesh

  // Robotics & Autonomous Infrastructure
  robotPopulationMillions: number;  // Humanoid + logistics units
  automationEfficiencyPercent: number; // Infrastructure efficiency gain
  robotEnergyDemandGW: number;      // Power drawn by physical automation

  // Cities & Megacities
  urbanPopulationBillions: number;  // Global urbanized population
  smartCitySaturationPercent: number;// Percentage of cities on autonomic microgrids
  edgeComputeLoadPercent: number;   // Compute handled locally at city edge

  // Systemic Synthesis
  globalSystemHealth: number;       // Composite score 0 - 100%
  healthStatus: SystemHealthStatus;
  resilienceScore: number;          // Redundancy and self-healing capacity
}

export interface ScenarioDefinition {
  id: string;
  name: string;
  badge: string;
  description: string;
  rationale: string;
  color: string;
  multipliers: {
    aiCompute: number;
    energyProduction: number;
    renewablePercent: number;
    batteryStorage: number;
    satelliteCount: number;
    networkBandwidth: number;
    roboticsCount: number;
    coolingEfficiency: number;
  };
}

export type EventSeverity = 'INFO' | 'ADVISORY' | 'WARNING' | 'CRITICAL';

export interface DynamicEvent {
  id: string;
  timestamp: number;
  yearSnapshot: number;
  title: string;
  description: string;
  severity: EventSeverity;
  subsystem: SubsystemType;
  durationSeconds: number; // Remaining duration
  active: boolean;
  impacts: {
    metric: keyof SimulationMetrics;
    deltaPercent: number; // e.g. -25 for -25%
  }[];
  mitigationProtocol?: string;
}

export interface GlobeNodeLocation {
  id: string;
  name: string;
  lat: number;
  lon: number;
  type: 'megacity' | 'datacenter' | 'energy_fusion' | 'ground_station';
  country: string;
  description: string;
  metrics: {
    loadPct: number;
    powerGW: number;
    latencyMs: number;
    status: 'OPTIMAL' | 'DEGRADED' | 'OVERLOADED';
  };
}

export interface SubseaCableRoute {
  id: string;
  name: string;
  points: [number, number][]; // [lat, lon]
  capacityTbps: number;
  healthPct: number;
  status: 'ONLINE' | 'CONGESTED' | 'DAMAGED';
}

export interface SatelliteOrbitalData {
  id: string;
  name: string;
  plane: number;
  inclinationDeg: number;
  altitudeKm: number;
  velocityKmh: number;
  status: 'OPERATIONAL' | 'DEGRADED' | 'MANEUVERING';
}
