import React, { useState, useRef, useEffect } from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { Terminal, X, CornerDownLeft } from 'lucide-react';
import { SCENARIOS } from '../../simulation/scenarios';
import { PRESET_EVENTS } from '../../simulation/events';
import { soundEffects } from '../../services/soundEffects';

interface TerminalLine {
  id: string;
  type: 'input' | 'output' | 'error' | 'success';
  text: string;
}

export const CommandConsole: React.FC = () => {
  const { 
    isConsoleOpen, 
    toggleConsole, 
    metrics, 
    year, 
    setYear, 
    scenario, 
    setScenarioById, 
    triggerEvent, 
    events, 
    dismissEvent, 
    setPlaybackSpeed,
    isPlaying,
    togglePlay
  } = useSimulation();

  const [inputVal, setInputVal] = useState<string>('');
  const [history, setHistory] = useState<TerminalLine[]>([
    { id: '1', type: 'output', text: 'INTERNET 2035 GLOBAL COMMAND CORE [V4.2.0-PROD]' },
    { id: '2', type: 'output', text: 'Type "help" to view the diagnostic command directory.' }
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [cmdIndex, setCmdIndex] = useState<number>(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isConsoleOpen) {
      inputRef.current?.focus();
    }
  }, [isConsoleOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd) return;

    soundEffects.playClick();
    setCmdHistory(prev => [cmd, ...prev]);
    setCmdIndex(-1);

    const newLines: TerminalLine[] = [
      { id: Math.random().toString(), type: 'input', text: `> ${cmd}` }
    ];

    const parts = cmd.split(' ');
    const root = parts[0].toLowerCase();
    const arg1 = parts[1];

    switch (root) {
      case 'help':
        newLines.push({
          id: Math.random().toString(),
          type: 'output',
          text: [
            'AVAILABLE MISSION COMMANDS:',
            '  status                 - Report full systemic telemetry synthesis',
            '  year <2030-2050>       - Shift simulation temporal phase (e.g. year 2042)',
            '  scenario <id>          - Activate branch: baseline, ai_acceleration, energy_crisis, global_connectivity, autonomous_cities, infrastructure_collapse, optimistic_future',
            '  event <random|list|id> - Inject dynamic anomaly or list presets',
            '  mitigate               - Enforce automated recovery protocols on all active alerts',
            '  play / pause           - Toggle real-time simulation progress',
            '  speed <1|2|5|10>       - Set simulation temporal clock acceleration',
            '  clear                  - Purge terminal display buffer',
            '  exit                   - Close command console'
          ].join('\n')
        });
        break;

      case 'status':
        newLines.push({
          id: Math.random().toString(),
          type: 'success',
          text: [
            `SYSTEM HEALTH:      ${metrics.globalSystemHealth.toFixed(1)}% [${metrics.healthStatus}]`,
            `TEMPORAL PHASE:     YEAR ${year.toFixed(2)}`,
            `ACTIVE SCENARIO:    ${scenario.name}`,
            `AI COMPUTE:         ${metrics.aiComputeExaflops.toFixed(1)} EFLOPs (${metrics.aiAdoptionRate.toFixed(1)}% adoption)`,
            `ENERGY GENERATION:  ${metrics.energyProductionTWh.toLocaleString()} TWh (${metrics.renewableEnergyPercent.toFixed(1)}% clean)`,
            `GRID STRESS:        ${metrics.gridStressPercent.toFixed(1)}%`,
            `ORBITAL SATELLITES: ${metrics.activeSatellites.toLocaleString()} (${metrics.satelliteCoveragePercent.toFixed(1)}% coverage)`,
            `NETWORK LATENCY:    ${metrics.networkLatencyMs.toFixed(2)} ms`,
            `ROBOTICS FLEET:     ${metrics.robotPopulationMillions.toFixed(1)} Million units`
          ].join('\n')
        });
        break;

      case 'year':
        if (!arg1 || isNaN(parseFloat(arg1))) {
          newLines.push({ id: Math.random().toString(), type: 'error', text: 'Usage: year <2030-2050>' });
        } else {
          const y = parseFloat(arg1);
          if (y < 2030 || y > 2050) {
            newLines.push({ id: Math.random().toString(), type: 'error', text: 'Year must be between 2030 and 2050.' });
          } else {
            setYear(y);
            newLines.push({ id: Math.random().toString(), type: 'success', text: `Temporal phase shifted to ${y.toFixed(1)}.` });
          }
        }
        break;

      case 'scenario':
        if (!arg1) {
          const list = SCENARIOS.map(s => s.id).join(', ');
          newLines.push({ id: Math.random().toString(), type: 'output', text: `Available scenarios: ${list}` });
        } else {
          const sc = SCENARIOS.find(s => s.id.toLowerCase() === arg1.toLowerCase());
          if (sc) {
            setScenarioById(sc.id);
            newLines.push({ id: Math.random().toString(), type: 'success', text: `Simulation switched to scenario: ${sc.name}` });
          } else {
            newLines.push({ id: Math.random().toString(), type: 'error', text: `Unknown scenario "${arg1}". Type "scenario" to list options.` });
          }
        }
        break;

      case 'event':
        if (arg1 === 'list') {
          const list = PRESET_EVENTS.map((p, i) => `[${i}] ${p.title} (${p.severity})`).join('\n');
          newLines.push({ id: Math.random().toString(), type: 'output', text: list });
        } else if (arg1 && !isNaN(parseInt(arg1))) {
          const idx = parseInt(arg1);
          if (PRESET_EVENTS[idx]) {
            triggerEvent(idx);
            newLines.push({ id: Math.random().toString(), type: 'success', text: `Injected event: ${PRESET_EVENTS[idx].title}` });
          } else {
            newLines.push({ id: Math.random().toString(), type: 'error', text: 'Invalid event index.' });
          }
        } else {
          triggerEvent();
          newLines.push({ id: Math.random().toString(), type: 'success', text: 'Random dynamic event injected into simulation.' });
        }
        break;

      case 'mitigate':
        events.forEach(ev => {
          if (ev.active) dismissEvent(ev.id);
        });
        newLines.push({ id: Math.random().toString(), type: 'success', text: 'Mitigation protocols deployed. All active events resolved.' });
        break;

      case 'play':
        if (!isPlaying) togglePlay();
        newLines.push({ id: Math.random().toString(), type: 'success', text: 'Simulation resumed.' });
        break;

      case 'pause':
        if (isPlaying) togglePlay();
        newLines.push({ id: Math.random().toString(), type: 'output', text: 'Simulation paused.' });
        break;

      case 'speed':
        const spd = parseInt(arg1);
        if ([1, 2, 5, 10].includes(spd)) {
          setPlaybackSpeed(spd);
          newLines.push({ id: Math.random().toString(), type: 'success', text: `Playback rate set to ${spd}x.` });
        } else {
          newLines.push({ id: Math.random().toString(), type: 'error', text: 'Valid speeds: 1, 2, 5, 10.' });
        }
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
        toggleConsole();
        return;

      default:
        newLines.push({
          id: Math.random().toString(),
          type: 'error',
          text: `Command not recognized: "${root}". Type "help" for a list of commands.`
        });
    }

    setHistory(prev => [...prev, ...newLines]);
    setInputVal('');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (cmdHistory.length > 0 && cmdIndex < cmdHistory.length - 1) {
        const nextIdx = cmdIndex + 1;
        setCmdIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (cmdIndex > 0) {
        const nextIdx = cmdIndex - 1;
        setCmdIndex(nextIdx);
        setInputVal(cmdHistory[nextIdx]);
      } else if (cmdIndex === 0) {
        setCmdIndex(-1);
        setInputVal('');
      }
    }
  };

  if (!isConsoleOpen) return null;

  return (
    <div className="fixed inset-x-4 top-16 z-50 max-w-4xl mx-auto rounded-lg border border-cyber-cyan/60 bg-[#040812]/95 backdrop-blur-2xl shadow-[0_0_50px_rgba(0,240,255,0.3)] font-mono text-xs overflow-hidden flex flex-col h-96">
      {/* Console Title Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-950/80 border-b border-cyber-border/40">
        <div className="flex items-center gap-2 text-cyber-cyan font-bold tracking-wider">
          <Terminal className="w-4 h-4" />
          <span>CYBER-COMMAND TELEMETRY CONSOLE // SHADOW-4</span>
        </div>
        <button
          onClick={toggleConsole}
          className="text-slate-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Terminal Log Area */}
      <div className="flex-1 p-4 overflow-y-auto space-y-1 text-slate-200">
        {history.map(item => (
          <div
            key={item.id}
            className={`whitespace-pre-wrap leading-relaxed ${
              item.type === 'input'
                ? 'text-cyan-400 font-semibold'
                : item.type === 'error'
                ? 'text-rose-400 font-semibold'
                : item.type === 'success'
                ? 'text-emerald-400'
                : 'text-slate-300'
            }`}
          >
            {item.text}
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      {/* Input Row */}
      <form onSubmit={handleCommand} className="flex items-center px-4 py-2.5 bg-black/60 border-t border-slate-800">
        <span className="text-cyber-cyan font-bold mr-2">ROOT@2035#</span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={e => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type command (e.g. status, scenario optimistic_future, event)..."
          className="flex-1 bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono"
        />
        <button type="submit" className="text-slate-500 hover:text-cyber-cyan transition-colors ml-2">
          <CornerDownLeft className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
