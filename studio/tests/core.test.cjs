const { test } = require('node:test');
const assert = require('node:assert/strict');
let core;
try { core = require('../core.js'); } catch { core = {}; }

test('new composition changes geometry with zero disorder, keeping a locked palette', () => {
  assert.equal(typeof core.newComposition, 'function');
  const state = { ...core.DEFAULTS, disorder: 0, paletteLocked: true, palette: 'bone' };
  const next = core.newComposition(state, () => 0.7);
  assert.equal(next.palette, 'bone');
  assert.notEqual(next.phase, state.phase);
  assert.notDeepEqual(core.generate(next).tiles[0].points, core.generate(state).tiles[0].points);
});

test('multigrid yields repeatable nonzero polygons for every supported symmetry', () => {
  assert.equal(typeof core.generate, 'function');
  for (let symmetry = 3; symmetry <= 19; symmetry++) {
    const state = { ...core.DEFAULTS, symmetry, radius: 35, disorder: 0.4, seed: 2718 };
    const scene = core.generate(state);
    assert(scene.tiles.length > 0, `empty scene at ${symmetry}`);
    assert.deepEqual(scene, core.generate(state));
    for (const tile of scene.tiles) {
      assert(tile.area > 0.0001);
      assert(tile.points.every(p => Number.isFinite(p.x) && Number.isFinite(p.y)));
    }
  }
});

test('untrusted URL state cannot create unbounded geometry or arbitrary SVG colors', () => {
  assert.equal(typeof core.sanitize, 'function');
  const state = core.sanitize({ symmetry: 100000, radius: Infinity, zoom: -2,
    palette: '<script>', background: '\"/><script/>', phase: NaN, seed: -10 });
  assert.equal(state.symmetry, 19);
  assert(state.radius <= 150 && state.radius > 0);
  assert(state.zoom >= 0.25);
  assert.equal(state.background, '#000000');
  assert.equal(state.palette, core.DEFAULTS.palette);
  assert(Number.isFinite(state.phase));
});

test('corrupted storage is recoverable and saved state is bounded and detached', () => {
  assert.equal(typeof core.loadVariants, 'function');
  assert.deepEqual(core.loadVariants('invalid JSON'), []);
  assert.deepEqual(core.loadVariants('{"data":[]}'), []);
  const items = Array.from({ length: 40 }, (_, i) => ({ id: i, name: 'x', state: { symmetry: 5 } }));
  const loaded = core.loadVariants(JSON.stringify(items));
  assert.equal(loaded.length, 12);
  assert.equal(loaded[0].state.symmetry, 5);
  assert.deepEqual(core.loadVariants('[null,{"state":null}]'), []);
});

test('saving after deletion keeps variation names distinguishable in the compare selector', () => {
  assert.equal(typeof core.nextVariantName,'function');
  assert.equal(core.nextVariantName([{name:'Variation 02'}]),'Variation 03');
  assert.equal(core.nextVariantName([{name:'Variation 01'},{name:'Variation 07'}]),'Variation 08');
});

test('SVG uses the same crop transform, exact output dimensions, and optional alpha', () => {
  assert.equal(typeof core.svg, 'function');
  const state = { ...core.DEFAULTS, background: '#000000', rotation: 0, panX: 0, panY: 0, zoom: 1, outline: false };
  const scene = { extent: 2, tiles: [{ points: [{x:0,y:0},{x:1,y:0},{x:0,y:1}], area: 0.5, type: 0 }], grid: [] };
  const transform = core.transform(scene, state, 100, 200);
  assert.deepEqual(transform.point({x:0,y:0}), {x:50,y:100});
  const opaque = core.svg(scene, state, 100, 200, false);
  const alpha = core.svg(scene, state, 100, 200, true);
  assert.match(opaque, /width="100" height="200"/);
  assert.match(opaque, /<rect/);
  assert.doesNotMatch(alpha, /<rect/);
  assert.match(alpha, /50,100/);
  assert.doesNotMatch(alpha, /NaN|Infinity/);
});

test('changing export resolution preserves relative artwork edge weight', () => {
  const scene={extent:2,tiles:[{points:[{x:0,y:0},{x:1,y:0},{x:0,y:1}],area:.5,type:0}],grid:[]};
  const a=core.svg(scene,core.DEFAULTS,100,200),b=core.svg(scene,core.DEFAULTS,200,400);
  const weight=svg=>Number(svg.match(/stroke-width="([\d.]+)"/)[1]);
  assert(Math.abs(weight(b)-weight(a)*2)<.001);
});

test('saved Phone and Square crops retain their aspect and normalized pan when fitted for comparison', () => {
  assert.equal(typeof core.fitCrop,'function');
  assert.deepEqual(core.fitCrop('phone',720,560),{width:315,height:560});
  assert.deepEqual(core.fitCrop('square',720,560),{width:560,height:560});
  const scene={extent:2,gridExtent:2},s={...core.DEFAULTS,crop:'phone',panX:.2,panY:-.1};
  const orig=core.transform(scene,s,90,160).point({x:1,y:1});
  const fit=core.fitCrop('phone',720,560),preview=core.transform(scene,s,fit.width,fit.height).point({x:1,y:1});
  assert(Math.abs(orig.x/90-preview.x/fit.width)<1e-9);
  assert(Math.abs(orig.y/160-preview.y/fit.height)<1e-9);
});

test('share state round trips without runtime-only selected tiles', () => {
  assert.equal(typeof core.encode, 'function');
  const state = { ...core.DEFAULTS, symmetry: 11, palette: 'signal', selected: ['temporary'] };
  assert.equal(core.decode(core.encode(state)).symmetry, 11);
  assert.equal(core.decode(core.encode(state)).palette, 'signal');
  assert.equal(core.decode(core.encode(state)).selected, undefined);
  assert.deepEqual(core.decode('garbage'), core.DEFAULTS);
});

test('adapting the original generator preserves the polygon area distribution, including special phases', () => {
  const vm=require('node:vm'),fs=require('node:fs'),path=require('node:path');
  let options;
  function Vue(o){options=o;} Vue.component=()=>{};
  vm.runInNewContext(fs.readFileSync(path.join(__dirname,'../../vue-definitions.js'),'utf8'),{Vue,Math:Object.assign(Object.create(Math),{seedrandom:require('../../libraries/seedrandom.min.js')}),document:{fullscreenEnabled:false}});
  for(const spec of [{symmetry:5,phase:0},{symmetry:5,phase:.37},{symmetry:7,phase:.5},{symmetry:19,phase:.3,disorder:.5}]){
    const state={...core.DEFAULTS,...spec,radius:45};
    const obj={...options.data,symmetry:state.symmetry,pattern:state.phase,radius:state.radius,randomSeed:state.seed,disorder:state.disorder,width:1000,height:1000,zoom:1,rotate:0};
    for(const[k,fn]of Object.entries(options.methods))obj[k]=fn.bind(obj);
    const cached={};for(const[k,fn]of Object.entries(options.computed))Object.defineProperty(obj,k,{get(){if(!(k in cached))cached[k]=fn.call(obj);return cached[k];}});
    const original=Object.values(obj.intersectionPoints).filter(t=>Math.abs(Number(t.area))>1e-6);
    const upgraded=core.generate(state).tiles;
    const counts=items=>items.reduce((acc,t)=>{const area=Math.abs(Number(t.area)).toFixed(3);acc[area]=(acc[area]||0)+1;return acc;},{});
    assert.deepEqual(counts(upgraded),counts(original),JSON.stringify(spec));
  }
});
