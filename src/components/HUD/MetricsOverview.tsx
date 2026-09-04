import React, { useState } from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { SubsystemCard } from './SubsystemCard';
import { ScenarioSelector } from './ScenarioSelector';
import { EventsFeed } from './EventsFeed';
import { SubsystemType } from '../../types/simulation';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SUBSYSTEMS: SubsystemType[] = [
  'ai',
  'energy',
  'cloud',
  'satellites',
  'network',
  'robotics',
  'cities'
];

export const MetricsOverview: React.FC = () => {
  const { metrics, selectedSubsystem, setSelectedSubsystem } = useSimulation();
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'subsystems' | 'scenarios' | 'events'>('subsystems');

  return (
    <div
      className={`fixed top-16 bottom-28 left-4 z-20 flex transition-all duration-300 pointer-events-none ${
        isCollapsed ? '-translate-x-[calc(100%-2rem)]' : 'translate-x-0'
      }`}
    >
      <div className="w-80 md:w-96 h-full flex flex-col gap-2 pointer-events-auto bg-[#040813]/85 backdrop-blur-xl border border-cyber-border/50 rounded-xl p-3 shadow-2xl overflow-hidden">
        {/* Navigation Tabs */}
        <div className="flex items-center justify-between pb-2 border-b border-slate-800">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('subsystems')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                activeTab === 'subsystems'
                  ? 'bg-cyan-950/70 border border-cyber-cyan text-cyber-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              MATRIX
            </button>
            <button
              onClick={() => setActiveTab('scenarios')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                activeTab === 'scenarios'
                  ? 'bg-cyan-950/70 border border-cyber-cyan text-cyber-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              SCENARIOS
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold transition-all ${
                activeTab === 'events'
                  ? 'bg-cyan-950/70 border border-cyber-cyan text-cyber-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              INCIDENTS
            </button>
          </div>

          <span className="text-[9px] font-mono text-slate-500">
            AUTO-SYNC 60Hz
          </span>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-2">
          {activeTab === 'subsystems' && (
            <div className="flex flex-col gap-2">
              {SUBSYSTEMS.map(sub => (
                <SubsystemCard
                  key={sub}
                  type={sub}
                  metrics={metrics}
                  isSelected={selectedSubsystem === sub}
                  onSelect={setSelectedSubsystem}
                />
              ))}
            </div>
          )}

          {activeTab === 'scenarios' && <ScenarioSelector />}

          {activeTab === 'events' && <EventsFeed />}
        </div>
      </div>

      {/* Collapse Toggle Handle */}
      <button
        onClick={() => setIsCollapsed(prev => !prev)}
        className="self-center ml-1 w-6 h-12 rounded-r-md bg-[#0b1322] border-y border-r border-cyber-border/70 text-cyber-cyan flex items-center justify-center pointer-events-auto hover:bg-[#121e36] transition-colors shadow-lg"
        title={isCollapsed ? 'Expand Dashboard' : 'Collapse Dashboard'}
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </button>
    </div>
  );
};
