import { GlobeNodeLocation, SubseaCableRoute, SatelliteOrbitalData } from '../../types/simulation';

export const GLOBAL_NODES: GlobeNodeLocation[] = [
  // Megacities
  {
    id: 'tokyo',
    name: 'Neo-Tokyo Metroplex',
    lat: 35.6762,
    lon: 139.6503,
    type: 'megacity',
    country: 'Japan',
    description: 'Premier Asian neural hub. 42M population with 88% robotic public transit automation.',
    metrics: { loadPct: 84, powerGW: 38.5, latencyMs: 3.2, status: 'OPTIMAL' }
  },
  {
    id: 'san_francisco',
    name: 'Bay Area AI Synthesis Hub',
    lat: 37.7749,
    lon: -122.4194,
    type: 'datacenter',
    country: 'USA',
    description: 'Frontier AI foundation model research cluster and quantum simulation facilities.',
    metrics: { loadPct: 96, powerGW: 44.0, latencyMs: 2.1, status: 'OVERLOADED' }
  },
  {
    id: 'london',
    name: 'London Orbital FinTech Core',
    lat: 51.5074,
    lon: -0.1278,
    type: 'megacity',
    country: 'UK',
    description: 'High-frequency algorithmic settlement mesh and European subsea terminus.',
    metrics: { loadPct: 78, powerGW: 24.2, latencyMs: 5.4, status: 'OPTIMAL' }
  },
  {
    id: 'singapore',
    name: 'Singapore Equatorial Gateway',
    lat: 1.3521,
    lon: 103.8198,
    type: 'datacenter',
    country: 'Singapore',
    description: 'Subsea cable routing center linking Pacific and Indian Ocean digital conduits.',
    metrics: { loadPct: 89, powerGW: 22.0, latencyMs: 4.1, status: 'OPTIMAL' }
  },
  {
    id: 'frankfurt',
    name: 'Frankfurt Central Interchange',
    lat: 50.1109,
    lon: 8.6821,
    type: 'datacenter',
    country: 'Germany',
    description: 'Continental Europe primary peering exchange with 100% renewable power grid pairing.',
    metrics: { loadPct: 82, powerGW: 26.5, latencyMs: 4.8, status: 'OPTIMAL' }
  },
  {
    id: 'shenzhen',
    name: 'Shenzhen-Hong Kong Autonomous Corridor',
    lat: 22.5431,
    lon: 114.0579,
    type: 'megacity',
    country: 'China',
    description: 'Global epicenter for physical AI, humanoid robotics manufacturing, and edge chips.',
    metrics: { loadPct: 91, powerGW: 36.0, latencyMs: 3.8, status: 'OPTIMAL' }
  },
  {
    id: 'sao_paulo',
    name: 'São Paulo Southern Node',
    lat: -23.5505,
    lon: -46.6333,
    type: 'megacity',
    country: 'Brazil',
    description: 'South American neural spine connected via Atlantic subsea quantum fiber.',
    metrics: { loadPct: 74, powerGW: 18.0, latencyMs: 14.2, status: 'OPTIMAL' }
  },
  {
    id: 'nairobi',
    name: 'Nairobi Silicon Savannah Core',
    lat: -1.2921,
    lon: 36.8219,
    type: 'megacity',
    country: 'Kenya',
    description: 'Pan-African geothermal-powered cloud cluster and mobile quantum telemetry backbone.',
    metrics: { loadPct: 69, powerGW: 12.5, latencyMs: 16.5, status: 'OPTIMAL' }
  },
  {
    id: 'mumbai',
    name: 'Mumbai Digital Metropolis',
    lat: 19.0760,
    lon: 72.8777,
    type: 'megacity',
    country: 'India',
    description: 'Fastest-growing urban AI compute cluster with high solar microgrid penetration.',
    metrics: { loadPct: 86, powerGW: 28.0, latencyMs: 8.9, status: 'OPTIMAL' }
  },
  {
    id: 'sydney',
    name: 'Sydney Oceanic Telemetry Hub',
    lat: -33.8688,
    lon: 151.2093,
    type: 'ground_station',
    country: 'Australia',
    description: 'Southern hemisphere laser satellite downlink and deep-space orbital gateway.',
    metrics: { loadPct: 65, powerGW: 11.2, latencyMs: 12.4, status: 'OPTIMAL' }
  },
  {
    id: 'north_sea_dc',
    name: 'North Sea Subsea Cryo-Cluster',
    lat: 56.5000,
    lon: 3.2000,
    type: 'datacenter',
    country: 'International Waters',
    description: 'Submerged oceanic hyperscale data facility cooled naturally by ocean thermoclines. PUE 1.02.',
    metrics: { loadPct: 72, powerGW: 15.0, latencyMs: 6.2, status: 'OPTIMAL' }
  },
  {
    id: 'iceland_geo',
    name: 'Reykjanes Geothermal Compute Vault',
    lat: 63.8500,
    lon: -22.4000,
    type: 'datacenter',
    country: 'Iceland',
    description: '100% baseload zero-carbon geothermal compute specialized in long-context model inference.',
    metrics: { loadPct: 64, powerGW: 9.8, latencyMs: 18.0, status: 'OPTIMAL' }
  },
  {
    id: 'cadarache_fusion',
    name: 'ITER Commercial Fusion Node Alpha',
    lat: 43.6874,
    lon: 5.7607,
    type: 'energy_fusion',
    country: 'France',
    description: 'Net-positive magnetic confinement fusion power plant supplying 12 GW to European neural grid.',
    metrics: { loadPct: 92, powerGW: 12.0, latencyMs: 0, status: 'OPTIMAL' }
  },
  {
    id: 'atacama_fusion',
    name: 'Atacama Solar-Fusion Grid Array',
    lat: -23.8634,
    lon: -69.1328,
    type: 'energy_fusion',
    country: 'Chile',
    description: 'World highest solar irradiance gigawatt facility combined with compact modular fusion batteries.',
    metrics: { loadPct: 94, powerGW: 28.0, latencyMs: 0, status: 'OPTIMAL' }
  }
];

export const SUBSEA_CABLES: SubseaCableRoute[] = [
  {
    id: 'transatlantic_alpha',
    name: 'Transatlantic Quantum Trunk 1',
    points: [
      [37.7, -122.4],
      [40.7, -74.0],
      [45.0, -45.0],
      [50.0, -20.0],
      [51.5, -0.1]
    ],
    capacityTbps: 1800,
    healthPct: 98,
    status: 'ONLINE'
  },
  {
    id: 'transpacific_express',
    name: 'Transpacific Hollow-Core Express',
    points: [
      [37.7, -122.4],
      [28.0, -155.0],
      [22.0, 175.0],
      [30.0, 150.0],
      [35.6, 139.6]
    ],
    capacityTbps: 2400,
    healthPct: 95,
    status: 'ONLINE'
  },
  {
    id: 'eurasia_southern',
    name: 'SEA-ME-WE 2035 Super-Optic',
    points: [
      [51.5, -0.1],
      [36.1, -5.3],
      [31.2, 29.9],
      [12.8, 45.0],
      [19.0, 72.8],
      [1.3, 103.8]
    ],
    capacityTbps: 1500,
    healthPct: 92,
    status: 'ONLINE'
  },
  {
    id: 'atlantic_south',
    name: 'South Atlantic Quantum Bridge',
    points: [
      [40.7, -74.0],
      [10.0, -40.0],
      [-10.0, -35.0],
      [-23.5, -46.6]
    ],
    capacityTbps: 850,
    healthPct: 99,
    status: 'ONLINE'
  },
  {
    id: 'asia_pacific_mesh',
    name: 'Asia-Pacific High-Speed Mesh',
    points: [
      [35.6, 139.6],
      [22.5, 114.0],
      [1.3, 103.8],
      [-15.0, 125.0],
      [-33.8, 151.2]
    ],
    capacityTbps: 1900,
    healthPct: 96,
    status: 'ONLINE'
  }
];

export function generateSatellites(count: number = 80): SatelliteOrbitalData[] {
  const satellites: SatelliteOrbitalData[] = [];
  const planes = 8;
  const satsPerPlane = Math.ceil(count / planes);

  for (let p = 0; p < planes; p++) {
    const inc = p % 2 === 0 ? 53 : 70; // 53 deg standard inclination or 70 deg polar
    for (let s = 0; s < satsPerPlane; s++) {
      satellites.push({
        id: `sat-orb-${p}-${s}`,
        name: `STARLINK-X-${p * satsPerPlane + s + 101}`,
        plane: p,
        inclinationDeg: inc,
        altitudeKm: 550 + (p % 3) * 40,
        velocityKmh: 27500,
        status: (p === 3 && s === 4) ? 'MANEUVERING' : 'OPERATIONAL'
      });
    }
  }
  return satellites.slice(0, count);
}
