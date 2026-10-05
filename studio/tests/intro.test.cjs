const {test}=require('node:test');
const assert=require('node:assert/strict');
const intro=require('../intro-motion.js');

test('intro is deterministic Penrose geometry: equal sides and only 36/72 degree rhombs',()=>{
  const a=intro.createScene(),b=intro.createScene();
  assert.deepEqual(a,b);
  assert.equal(new Set(a.tiles.map(t=>t.type)).size,2);
  for(const tile of a.tiles){
    assert.equal(tile.points.length,4);
    const edges=tile.points.map((p,i)=>{const q=tile.points[(i+1)%4];return{x:q.x-p.x,y:q.y-p.y};});
    const lengths=edges.map(p=>Math.hypot(p.x,p.y));
    assert(lengths.every(v=>Math.abs(v-lengths[0])<.00001));
    const cosine=(edges[0].x*edges[1].x+edges[0].y*edges[1].y)/(lengths[0]*lengths[1]);
    const acute=Math.acos(Math.abs(cosine))*180/Math.PI;
    assert(Math.min(Math.abs(acute-36),Math.abs(acute-72))<.001);
  }
});

test('tile growth stays bounded and every tile settles exactly at its real location',()=>{
  const scene=intro.createScene();
  for(let frame=0;frame<540;frame+=3)for(const tile of scene.tiles){
    const s=intro.tileState(tile,frame);
    assert(s.scale>=0&&s.scale<=1.03);
    assert(s.opacity>=0&&s.opacity<=1);
  }
  for(const tile of scene.tiles)assert.deepEqual(intro.tileState(tile,539),{scale:1,opacity:1});
});

test('camera moves into the accent tile, returns, and frames remain finite on both layouts',()=>{
  const scene=intro.createScene();
  for(const [w,h]of [[1920,1080],[1080,1350]]){
    const start=intro.camera(scene,0,w,h),close=intro.camera(scene,330,w,h),end=intro.camera(scene,539,w,h);
    assert(close.scale>start.scale*2);
    assert(close.scale>end.scale*5);
    for(let f=0;f<540;f++)assert(Object.values(intro.camera(scene,f,w,h)).every(Number.isFinite));
    assert.deepEqual(end,intro.camera(scene,480,w,h));
  }
});
