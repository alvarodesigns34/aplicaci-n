import React from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { 
  X, 
  Cpu, 
  Zap, 
  Server, 
  Radio, 
  Globe2, 
  Bot, 
  Building2, 
  TrendingUp, 
  AlertTriangle, 
  CheckCircle2 
} from 'lucide-react';

export const TelemetryDrawer: React.FC = () => {
  const { selectedSubsystem, setSelectedSubsystem, metrics, scenario, year } = useSimulation();

  if (!selectedSubsystem) return null;

  const renderContent = () => {
    switch (selectedSubsystem) {
      case 'ai':
        return {
          title: 'AI & SYNTHETIC INTELLIGENCE ARCHITECTURE',
          icon: Cpu,
          badge: 'COGNITIVE LAYER',
          overview: 'Global distributed inference infrastructure orchestrating trillions of multi-modal synthetic agents, autonomous scientific discovery, and automated smart cities.',
          formula: 'Compute Demand = (Agent Population × 4.2 TFLOPs) + (Frontier Synthetic Synthesis × Multiplier)',
          metricsList: [
            { label: 'Global Compute Capacity', value: `${metrics.aiComputeExaflops.toFixed(2)} ExaFLOPs`, note: '10^18 operations/sec' },
            { label: 'Workflow Adoption Rate', value: `${metrics.aiAdoptionRate.toFixed(1)}%`, note: 'Global economic workflows' },
            { label: 'Hardware Compute Efficiency', value: `${metrics.computeEfficiency.toFixed(1)} PFLOPs/MW`, note: 'Energy-to-compute ratio' },
            { label: 'Autonomous Agents Active', value: `${metrics.autonomousAgentCount.toFixed(1)} Billion`, note: 'Self-directing digital entities' },
            { label: 'Thermal Cooling Stress', value: `${metrics.coolingStressPercent.toFixed(1)}%`, note: 'Cryogenic & liquid chillers load' }
          ],
          risks: metrics.coolingStressPercent > 70 
            ? 'High thermal throttling risk in continental clusters. Subsea expansion recommended.'
            : 'Operational temperatures within cryogenic thresholds.'
        };
      case 'energy':
        return {
          title: 'ENERGY & COMMERCIAL FUSION POWER MATRIX',
          icon: Zap,
          badge: 'POWER GENERATION',
          overview: 'Global electrical generation pairing magnetic confinement fusion reactors, orbital solar concentrators, and ultra-deep geothermal wells with superconductor transmission grids.',
          formula: 'Grid Stress = ((Consumption ÷ Generation) × 100) - (Battery Reserve Buffering × 15%)',
          metricsList: [
            { label: 'Total Annual Generation', value: `${metrics.energyProductionTWh.toLocaleString()} TWh`, note: 'Aggregate world supply' },
            { label: 'Total Annual Consumption', value: `${metrics.energyConsumptionTWh.toLocaleString()} TWh`, note: 'Civilian + Data + Robotics' },
            { label: 'Clean / Renewable Share', value: `${metrics.renewableEnergyPercent.toFixed(1)}%`, note: 'Solar, Wind, Fusion, Hydro' },
            { label: 'Commercial Fusion Output', value: `${metrics.fusionOutputTWh.toLocaleString()} TWh`, note: 'Net-positive tokamak plants' },
            { label: 'Grid-Scale Battery Reserves', value: `${metrics.batteryStorageGWh.toLocaleString()} GWh`, note: 'Solid-state & gravity storage' },
            { label: 'Carbon Intensity of Grid', value: `${metrics.carbonIntensityGCO2.toFixed(1)} gCO2/kWh`, note: 'Emissions per unit power' }
          ],
          risks: metrics.gridStressPercent > 75
            ? 'Electrical grid operating under elevated strain. Load shedding risk in secondary regions.'
            : 'Energy margins optimal. Clean surplus charging secondary battery banks.'
        };
      case 'cloud':
        return {
          title: 'HYPERSCALE & SUBSEA DATA INFRASTRUCTURE',
          icon: Server,
          badge: 'STORAGE & CLOUD',
          overview: 'Distributed computing topology spanning continental mega-vaults, modular subsea marine clusters, and orbital edge processing units.',
          formula: 'Data Center Load = Capacity (GW) × Utilization (%) × PUE (Power Usage Effectiveness)',
          metricsList: [
            { label: 'Dedicated DC Power Capacity', value: `${metrics.dataCenterCapacityGW.toFixed(1)} GW`, note: 'Global utility allocation' },
            { label: 'Cluster Capacity Utilization', value: `${metrics.dataCenterUtilization.toFixed(1)}%`, note: 'Real-time compute occupancy' },
            { label: 'Average PUE Rating', value: `${metrics.pueAverage.toFixed(3)}`, note: '1.0 = perfect thermodynamic limit' },
            { label: 'Monthly Cloud Data Ingest', value: `${metrics.cloudDemandEBMonth.toLocaleString()} Exabytes`, note: 'Inference, sync & neural media' },
            { label: 'Cooling Plant Stress', value: `${metrics.coolingStressPercent.toFixed(1)}%`, note: 'Chilled loop heat rejection' }
          ],
          risks: metrics.dataCenterUtilization > 90
            ? 'Hyperscale clusters near theoretical capacity ceiling. Prioritizing quantum compression.'
            : 'Cloud infrastructure operating with ample latency headroom.'
        };
      case 'satellites':
        return {
          title: 'LEO / VLEO ORBITAL SATELLITE CONSTELLATION',
          icon: Radio,
          badge: 'SPACE LAYER',
          overview: 'Massive multi-shell low-earth-orbit megaconstellation operating with optical inter-satellite lasers (ISLs) and phased array phased terrestrial transceivers.',
          formula: 'Laser Bandwidth = Sats Count × Link Capacity × Orbital Health Factor',
          metricsList: [
            { label: 'Active Satellites in Orbit', value: `${metrics.activeSatellites.toLocaleString()}`, note: 'VLEO, LEO and Polar shells' },
            { label: 'Global Population Coverage', value: `${metrics.satelliteCoveragePercent.toFixed(1)}%`, note: 'Direct-to-device gigabit' },
            { label: 'Optical ISL Mesh Bandwidth', value: `${metrics.opticalLaserBandwidthTbps.toLocaleString()} Tbps`, note: 'In-space vacuum laser throughput' },
            { label: 'Orbital Constellation Health', value: `${metrics.orbitalHealthPercent.toFixed(1)}%`, note: 'Debris & space weather resilience' },
            { label: 'Space Weather Flux Index', value: `${metrics.spaceWeatherIndex.toFixed(1)} / 10`, note: 'Geomagnetic radiation level' }
          ],
          risks: metrics.orbitalHealthPercent < 80
            ? 'Space weather or orbital debris hazard detected. Collision avoidance maneuvers active.'
            : 'Orbital shell geometry nominal. Laser interconnects at 99.98% uptime.'
        };
      case 'network':
        return {
          title: 'GLOBAL QUANTUM & SUBSEA NETWORK',
          icon: Globe2,
          badge: 'PHYSICAL CONDUIT',
          overview: 'Global high-speed nervous system fusing hollow-core subsea glass cables, terrestrial superconducting fiber backbones, and quantum key distribution (QKD) meshes.',
          formula: 'Global Latency = Optical Distance ÷ (Speed of Light in Fiber × Routing Overhead Factor)',
          metricsList: [
            { label: 'Aggregate Global Bandwidth', value: `${metrics.globalBandwidthPbps.toFixed(2)} Pbps`, note: 'Petabits/sec transoceanic' },
            { label: 'Global Average Latency (RTT)', value: `${metrics.networkLatencyMs.toFixed(1)} ms`, note: 'Cross-continental round trip' },
            { label: 'Subsea Cable Trunk Integrity', value: `${metrics.subseaCableIntegrityPercent.toFixed(1)}%`, note: 'Deep ocean fiber health' },
            { label: 'Quantum Entanglement Mesh', value: `${metrics.quantumMeshCoveragePercent.toFixed(1)}%`, note: 'Tamper-proof quantum routing' }
          ],
          risks: metrics.networkLatencyMs > 20
            ? 'Latency elevated due to cable rerouting or regional choke points.'
            : 'Sub-millisecond hollow-core quantum trunks operating at peak efficiency.'
        };
      case 'robotics':
        return {
          title: 'ROBOTICS & EMBODIED AUTOMATION',
          icon: Bot,
          badge: 'PHYSICAL AI',
          overview: 'Billions of autonomous humanoid workers, logistics quadruped fleets, and drone swarms maintaining urban fabric, agriculture, and manufacturing.',
          formula: 'Automation Gain = (Active Units ÷ Baseline) × Neural Foundation Efficiency',
          metricsList: [
            { label: 'Active Humanoid & Drone Fleet', value: `${metrics.robotPopulationMillions.toFixed(1)} Million`, note: 'Global autonomous physical units' },
            { label: 'Infrastructure Automation Gain', value: `${metrics.automationEfficiencyPercent.toFixed(1)}%`, note: 'Efficiency increase across society' },
            { label: 'Total Fleet Power Draw', value: `${metrics.robotEnergyDemandGW.toFixed(1)} GW`, note: 'Inductive charging & battery draw' }
          ],
          risks: metrics.robotPopulationMillions > 200 && metrics.gridStressPercent > 80
            ? 'Fleet charging cycles contributing to peak grid strain. Scheduling off-peak recharging.'
            : 'Fleet telemetry synced with zero packet drops.'
        };
      case 'cities':
        return {
          title: 'MEGACITIES & EDGE COMPUTING FABRIC',
          icon: Building2,
          badge: 'URBAN NODES',
          overview: 'Autonomous smart megacities operating localized edge compute micro-data centers, smart water loops, dynamic transit routing, and localized microgrids.',
          formula: 'Edge Load = Local Inference ÷ (Local Inference + Cloud Roundtrip)',
          metricsList: [
            { label: 'Global Urban Population', value: `${metrics.urbanPopulationBillions.toFixed(2)} Billion`, note: 'Citizens living in smart cities' },
            { label: 'Smart City Grid Saturation', value: `${metrics.smartCitySaturationPercent.toFixed(1)}%`, note: 'Cities with autonomic AI governance' },
            { label: 'Edge Compute Traffic Share', value: `${metrics.edgeComputeLoadPercent.toFixed(1)}%`, note: 'Processed locally at city edge' }
          ],
          risks: 'Edge compute load balances central cloud demand, maintaining resilient municipal operations.'
        };
    }
  };

  const data = renderContent();
  const IconComp = data.icon;

  return (
    <div className="fixed inset-y-0 right-0 z-40 w-full max-w-md p-6 bg-[#060a14]/95 border-l border-cyber-border/80 backdrop-blur-2xl shadow-2xl flex flex-col justify-between overflow-y-auto">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-slate-900 border border-cyber-cyan/40 text-cyber-cyan">
              <IconComp className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-widest text-cyber-cyan uppercase font-semibold">
                {data.badge} // YEAR {year.toFixed(1)}
              </span>
              <h2 className="text-sm font-bold font-mono text-white tracking-wide">
                {data.title}
              </h2>
            </div>
          </div>
          <button
            onClick={() => setSelectedSubsystem(null)}
            className="p-1.5 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Overview */}
        <div className="mt-4 p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed font-sans">
          {data.overview}
        </div>

        {/* Mathematical Formulation */}
        <div className="mt-4 p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/30 font-mono text-[11px]">
          <div className="flex items-center gap-1.5 text-cyber-cyan font-bold uppercase tracking-wider mb-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>INTERDEPENDENCY MODEL:</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {data.formula}
          </p>
        </div>

        {/* Metrics Table */}
        <div className="mt-6 flex flex-col gap-2">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
            LIVE TELEMETRY STREAM:
          </span>
          {data.metricsList.map((m, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-2.5 rounded bg-slate-900/40 border border-slate-800/80 font-mono text-xs hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="text-slate-300 font-medium">{m.label}</div>
                <div className="text-[9px] text-slate-500">{m.note}</div>
              </div>
              <div className="text-sm font-bold text-cyber-cyan text-right">
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Status / Diagnostics */}
        <div className="mt-6 p-3.5 rounded-lg border border-slate-800 bg-slate-900/70 font-mono text-xs">
          <div className="flex items-center gap-2 mb-1.5">
            {data.risks.includes('risk') || data.risks.includes('strain') || data.risks.includes('elevated') ? (
              <AlertTriangle className="w-4 h-4 text-amber-400" />
            ) : (
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            )}
            <span className="font-bold text-slate-200 uppercase tracking-wider">
              DIAGNOSTIC STATUS:
            </span>
          </div>
          <p className="text-slate-400 text-[11px] leading-relaxed">
            {data.risks}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="pt-4 border-t border-slate-800 flex justify-between items-center text-[10px] font-mono text-slate-500">
        <span>SECURITY ENCLAVE: ISOLATED</span>
        <span>SCENARIO: {scenario.name}</span>
      </div>
    </div>
  );
};
