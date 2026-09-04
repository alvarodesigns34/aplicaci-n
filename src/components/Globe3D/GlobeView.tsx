import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useSimulation } from '../../context/SimulationContext';
import { GLOBAL_NODES, SUBSEA_CABLES, generateSatellites } from './worldData';
import { AtmosphereShader, createCyberEarthTexture, latLonToVector3 } from './globeShaders';
import { GlobeNodeLocation } from '../../types/simulation';

const GLOBE_RADIUS = 100;

export const GlobeView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { 
    visualLayers, 
    selectedNode, 
    setSelectedNode, 
    setSelectedSubsystem 
  } = useSimulation();

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const satellitesGroupRef = useRef<THREE.Group | null>(null);
  const laserBeamsGroupRef = useRef<THREE.Group | null>(null);
  const cablesGroupRef = useRef<THREE.Group | null>(null);
  const particlesGroupRef = useRef<THREE.Points | null>(null);
  const nodesGroupRef = useRef<THREE.Group | null>(null);

  // Dragging / Rotation interaction refs
  const isDraggingRef = useRef<boolean>(false);
  const previousMousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const cameraDistance = useRef<number>(260);
  const targetRotation = useRef<{ x: number; y: number }>({ x: 0.2, y: 0.4 });
  const currentRotation = useRef<{ x: number; y: number }>({ x: 0.2, y: 0.4 });

  useEffect(() => {
    if (!containerRef.current) return;

    // 1. Setup Scene, Camera, Renderer
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, width / height, 1, 3000);
    camera.position.set(0, 50, cameraDistance.current);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    containerRef.current.appendChild(renderer.domElement);

    // 2. Space Starfield Background
    const starsGeo = new THREE.BufferGeometry();
    const starCount = 2500;
    const starCoords = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i += 3) {
      const r = 800 + Math.random() * 800;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      starCoords[i] = r * Math.sin(phi) * Math.cos(theta);
      starCoords[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      starCoords[i + 2] = r * Math.cos(phi);
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(starCoords, 3));
    const starsMat = new THREE.PointsMaterial({
      color: 0x64748b,
      size: 1.6,
      transparent: true,
      opacity: 0.75,
      sizeAttenuation: true
    });
    const starfield = new THREE.Points(starsGeo, starsMat);
    scene.add(starfield);

    // 3. Main Globe Group
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);
    globeGroupRef.current = globeGroup;

    // Earth Sphere
    const earthTexture = createCyberEarthTexture();
    const earthGeo = new THREE.SphereGeometry(GLOBE_RADIUS, 64, 64);
    const earthMat = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.65,
      metalness: 0.35,
      emissive: new THREE.Color(0x020d18),
      emissiveIntensity: 0.6
    });
    const earthMesh = new THREE.Mesh(earthGeo, earthMat);
    globeGroup.add(earthMesh);

    // Atmosphere Glow Layer
    const atmosphereGeo = new THREE.SphereGeometry(GLOBE_RADIUS * 1.14, 48, 48);
    const atmosphereMat = new THREE.ShaderMaterial({
      vertexShader: AtmosphereShader.vertexShader,
      fragmentShader: AtmosphereShader.fragmentShader,
      uniforms: {
        glowColor: { value: new THREE.Color(0x00f0ff) },
        coefficient: { value: 0.62 },
        power: { value: 3.5 }
      },
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeo, atmosphereMat);
    globeGroup.add(atmosphereMesh);

    // 4. Lighting
    const ambientLight = new THREE.AmbientLight(0x0a1e36, 1.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xdcf4ff, 2.5);
    sunLight.position.set(250, 150, 200);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x00f0ff, 1.2);
    rimLight.position.set(-200, -100, -150);
    scene.add(rimLight);

    // 5. Global Nodes (Cities, Data Centers, Fusion Plants)
    const nodesGroup = new THREE.Group();
    globeGroup.add(nodesGroup);
    nodesGroupRef.current = nodesGroup;

    GLOBAL_NODES.forEach((node) => {
      const pos = latLonToVector3(node.lat, node.lon, GLOBE_RADIUS);
      const normal = pos.clone().normalize();

      const nodeObj = new THREE.Group();
      nodeObj.position.copy(pos);
      nodeObj.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), normal);
      nodeObj.userData = { nodeData: node };

      // Base footprint ring
      const ringGeo = new THREE.RingGeometry(1.2, 2.2, 24);
      let ringColor = 0x00f0ff;
      if (node.type === 'energy_fusion') ringColor = 0xffb000;
      else if (node.type === 'datacenter') ringColor = 0x00ff9d;

      const ringMat = new THREE.MeshBasicMaterial({
        color: ringColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2;
      nodeObj.add(ring);

      // Holographic spire column
      const spireHeight = 6 + (node.metrics.loadPct / 100) * 14;
      const spireGeo = new THREE.CylinderGeometry(0.3, 0.9, spireHeight, 12);
      const spireMat = new THREE.MeshBasicMaterial({
        color: ringColor,
        transparent: true,
        opacity: 0.65
      });
      const spire = new THREE.Mesh(spireGeo, spireMat);
      spire.position.y = spireHeight / 2;
      nodeObj.add(spire);

      // Crown beacon orb
      const beaconGeo = new THREE.SphereGeometry(0.8, 12, 12);
      const beaconMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.position.y = spireHeight;
      nodeObj.add(beacon);

      nodesGroup.add(nodeObj);
    });

    // 6. Subsea Cables & Fiber Lines
    const cablesGroup = new THREE.Group();
    globeGroup.add(cablesGroup);
    cablesGroupRef.current = cablesGroup;

    SUBSEA_CABLES.forEach(cable => {
      const curvePoints: THREE.Vector3[] = [];
      cable.points.forEach(([lat, lon]) => {
        // Slightly elevate above globe
        curvePoints.push(latLonToVector3(lat, lon, GLOBE_RADIUS + 0.6));
      });

      const curve = new THREE.CatmullRomCurve3(curvePoints);
      const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.4, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: cable.status === 'DAMAGED' ? 0xff3366 : 0x00f0ff,
        transparent: true,
        opacity: 0.75
      });
      const cableMesh = new THREE.Mesh(tubeGeo, tubeMat);
      cablesGroup.add(cableMesh);
    });

    // 7. Subsea Photon Data Packets (Particles)
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleProgress = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particleProgress[i] = Math.random();
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0x00ff9d,
      size: 3.2,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(particles);
    particlesGroupRef.current = particles;

    // 8. Satellites Constellation
    const satellitesGroup = new THREE.Group();
    globeGroup.add(satellitesGroup);
    satellitesGroupRef.current = satellitesGroup;

    const satsData = generateSatellites(72);
    const satMeshGroup = new THREE.Group();

    satsData.forEach((sat, idx) => {
      const satAltitude = GLOBE_RADIUS + 18 + (idx % 4) * 3;
      const satMesh = new THREE.Group();

      // Satellite bus
      const bodyGeo = new THREE.BoxGeometry(1.2, 0.6, 0.8);
      const bodyMat = new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.9, roughness: 0.2 });
      const body = new THREE.Mesh(bodyGeo, bodyMat);
      satMesh.add(body);

      // Solar panel wings
      const wingGeo = new THREE.BoxGeometry(3.6, 0.08, 1.0);
      const wingMat = new THREE.MeshBasicMaterial({ color: 0x0284c7 });
      const wings = new THREE.Mesh(wingGeo, wingMat);
      satMesh.add(wings);

      satMesh.userData = {
        altitude: satAltitude,
        speed: 0.003 + (idx % 5) * 0.0006,
        orbitAngle: (idx / satsData.length) * Math.PI * 2,
        inclination: (sat.inclinationDeg * Math.PI) / 180,
        planeOffset: sat.plane * (Math.PI / 4)
      };

      satMeshGroup.add(satMesh);
    });
    satellitesGroup.add(satMeshGroup);

    // Laser cross-link beam lines
    const laserBeamsGroup = new THREE.Group();
    globeGroup.add(laserBeamsGroup);
    laserBeamsGroupRef.current = laserBeamsGroup;

    const laserMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.35,
      blending: THREE.AdditiveBlending
    });

    // 9. Resize Handling
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // 10. Pointer Interactions (Mouse Orbit + Zoom)
    const dom = renderer.domElement;

    const onMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDraggingRef.current) return;
      const deltaX = e.clientX - previousMousePosition.current.x;
      const deltaY = e.clientY - previousMousePosition.current.y;

      targetRotation.current.y += deltaX * 0.006;
      targetRotation.current.x = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, targetRotation.current.x + deltaY * 0.006));

      previousMousePosition.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      cameraDistance.current = Math.max(140, Math.min(500, cameraDistance.current + e.deltaY * 0.25));
    };

    // Raycast click detection on nodes
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onClick = (e: MouseEvent) => {
      const rect = dom.getBoundingClientRect();
      mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(nodesGroup.children, true);

      if (intersects.length > 0) {
        let curr: THREE.Object3D | null = intersects[0].object;
        while (curr && !curr.userData?.nodeData && curr.parent) {
          curr = curr.parent;
        }
        if (curr && curr.userData?.nodeData) {
          const nodeData = curr.userData.nodeData as GlobeNodeLocation;
          setSelectedNode(nodeData);
          if (nodeData.type === 'datacenter') setSelectedSubsystem('cloud');
          else if (nodeData.type === 'energy_fusion') setSelectedSubsystem('energy');
          else setSelectedSubsystem('cities');
        }
      }
    };

    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('wheel', onWheel, { passive: false });
    dom.addEventListener('click', onClick);

    // 11. Animation Loop
    let reqId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth camera orbit damping
      currentRotation.current.x += (targetRotation.current.x - currentRotation.current.x) * 0.08;
      currentRotation.current.y += (targetRotation.current.y - currentRotation.current.y) * 0.08;

      if (globeGroup) {
        // Auto slow continuous spin when not interacting
        if (!isDraggingRef.current) {
          targetRotation.current.y += 0.0008;
        }
        globeGroup.rotation.x = currentRotation.current.x;
        globeGroup.rotation.y = currentRotation.current.y;
      }

      // Smooth camera zoom
      if (camera) {
        camera.position.z += (cameraDistance.current - camera.position.z) * 0.1;
        camera.lookAt(0, 0, 0);
      }

      // Animate Satellites in Keplerian Orbits
      if (satMeshGroup) {
        const activeSatsPositions: THREE.Vector3[] = [];

        satMeshGroup.children.forEach((child) => {
          const u = child.userData;
          u.orbitAngle += u.speed;

          const r = u.altitude;
          const inc = u.inclination;
          const plane = u.planeOffset;

          // Compute orbital position
          const ox = r * Math.cos(u.orbitAngle);
          const oy = r * Math.sin(u.orbitAngle) * Math.sin(inc);
          const oz = r * Math.sin(u.orbitAngle) * Math.cos(inc);

          // Rotate around Y by plane offset
          const px = ox * Math.cos(plane) - oz * Math.sin(plane);
          const pz = ox * Math.sin(plane) + oz * Math.cos(plane);

          child.position.set(px, oy, pz);
          child.lookAt(0, 0, 0);

          if (activeSatsPositions.length < 24) {
            activeSatsPositions.push(new THREE.Vector3(px, oy, pz));
          }
        });

        // Dynamic laser cross-links between nearest neighboring satellites
        laserBeamsGroup.clear();
        for (let i = 0; i < activeSatsPositions.length - 1; i += 2) {
          const p1 = activeSatsPositions[i];
          const p2 = activeSatsPositions[i + 1];
          if (p1.distanceTo(p2) < 90) {
            const lineGeo = new THREE.BufferGeometry().setFromPoints([p1, p2]);
            const laserLine = new THREE.Line(lineGeo, laserMat);
            laserBeamsGroup.add(laserLine);
          }
        }
      }

      // Animate Photon Data Particles along Subsea Cables
      if (particlesGroupRef.current) {
        const positions = particlesGroupRef.current.geometry.attributes.position.array as Float32Array;
        const cable = SUBSEA_CABLES[0]; // Primary trunk
        const points = cable.points.map(([lat, lon]) => latLonToVector3(lat, lon, GLOBE_RADIUS + 1.2));
        const curve = new THREE.CatmullRomCurve3(points);

        for (let i = 0; i < particleCount; i++) {
          particleProgress[i] = (particleProgress[i] + 0.003) % 1;
          const pt = curve.getPointAt(particleProgress[i]);
          positions[i * 3] = pt.x;
          positions[i * 3 + 1] = pt.y;
          positions[i * 3 + 2] = pt.z;
        }
        particlesGroupRef.current.geometry.attributes.position.needsUpdate = true;
      }

      // Pulsate Nodes crowns
      if (nodesGroupRef.current) {
        nodesGroupRef.current.children.forEach((nObj, i) => {
          const beacon = nObj.children[2];
          if (beacon) {
            const scale = 1 + Math.sin(elapsedTime * 4 + i) * 0.25;
            beacon.scale.set(scale, scale, scale);
          }
        });
      }

      renderer.render(scene, camera);
      reqId = requestAnimationFrame(animate);
    };

    reqId = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('wheel', onWheel);
      dom.removeEventListener('click', onClick);

      if (renderer.domElement.parentElement) {
        renderer.domElement.parentElement.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  // Update Visual Layer Visibilities reactively
  useEffect(() => {
    if (satellitesGroupRef.current) satellitesGroupRef.current.visible = visualLayers.satellites;
    if (laserBeamsGroupRef.current) laserBeamsGroupRef.current.visible = visualLayers.satellites;
    if (cablesGroupRef.current) cablesGroupRef.current.visible = visualLayers.subseaCables;
    if (nodesGroupRef.current) nodesGroupRef.current.visible = visualLayers.megacities || visualLayers.dataCenters;
    if (particlesGroupRef.current) particlesGroupRef.current.visible = visualLayers.dataParticles;
  }, [visualLayers]);

  // Handle auto-focus camera when a node is selected
  useEffect(() => {
    if (!selectedNode || !cameraRef.current) return;
    const targetVec = latLonToVector3(selectedNode.lat, selectedNode.lon, 1);
    // Orient globe so the selected coordinate faces camera
    const targetY = -Math.atan2(targetVec.x, targetVec.z);
    const targetX = Math.asin(targetVec.y);

    targetRotation.current.y = targetY;
    targetRotation.current.x = targetX;
    cameraDistance.current = 190; // Zoom in
  }, [selectedNode]);

  return (
    <div className="relative w-full h-full overflow-hidden select-none">
      <div ref={containerRef} className="w-full h-full cursor-grab active:cursor-grabbing" />

      {/* 3D Viewport Controls HUD overlay */}
      <div className="absolute top-20 right-6 flex flex-col gap-2 z-20 pointer-events-auto">
        <button
          onClick={() => {
            cameraDistance.current = Math.max(140, cameraDistance.current - 40);
          }}
          className="w-9 h-9 rounded bg-[#0b1322]/80 border border-cyber-border hover:border-cyber-cyan text-cyber-cyan flex items-center justify-center font-mono font-bold text-lg backdrop-blur shadow-lg transition-all hover:scale-105"
          title="Zoom In"
        >
          +
        </button>
        <button
          onClick={() => {
            cameraDistance.current = Math.min(480, cameraDistance.current + 40);
          }}
          className="w-9 h-9 rounded bg-[#0b1322]/80 border border-cyber-border hover:border-cyber-cyan text-cyber-cyan flex items-center justify-center font-mono font-bold text-lg backdrop-blur shadow-lg transition-all hover:scale-105"
          title="Zoom Out"
        >
          −
        </button>
        <button
          onClick={() => {
            targetRotation.current = { x: 0.2, y: 0.4 };
            cameraDistance.current = 260;
          }}
          className="w-9 h-9 rounded bg-[#0b1322]/80 border border-cyber-border hover:border-cyber-cyan text-xs font-mono text-slate-300 flex items-center justify-center backdrop-blur shadow-lg transition-all hover:scale-105"
          title="Reset View"
        >
          RES
        </button>
      </div>

      {/* Layer Visibility Toggles */}
      <div className="absolute bottom-28 left-6 flex flex-wrap gap-2 z-20 pointer-events-auto max-w-xl">
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase self-center mr-1">LAYERS:</span>
        {(Object.keys(visualLayers) as (keyof typeof visualLayers)[]).map((layer) => (
          <button
            key={layer}
            onClick={() => useSimulation().toggleLayer(layer)}
            className={`px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border transition-all ${
              visualLayers[layer]
                ? 'bg-cyan-950/60 border-cyber-cyan text-cyber-cyan shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                : 'bg-slate-900/40 border-slate-700/50 text-slate-400 hover:border-slate-500'
            }`}
          >
            {layer.replace(/([A-Z])/g, ' $1')}
          </button>
        ))}
      </div>
    </div>
  );
};
