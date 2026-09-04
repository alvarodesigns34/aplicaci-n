/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#04070d',
          card: '#0a101d',
          border: 'rgba(56, 189, 248, 0.2)',
          borderGlow: 'rgba(0, 240, 255, 0.4)',
          cyan: '#00f0ff',
          emerald: '#00ff9d',
          amber: '#ffb000',
          crimson: '#ff3366',
          violet: '#a855f7',
          blue: '#38bdf8',
          textMuted: '#64748b',
          textDim: '#94a3b8',
          textBright: '#f8fafc'
        }
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(0, 240, 255, 0.35)',
        'glow-emerald': '0 0 25px -5px rgba(0, 255, 157, 0.35)',
        'glow-amber': '0 0 25px -5px rgba(255, 176, 0, 0.35)',
        'glow-crimson': '0 0 25px -5px rgba(255, 51, 102, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2.5s cubic-bezier(0, 0, 0.2, 1) infinite',
        'scanline': 'scanline 8s linear infinite',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(1000%)' },
        }
      }
    },
  },
  plugins: [],
}
