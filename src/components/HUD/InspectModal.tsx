import React from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { X, MapPin, Zap, Activity, HardDrive, Shield } from 'lucide-react';

export const InspectModal: React.FC = () => {
  const { selectedNode, setSelectedNode, metrics, selectedSubsystem, year } = useSimulation();

  if (!selectedNode) return null;

  // Compute dynamic node telemetry scaled to simulation state
  const getDynamicNodeMetrics = () => {
    const raw = selectedNode.metrics;
    let load = raw.loadPct;
    let power = raw.powerGW;
    let ping = raw.latencyMs;
    let status = raw.status;

    if (selectedNode.type === 'datacenter') {
      const utilFactor = metrics.dataCenterUtilization / 84;
      load = Math.min(99, Math.round(raw.loadPct * utilFactor));
      power = Number((raw.powerGW * (metrics.dataCenterCapacityGW / 210)).toFixed(1));
      ping = Number((raw.latencyMs * (metrics.networkLatencyMs / 10.8)).toFixed(1));
    } else if (selectedNode.type === 'energy_fusion') {
      const fusionFactor = Math.max(0.1, metrics.fusionOutputTWh / 380);
      power = Number((raw.powerGW * Math.sqrt(fusionFactor)).toFixed(1));
      load = Math.min(99, Math.round(metrics.gridStressPercent * 1.1));
    } else {
      // Megacity / ground station
      load = Math.min(99, Math.round(metrics.smartCitySaturationPercent * (raw.loadPct / 64)));
      ping = Number((raw.latencyMs * (metrics.networkLatencyMs / 10.8)).toFixed(1));
      power = Number((raw.powerGW * (metrics.energyConsumptionTWh / 36900)).toFixed(1));
    }

    if (load > 92 || metrics.gridStressPercent > 85) {
      status = 'OVERLOADED';
    } else if (load > 75 || metrics.gridStressPercent > 70) {
      status = 'DEGRADED';
    } else {
      status = 'OPTIMAL';
    }

    return { load, power, ping, status };
  };

  const dyn = getDynamicNodeMetrics();

  // Offset position if right telemetry drawer is open
  const positionClass = selectedSubsystem
    ? 'fixed top-20 left-4 md:left-[26rem] z-30'
    : 'fixed top-20 right-6 z-30';

  return (
    <div className={`${positionClass} w-80 md:w-88 p-4 rounded-xl border border-cyber-cyan/50 bg-[#060a14]/95 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,240,255,0.25)] font-mono transition-all animate-fadeIn`}>
      <div className="flex items-start justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded-lg bg-cyan-950/70 border border-cyber-cyan/40 text-cyber-cyan">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-wider text-cyber-cyan font-bold">
              NODE INSPECTOR // {selectedNode.country} // {year.toFixed(1)}
            </span>
            <h3 className="text-xs font-bold text-white leading-tight">
              {selectedNode.name}
            </h3>
          </div>
        </div>
        <button
          onClick={() => setSelectedNode(null)}
          className="p-1 rounded text-slate-400 hover:text-white transition-colors"
          title="Close node inspector"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="mt-2 text-[10px] text-slate-300 font-sans leading-relaxed">
        {selectedNode.description}
      </p>

      {/* Real-time telemetry grid */}
      <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
        <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 uppercase">
            <Activity className="w-3 h-3 text-cyber-cyan" />
            <span>LOAD FACTOR</span>
          </div>
          <div className="text-sm font-bold text-white mt-0.5">
            {dyn.load}%
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 uppercase">
            <Zap className="w-3 h-3 text-amber-400" />
            <span>POWER DRAW</span>
          </div>
          <div className="text-sm font-bold text-amber-300 mt-0.5">
            {dyn.power} GW
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 uppercase">
            <HardDrive className="w-3 h-3 text-emerald-400" />
            <span>RTT PING</span>
          </div>
          <div className="text-sm font-bold text-emerald-300 mt-0.5">
            {dyn.ping} ms
          </div>
        </div>

        <div className="p-2.5 rounded-lg bg-slate-900/70 border border-slate-800">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 uppercase">
            <Shield className="w-3 h-3 text-blue-400" />
            <span>NODE STATUS</span>
          </div>
          <div className={`text-xs font-bold mt-1 ${
            dyn.status === 'OPTIMAL'
              ? 'text-emerald-400'
              : dyn.status === 'DEGRADED'
              ? 'text-amber-400'
              : 'text-rose-400 animate-pulse'
          }`}>
            {dyn.status}
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-slate-800 flex justify-between text-[9px] text-slate-500">
        <span>LAT: {selectedNode.lat.toFixed(2)}°</span>
        <span>LON: {selectedNode.lon.toFixed(2)}°</span>
        <span className="text-cyber-cyan uppercase">{selectedNode.type.replace('_', ' ')}</span>
      </div>
    </div>
  );
};
