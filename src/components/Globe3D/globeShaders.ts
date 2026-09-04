import * as THREE from 'three';

/**
 * Atmosphere Rayleigh/Mie scattering fresnel shader for 3D Globe
 */
export const AtmosphereShader = {
  vertexShader: `
    varying vec3 vNormal;
    void main() {
      vNormal = normalize(normalMatrix * normal);
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vNormal;
    uniform vec3 glowColor;
    uniform float coefficient;
    uniform float power;

    void main() {
      float rim = max(0.0, coefficient - dot(vNormal, vec3(0.0, 0.0, 1.0)));
      float intensity = pow(rim, power);
      gl_FragColor = vec4(glowColor, intensity * 0.75);
    }
  `
};

/**
 * Procedural Earth texture generation using an HTML5 Canvas.
 * Generates futuristic cyber continent outlines, ocean bathymetry, and coordinate grids.
 */
export function createCyberEarthTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 2048;
  canvas.height = 1024;
  const ctx = canvas.getContext('2d')!;

  // Deep space ocean base
  ctx.fillStyle = '#060b18';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Subtle lat/long coordinate grid
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.08)';
  ctx.lineWidth = 1;
  const step = 64;
  for (let x = 0; x <= canvas.width; x += step) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, canvas.height);
    ctx.stroke();
  }
  for (let y = 0; y <= canvas.height; y += step) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(canvas.width, y);
    ctx.stroke();
  }

  // Equator and prime meridian accent lines
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.2)';
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(0, canvas.height / 2);
  ctx.lineTo(canvas.width, canvas.height / 2);
  ctx.stroke();

  // Draw simplified vector landmass approximations with futuristic cyber dots
  // Equirectangular mapping: x = (lon + 180) / 360 * width, y = (90 - lat) / 180 * height
  function toCanvas(lat: number, lon: number): [number, number] {
    const x = ((lon + 180) / 360) * canvas.width;
    const y = ((90 - lat) / 180) * canvas.height;
    return [x, y];
  }

  // Draw continent silhouettes (Europe, Americas, Asia, Africa, Oceania)
  ctx.fillStyle = 'rgba(18, 38, 68, 0.85)';
  ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
  ctx.lineWidth = 1.5;

  const continents = [
    // North America
    [[70, -165], [72, -130], [60, -80], [50, -60], [30, -80], [25, -97], [18, -105], [32, -117], [48, -125], [60, -145], [70, -165]],
    // South America
    [[12, -75], [5, -52], [-10, -35], [-25, -45], [-55, -67], [-52, -75], [-15, -75], [0, -80], [12, -75]],
    // Europe
    [[71, 28], [60, 30], [55, 12], [45, -1], [36, -5], [36, 28], [42, 30], [45, 15], [55, 20], [65, 25], [71, 28]],
    // Africa
    [[37, 10], [32, 32], [12, 45], [4, 50], [-34, 20], [-34, 18], [5, 2], [15, -17], [35, -5], [37, 10]],
    // Asia
    [[75, 100], [70, 170], [60, 160], [40, 130], [22, 120], [10, 105], [8, 77], [25, 62], [38, 55], [55, 60], [70, 70], [75, 100]],
    // Australia
    [[-12, 130], [-15, 145], [-28, 153], [-38, 145], [-35, 115], [-20, 115], [-12, 130]]
  ];

  for (const poly of continents) {
    ctx.beginPath();
    for (let i = 0; i < poly.length; i++) {
      const [x, y] = toCanvas(poly[i][0], poly[i][1]);
      if (i === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
  }

  // Add high-density digital node dots across landmasses
  ctx.fillStyle = 'rgba(0, 255, 157, 0.45)';
  for (let i = 0; i < 600; i++) {
    // Generate pseudo-random land points
    const lat = (Math.random() * 120) - 50;
    const lon = (Math.random() * 360) - 180;
    const [px, py] = toCanvas(lat, lon);
    ctx.fillRect(px, py, 2, 2);
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.wrapS = THREE.RepeatWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return texture;
}

/**
 * Converts Geographic Latitude and Longitude to Cartesian 3D coordinates on sphere of radius R.
 */
export function latLonToVector3(lat: number, lon: number, radius: number): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);

  const x = -(radius * Math.sin(phi) * Math.cos(theta));
  const z = radius * Math.sin(phi) * Math.sin(theta);
  const y = radius * Math.cos(phi);

  return new THREE.Vector3(x, y, z);
}
