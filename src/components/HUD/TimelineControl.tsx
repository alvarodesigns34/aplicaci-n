import React from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { Year } from '../../types/simulation';
import { Play, Pause, RotateCcw } from 'lucide-react';

const MILESTONES: Year[] = [2030, 2035, 2040, 2050];

export const TimelineControl: React.FC = () => {
  const {
    year,
    targetYear,
    isPlaying,
    playbackSpeed,
    setYear,
    jumpToMilestone,
    togglePlay,
    setPlaybackSpeed
  } = useSimulation();

  const formatYearDetailed = (y: number) => {
    const wholeYear = Math.floor(y);
    const fraction = y - wholeYear;
    const quarter = Math.min(4, Math.floor(fraction * 4) + 1);
    const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const month = months[Math.min(11, Math.floor(fraction * 12))];
    return {
      whole: wholeYear,
      quarter: `Q${quarter}`,
      month,
      exact: y.toFixed(1)
    };
  };

  const detailed = formatYearDetailed(year);

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 w-[95%] max-w-4xl px-6 py-3.5 rounded-lg border border-cyber-border/60 bg-[#060a14]/90 backdrop-blur-xl shadow-2xl flex flex-col gap-3">
      {/* Top Row: Year Readout & Controls */}
      <div className="flex items-center justify-between">
        {/* Left: Playback & Speed */}
        <div className="flex items-center gap-3">
          <button
            onClick={togglePlay}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded font-mono text-xs font-semibold tracking-wider transition-all ${
              isPlaying
                ? 'bg-amber-500/20 border border-amber-400 text-amber-300 shadow-[0_0_12px_rgba(251,191,36,0.3)]'
                : 'bg-cyber-cyan/20 border border-cyber-cyan text-cyber-cyan shadow-[0_0_12px_rgba(0,240,255,0.3)] hover:bg-cyber-cyan/30'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>{isPlaying ? 'PAUSE' : 'SIMULATE'}</span>
          </button>

          {/* Speed Selector */}
          <div className="flex items-center rounded border border-slate-700/60 bg-slate-900/60 p-0.5">
            {[1, 2, 5, 10].map(spd => (
              <button
                key={spd}
                onClick={() => setPlaybackSpeed(spd)}
                className={`px-2 py-0.5 text-[10px] font-mono rounded transition-colors ${
                  playbackSpeed === spd
                    ? 'bg-cyan-500/30 text-cyber-cyan font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {spd}x
              </button>
            ))}
          </div>

          <button
            onClick={() => jumpToMilestone(2035)}
            className="p-1.5 text-slate-400 hover:text-cyber-cyan transition-colors"
            title="Reset to 2035 baseline"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Center: Detailed Temporal Clock */}
        <div className="flex items-center gap-2.5 font-mono">
          <span className="text-[10px] uppercase text-slate-400 tracking-widest">TEMPORAL PHASE:</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-xl font-bold tracking-tight text-white">{detailed.whole}</span>
            <span className="text-xs text-cyber-cyan font-bold">.{Math.floor((year % 1) * 10)}</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 border border-slate-700 text-slate-300">
              {detailed.quarter} // {detailed.month}
            </span>
          </div>
        </div>

        {/* Right: Milestone Shortcuts */}
        <div className="flex items-center gap-1.5">
          {MILESTONES.map(m => (
            <button
              key={m}
              onClick={() => jumpToMilestone(m)}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-all ${
                targetYear === m && Math.abs(year - m) < 0.3
                  ? 'bg-cyan-950 border border-cyber-cyan text-cyber-cyan font-bold shadow-[0_0_10px_rgba(0,240,255,0.3)]'
                  : 'bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-600'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom Row: High Precision Timeline Range Slider */}
      <div className="relative w-full flex items-center">
        {/* Milestone Tick Marks */}
        <div className="absolute inset-x-0 -top-1.5 flex justify-between pointer-events-none px-1">
          {MILESTONES.map(m => {
            const pct = ((m - 2030) / (2050 - 2030)) * 100;
            return (
              <div
                key={m}
                className="absolute flex flex-col items-center -translate-x-1/2"
                style={{ left: `${pct}%` }}
              >
                <div className={`w-1 h-2 rounded-full ${Math.abs(year - m) < 0.4 ? 'bg-cyber-cyan' : 'bg-slate-600'}`} />
                <span className="text-[9px] font-mono text-slate-400 mt-0.5">{m}</span>
              </div>
            );
          })}
        </div>

        {/* The Range Input */}
        <input
          type="range"
          min={2030}
          max={2050}
          step={0.05}
          value={year}
          onChange={e => setYear(parseFloat(e.target.value))}
          className="w-full h-2 mt-4 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 focus:outline-none"
        />
      </div>
    </div>
  );
};
