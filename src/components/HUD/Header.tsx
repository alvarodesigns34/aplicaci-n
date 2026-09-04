import React from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { 
  Activity, 
  Cpu, 
  Zap, 
  Radio, 
  Volume2, 
  VolumeX, 
  Terminal, 
  BarChart3, 
  ShieldAlert, 
  ShieldCheck 
} from 'lucide-react';

export const Header: React.FC = () => {
  const { 
    metrics, 
    audioEnabled, 
    toggleAudio, 
    toggleConsole, 
    toggleCharts, 
    isConsoleOpen, 
    isChartsOpen, 
    scenario, 
    activeEvents 
  } = useSimulation();

  const getStatusColor = () => {
    switch (metrics.healthStatus) {
      case 'NOMINAL': return 'border-emerald-500/60 bg-emerald-950/40 text-emerald-400';
      case 'ELEVATED_STRESS': return 'border-amber-500/60 bg-amber-950/40 text-amber-400';
      case 'CRITICAL_RISK': return 'border-red-500/60 bg-red-950/40 text-red-400 animate-pulse';
      case 'CASCADE_FAILURE': return 'border-rose-600 bg-rose-950 text-rose-300 animate-bounce';
    }
  };

  return (
    <header className="relative z-30 flex items-center justify-between px-6 py-3 border-b border-cyber-border/40 bg-[#04070d]/85 backdrop-blur-md">
      {/* Title & Brand */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2.5">
          <div className="relative w-8 h-8 rounded-sm border border-cyber-cyan bg-cyan-950/50 flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-cyber-cyan/10 animate-ping-slow" />
            <Activity className="w-5 h-5 text-cyber-cyan" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm font-bold font-mono tracking-widest text-slate-100 uppercase">
                INTERNET <span className="text-cyber-cyan font-extrabold">2035</span>
              </h1>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyber-cyan font-mono font-medium">
                V4.2.0-PROD
              </span>
            </div>
            <p className="text-[10px] font-mono text-slate-400 tracking-wider">
              GLOBAL INFRASTRUCTURE COMMAND & SIMULATION
            </p>
          </div>
        </div>

        {/* Active Scenario Tag */}
        <div className="hidden lg:flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/80 border border-slate-700/60">
          <span className="text-[10px] font-mono text-slate-400">SCENARIO:</span>
          <span className="text-xs font-mono font-semibold" style={{ color: scenario.color }}>
            {scenario.name}
          </span>
        </div>
      </div>

      {/* Top Telemetry Quick Glance */}
      <div className="hidden md:flex items-center gap-6 font-mono text-xs">
        {/* System Health Score */}
        <div className={`flex items-center gap-2 px-3 py-1.5 rounded border transition-all ${getStatusColor()}`}>
          {metrics.healthStatus === 'NOMINAL' ? (
            <ShieldCheck className="w-4 h-4" />
          ) : (
            <ShieldAlert className="w-4 h-4" />
          )}
          <div className="flex flex-col leading-none">
            <span className="text-[9px] uppercase tracking-wider opacity-75">SYSTEM HEALTH</span>
            <span className="font-bold text-sm">
              {metrics.globalSystemHealth.toFixed(1)}% <span className="text-[10px] font-normal">[{metrics.healthStatus}]</span>
            </span>
          </div>
        </div>

        {/* AI Compute */}
        <div className="flex items-center gap-2 text-slate-300">
          <Cpu className="w-4 h-4 text-purple-400" />
          <div className="flex flex-col leading-none">
            <span className="text-[9px] text-slate-400 uppercase tracking-wider">AI COMPUTE</span>
            <span className="font-bold text-slate-100">{metrics.aiComputeExaflops.toFixed(1)} <span className="text-[10px] text-slate-400 font-normal">EFLOPs</span></span>
          </div>
        </div>

        {/* Energy Clean % */}
        <div className="flex items-center gap-2 text-slate-300">
          <Zap className="w-4 h-4 text-amber-400" />
          <div className="flex flex-col leading-none">
            <span className="text-[9px] text-slate-400 uppercase tracking-wider">RENEWABLE / FUSION</span>
            <span className="font-bold text-slate-100">{metrics.renewableEnergyPercent.toFixed(1)}%</span>
          </div>
        </div>

        {/* Satellites */}
        <div className="flex items-center gap-2 text-slate-300">
          <Radio className="w-4 h-4 text-cyber-cyan" />
          <div className="flex flex-col leading-none">
            <span className="text-[9px] text-slate-400 uppercase tracking-wider">LEO CONSTELLATION</span>
            <span className="font-bold text-slate-100">{metrics.activeSatellites.toLocaleString()}</span>
          </div>
        </div>

        {/* Latency */}
        <div className="flex items-center gap-2 text-slate-300">
          <div className="flex flex-col leading-none">
            <span className="text-[9px] text-slate-400 uppercase tracking-wider">GLOBAL LATENCY</span>
            <span className="font-bold text-cyan-300">{metrics.networkLatencyMs.toFixed(1)} <span className="text-[10px] text-slate-400 font-normal">ms</span></span>
          </div>
        </div>
      </div>

      {/* Action Buttons & Utilities */}
      <div className="flex items-center gap-2">
        {/* Active Events Alert Counter */}
        {activeEvents.length > 0 && (
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-rose-950/80 border border-rose-500/60 text-rose-400 text-xs font-mono animate-pulse">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>{activeEvents.length} INCIDENT{activeEvents.length > 1 ? 'S' : ''}</span>
          </div>
        )}

        {/* Charts View Toggle */}
        <button
          onClick={toggleCharts}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border transition-all ${
            isChartsOpen
              ? 'bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan shadow-[0_0_12px_rgba(0,240,255,0.3)]'
              : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-slate-500 hover:text-white'
          }`}
          title="Toggle Simulation Charts"
        >
          <BarChart3 className="w-4 h-4" />
          <span className="hidden sm:inline">ANALYTICS</span>
        </button>

        {/* Terminal Console Toggle */}
        <button
          onClick={toggleConsole}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border transition-all ${
            isConsoleOpen
              ? 'bg-cyber-cyan/20 border-cyber-cyan text-cyber-cyan shadow-[0_0_12px_rgba(0,240,255,0.3)]'
              : 'bg-slate-900/60 border-slate-700/60 text-slate-300 hover:border-slate-500 hover:text-white'
          }`}
          title="Toggle Cyber Command Terminal"
        >
          <Terminal className="w-4 h-4" />
          <span className="hidden sm:inline">CONSOLE</span>
        </button>

        {/* Audio Toggle */}
        <button
          onClick={toggleAudio}
          className="p-1.5 rounded border border-slate-700/60 bg-slate-900/60 text-slate-300 hover:border-slate-500 hover:text-white transition-all"
          title={audioEnabled ? 'Mute Audio Telemetry' : 'Unmute Audio Telemetry'}
        >
          {audioEnabled ? (
            <Volume2 className="w-4 h-4 text-cyber-cyan" />
          ) : (
            <VolumeX className="w-4 h-4 text-slate-500" />
          )}
        </button>
      </div>
    </header>
  );
};
