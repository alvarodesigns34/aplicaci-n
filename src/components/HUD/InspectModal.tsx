import React from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { X, MapPin, Zap, Activity, HardDrive, Shield } from 'lucide-react';

export const InspectModal: React.FC = () => {
  const { selectedNode, setSelectedNode } = useSimulation();

  if (!selectedNode) return null;

  return (
    <div className="absolute top-20 left-6 z-30 w-80 p-4 rounded-lg border border-cyber-cyan/50 bg-[#060a14]/95 backdrop-blur-xl shadow-[0_0_30px_rgba(0,240,255,0.2)] font-mono">
      <div className="flex items-start justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-1.5 rounded bg-cyan-950/70 border border-cyber-cyan/40 text-cyber-cyan">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-wider text-cyber-cyan font-bold">
              NODE INSPECTOR // {selectedNode.country}
            </span>
            <h3 className="text-xs font-bold text-white leading-tight">
              {selectedNode.name}
            </h3>
          </div>
        </div>
        <button
          onClick={() => setSelectedNode(null)}
          className="text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="mt-2 text-[10px] text-slate-300 font-sans leading-relaxed">
        {selectedNode.description}
      </p>

      {/* Real-time telemetry grid */}
      <div className="grid grid-cols-2 gap-2 mt-3 text-xs">
        <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 uppercase">
            <Activity className="w-3 h-3 text-cyber-cyan" />
            <span>LOAD FACTOR</span>
          </div>
          <div className="text-sm font-bold text-white mt-0.5">
            {selectedNode.metrics.loadPct}%
          </div>
        </div>

        <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 uppercase">
            <Zap className="w-3 h-3 text-amber-400" />
            <span>POWER DRAW</span>
          </div>
          <div className="text-sm font-bold text-amber-300 mt-0.5">
            {selectedNode.metrics.powerGW} GW
          </div>
        </div>

        <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 uppercase">
            <HardDrive className="w-3 h-3 text-emerald-400" />
            <span>RTT PING</span>
          </div>
          <div className="text-sm font-bold text-emerald-300 mt-0.5">
            {selectedNode.metrics.latencyMs} ms
          </div>
        </div>

        <div className="p-2 rounded bg-slate-900/60 border border-slate-800">
          <div className="flex items-center gap-1 text-[9px] text-slate-400 uppercase">
            <Shield className="w-3 h-3 text-blue-400" />
            <span>STATUS</span>
          </div>
          <div className="text-xs font-bold text-cyber-cyan mt-1">
            {selectedNode.metrics.status}
          </div>
        </div>
      </div>

      <div className="mt-3 pt-2 border-t border-slate-800 flex justify-between text-[9px] text-slate-500">
        <span>LAT: {selectedNode.lat.toFixed(2)}°</span>
        <span>LON: {selectedNode.lon.toFixed(2)}°</span>
      </div>
    </div>
  );
};
