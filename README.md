# INTERNET 2035 // Global Infrastructure Simulation & Command System

[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb?style=flat-square&logo=react)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-black?style=flat-square&logo=three.js)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646cff?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Playable%20Simulation-00f0ff?style=flat-square&logo=google-chrome)](https://alvarodesigns34.github.io/aplicaci-n/)

🎮 **Live Playable Simulation:** [https://alvarodesigns34.github.io/aplicaci-n/](https://alvarodesigns34.github.io/aplicaci-n/)

**Internet 2035** is a planetary-scale infrastructure simulation platform and mission-control cyber-operating system modeling the technological convergence of 2030 through 2050.

Designed with an aerospace mission-control and cyber-command aesthetic, the application simulates the interdependent dynamics between **Frontier AI Compute**, **Commercial Fusion & Energy Grids**, **Hyperscale & Subsea Data Centers**, **VLEO Orbital Satellite Constellations**, **Ultra-Low Latency Quantum Networks**, and **Embodied Robotics Fleets**.

---

## 🛰️ Key Capabilities

### 1. 3D WebGL Planetary Visualization
- **Cybernetic Earth:** Custom GPU procedural earth terrain shader, bathymetry, and equirectangular geographic coordinate projection.
- **Atmospheric Scattering:** Back-side Rayleigh/Mie atmospheric scattering shader with dynamic glow.
- **Orbital Constellations:** Real-time Keplerian orbital propagation of 70+ LEO/VLEO satellite planes with optical laser cross-links (ISLs).
- **Subsea Quantum Trunks:** Great-circle 3D bezier curves across ocean corridors with streaming photon data packet particles.
- **Megacity Light Spires & Fusion Nodes:** Holographic vertical energy spires whose heights and pulsations dynamically respond to real-time grid loads.
- **Interactive Raycasting:** Click any node (e.g. *Neo-Tokyo Metroplex*, *Bay Area AI Synthesis Hub*, *North Sea Subsea Cryo-Cluster*, *Atacama Solar-Fusion Array*) to center the camera and inspect live telemetry.

### 2. Coupled Mathematical Simulation Engine
Simulates realistic continuous interdependencies across all core technological sectors:
- **AI Compute $\rightarrow$ Energy:** ExaFLOP expansion dictates hyperscale power draw, PUE cooling stress, and continental transmission strain.
- **Energy Balance $\rightarrow$ Grid Health:** Discrepancies between global generation and consumption drain battery buffers and spike transmission line stress.
- **Grid Stress $\rightarrow$ Latency Degradation:** Severe electrical stress induces thermal throttling and routing degradation, elevating global round-trip latency.
- **Orbital Mesh $\rightarrow$ Bandwidth:** Direct-to-device VLEO laser bandwidth offsets terrestrial cable damage and lowers global latency.
- **Continuous Temporal Interpolation:** Mathematically consistent state transitions across fractional timeline intervals between 2030, 2035, 2040, and 2050.

### 3. Simulation Scenarios (7 Trajectories)
1. **Baseline 2035:** The projected consensus convergence with gradual commercial fusion adoption and balanced LEO orbital mesh deployment.
2. **AI Acceleration:** Exponential frontier model surge, 3.2x compute demand, severe cooling bottlenecks, and localized grid strain.
3. **Energy Crisis:** Delayed fusion scaling and mineral bottlenecks for grid batteries triggering rolling power brownouts and network throttling.
4. **Global Connectivity:** Ubiquitous hollow-core subsea glass and optical satellite lasers eliminating the global digital divide.
5. **Autonomous Cities:** Megacities surpass 90% automation with 300M+ humanoid robots and localized edge computing microgrids.
6. **Infrastructure Collapse:** Severe Carrington-class solar geomagnetic storm disabling 40% of orbital satellites and cascading cable trunklines.
7. **Optimistic Future:** Breakthrough clean fusion abundance and room-temperature superconductors driving marginal electricity costs toward zero.

### 4. Dynamic Event Simulator & Incident Mitigation
- Autonomous anomaly triggers including *Frontier AI Compute Spikes*, *Geomagnetic Storms*, *Subsea Cable Severances*, and *Superconductor Breakthroughs*.
- Real-time countdowns, severity tiers (`INFO`, `ADVISORY`, `WARNING`, `CRITICAL`), and automated mitigation recovery protocols.

### 5. Cyber-Command CLI Terminal
- Built-in terminal overlay (`~` or `Console` button) supporting commands:
  - `status`: High-level system telemetry report.
  - `year <2030-2050>`: Set exact simulation temporal phase.
  - `scenario <id>`: Activate alternate scenario branch.
  - `event <inject|list|id>`: Inject or manage anomalies.
  - `mitigate`: Deploy emergency recovery protocols across all active incidents.
  - `speed <1|2|5|10>`: Accelerate simulation clock.
  - `play` / `pause`: Toggle real-time simulation.

### 6. Sound Design & Audio Telemetry
- Procedural Web Audio API sound synthesizer: zero external audio assets or network requests.
- Synthesizes telemetry ticks, transition chimes, and multi-tone warning buzzers with user mute control.

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
| :--- | :--- |
| <kbd>Space</kbd> | Toggle Simulation Play / Pause |
| <kbd>~</kbd> or <kbd>`</kbd> | Toggle Cyber Command Console |
| <kbd>1</kbd> | Jump to Year 2030 |
| <kbd>2</kbd> | Jump to Year 2035 (Target Baseline) |
| <kbd>3</kbd> | Jump to Year 2040 |
| <kbd>4</kbd> | Jump to Year 2050 |
| <kbd>Esc</kbd> | Close Active Modals / Drawers / Deselect Node |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (tested on Node v24)
- npm 9+

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Generates optimized static bundles in the `dist/` directory.

### Run Automated Tests
```bash
npm test
```
Executes the Vitest suite covering simulation mathematics, scenario compliance, and 3D geospatial node validity.

---

## 📁 Repository Structure

```
├── src/
│   ├── components/
│   │   ├── Globe3D/
│   │   │   ├── GlobeView.tsx        # 3D Three.js WebGL canvas & interactions
│   │   │   ├── globeShaders.ts      # Atmosphere & procedural Earth texture shaders
│   │   │   ├── worldData.ts         # Coordinates for megacities, DCs & cables
│   │   │   └── worldData.test.ts    # Geospatial data verification test suite
│   │   └── HUD/
│   │       ├── Header.tsx           # Global status bar, quick glance telemetry
│   │       ├── MetricsOverview.tsx  # Collapsible sidebar with Matrix, Scenarios, Incidents
│   │       ├── SubsystemCard.tsx    # Subsystem card with status & health indicator
│   │       ├── TelemetryDrawer.tsx  # In-depth subsystem diagnostics & math formulas
│   │       ├── TimelineControl.tsx  # Scrubbable timeline slider & playback engine
│   │       ├── ScenarioSelector.tsx # 7-way scenario branch switcher
│   │       ├── EventsFeed.tsx       # Dynamic incident stream & mitigation
│   │       ├── InspectModal.tsx     # Physical node inspector modal
│   │       ├── ChartsView.tsx       # Multi-metric 2030-2050 trajectory canvas
│   │       └── CommandConsole.tsx   # Aerospace CLI terminal interface
│   ├── context/
│   │   └── SimulationContext.tsx    # Reactive state & animation engine
│   ├── services/
│   │   └── soundEffects.ts          # Procedural Web Audio API sound generator
│   ├── simulation/
│   │   ├── constants.ts             # 2030, 2035, 2040, 2050 baseline matrix
│   │   ├── engine.ts                # Continuous interpolation & interdependencies
│   │   ├── engine.test.ts           # Vitest suite for engine equations
│   │   ├── scenarios.ts             # Scenario definitions & multipliers
│   │   ├── scenarios.test.ts        # Vitest suite for scenario specs
│   │   └── events.ts                # Anomaly catalogue & impact equations
│   ├── types/
│   │   └── simulation.ts            # TypeScript interfaces & types
│   ├── App.tsx                      # Primary layout orchestrator
│   ├── index.css                    # Tailwind styles, scanlines & cyber scrollbars
│   └── main.tsx                     # React root mount
├── index.html                       # HTML5 entry with futuristic typography
├── package.json                     # Dependencies & scripts
├── tailwind.config.js               # Cyber color palette & typography
├── tsconfig.json                    # Strict TypeScript configuration
└── vite.config.ts                   # Vite bundler configuration
```

---

## 📜 License
MIT License.