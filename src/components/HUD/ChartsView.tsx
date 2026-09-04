import React, { useRef, useEffect } from 'react';
import { useSimulation } from '../../context/SimulationContext';
import { X, TrendingUp } from 'lucide-react';
import { BASELINE_YEARS } from '../../simulation/constants';
import { Year } from '../../types/simulation';

export const ChartsView: React.FC = () => {
  const { isChartsOpen, toggleCharts, year, scenario, metrics } = useSimulation();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!isChartsOpen || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const width = canvas.parentElement?.clientWidth || 700;
    const height = 300;

    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    ctx.scale(dpr, dpr);

    // Clear
    ctx.fillStyle = '#070c18';
    ctx.fillRect(0, 0, width, height);

    // Padding
    const padX = 50;
    const padY = 30;
    const plotW = width - padX * 2;
    const plotH = height - padY * 2;

    // Grid lines
    ctx.strokeStyle = 'rgba(255, 255, 255, 0.07)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
      const y = padY + (plotH / 4) * i;
      ctx.beginPath();
      ctx.moveTo(padX, y);
      ctx.lineTo(padX + plotW, y);
      ctx.stroke();
    }

    const years: Year[] = [2030, 2035, 2040, 2050];
    years.forEach((yr, i) => {
      const x = padX + (plotW / (years.length - 1)) * i;
      ctx.beginPath();
      ctx.moveTo(x, padY);
      ctx.lineTo(x, padY + plotH);
      ctx.stroke();

      // Year labels
      ctx.fillStyle = '#64748b';
      ctx.font = '10px "JetBrains Mono", monospace';
      ctx.textAlign = 'center';
      ctx.fillText(`${yr}`, x, height - 12);
    });

    // Helper: Map year & normalized value (0-1) to (x, y)
    const mapPoint = (yr: number, valNorm: number) => {
      const t = (yr - 2030) / (2050 - 2030);
      const x = padX + plotW * t;
      const y = padY + plotH * (1 - Math.max(0, Math.min(1, valNorm)));
      return [x, y];
    };

    // Series Definitions (normalized)
    const series = [
      {
        name: 'AI Compute',
        color: '#c084fc',
        getVal: (y: Year) => Math.log10(BASELINE_YEARS[y].aiComputeExaflops * scenario.multipliers.aiCompute) / 3.7
      },
      {
        name: 'Clean Energy %',
        color: '#fbbf24',
        getVal: (y: Year) => (BASELINE_YEARS[y].renewableEnergyPercent * scenario.multipliers.renewablePercent) / 100
      },
      {
        name: 'Active Sats',
        color: '#00f0ff',
        getVal: (y: Year) => (BASELINE_YEARS[y].activeSatellites * scenario.multipliers.satelliteCount) / 300000
      },
      {
        name: 'Robotics Fleet',
        color: '#f43f5e',
        getVal: (y: Year) => (BASELINE_YEARS[y].robotPopulationMillions * scenario.multipliers.roboticsCount) / 1800
      }
    ];

    // Draw Series Curves
    series.forEach(s => {
      ctx.strokeStyle = s.color;
      ctx.lineWidth = 2.2;
      ctx.beginPath();

      years.forEach((yr, idx) => {
        const valNorm = s.getVal(yr);
        const [x, y] = mapPoint(yr, valNorm);
        if (idx === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      });
      ctx.stroke();

      // Dot points
      years.forEach(yr => {
        const valNorm = s.getVal(yr);
        const [x, y] = mapPoint(yr, valNorm);
        ctx.fillStyle = s.color;
        ctx.beginPath();
        ctx.arc(x, y, 3.5, 0, Math.PI * 2);
        ctx.fill();
      });
    });

    // Draw Current Year Scrub Line
    const curT = (year - 2030) / (2050 - 2030);
    const curX = padX + plotW * curT;
    ctx.strokeStyle = '#00f0ff';
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.beginPath();
    ctx.moveTo(curX, padY);
    ctx.lineTo(curX, padY + plotH);
    ctx.stroke();
    ctx.setLineDash([]);

    // Indicator head
    ctx.fillStyle = '#00f0ff';
    ctx.beginPath();
    ctx.arc(curX, padY - 4, 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.fillStyle = '#00f0ff';
    ctx.font = 'bold 9px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText(`${year.toFixed(1)}`, curX, padY - 12);
  }, [isChartsOpen, year, scenario]);

  if (!isChartsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md">
      <div className="w-full max-w-3xl p-6 rounded-xl border border-cyber-cyan/40 bg-[#060a14]/95 shadow-[0_0_50px_rgba(0,240,255,0.25)] flex flex-col gap-4 font-mono">
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-cyber-cyan" />
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              MULTI-PARAMETRIC PROJECTION DYNAMICS (2030 — 2050)
            </h2>
          </div>
          <button
            onClick={toggleCharts}
            className="p-1 rounded text-slate-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#c084fc]" />
            <span className="text-slate-300">AI Compute (log scale)</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#fbbf24]" />
            <span className="text-slate-300">Clean Energy %</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#00f0ff]" />
            <span className="text-slate-300">Satellites Constellation</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#f43f5e]" />
            <span className="text-slate-300">Robotics Fleet</span>
          </div>
        </div>

        {/* Graph Canvas */}
        <div className="w-full rounded-lg overflow-hidden border border-slate-800 bg-[#070c18] p-2">
          <canvas ref={canvasRef} className="w-full block" />
        </div>

        {/* Summary Footer */}
        <div className="flex items-center justify-between text-xs text-slate-400 pt-2 border-t border-slate-800">
          <div>
            ACTIVE SCENARIO: <span className="text-cyber-cyan font-bold">{scenario.name}</span>
          </div>
          <div>
            SYSTEM STATUS: <span className="text-emerald-400 font-bold">{metrics.healthStatus} ({metrics.globalSystemHealth.toFixed(1)}%)</span>
          </div>
        </div>
      </div>
    </div>
  );
};
