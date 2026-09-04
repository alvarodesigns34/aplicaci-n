import React from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { 
  Flame, 
  ShieldAlert, 
  CheckCircle, 
  PlayCircle 
} from 'lucide-react';
import { PRESET_EVENTS } from '../../simulation/events';

export const EventsFeed: React.FC = () => {
  const { activeEvents, triggerEvent, dismissEvent } = useSimulation();

  return (
    <div className="flex flex-col gap-3 p-3.5 rounded-lg border border-slate-800/90 bg-[#080d1a]/85 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-cyber-crimson" />
          <span className="text-[11px] font-mono font-bold tracking-widest text-slate-200 uppercase">
            DYNAMIC EVENT SIMULATOR
          </span>
        </div>
        <button
          onClick={() => triggerEvent()}
          className="flex items-center gap-1 px-2 py-1 rounded bg-rose-950/60 border border-rose-500/50 hover:border-rose-400 text-rose-300 text-[10px] font-mono transition-colors"
        >
          <PlayCircle className="w-3 h-3" />
          <span>INJECT RANDOM</span>
        </button>
      </div>

      {/* Preset Injection Quick Badges */}
      <div className="flex flex-wrap gap-1">
        {PRESET_EVENTS.slice(0, 4).map((pe, idx) => (
          <button
            key={idx}
            onClick={() => triggerEvent(idx)}
            className="px-2 py-1 text-[9px] font-mono rounded bg-slate-900 border border-slate-700/60 text-slate-300 hover:border-cyber-cyan hover:text-cyber-cyan transition-all"
            title={pe.title}
          >
            + {pe.title.split(' ')[0]} {pe.title.split(' ')[1] || ''}
          </button>
        ))}
      </div>

      {/* Active Incidents Stream */}
      <div className="flex flex-col gap-2 max-h-56 overflow-y-auto pr-1">
        {activeEvents.length === 0 ? (
          <div className="p-3 text-center rounded border border-dashed border-slate-800 text-[11px] font-mono text-slate-500">
            [ ALL GLOBAL SUBSYSTEMS REPORTING NOMINAL ]
            <div className="text-[9px] text-slate-600 mt-1">No active systemic anomalies. Inject an event to test infrastructure resilience.</div>
          </div>
        ) : (
          activeEvents.map((ev) => (
            <div
              key={ev.id}
              className={`p-2.5 rounded border transition-all relative ${
                ev.severity === 'CRITICAL'
                  ? 'bg-rose-950/40 border-rose-500/60 text-rose-200'
                  : ev.severity === 'WARNING'
                  ? 'bg-amber-950/40 border-amber-500/60 text-amber-200'
                  : 'bg-cyan-950/40 border-cyan-500/60 text-cyan-200'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-1.5 font-mono text-xs font-bold">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>{ev.title}</span>
                </div>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-black/40 border border-current">
                  {Math.ceil(ev.durationSeconds)}s REMAINING
                </span>
              </div>

              <p className="text-[10px] mt-1 font-sans text-slate-300 leading-snug">
                {ev.description}
              </p>

              {ev.mitigationProtocol && (
                <div className="mt-2 pt-1.5 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-slate-400 italic">
                    AUTO-PROTOCOL: {ev.mitigationProtocol.slice(0, 48)}...
                  </span>
                  <button
                    onClick={() => dismissEvent(ev.id)}
                    className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-emerald-950 border border-emerald-500 text-emerald-400 text-[9px] font-mono hover:bg-emerald-900 transition-colors"
                  >
                    <CheckCircle className="w-3 h-3" />
                    <span>MITIGATE</span>
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};
