import React from 'react';
import { SubsystemType, SimulationMetrics } from '../../types/simulation';
import { 
  Cpu, 
  Zap, 
  Server, 
  Radio, 
  Globe2, 
  Bot, 
  Building2, 
  ChevronRight 
} from 'lucide-react';

interface SubsystemCardProps {
  type: SubsystemType;
  metrics: SimulationMetrics;
  isSelected: boolean;
  onSelect: (type: SubsystemType) => void;
}

export const SubsystemCard: React.FC<SubsystemCardProps> = ({
  type,
  metrics,
  isSelected,
  onSelect
}) => {
  const getSubsystemDetails = () => {
    switch (type) {
      case 'ai':
        return {
          title: 'AI & COMPUTE',
          icon: Cpu,
          color: 'text-purple-400',
          borderColor: 'border-purple-500/40',
          primary: `${metrics.aiComputeExaflops.toFixed(1)} EFLOPs`,
          primaryLabel: 'GLOBAL INFERENCE',
          secondary: `${metrics.aiAdoptionRate.toFixed(1)}% ADOPTION`,
          health: 100 - (metrics.coolingStressPercent * 0.4),
          status: metrics.coolingStressPercent > 70 ? 'THROTTLED' : 'NOMINAL'
        };
      case 'energy':
        return {
          title: 'ENERGY & FUSION',
          icon: Zap,
          color: 'text-amber-400',
          borderColor: 'border-amber-500/40',
          primary: `${(metrics.energyProductionTWh / 1000).toFixed(1)}k TWh`,
          primaryLabel: 'ANNUAL GENERATION',
          secondary: `${metrics.renewableEnergyPercent.toFixed(1)}% CLEAN`,
          health: 100 - metrics.gridStressPercent,
          status: metrics.gridStressPercent > 75 ? 'OVERLOAD' : 'NOMINAL'
        };
      case 'cloud':
        return {
          title: 'DATA CENTERS',
          icon: Server,
          color: 'text-emerald-400',
          borderColor: 'border-emerald-500/40',
          primary: `${metrics.dataCenterCapacityGW.toFixed(0)} GW`,
          primaryLabel: 'CONNECTED CAPACITY',
          secondary: `PUE ${metrics.pueAverage.toFixed(2)}`,
          health: 100 - metrics.coolingStressPercent,
          status: metrics.coolingStressPercent > 65 ? 'HEAT STRESS' : 'OPTIMAL'
        };
      case 'satellites':
        return {
          title: 'ORBITAL MESH',
          icon: Radio,
          color: 'text-cyan-400',
          borderColor: 'border-cyan-500/40',
          primary: `${(metrics.activeSatellites / 1000).toFixed(1)}k SATS`,
          primaryLabel: 'LEO / VLEO FLEET',
          secondary: `${metrics.satelliteCoveragePercent.toFixed(1)}% COVERAGE`,
          health: metrics.orbitalHealthPercent,
          status: metrics.orbitalHealthPercent < 80 ? 'DEGRADED' : 'ACTIVE'
        };
      case 'network':
        return {
          title: 'QUANTUM NETWORK',
          icon: Globe2,
          color: 'text-blue-400',
          borderColor: 'border-blue-500/40',
          primary: `${metrics.networkLatencyMs.toFixed(1)} ms`,
          primaryLabel: 'AVERAGE LATENCY',
          secondary: `${metrics.globalBandwidthPbps.toFixed(1)} Pbps`,
          health: metrics.subseaCableIntegrityPercent,
          status: metrics.networkLatencyMs > 20 ? 'HIGH RTT' : 'NOMINAL'
        };
      case 'robotics':
        return {
          title: 'ROBOTICS & AGENTS',
          icon: Bot,
          color: 'text-rose-400',
          borderColor: 'border-rose-500/40',
          primary: `${metrics.robotPopulationMillions.toFixed(0)}M UNITS`,
          primaryLabel: 'HUMANOID FLEET',
          secondary: `${metrics.automationEfficiencyPercent.toFixed(0)}% EFFICIENCY`,
          health: metrics.automationEfficiencyPercent,
          status: 'ACTIVE'
        };
      case 'cities':
        return {
          title: 'MEGACITIES & EDGE',
          icon: Building2,
          color: 'text-teal-400',
          borderColor: 'border-teal-500/40',
          primary: `${metrics.urbanPopulationBillions.toFixed(2)}B POP`,
          primaryLabel: 'CONNECTED CITIZENS',
          secondary: `${metrics.smartCitySaturationPercent.toFixed(0)}% AUTONOMIC`,
          health: metrics.smartCitySaturationPercent,
          status: 'OPTIMAL'
        };
    }
  };

  const details = getSubsystemDetails();
  const IconComponent = details.icon;

  return (
    <div
      onClick={() => onSelect(type)}
      className={`relative group cursor-pointer p-3 rounded-lg border transition-all duration-200 backdrop-blur-md ${
        isSelected
          ? `bg-[#0d1627]/95 ${details.borderColor} shadow-[0_0_20px_rgba(0,240,255,0.25)] ring-1 ring-cyber-cyan/50`
          : 'bg-[#080d1a]/80 border-slate-800/80 hover:border-slate-600 hover:bg-[#0b1324]/90'
      }`}
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-center gap-2">
          <div className={`p-1.5 rounded-md bg-slate-900 border border-slate-800 ${details.color}`}>
            <IconComponent className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-mono font-bold tracking-wider text-slate-200 uppercase">
            {details.title}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border border-slate-700/60 ${
            details.status === 'NOMINAL' || details.status === 'OPTIMAL' || details.status === 'ACTIVE'
              ? 'text-emerald-400 bg-emerald-950/40'
              : 'text-amber-400 bg-amber-950/40'
          }`}>
            {details.status}
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-cyber-cyan transition-colors" />
        </div>
      </div>

      <div className="flex items-baseline justify-between mt-1">
        <div>
          <div className="text-base font-bold font-mono text-white tracking-tight">
            {details.primary}
          </div>
          <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">
            {details.primaryLabel}
          </div>
        </div>
        <div className="text-right">
          <div className="text-xs font-mono font-semibold text-slate-300">
            {details.secondary}
          </div>
        </div>
      </div>

      {/* Mini Health Bar */}
      <div className="w-full h-1 bg-slate-800 rounded-full mt-2.5 overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-300 ${
            details.health > 80 ? 'bg-emerald-400' : details.health > 50 ? 'bg-amber-400' : 'bg-red-400'
          }`}
          style={{ width: `${Math.max(5, Math.min(100, details.health))}%` }}
        />
      </div>
    </div>
  );
};
