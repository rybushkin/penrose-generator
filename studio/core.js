/* Multigrid/dual construction adapted from ../vue-definitions.js.
 * Original: Pattern Collider, Aatish Bhatia (MIT); modifications © Bots & Bones.
 */
(function (root, factory) {
  const api = factory(typeof module === 'object' ? require('../libraries/seedrandom.min.js') : Math.seedrandom);
  if (typeof module === 'object') module.exports = api;
  else root.StudioCore = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function (seedrandom) {
  'use strict';
  const PALETTES = {
    coral: { name: 'Bots & Bones', colors: ['#ff5c45', '#f4f2ec', '#b73a2a', '#484440'] },
    bone: { name: 'Bone & Ink', colors: ['#f4f2ec', '#73706b', '#ccc6ba', '#33312e'] },
    signal: { name: 'Signal', colors: ['#ff5c45', '#484440', '#f4f2ec', '#b73a2a'] },
    ember: { name: 'Ember', colors: ['#ff5c45', '#d49764', '#9b392e', '#f4f2ec'] },
    mint: { name: 'After Hours', colors: ['#49f7a5', '#f4f2ec', '#20503d', '#ff5c45'] }
  };
  const DEFAULTS = Object.freeze({ symmetry: 5, phase: 0.37, disorder: 0, seed: 2718,
    radius: 100, zoom: 1.32, rotation: 18, panX: 0, panY: 0, palette: 'coral',
    paletteLocked: false, background: '#000000', foreground: '#ff5c45',
    outline: true, filled: true, colorMode: 'shape', view: 'tiles', crop: 'landscape' });
  const PRESETS = [
    { name: 'Fivefold', subtitle: 'The original order', symmetry: 5, phase: 0.37, radius: 100, disorder: 0, rotation: 18, zoom: 1.32 },
    { name: 'Supernova', subtitle: 'Seven directions', symmetry: 7, phase: 0.5, radius: 100, disorder: 0, rotation: 0, zoom: 1.5 },
    { name: 'Off Grid', subtitle: 'A little less predictable', symmetry: 9, phase: 0.31, radius: 120, disorder: 0.68, rotation: 12, zoom: 1.45 },
    { name: 'Open Form', subtitle: 'Room to breathe', symmetry: 5, phase: 0.2, radius: 35, disorder: 0, rotation: 54, zoom: 1.08 }
  ];
  const CROPS = { landscape: [16, 10], square: [1, 1], phone: [9, 16], poster: [2, 3] };
  function sanitize(input) {
    const src = input && typeof input === 'object' && !Array.isArray(input) ? input : {};
    const s = { ...DEFAULTS };
    const limits = { symmetry: [3, 19], phase: [0, 1], disorder: [0, 1], seed: [0, 999999],
      radius: [15, 150], zoom: [0.25, 5], rotation: [-180, 180], panX: [-2, 2], panY: [-2, 2] };
    for (const [k, [lo, hi]] of Object.entries(limits)) {
      if (typeof src[k] === 'number' && Number.isFinite(src[k])) s[k] = Math.max(lo, Math.min(hi, src[k]));
    }
    for (const k of ['symmetry', 'seed', 'radius']) s[k] = Math.round(s[k]);
    for (const k of ['paletteLocked', 'outline', 'filled']) if (typeof src[k] === 'boolean') s[k] = src[k];
    for (const k of ['background', 'foreground']) if (typeof src[k] === 'string' && /^#[0-9a-f]{6}$/i.test(src[k])) s[k] = src[k];
    if (Object.hasOwn(PALETTES, src.palette)) s.palette = src.palette;
    if (Object.hasOwn(CROPS, src.crop)) s.crop = src.crop;
    if (['shape', 'orientation'].includes(src.colorMode)) s.colorMode = src.colorMode;
    if (['tiles', 'grid'].includes(src.view)) s.view = src.view;
    return s;
  }
  function newComposition(input, random = Math.random) {
    const s = sanitize(input);
    let phase = 0.08 + random() * 0.84;
    if (Math.abs(phase - s.phase) < 0.03) phase = (phase + 0.23) % 0.92 + 0.04;
    s.phase = Math.round(phase * 1000) / 1000;
    s.seed = Math.floor(random() * 999999);
    if (!s.paletteLocked) s.palette = Object.keys(PALETTES)[Math.floor(random() * Object.keys(PALETTES).length)];
    return sanitize(s);
  }
  function generate(input) {
    const s = sanitize(input), n = s.symmetry, eps = 1e-6;
    const approx = x => Math.round(x / eps) * eps;
    const steps = Math.max(3, 2 * Math.round((s.radius / (n - 1) - 1) / 2) + 1);
    const rand = seedrandom('random seed ' + n + ' and ' + s.seed);
    const offsets = Array.from({length: n}, () => s.phase + (s.disorder > 0 ? s.disorder * (rand() - 0.5) : 0));
    const sc = Array.from({length: n}, (_, i) => ({ sin: Math.sin(i * 2 * Math.PI / n), cos: Math.cos(i * 2 * Math.PI / n) }));
    const grid = sc.flatMap((dir, angle) => Array.from({length: steps}, (_, j) => ({ angle, index: j - (steps - 1) / 2 + offsets[angle] % 1, ...dir })));
    const pts = new Map();
    for (let i = 0; i < grid.length; i++) for (let j = i + 1; j < grid.length; j++) {
      const a = grid[i], b = grid[j];
      if (a.angle === b.angle) continue;
      const det = a.sin * b.cos - a.cos * b.sin;
      if (Math.abs(det) < eps) continue;
      const x = (b.index * a.sin - a.index * b.sin) / det;
      const y = (b.index * a.cos - a.index * b.cos) / -det;
      if (Math.hypot(x, y) > (steps - 1) / 2) continue;
      const key = `${approx(x)},${approx(y)}`;
      const p = pts.get(key) || { x, y, lines: new Map() };
      p.lines.set(a.angle, a); p.lines.set(b.angle, b); pts.set(key, p);
    }
    let tiles = [];
    for (const pt of pts.values()) {
      let angles = [...pt.lines.keys()].map(i => i * 2 * Math.PI / n);
      angles = [...new Set([...angles, ...angles.map(a => (a + Math.PI) % (2 * Math.PI))].map(approx))].sort((a,b) => a-b);
      const around = angles.map(a => ({ x: pt.x - eps * Math.sin(a), y: pt.y + eps * Math.cos(a) }));
      const points = around.map((p, i) => {
        const q = around[(i + 1) % around.length], mx = (p.x + q.x) / 2, my = (p.y + q.y) / 2;
        let x = 0, y = 0;
        sc.forEach((dir, k) => { const v = Math.floor(mx * dir.cos + my * dir.sin - offsets[k]); x += v * dir.cos; y += v * dir.sin; });
        return { x, y };
      });
      const area = Math.abs(points.reduce((v, p, i) => { const q = points[(i + 1) % points.length]; return v + p.x*q.y - p.y*q.x; }, 0) / 2);
      if (area < eps) continue;
      tiles.push({ id: tiles.length, points, area, shape: Math.round(area*1000), orientation: [...pt.lines.keys()].join('-') });
    }
    const types = [...new Set(tiles.map(t => t.shape))].sort((a,b) => b-a);
    const orientations = [...new Set(tiles.map(t => t.orientation))];
    // Original dual coordinates have a phase-dependent translation; centre only
    // after building the full patch, never clip geometry to the viewport.
    let minX=Infinity,maxX=-Infinity,minY=Infinity,maxY=-Infinity;
    tiles.forEach(t => t.points.forEach(p => { minX=Math.min(minX,p.x); maxX=Math.max(maxX,p.x); minY=Math.min(minY,p.y); maxY=Math.max(maxY,p.y); }));
    const cx=(minX+maxX)/2, cy=(minY+maxY)/2;
    let extent=1;
    tiles.forEach(t => { t.type=types.indexOf(t.shape); t.direction=orientations.indexOf(t.orientation); t.points.forEach(p => {p.x-=cx; p.y-=cy; extent=Math.max(extent,Math.hypot(p.x,p.y));}); });
    return { tiles, grid, extent, gridExtent: steps/2, types: types.length };
  }
  function transform(scene, input, width, height) {
    const s=sanitize(input), angle=s.rotation*Math.PI/180;
    const scale=Math.min(width,height)*s.zoom/(2*(s.view==='grid'?scene.gridExtent:scene.extent));
    const x=width/2+s.panX*Math.min(width,height), y=height/2+s.panY*Math.min(width,height);
    return { scale, x, y, angle, point: p => ({x:x+scale*(p.x*Math.cos(angle)-p.y*Math.sin(angle)),y:y+scale*(p.x*Math.sin(angle)+p.y*Math.cos(angle))}) };
  }
  function color(tile, s) { return PALETTES[s.palette].colors[(s.colorMode==='orientation'?tile.direction:tile.type) % PALETTES[s.palette].colors.length]; }
  function fitCrop(crop, maxWidth, maxHeight) {
    const [a,b]=CROPS[crop]||CROPS.landscape, ratio=a/b;
    const width=Math.min(maxWidth,maxHeight*ratio);
    return {width,height:width/ratio};
  }
  function strokeWidth(s, width, height) { return (s.view==='grid'||!s.filled?1:.85)*Math.min(width,height)/700; }
  function svg(scene, input, width, height, transparent=false) {
    const s=sanitize(input), tr=transform(scene,s,width,height), f=x=>Number(x.toFixed(3)), weight=strokeWidth(s,width,height);
    let content=transparent?'':`<rect width="100%" height="100%" fill="${s.background}"/>`;
    if (s.view==='grid') {
      for(const line of scene.grid) {
        const a=tr.point({x:line.index*line.cos-line.sin*scene.gridExtent*3,y:line.index*line.sin+line.cos*scene.gridExtent*3});
        const b=tr.point({x:line.index*line.cos+line.sin*scene.gridExtent*3,y:line.index*line.sin-line.cos*scene.gridExtent*3});
        content+=`<line x1="${f(a.x)}" y1="${f(a.y)}" x2="${f(b.x)}" y2="${f(b.y)}" stroke="${s.foreground}" stroke-opacity="0.6" stroke-width="${weight}"/>`;
      }
    } else for(const tile of scene.tiles) {
      const points=tile.points.map(p=>tr.point(p)).map(p=>`${f(p.x)},${f(p.y)}`).join(' ');
      content+=`<polygon points="${points}" fill="${s.filled?color(tile,s):'none'}" stroke="${s.outline?(s.filled?s.background:s.foreground):'none'}" stroke-width="${weight}" stroke-linejoin="round"/>`;
    }
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><title>Pattern Studio artwork</title>${content}</svg>`;
  }
  function loadVariants(raw) {
    try {
      if(typeof raw!=='string'||raw.length>100000) return [];
      const arr=JSON.parse(raw);
      if(!Array.isArray(arr))return [];
      return arr.filter(v=>v&&typeof v==='object'&&v.state&&typeof v.state==='object').slice(0,12)
        .map((v,i)=>({id:typeof v.id==='string'?v.id.slice(0,50):String(i),name:typeof v.name==='string'?v.name.slice(0,40):`Variation ${i+1}`,state:sanitize(v.state)}));
    } catch { return []; }
  }
  function nextVariantName(variants) {
    const last=variants.reduce((max,v)=>Math.max(max,Number((v.name.match(/^Variation (\d+)$/)||[])[1])||0),0);
    return 'Variation '+String(last+1).padStart(2,'0');
  }
  function encode(s) { return encodeURIComponent(JSON.stringify(sanitize(s))); }
  function decode(raw) { try {return typeof raw==='string'&&raw.length<4096?sanitize(JSON.parse(decodeURIComponent(raw))):{...DEFAULTS};}catch{return {...DEFAULTS};} }
  return { DEFAULTS, PALETTES, PRESETS, CROPS, sanitize, newComposition, generate, transform, color, fitCrop, strokeWidth, svg, loadVariants, nextVariantName, encode, decode };
});
