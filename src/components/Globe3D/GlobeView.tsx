import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { useSimulation } from '../../context/SimulationContext';
import { GLOBAL_NODES, SUBSEA_CABLES, generateSatellites } from './worldData';
import { AtmosphereShader, createCyberEarthTexture, latLonToVector3 } from './globeShaders';
import { GlobeNodeLocation } from '../../types/simulation';

const GLOBE_RADIUS = 100;
const MAX_LASER_PAIRS = 48;

export const GlobeView: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { 
    visualLayers, 
    toggleLayer,
    selectedNode, 
    setSelectedNode, 
    setSelectedSubsystem,
    metrics,
    year,
    scenario,
    activeEvents
  } = useSimulation();

  // Dynamic simulation telemetry refs for 60fps WebGL loop without scene tearing
  const metricsRef = useRef(metrics);
  metricsRef.current = metrics;
  const yearRef = useRef(year);
  yearRef.current = year;
  const activeEventsRef = useRef(activeEvents);
  activeEventsRef.current = activeEvents;
  const scenarioRef = useRef(scenario);
  scenarioRef.current = scenario;

  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const globeGroupRef = useRef<THREE.Group | null>(null);
  const satellitesGroupRef = useRef<THREE.Group | null>(null);
  const laserBeamsGroupRef = useRef<THREE.LineSegments | null>(null);
  const cablesGroupRef = useRef<THREE.Group | null>(null);
  const particlesGroupRef = useRef<THREE.Points | null>(null);
  const nodesGroupRef = useRef<THREE.Group | null>(null);
  const atmosphereMeshRef = useRef<THREE.Mesh | null>(null);

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

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true, 
      powerPreference: 'high-performance' 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
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
    atmosphereMeshRef.current = atmosphereMesh;

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

    // Precompute 3D spline curves once for subsea cables and photon flows
    const cableCurves: THREE.CatmullRomCurve3[] = [];

    SUBSEA_CABLES.forEach(cable => {
      const curvePoints: THREE.Vector3[] = [];
      cable.points.forEach(([lat, lon]) => {
        curvePoints.push(latLonToVector3(lat, lon, GLOBE_RADIUS + 0.6));
      });

      const curve = new THREE.CatmullRomCurve3(curvePoints);
      cableCurves.push(curve);

      const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.4, 8, false);
      const tubeMat = new THREE.MeshBasicMaterial({
        color: cable.status === 'DAMAGED' ? 0xff3366 : 0x00f0ff,
        transparent: true,
        opacity: 0.75
      });
      const cableMesh = new THREE.Mesh(tubeGeo, tubeMat);
      cableMesh.userData = { cableData: cable };
      cablesGroup.add(cableMesh);
    });

    // 7. Subsea Photon Data Packets (Particles)
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleProgress = new Float32Array(particleCount);
    const particleCableIndex = new Uint8Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      particleProgress[i] = Math.random();
      particleCableIndex[i] = i % cableCurves.length;
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

    // 8. Satellites Constellation (Keplerian orbits)
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
      const bodyMat = new THREE.MeshStandardMaterial({ 
        color: 0xe2e8f0, 
        metalness: 0.9, 
        roughness: 0.2 
      });
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
        planeOffset: sat.plane * (Math.PI / 4),
        index: idx
      };

      satMeshGroup.add(satMesh);
    });
    satellitesGroup.add(satMeshGroup);

    // High-performance preallocated LineSegments for optical laser cross-links
    // Zero memory leaks: updates vertices buffer without reallocating geometries
    const laserPositions = new Float32Array(MAX_LASER_PAIRS * 2 * 3);
    const laserGeo = new THREE.BufferGeometry();
    laserGeo.setAttribute('position', new THREE.BufferAttribute(laserPositions, 3));
    const laserMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });
    const laserSegments = new THREE.LineSegments(laserGeo, laserMat);
    globeGroup.add(laserSegments);
    laserBeamsGroupRef.current = laserSegments;

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

    // 10. Pointer & Touch Interactions
    const dom = renderer.domElement;

    // Mouse handlers
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

    const handleNodeRaycast = (clientX: number, clientY: number) => {
      const rect = dom.getBoundingClientRect();
      mouse.x = ((clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((clientY - rect.top) / rect.height) * 2 + 1;

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

    const onClick = (e: MouseEvent) => {
      handleNodeRaycast(e.clientX, e.clientY);
    };

    // Mobile / Touch handlers with pinch-to-zoom support
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartDist = 0;
    let isTouchMoved = false;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        previousMousePosition.current = { x: touchStartX, y: touchStartY };
        isDraggingRef.current = true;
        isTouchMoved = false;
      } else if (e.touches.length === 2) {
        isDraggingRef.current = false;
        touchStartDist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length === 1 && isDraggingRef.current) {
        const deltaX = e.touches[0].clientX - previousMousePosition.current.x;
        const deltaY = e.touches[0].clientY - previousMousePosition.current.y;
        if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
          isTouchMoved = true;
        }

        targetRotation.current.y += deltaX * 0.007;
        targetRotation.current.x = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, targetRotation.current.x + deltaY * 0.007));
        previousMousePosition.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      } else if (e.touches.length === 2) {
        isTouchMoved = true;
        const dist = Math.hypot(
          e.touches[0].clientX - e.touches[1].clientX,
          e.touches[0].clientY - e.touches[1].clientY
        );
        const deltaDist = touchStartDist - dist;
        cameraDistance.current = Math.max(140, Math.min(500, cameraDistance.current + deltaDist * 0.5));
        touchStartDist = dist;
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      isDraggingRef.current = false;
      if (!isTouchMoved && e.changedTouches.length > 0) {
        handleNodeRaycast(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      }
    };

    dom.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    dom.addEventListener('wheel', onWheel, { passive: false });
    dom.addEventListener('click', onClick);

    dom.addEventListener('touchstart', onTouchStart, { passive: true });
    dom.addEventListener('touchmove', onTouchMove, { passive: true });
    dom.addEventListener('touchend', onTouchEnd, { passive: true });

    // 11. Animation Loop
    let reqId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      const currentMetrics = metricsRef.current;

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

      // Animate Satellites with Simulation Dynamics
      // The number of visible satellites dynamically reflects constellation scale
      if (satMeshGroup) {
        const activeSatsPositions: THREE.Vector3[] = [];
        const isDegraded = currentMetrics.orbitalHealthPercent < 80;

        // Visual density scales from 24 up to 72 based on activeSatellites
        const visibleLimit = Math.max(20, Math.min(72, Math.round((currentMetrics.activeSatellites / 260000) * 52 + 20)));

        satMeshGroup.children.forEach((child, idx) => {
          child.visible = idx < visibleLimit;
          if (!child.visible) return;

          const u = child.userData;
          // Satellites speed up or wobble under orbital storm
          u.orbitAngle += u.speed * (isDegraded ? 1.4 : 1.0);

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

          if (isDegraded && idx % 3 === 0) {
            // Tumbling motion for damaged satellites
            child.rotation.x += 0.04;
            child.rotation.z += 0.05;
          } else {
            child.lookAt(0, 0, 0);
          }

          if (activeSatsPositions.length < 32) {
            activeSatsPositions.push(new THREE.Vector3(px, oy, pz));
          }
        });

        // Dynamic laser cross-links using static preallocated LineSegments
        const posArray = laserGeo.attributes.position.array as Float32Array;
        let segmentCount = 0;

        // Check if lasers are active and within range
        const maxLinkDist = isDegraded ? 65 : 95;
        for (let i = 0; i < activeSatsPositions.length - 1 && segmentCount < MAX_LASER_PAIRS; i += 2) {
          const p1 = activeSatsPositions[i];
          const p2 = activeSatsPositions[i + 1];
          if (p1.distanceTo(p2) < maxLinkDist) {
            const baseIdx = segmentCount * 6;
            posArray[baseIdx] = p1.x;
            posArray[baseIdx + 1] = p1.y;
            posArray[baseIdx + 2] = p1.z;
            posArray[baseIdx + 3] = p2.x;
            posArray[baseIdx + 4] = p2.y;
            posArray[baseIdx + 5] = p2.z;
            segmentCount++;
          }
        }

        // Draw only connected segments
        laserGeo.setDrawRange(0, segmentCount * 2);
        laserGeo.attributes.position.needsUpdate = true;

        // Modulate laser appearance based on bandwidth & health
        laserMat.color.set(isDegraded ? 0xff3366 : 0x00f0ff);
        laserMat.opacity = Math.max(0.15, Math.min(0.85, (currentMetrics.opticalLaserBandwidthTbps / 1500) * 0.45));
      }

      // Animate Photon Data Particles along Subsea Cables
      if (particlesGroupRef.current && cableCurves.length > 0) {
        const positions = particlesGroupRef.current.geometry.attributes.position.array as Float32Array;
        // Data packet flow rate scales with global petabits bandwidth
        const flowRate = 0.002 + Math.min(0.008, (currentMetrics.globalBandwidthPbps / 100) * 0.004);

        for (let i = 0; i < particleCount; i++) {
          particleProgress[i] = (particleProgress[i] + flowRate) % 1;
          const curveIdx = particleCableIndex[i];
          const curve = cableCurves[curveIdx];
          const pt = curve.getPointAt(particleProgress[i]);

          positions[i * 3] = pt.x;
          positions[i * 3 + 1] = pt.y;
          positions[i * 3 + 2] = pt.z;
        }
        particlesGroupRef.current.geometry.attributes.position.needsUpdate = true;

        // Dynamic particle color based on network integrity
        const partMat = particlesGroupRef.current.material as THREE.PointsMaterial;
        if (currentMetrics.subseaCableIntegrityPercent < 75) {
          partMat.color.set(0xff3366);
        } else if (currentMetrics.networkLatencyMs > 20) {
          partMat.color.set(0xfbbf24);
        } else {
          partMat.color.set(0x00ff9d);
        }
      }

      // Pulsate Nodes crowns and dynamically scale spires with real-time compute load
      if (nodesGroupRef.current) {
        const isHighStress = currentMetrics.gridStressPercent > 75;

        nodesGroupRef.current.children.forEach((nObj, i) => {
          const beacon = nObj.children[2] as THREE.Mesh;
          if (beacon) {
            const scale = 1 + Math.sin(elapsedTime * 4 + i) * 0.28;
            beacon.scale.set(scale, scale, scale);

            const bMat = beacon.material as THREE.MeshBasicMaterial;
            if (isHighStress) {
              bMat.color.set(Math.sin(elapsedTime * 8) > 0 ? 0xff3366 : 0xfbbf24);
            } else {
              bMat.color.set(0xffffff);
            }
          }
        });
      }

      renderer.render(scene, camera);
      reqId = requestAnimationFrame(animate);
    };

    reqId = requestAnimationFrame(animate);

    // Comprehensive Cleanup on unmount
    return () => {
      cancelAnimationFrame(reqId);
      window.removeEventListener('resize', handleResize);
      dom.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      dom.removeEventListener('wheel', onWheel);
      dom.removeEventListener('click', onClick);

      dom.removeEventListener('touchstart', onTouchStart);
      dom.removeEventListener('touchmove', onTouchMove);
      dom.removeEventListener('touchend', onTouchEnd);

      // Clean GPU memory allocations
      starsGeo.dispose();
      starsMat.dispose();
      earthGeo.dispose();
      earthMat.dispose();
      earthTexture.dispose();
      atmosphereGeo.dispose();
      atmosphereMat.dispose();
      laserGeo.dispose();
      laserMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();

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
    if (atmosphereMeshRef.current) atmosphereMeshRef.current.visible = visualLayers.atmosphereGlow;
  }, [visualLayers]);

  // Update Atmosphere Glow color reactively based on System Health Status
  useEffect(() => {
    if (!atmosphereMeshRef.current) return;
    const mat = atmosphereMeshRef.current.material as THREE.ShaderMaterial;
    if (metrics.healthStatus === 'NOMINAL') {
      mat.uniforms.glowColor.value.set(0x00f0ff);
    } else if (metrics.healthStatus === 'ELEVATED_STRESS') {
      mat.uniforms.glowColor.value.set(0xfbbf24);
    } else {
      mat.uniforms.glowColor.value.set(0xff3366);
    }
  }, [metrics.healthStatus]);

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
    <div className="relative w-full h-full overflow-hidden select-none touch-none">
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
            onClick={() => toggleLayer(layer)}
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
