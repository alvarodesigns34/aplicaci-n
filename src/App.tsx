import React, { useEffect } from 'react';
import { SimulationProvider, useSimulation } from './context/SimulationContext';
import { GlobeView } from './components/Globe3D/GlobeView';
import { Header } from './components/HUD/Header';
import { MetricsOverview } from './components/HUD/MetricsOverview';
import { TimelineControl } from './components/HUD/TimelineControl';
import { TelemetryDrawer } from './components/HUD/TelemetryDrawer';
import { InspectModal } from './components/HUD/InspectModal';
import { ChartsView } from './components/HUD/ChartsView';
import { CommandConsole } from './components/HUD/CommandConsole';

const AppContent: React.FC = () => {
  const { 
    togglePlay, 
    toggleConsole, 
    isConsoleOpen, 
    jumpToMilestone, 
    selectedSubsystem, 
    setSelectedSubsystem,
    selectedNode,
    setSelectedNode
  } = useSimulation();

  // Global Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept typing in inputs
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        if (e.key === 'Escape') {
          (e.target as HTMLElement).blur();
        }
        return;
      }

      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        toggleConsole();
      } else if (e.key === ' ') {
        e.preventDefault();
        togglePlay();
      } else if (e.key === 'Escape') {
        if (selectedSubsystem) setSelectedSubsystem(null);
        if (selectedNode) setSelectedNode(null);
        if (isConsoleOpen) toggleConsole();
      } else if (e.key === '1') {
        jumpToMilestone(2030);
      } else if (e.key === '2') {
        jumpToMilestone(2035);
      } else if (e.key === '3') {
        jumpToMilestone(2040);
      } else if (e.key === '4') {
        jumpToMilestone(2050);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [togglePlay, toggleConsole, isConsoleOpen, jumpToMilestone, selectedSubsystem, setSelectedSubsystem, selectedNode, setSelectedNode]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#04070d] text-slate-100 flex flex-col cyber-grid">
      {/* 1. Aerospace Header Bar */}
      <Header />

      {/* 2. Main 3D World Viewport */}
      <main className="relative flex-1 w-full h-full overflow-hidden">
        <GlobeView />

        {/* 3. Left Subsystems HUD */}
        <MetricsOverview />

        {/* 4. Timeline Controller */}
        <TimelineControl />

        {/* 5. Right Slide-out Subsystem Telemetry Drawer */}
        <TelemetryDrawer />

        {/* 6. Physical Node Inspector Modal */}
        <InspectModal />

        {/* 7. Historical Analytics / Projection Charts */}
        <ChartsView />

        {/* 8. Command Line Console Terminal */}
        <CommandConsole />

        {/* CRT Scanline & Subtle Vignette */}
        <div className="absolute inset-0 scanline-overlay pointer-events-none opacity-40 z-10" />
        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_120px_rgba(0,0,0,0.85)] z-10" />
      </main>
    </div>
  );
};

export const App: React.FC = () => {
  return (
    <SimulationProvider>
      <AppContent />
    </SimulationProvider>
  );
};

export default App;
