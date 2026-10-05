(function(root,factory){
  const api=factory(typeof module==='object'?require('./core.js'):root.StudioCore);
  if(typeof module==='object')module.exports=api;else root.StudioIntro=api;
})(typeof globalThis!=='undefined'?globalThis:this,function(Core){
  'use strict';
  const FPS=30,DURATION=540;
  const STATE=Object.freeze({...Core.DEFAULTS,symmetry:5,phase:.2,disorder:0,radius:55});
  const clamp=x=>Math.max(0,Math.min(1,x));
  const smooth=x=>{x=clamp(x);return x*x*(3-2*x);};
  const easeOut=x=>1-Math.pow(1-clamp(x),3);
  const mix=(a,b,t)=>a+(b-a)*t;
  function createScene(){
    const geometry=Core.generate(STATE);
    const tiles=geometry.tiles.map(t=>({...t,centre:{x:t.points.reduce((v,p)=>v+p.x,0)/4,y:t.points.reduce((v,p)=>v+p.y,0)/4}}));
    const nearest=tiles.filter(t=>t.type===0).sort((a,b)=>Math.hypot(a.centre.x,a.centre.y)-Math.hypot(b.centre.x,b.centre.y))[0];
    const neighbour=tiles.filter(t=>t.type===1).sort((a,b)=>Math.hypot(a.centre.x-nearest.centre.x,a.centre.y-nearest.centre.y)-Math.hypot(b.centre.x-nearest.centre.x,b.centre.y-nearest.centre.y))[0];
    const pair={x:(nearest.centre.x+neighbour.centre.x)/2,y:(nearest.centre.y+neighbour.centre.y)/2};
    const maxDistance=Math.max(...tiles.map(t=>Math.hypot(t.centre.x-pair.x,t.centre.y-pair.y)));
    tiles.forEach(t=>{
      const distance=Math.hypot(t.centre.x-pair.x,t.centre.y-pair.y)/maxDistance;
      t.accent=t.id===nearest.id||t.id%47===0;
      t.start=t.id===nearest.id?7:t.id===neighbour.id?23:90+distance*115+(t.id%11)*1.1;
      // Peripheral arrivals finish during the pullback, after the deep zoom.
      if(distance>.68)t.start=365+(distance-.68)*115+(t.id%7)*2;
      t.growth=t.id===nearest.id?'fast':t.id===neighbour.id?'smooth':t.accent?'spring':t.id%3===0?'fast':'smooth';
      t.duration=t.growth==='fast'?18:t.growth==='spring'?32:35+(t.id%5)*2;
      t.tone=t.id===neighbour.id||t.id%13===0?'ink':t.id%3===0?'muted':'outline';
    });
    return{...geometry,tiles,pair,target:{...nearest.centre},maxDistance};
  }
  function tileState(tile,frame){
    const p=clamp((frame-tile.start)/tile.duration);
    if(p===0)return{scale:0,opacity:0};
    if(p===1)return{scale:1,opacity:1};
    let scale=tile.growth==='fast'?easeOut(p):smooth(p);
    if(tile.growth==='spring')scale=p<.7?mix(0,1.025,easeOut(p/.7)):mix(1.025,1,smooth((p-.7)/.3));
    return{scale,opacity:smooth(Math.min(1,p*2.5))};
  }
  function camera(scene,frame,width,height){
    const short=Math.min(width,height),initial=short*.28,wide=short*.11,final=short*1.58/(scene.extent*2),deep=short*2.5;
    let scale=initial,x=scene.pair.x,y=scene.pair.y;
    if(frame>=90&&frame<240){const t=smooth((frame-90)/150);scale=mix(initial,wide,t);}
    if(frame>=240&&frame<315){const t=smooth((frame-240)/75);scale=Math.exp(mix(Math.log(wide),Math.log(deep),t));x=mix(scene.pair.x,scene.target.x,t);y=mix(scene.pair.y,scene.target.y,t);}
    if(frame>=315&&frame<360){scale=deep;x=scene.target.x;y=scene.target.y;}
    if(frame>=360&&frame<480){const t=smooth((frame-360)/120);scale=Math.exp(mix(Math.log(deep),Math.log(final),t));x=mix(scene.target.x,0,t);y=mix(scene.target.y,0,t);}
    if(frame>=480){scale=final;x=0;y=0;}
    return{scale,x,y};
  }
  function caption(frame){return frame<90?'Two shapes.':frame<240?'A different kind of order.':frame<360?'Look closer.':frame<480?'Order without repetition.':'Inspired by Sir Roger Penrose.';}
  function draw(canvas,scene,frame,width,height,colors){
    if(canvas.width!==width)canvas.width=width;
    if(canvas.height!==height)canvas.height=height;
    const ctx=canvas.getContext('2d'),cam=camera(scene,frame,width,height);
    ctx.fillStyle=colors.canvas;ctx.fillRect(0,0,width,height);
    const line=Math.max(1,Math.min(width,height)/900);
    ctx.lineJoin='round';ctx.lineWidth=line;
    for(const tile of scene.tiles){
      const state=tileState(tile,frame);if(!state.opacity)continue;
      const cx=width/2+(tile.centre.x-cam.x)*cam.scale,cy=height/2+(tile.centre.y-cam.y)*cam.scale;
      if(cx<-cam.scale*2||cx>width+cam.scale*2||cy<-cam.scale*2||cy>height+cam.scale*2)continue;
      ctx.globalAlpha=state.opacity;
      ctx.beginPath();tile.points.forEach((p,i)=>{
        const x=cx+(p.x-tile.centre.x)*state.scale*cam.scale,y=cy+(p.y-tile.centre.y)*state.scale*cam.scale;
        i?ctx.lineTo(x,y):ctx.moveTo(x,y);
      });ctx.closePath();
      if(tile.accent||tile.tone!=='outline'){
        ctx.fillStyle=tile.accent?colors.accent:tile.tone==='ink'?colors.ink:colors.surface;
        ctx.fill();ctx.strokeStyle=colors.canvas;
      }else ctx.strokeStyle=colors.line;
      ctx.stroke();
    }
    ctx.globalAlpha=1;
  }
  return{FPS,DURATION,STATE,createScene,tileState,camera,caption,draw};
});
