import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { 
  SimulationMetrics, 
  Year, 
  ScenarioDefinition, 
  DynamicEvent, 
  SubsystemType, 
  GlobeNodeLocation 
} from '../types/simulation';
import { SCENARIOS } from '../simulation/scenarios';
import { calculateSimulationFrame } from '../simulation/engine';
import { PRESET_EVENTS, createRandomEvent } from '../simulation/events';
import { soundEffects } from '../services/soundEffects';

export interface VisualLayers {
  satellites: boolean;
  subseaCables: boolean;
  megacities: boolean;
  energyGrid: boolean;
  dataCenters: boolean;
  dataParticles: boolean;
  atmosphereGlow: boolean;
}

interface SimulationContextValue {
  year: number;
  targetYear: Year;
  isPlaying: boolean;
  playbackSpeed: number;
  scenario: ScenarioDefinition;
  metrics: SimulationMetrics;
  events: DynamicEvent[];
  activeEvents: DynamicEvent[];
  selectedSubsystem: SubsystemType | null;
  selectedNode: GlobeNodeLocation | null;
  visualLayers: VisualLayers;
  audioEnabled: boolean;
  isConsoleOpen: boolean;
  isChartsOpen: boolean;

  // Actions
  setYear: (y: number) => void;
  jumpToMilestone: (y: Year) => void;
  togglePlay: () => void;
  setPlaybackSpeed: (spd: number) => void;
  setScenarioById: (id: string) => void;
  triggerEvent: (presetIdx?: number) => void;
  dismissEvent: (id: string) => void;
  setSelectedSubsystem: (sub: SubsystemType | null) => void;
  setSelectedNode: (node: GlobeNodeLocation | null) => void;
  toggleLayer: (layerKey: keyof VisualLayers) => void;
  toggleAudio: () => void;
  toggleConsole: () => void;
  toggleCharts: () => void;
}

const SimulationContext = createContext<SimulationContextValue | null>(null);

export const SimulationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [year, setYearState] = useState<number>(2035);
  const [targetYear, setTargetYear] = useState<Year>(2035);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
  const [scenario, setScenario] = useState<ScenarioDefinition>(SCENARIOS[0]);
  const [events, setEvents] = useState<DynamicEvent[]>([]);
  const [selectedSubsystem, setSelectedSubsystem] = useState<SubsystemType | null>(null);
  const [selectedNode, setSelectedNode] = useState<GlobeNodeLocation | null>(null);
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const [isConsoleOpen, setIsConsoleOpen] = useState<boolean>(false);
  const [isChartsOpen, setIsChartsOpen] = useState<boolean>(false);

  const [visualLayers, setVisualLayers] = useState<VisualLayers>({
    satellites: true,
    subseaCables: true,
    megacities: true,
    energyGrid: true,
    dataCenters: true,
    dataParticles: true,
    atmosphereGlow: true,
  });

  const [tickSeed, setTickSeed] = useState<number>(0);

  // Active events are those with remaining duration
  const activeEvents = events.filter(e => e.active);

  // Derive current metrics
  const metrics = calculateSimulationFrame(year, scenario, activeEvents, tickSeed);

  // Playback timer loop
  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (now: number) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      setTickSeed(prev => prev + 1);

      // Decrement duration of active events
      setEvents(prevEvents => {
        let changed = false;
        const updated = prevEvents.map(ev => {
          if (!ev.active) return ev;
          const remaining = ev.durationSeconds - dt;
          if (remaining <= 0) {
            changed = true;
            return { ...ev, durationSeconds: 0, active: false };
          }
          return { ...ev, durationSeconds: remaining };
        });
        return changed ? updated : prevEvents;
      });

      if (isPlaying) {
        setYearState(prev => {
          // 1 year passes every 15 seconds at 1x speed
          const yearDelta = (dt / 15) * playbackSpeed;
          const next = prev + yearDelta;
          if (next >= 2050) {
            setIsPlaying(false);
            return 2050;
          }
          return next;
        });
      }

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, playbackSpeed]);

  // Sync audio toggle with soundEffects service
  const toggleAudio = useCallback(() => {
    setAudioEnabled(prev => {
      const next = !prev;
      soundEffects.setEnabled(next);
      if (next) soundEffects.playClick();
      return next;
    });
  }, []);

  const setYear = useCallback((y: number) => {
    const clamped = Math.max(2030, Math.min(2050, y));
    setYearState(clamped);
    const closest = [2030, 2035, 2040, 2050].reduce((prev, curr) => 
      Math.abs(curr - clamped) < Math.abs(prev - clamped) ? curr : prev
    ) as Year;
    setTargetYear(closest);
    soundEffects.playClick();
  }, []);

  const jumpToMilestone = useCallback((y: Year) => {
    setTargetYear(y);
    setYearState(y);
    soundEffects.playYearTransition();
  }, []);

  const togglePlay = useCallback(() => {
    setIsPlaying(prev => {
      soundEffects.playClick();
      return !prev;
    });
  }, []);

  const setScenarioById = useCallback((id: string) => {
    const found = SCENARIOS.find(s => s.id === id);
    if (found) {
      setScenario(found);
      soundEffects.playClick();
    }
  }, []);

  const triggerEvent = useCallback((presetIdx?: number) => {
    let newEv: DynamicEvent;
    if (presetIdx !== undefined && PRESET_EVENTS[presetIdx]) {
      const tmpl = PRESET_EVENTS[presetIdx];
      newEv = {
        ...tmpl,
        id: `ev-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        timestamp: Date.now(),
        yearSnapshot: Math.round(year),
        active: true
      };
    } else {
      newEv = createRandomEvent(Math.round(year));
    }

    setEvents(prev => [newEv, ...prev.slice(0, 19)]);
    soundEffects.playAlert(newEv.severity);
  }, [year]);

  const dismissEvent = useCallback((id: string) => {
    setEvents(prev => prev.map(e => e.id === id ? { ...e, active: false, durationSeconds: 0 } : e));
    soundEffects.playClick();
  }, []);

  const toggleLayer = useCallback((layerKey: keyof VisualLayers) => {
    setVisualLayers(prev => {
      soundEffects.playClick();
      return { ...prev, [layerKey]: !prev[layerKey] };
    });
  }, []);

  const toggleConsole = useCallback(() => {
    setIsConsoleOpen(prev => !prev);
    soundEffects.playClick();
  }, []);

  const toggleCharts = useCallback(() => {
    setIsChartsOpen(prev => !prev);
    soundEffects.playClick();
  }, []);

  return (
    <SimulationContext.Provider
      value={{
        year,
        targetYear,
        isPlaying,
        playbackSpeed,
        scenario,
        metrics,
        events,
        activeEvents,
        selectedSubsystem,
        selectedNode,
        visualLayers,
        audioEnabled,
        isConsoleOpen,
        isChartsOpen,
        setYear,
        jumpToMilestone,
        togglePlay,
        setPlaybackSpeed,
        setScenarioById,
        triggerEvent,
        dismissEvent,
        setSelectedSubsystem,
        setSelectedNode,
        toggleLayer,
        toggleAudio,
        toggleConsole,
        toggleCharts
      }}
    >
      {children}
    </SimulationContext.Provider>
  );
};

export const useSimulation = () => {
  const ctx = useContext(SimulationContext);
  if (!ctx) {
    throw new Error('useSimulation must be used within a SimulationProvider');
  }
  return ctx;
};
