/* =========================================================
   3D particle "data universe" (Three.js)
   One particle system that morphs between shapes:
     core     – data sphere with three role orbits (hero)
     pipeline – three ETL streams merging into a warehouse (Data Engineer)
     schema   – star schema: fact table + dimensions + flowing joins (Analytics Engineer)
     bars     – animated 3D bar + line chart (Data Analyst)
     wave     – flowing data terrain (ambient sections)
   ========================================================= */
(function () {
const THREE = window.THREE;

const TAU = Math.PI * 2;
const GOLDEN = Math.PI * (3 - Math.sqrt(5));
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const fract = (x) => x - Math.floor(x);
const hash = (n) => fract(Math.sin(n * 12.9898) * 43758.5453);
const easeInOut = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

window.initScene = function initScene(canvas) {
  const isMobile = matchMedia("(max-width: 900px)").matches;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const N = isMobile ? 3000 : 6400;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, alpha: true, powerPreference: "high-performance" });
  const DPR = Math.min(window.devicePixelRatio || 1, 1.75);
  renderer.setPixelRatio(DPR);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 10);

  /* ---------- buffers ---------- */
  const pos = new Float32Array(N * 3);
  const col = new Float32Array(N * 3).fill(0.6);
  const size = new Float32Array(N);
  const base = new Float32Array(N);
  const s1 = new Float32Array(N), s2 = new Float32Array(N), s3 = new Float32Array(N), s4 = new Float32Array(N);
  const snapshot = new Float32Array(N * 3);
  for (let i = 0; i < N; i++) {
    s1[i] = Math.random(); s2[i] = Math.random(); s3[i] = Math.random(); s4[i] = Math.random();
    base[i] = 0.55 + Math.pow(Math.random(), 3) * 1.6;
    // start scattered far away so the intro "assembles"
    const r = 6 + Math.random() * 8, th = Math.random() * TAU, ph = Math.acos(2 * Math.random() - 1);
    pos[i * 3] = r * Math.sin(ph) * Math.cos(th);
    pos[i * 3 + 1] = r * Math.sin(ph) * Math.sin(th);
    pos[i * 3 + 2] = r * Math.cos(ph);
    snapshot.set(pos.subarray(i * 3, i * 3 + 3), i * 3);
  }

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.BufferAttribute(pos, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute("aColor", new THREE.BufferAttribute(col, 3).setUsage(THREE.DynamicDrawUsage));
  geo.setAttribute("aSize", new THREE.BufferAttribute(size, 1).setUsage(THREE.DynamicDrawUsage));

  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    uniforms: { uPR: { value: DPR }, uScale: { value: 1 }, uOpacity: { value: 1 } },
    vertexShader: /* glsl */ `
      attribute float aSize; attribute vec3 aColor;
      uniform float uPR; uniform float uScale;
      varying vec3 vColor; varying float vFade;
      void main(){
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = aSize * uScale * uPR * (26.0 / -mv.z);
        vColor = aColor;
        vFade = smoothstep(22.0, 6.0, -mv.z);
      }`,
    fragmentShader: /* glsl */ `
      uniform float uOpacity;
      varying vec3 vColor; varying float vFade;
      void main(){
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c);
        float a = smoothstep(0.5, 0.0, d);
        a = a * a;
        float core = smoothstep(0.18, 0.0, d);
        gl_FragColor = vec4(vColor + core * 0.35, a * uOpacity * vFade);
      }`,
  });

  const points = new THREE.Points(geo, mat);
  points.frustumCulled = false;
  const group = new THREE.Group();
  group.add(points);
  scene.add(group);

  /* ---------- palette ---------- */
  const ROLE = [new THREE.Color("#de9624"), new THREE.Color("#308466"), new THREE.Color("#c48014")]; // amber, teal, gold
  const cA = new THREE.Color("#de9624");
  const cB = new THREE.Color("#308466");
  const WHITE = new THREE.Color("#faf9f7");

  /* ---------- shapes ----------
     out = [x, y, z, sizeFactor, mix(0..1 between cA/cB), palette(0 = mix, 1..3 = role colour, 4 = white)] */
  const SHAPES = {
    core(i, t, o) {
      const sphereCount = Math.floor(N * 0.64);
      if (i < sphereCount) {
        const y = 1 - (2 * (i + 0.5)) / sphereCount;
        const r = Math.sqrt(1 - y * y);
        const phi = i * GOLDEN + t * 0.12;
        const breathe = 1 + 0.035 * Math.sin(t * 1.4 + i * 0.013);
        o[0] = Math.cos(phi) * r * breathe;
        o[1] = y * breathe;
        o[2] = Math.sin(phi) * r * breathe;
        o[3] = 0.8 + 0.6 * Math.max(0, Math.sin(t * 2 + i * 0.7)) * (s4[i] > 0.92 ? 1 : 0.1);
        o[4] = (y + 1) * 0.5;
        o[5] = 0;
      } else {
        const k = i % 3;
        const ang = s1[i] * TAU + t * (0.22 + k * 0.06) * (k === 1 ? -1 : 1);
        const rad = 1.32 + k * 0.13 + (s2[i] - 0.5) * 0.05;
        let x = Math.cos(ang) * rad, y = (s3[i] - 0.5) * 0.03, z = Math.sin(ang) * rad;
        const tx = [1.15, 1.35, 1.6][k], tz = [0.35, -0.55, 0.1][k];
        // rotate around X
        let y2 = y * Math.cos(tx) - z * Math.sin(tx), z2 = y * Math.sin(tx) + z * Math.cos(tx);
        // rotate around Z
        let x3 = x * Math.cos(tz) - y2 * Math.sin(tz), y3 = x * Math.sin(tz) + y2 * Math.cos(tz);
        o[0] = x3; o[1] = y3; o[2] = z2;
        o[3] = 0.7 + s4[i] * 0.6;
        o[4] = 0; o[5] = k + 1;
      }
    },

    pipeline(i, t, o) {
      const k = i % 3;
      const u = fract(s1[i] + t * 0.06 * (0.75 + 0.5 * s4[i]));
      if (u < 0.8) {
        const v = u / 0.8;                       // 0..1 along the pipe
        const m = smooth(0.2, 0.62, v);          // streams merge
        const x = -1.6 + v * 2.45;
        const yOff = (k - 1) * 0.62 * (1 - m);
        const zOff = (k - 1) * 0.3 * (1 - m);
        const rad = (0.07 + 0.08 * m) * Math.sqrt(s3[i]);
        const a = s2[i] * TAU + v * 10;
        o[0] = x;
        o[1] = yOff + Math.cos(a) * rad + Math.sin(v * 7 + t) * 0.035;
        o[2] = zOff + Math.sin(a) * rad;
        o[3] = smooth(0, 0.06, v) * (0.8 + 0.4 * m);
        o[4] = v;                                // colour shifts as data gets refined
        o[5] = 0;
      } else {
        // the warehouse: three stacked data discs
        const layer = Math.floor(s3[i] * 3);
        const a = s2[i] * TAU + t * 0.35;
        const ring = s4[i] > 0.35 ? 0.38 : 0.38 * Math.sqrt(s4[i] / 0.35);
        o[0] = 1.22 + Math.cos(a) * ring;
        o[1] = (layer - 1) * 0.36 + (s1[i] - 0.5) * 0.04;
        o[2] = Math.sin(a) * ring * 0.9;
        o[3] = 0.9;
        o[4] = 1; o[5] = 0;
      }
      // tilt so the warehouse discs read as 3D
      const ry = -0.38 + Math.sin(t * 0.2) * 0.12, rx = 0.36;
      const x = o[0], y = o[1], z = o[2];
      const x1 = x * Math.cos(ry) + z * Math.sin(ry), z1 = -x * Math.sin(ry) + z * Math.cos(ry);
      o[0] = x1; o[1] = y * Math.cos(rx) - z1 * Math.sin(rx); o[2] = y * Math.sin(rx) + z1 * Math.cos(rx);
    },

    schema(i, t, o) {
      const DIMS = [[-1.05, 0.62, 0.25], [1.05, 0.62, -0.25], [-1.05, -0.62, -0.25], [1.05, -0.62, 0.25], [0, 1.15, -0.1]];
      const g = i % 10;
      let x, y, z;
      if (g < 3 || g >= 7) {
        if (g < 3) {
          // fact table: big cube edges
          [x, y, z] = cubeEdge(i, 0.34);
          o[3] = 1; o[4] = 1; o[5] = 0;
        } else {
          // joins: particles flowing from dimensions into the fact
          const d = DIMS[i % DIMS.length];
          const u = fract(s1[i] + t * 0.22);
          x = d[0] * (1 - u); y = d[1] * (1 - u); z = d[2] * (1 - u);
          x += (s2[i] - 0.5) * 0.03; y += (s3[i] - 0.5) * 0.03;
          o[3] = 1.1 * Math.sin(u * Math.PI); o[4] = 0.5; o[5] = 4;
        }
      } else {
        // dimension tables
        const d = DIMS[i % DIMS.length];
        const [cx, cy, cz] = cubeEdge(i, 0.2);
        x = d[0] + cx; y = d[1] + cy; z = d[2] + cz;
        o[3] = 0.85; o[4] = 0; o[5] = 0;
      }
      // slow rotation
      const ry = t * 0.22, rx = 0.32;
      const x1 = x * Math.cos(ry) + z * Math.sin(ry), z1 = -x * Math.sin(ry) + z * Math.cos(ry);
      const y2 = y * Math.cos(rx) - z1 * Math.sin(rx), z2 = y * Math.sin(rx) + z1 * Math.cos(rx);
      o[0] = x1; o[1] = y2; o[2] = z2;
    },

    bars(i, t, o) {
      const COLS = 4, ROWS = 3, SP = 0.52;
      const g = i % 20;
      let x, y, z;
      if (g < 14) {
        const b = i % (COLS * ROWS);
        const cx = (b % COLS - (COLS - 1) / 2) * SP;
        const cz = (Math.floor(b / COLS) - (ROWS - 1) / 2) * SP;
        const h = (0.3 + 1.25 * hash(b + 3)) * (0.82 + 0.18 * Math.sin(t * 0.9 + b * 1.3));
        const w = 0.15;
        const e = s1[i];
        if (e < 0.55) {            // vertical edges
          const c = Math.floor(s2[i] * 4);
          x = cx + (c & 1 ? w : -w); z = cz + (c & 2 ? w : -w); y = -0.85 + s3[i] * h;
        } else if (e < 0.8) {      // top square outline
          const side = Math.floor(s2[i] * 4), p = s3[i] * 2 - 1;
          x = cx + (side < 2 ? p * w : (side === 2 ? w : -w));
          z = cz + (side < 2 ? (side === 0 ? w : -w) : p * w);
          y = -0.85 + h;
        } else {                   // faces
          const side = Math.floor(s2[i] * 4), p = s3[i] * 2 - 1;
          x = cx + (side < 2 ? p * w : (side === 2 ? w : -w));
          z = cz + (side < 2 ? (side === 0 ? w : -w) : p * w);
          y = -0.85 + s4[i] * h;
        }
        o[3] = 0.85; o[4] = Math.min(1, (y + 0.85) / 1.5); o[5] = 0;
      } else if (g < 17) {         // trend line floating above
        const v = s1[i];
        x = (v * 2 - 1) * 1.0;
        y = 0.72 + 0.16 * Math.sin(v * 6 + t * 0.9) + v * 0.18;
        z = -0.25 + (s2[i] - 0.5) * 0.03;
        o[3] = 0.8; o[4] = 0; o[5] = 4;
      } else {                     // floor grid
        const gx = Math.round((s1[i] * 2 - 1) * 6) / 6, gz = (s2[i] * 2 - 1);
        const flip = s3[i] > 0.5;
        x = (flip ? gx : gz) * 1.2; z = (flip ? gz : gx) * 0.95; y = -0.87;
        o[3] = 0.45; o[4] = 0.2; o[5] = 0;
      }
      const ry = 0.55 + Math.sin(t * 0.18) * 0.35, rx = 0.38;
      const x1 = x * Math.cos(ry) + z * Math.sin(ry), z1 = -x * Math.sin(ry) + z * Math.cos(ry);
      const y2 = y * Math.cos(rx) - z1 * Math.sin(rx), z2 = y * Math.sin(rx) + z1 * Math.cos(rx);
      o[0] = x1; o[1] = y2; o[2] = z2;
    },

    wave(i, t, o) {
      const cols = Math.round(Math.sqrt(N * 2.2));
      const rows = Math.ceil(N / cols);
      const cx = i % cols, cz = Math.floor(i / cols);
      const x = (cx / (cols - 1)) * 2 - 1;
      const z = (cz / (rows - 1)) * 2 - 1;
      const y = 0.08 * Math.sin(x * 4 + t * 0.6) * Math.cos(z * 3 + t * 0.45) + 0.04 * Math.sin((x + z) * 9 + t * 0.9);
      o[0] = x; o[1] = y; o[2] = z * 0.55;
      o[3] = 0.95 + Math.max(0, y) * 10;
      o[4] = (z + 1) * 0.5; o[5] = 0;
    },
  };

  function cubeEdge(i, h) {
    const e = Math.floor(s2[i] * 12), p = (s3[i] * 2 - 1) * h;
    const a = e & 1 ? h : -h, b = e & 2 ? h : -h;
    const axis = Math.floor(e / 4);
    if (axis === 0) return [p, a, b];
    if (axis === 1) return [a, p, b];
    return [a, b, p];
  }

  // how big each shape renders relative to its anchor's half-width
  const FIT = { core: 0.74, pipeline: 0.6, schema: 0.72, bars: 0.82, wave: 1 };

  /* ---------- state ---------- */
  const state = {
    shape: "core", from: "snapshot", morph: 0,
    anchor: null, sticky: false, dimWhenAway: 0.4, opacity: 1,
  };
  const targetColA = new THREE.Color().copy(cA), targetColB = new THREE.Color().copy(cB);
  const tgtPos = new THREE.Vector3(), tgtScale = { v: 1 }, tgtRot = { x: 0, y: 0 };
  let curOpacity = 0;
  const mouse = { x: 0, y: 0, sx: 0, sy: 0 };

  function setState({ shape, anchor = null, sticky = false, colors }) {
    if (colors) { targetColA.set(colors[0]); targetColB.set(colors[1]); }
    state.anchor = anchor; state.sticky = sticky;
    if (shape === state.shape) return;
    // freeze current positions as the starting point of the new morph
    snapshot.set(pos);
    state.from = "snapshot";
    state.shape = SHAPES[shape] ? shape : "core";
    state.morph = 0;
  }

  /* ---------- sizing ---------- */
  let W = 0, H = 0, visH = 1, visW = 1;
  function resize() {
    W = window.innerWidth; H = window.innerHeight;
    renderer.setSize(W, H, false);
    camera.aspect = W / H;
    camera.updateProjectionMatrix();
    visH = 2 * Math.tan((camera.fov * Math.PI) / 360) * camera.position.z;
    visW = visH * camera.aspect;
    mat.uniforms.uScale.value = Math.min(1.25, Math.max(0.75, H / 900));
  }
  resize();
  window.addEventListener("resize", resize);
  window.addEventListener("pointermove", (e) => { mouse.x = e.clientX / W - 0.5; mouse.y = e.clientY / H - 0.5; }, { passive: true });

  function computeTarget() {
    const upp = visH / H; // world units per pixel at z = 0
    let targetOpacity = 1;
    if (state.shape === "wave") {
      tgtPos.set(0, -visH * 0.33, 0);
      tgtScale.v = visW * 0.72;
      tgtRot.x = 0.42; tgtRot.y = 0;
      targetOpacity = 0.8;
    } else if (state.anchor) {
      const r = state.anchor.getBoundingClientRect();
      let cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      const visible = cy > -r.height * 0.2 && cy < H + r.height * 0.2;
      if (state.sticky) {
        // follow the anchor; once it scrolls above the viewport, stay pinned (dimmed) while
        // the visitor reads the rest of the role. Below the viewport it simply waits there.
        const lo = H * 0.42;
        if (cy < lo && r.bottom < H * 0.2) { cy = lo; targetOpacity = isMobile ? 0.25 : state.dimWhenAway; }
        if (r.top > H) targetOpacity = 0.6;
      } else if (!visible) targetOpacity = 0.25;
      tgtPos.set((cx - W / 2) * upp, -(cy - H / 2) * upp, 0);
      tgtScale.v = (r.width / 2) * upp * FIT[state.shape];
      tgtRot.x = 0; tgtRot.y = 0;
    } else {
      const m = Math.min(W, H);
      tgtPos.set(0, 0, -1);
      tgtScale.v = m * 0.36 * upp * FIT[state.shape];
      tgtRot.x = 0; tgtRot.y = 0;
      targetOpacity = 0.45;
    }
    return targetOpacity;
  }

  /* ---------- loop ---------- */
  const o = [0, 0, 0, 1, 0, 0], f = [0, 0, 0, 1, 0, 0];
  const tmp = new THREE.Color();
  let t = 0, last = performance.now(), first = true;

  function frame(now) {
    const dt = Math.min(0.05, (now - last) / 1000); last = now;
    t += dt * (reduce ? 0.25 : 1);

    const targetOpacity = computeTarget();
    if (first) { group.position.copy(tgtPos); group.scale.setScalar(tgtScale.v); first = false; }
    const k = 1 - Math.pow(0.0015, dt); // frame-rate independent smoothing
    group.position.lerp(tgtPos, k);
    const sc = group.scale.x + (tgtScale.v - group.scale.x) * k;
    group.scale.setScalar(sc);
    mouse.sx += (mouse.x - mouse.sx) * k; mouse.sy += (mouse.y - mouse.sy) * k;
    group.rotation.x += (tgtRot.x + mouse.sy * 0.35 - group.rotation.x) * k;
    group.rotation.y += (tgtRot.y + mouse.sx * 0.5 - group.rotation.y) * k;
    curOpacity += (targetOpacity - curOpacity) * k * 0.6;
    mat.uniforms.uOpacity.value = curOpacity;

    cA.lerp(targetColA, k * 0.5); cB.lerp(targetColB, k * 0.5);

    state.morph = Math.min(1, state.morph + dt / 1.8);
    const morphing = state.morph < 1;
    const shapeFn = SHAPES[state.shape];

    for (let i = 0; i < N; i++) {
      const i3 = i * 3;
      shapeFn(i, t, o);
      let x = o[0], y = o[1], z = o[2];
      if (morphing) {
        // staggered, eased progress per particle
        const p = easeInOut(Math.min(1, Math.max(0, state.morph * 1.5 - s4[i] * 0.5)));
        // snapshot is in previous group space; that's fine visually (fly-in effect)
        const fx = snapshot[i3], fy = snapshot[i3 + 1], fz = snapshot[i3 + 2];
        // add a little swirl during the transition
        const sw = Math.sin(p * Math.PI) * 0.35;
        x = fx + (x - fx) * p + Math.cos(s1[i] * TAU) * sw;
        y = fy + (y - fy) * p + Math.sin(s2[i] * TAU) * sw;
        z = fz + (z - fz) * p;
      }
      pos[i3] = x; pos[i3 + 1] = y; pos[i3 + 2] = z;

      const pal = o[5];
      if (pal === 0) tmp.copy(s3[i] * 0.65 + o[4] * 0.35 > 0.66 ? cB : cA); // distinct amber / teal dots (no muddy blends)
      else if (pal === 4) tmp.copy(cA).lerp(WHITE, 0.65);
      else tmp.copy(ROLE[pal - 1]);
      col[i3] += (tmp.r - col[i3]) * 0.08;
      col[i3 + 1] += (tmp.g - col[i3 + 1]) * 0.08;
      col[i3 + 2] += (tmp.b - col[i3 + 2]) * 0.08;
      size[i] += (o[3] * base[i] - size[i]) * 0.12;
    }
    geo.attributes.position.needsUpdate = true;
    geo.attributes.aColor.needsUpdate = true;
    geo.attributes.aSize.needsUpdate = true;

    renderer.render(scene, camera);
    raf = requestAnimationFrame(frame);
  }
  let raf = requestAnimationFrame(frame);

  // stop rendering while the tab is hidden or an overlay covers the page
  let paused = false;
  const sync = () => {
    cancelAnimationFrame(raf);
    if (!document.hidden && !paused) { last = performance.now(); raf = requestAnimationFrame(frame); }
  };
  document.addEventListener("visibilitychange", sync);
  const pause = (on) => { if (paused !== !!on) { paused = !!on; sync(); } };

  return { setState, pause };
};
})();
