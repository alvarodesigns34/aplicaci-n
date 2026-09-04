import React from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { SCENARIOS } from '../../simulation/scenarios';
import { Layers, Sparkles } from 'lucide-react';

export const ScenarioSelector: React.FC = () => {
  const { scenario, setScenarioById } = useSimulation();

  return (
    <div className="flex flex-col gap-2 p-3.5 rounded-lg border border-slate-800/90 bg-[#080d1a]/85 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyber-cyan" />
          <span className="text-[11px] font-mono font-bold tracking-widest text-slate-300 uppercase">
            SIMULATION SCENARIOS
          </span>
        </div>
        <span className="text-[10px] font-mono text-slate-500">
          7 BRANCHES AVAILABLE
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 mt-1">
        {SCENARIOS.map((sc) => {
          const isActive = scenario.id === sc.id;
          return (
            <button
              key={sc.id}
              onClick={() => setScenarioById(sc.id)}
              className={`text-left p-2.5 rounded border transition-all duration-150 relative overflow-hidden ${
                isActive
                  ? 'bg-slate-900/90 border-cyber-cyan shadow-[0_0_12px_rgba(0,240,255,0.2)]'
                  : 'bg-slate-950/40 border-slate-800/80 hover:border-slate-600 hover:bg-slate-900/40'
              }`}
            >
              {isActive && (
                <div
                  className="absolute left-0 top-0 bottom-0 w-1"
                  style={{ backgroundColor: sc.color }}
                />
              )}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span
                    className="text-xs font-mono font-bold"
                    style={{ color: isActive ? sc.color : '#e2e8f0' }}
                  >
                    {sc.name}
                  </span>
                  {isActive && <Sparkles className="w-3 h-3 text-cyber-cyan animate-pulse" />}
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-400">
                  {sc.badge}
                </span>
              </div>
              <p className="text-[10px] text-slate-400 mt-1 line-clamp-2 font-sans">
                {sc.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};
