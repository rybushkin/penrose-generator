(function () {
  'use strict';
  const C = window.StudioCore, $ = id => document.getElementById(id);
  const storageKey='bnb-pattern-studio-variants-v02', sessionKey='bnb-pattern-studio-session-v02';
  let state={...C.DEFAULTS}, variants=[], scene, geometryKey='', selected=new Set(), raf=0, toastTimer;
  let currentPreset=0, pendingExport=false;
  try { const saved=localStorage.getItem(sessionKey); if(saved) state=C.decode(saved); variants=C.loadVariants(localStorage.getItem(storageKey)); }
  catch { toast('Storage unavailable. You can still create and export.'); }
  if(location.hash.startsWith('#s=')) state=C.decode(location.hash.slice(3));
  currentPreset=findPreset(state);
  const controls=['symmetry','phase','radius','disorder','seed','rotation','zoom','crop','background','foreground','outline','filled'];

  function findPreset(s) { return C.PRESETS.findIndex(p=>['symmetry','phase','radius','disorder'].every(k=>p[k]===s[k])); }

  function toast(message) {
    $('toast').textContent=message; $('toast').classList.add('visible');
    clearTimeout(toastTimer); toastTimer=setTimeout(()=>$('toast').classList.remove('visible'),4200);
  }
  function persistSession() { try{localStorage.setItem(sessionKey,C.encode(state));}catch{} }
  function update(patch, resetSelection=false) {
    state=C.sanitize({...state,...patch}); if(resetSelection)selected.clear();
    sync(); persistSession(); schedule();
  }
  function sync() {
    controls.forEach(k=>{const el=$(k);if(el.type==='checkbox')el.checked=state[k];else el.value=state[k];});
    $('color-mode').value=state.colorMode;
    ['symmetry','phase','radius','disorder','rotation','zoom'].forEach(k=>{
      const value=state[k];
      $('value-'+k).textContent=k==='symmetry'?String(value).padStart(2,'0'):k==='rotation'?Math.round(value)+'°':k==='zoom'?Math.round(value*100)+'%':k==='phase'?value.toFixed(3):k==='disorder'?Math.round(value*100)+'%':value;
    });
    $('symmetry-note').textContent=state.symmetry===5?'Five directions. Never repeating.':`${state.symmetry} directions. A different kind of order.`;
    $('lock-palette').textContent=state.paletteLocked?'Locked ◆':'Lock ◇'; $('lock-palette').setAttribute('aria-pressed',state.paletteLocked);
    $('view-tiles').setAttribute('aria-pressed',state.view==='tiles'); $('view-grid').setAttribute('aria-pressed',state.view==='grid');
    $('zoom-readout').textContent=Math.round(state.zoom*100)+'%';
    $('clear-selection').disabled=selected.size===0;
    $('canvas-format').textContent=state.crop.toUpperCase()+' / '+C.CROPS[state.crop].join(':');
    document.querySelectorAll('.palette').forEach(el=>el.setAttribute('aria-pressed',el.dataset.palette===state.palette));
    document.querySelectorAll('.preset').forEach((el,i)=>el.setAttribute('aria-pressed',i===currentPreset));
    $('scene-name').textContent=currentPreset>=0?String(currentPreset+1).padStart(2,'0')+' / '+C.PRESETS[currentPreset].name:'— / Custom composition';
  }
  function schedule() { if(!raf)raf=requestAnimationFrame(()=>{raf=0; render();}); }
  function ensureScene() {
    const key=[state.symmetry,state.phase,state.radius,state.disorder,state.seed].join(':');
    if(key!==geometryKey){scene=C.generate(state);geometryKey=key;selected.clear();}
  }
  function draw(canvas, sc, s, w, h, transparent=false, selection=null) {
    canvas.width=Math.round(w); canvas.height=Math.round(h);
    const ctx=canvas.getContext('2d'); ctx.clearRect(0,0,w,h);
    if(!transparent){ctx.fillStyle=s.background;ctx.fillRect(0,0,w,h);}
    const tr=C.transform(sc,s,w,h);
    ctx.lineJoin='round';ctx.lineWidth=C.strokeWidth(s,w,h);
    if(s.view==='grid') {
      ctx.strokeStyle=s.foreground;ctx.globalAlpha=.6;
      for(const line of sc.grid){
        const a=tr.point({x:line.index*line.cos-line.sin*sc.gridExtent*3,y:line.index*line.sin+line.cos*sc.gridExtent*3});
        const b=tr.point({x:line.index*line.cos+line.sin*sc.gridExtent*3,y:line.index*line.sin-line.cos*sc.gridExtent*3});
        ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.lineTo(b.x,b.y);ctx.stroke();
      }ctx.globalAlpha=1;
    }else for(const tile of sc.tiles){
      ctx.beginPath(); tile.points.forEach((p,i)=>{const q=tr.point(p);i?ctx.lineTo(q.x,q.y):ctx.moveTo(q.x,q.y);}); ctx.closePath();
      if(s.filled){ctx.fillStyle=C.color(tile,s);ctx.fill();}
      if(s.outline){ctx.strokeStyle=s.filled?s.background:s.foreground;ctx.stroke();}
      if(selection&&selection.has(tile.id)){ctx.save();ctx.strokeStyle=s.foreground;ctx.lineWidth=3;ctx.stroke();ctx.restore();}
    }
  }
  function render() {
    ensureScene();
    const available=$('artwork-wrap').clientWidth;
    const maxHeight=window.innerWidth>680?Math.max(300,window.innerHeight-493):500;
    const {width:w,height:h}=C.fitCrop(state.crop,available,maxHeight);
    const canvas=$('artwork');canvas.style.width=w+'px';canvas.style.height=h+'px';
    const dpr=Math.min(devicePixelRatio||1,2);draw(canvas,scene,state,w*dpr,h*dpr,false,selected);
    $('tile-count').textContent=scene.tiles.length.toLocaleString('en-US')+' TILES / '+state.symmetry+' AXES';
    $('clear-selection').disabled=selected.size===0;
    if($('export-dialog').open)renderExportPreview();
  }
  function resetCamera() { update({panX:0,panY:0,zoom:C.PRESETS[Math.max(0,currentPreset)].zoom}); }
  function zoomBy(factor, cx=0,cy=0) {
    const z=Math.max(.25,Math.min(5,state.zoom*factor)),r=z/state.zoom;
    update({zoom:z,panX:cx-(cx-state.panX)*r,panY:cy-(cy-state.panY)*r});
  }
  function buildPresets() {
    C.PRESETS.forEach((p,i)=>{
      const button=document.createElement('button');button.className='preset';button.setAttribute('aria-label',p.name+' preset: '+p.subtitle);button.setAttribute('aria-pressed',i===currentPreset);
      const canvas=document.createElement('canvas');canvas.setAttribute('aria-hidden','true');button.append(canvas);
      const label=document.createElement('span');label.textContent=p.name;button.append(label);
      const s=C.sanitize({...C.DEFAULTS,...p,radius:35,zoom:1.5});draw(canvas,C.generate(s),s,208,112);
      button.addEventListener('click',()=>{currentPreset=i;update({...p,panX:0,panY:0},true);});$('presets').append(button);
    });
    Object.entries(C.PALETTES).forEach(([id,p])=>{
      const button=document.createElement('button');button.className='palette';button.dataset.palette=id;button.setAttribute('aria-pressed',id===state.palette);
      const label=document.createElement('span');label.textContent=p.name;const swatches=document.createElement('span');swatches.className='swatches';swatches.setAttribute('aria-hidden','true');
      p.colors.forEach(color=>{const swatch=document.createElement('i');swatch.style.background=color;swatches.append(swatch);});button.append(label,swatches);
      button.addEventListener('click',()=>update({palette:id}));$('palettes').append(button);
    });
  }
  function activateTab(name, focus=false) {
    document.querySelectorAll('[data-tab]').forEach(button=>{const active=button.dataset.tab===name;button.setAttribute('aria-selected',active);button.tabIndex=active?0:-1;if(active&&focus)button.focus();});
    ['geometry','color','composition'].forEach(k=>$('panel-'+k).hidden=k!==name);
  }
  document.querySelectorAll('[data-tab]').forEach(button=>{
    button.addEventListener('click',()=>activateTab(button.dataset.tab));
    button.addEventListener('keydown',e=>{
      const names=['geometry','color','composition'];let i=names.indexOf(button.dataset.tab);
      if(e.key==='ArrowRight')i=(i+1)%3;else if(e.key==='ArrowLeft')i=(i+2)%3;else if(e.key==='Home')i=0;else if(e.key==='End')i=2;else return;
      e.preventDefault();activateTab(names[i],true);
    });
  });
  controls.forEach(k=>$(k).addEventListener('input',e=>{
    const el=e.target,v=el.type==='checkbox'?el.checked:['color','select-one'].includes(el.type)?el.value:Number(el.value);
    if(['symmetry','phase','radius','disorder'].includes(k))currentPreset=-1;
    update({[k]:v});
  }));
  $('color-mode').addEventListener('change',()=>update({colorMode:$('color-mode').value}));
  $('lock-palette').addEventListener('click',()=>update({paletteLocked:!state.paletteLocked}));
  $('new-composition').addEventListener('click',()=>{currentPreset=-1;state=C.newComposition(state);update({},true);});
  $('zoom-in').addEventListener('click',()=>zoomBy(1.15));$('zoom-out').addEventListener('click',()=>zoomBy(1/1.15));
  $('fit').addEventListener('click',resetCamera);$('reset-camera').addEventListener('click',resetCamera);
  $('view-tiles').addEventListener('click',()=>update({view:'tiles'},true));$('view-grid').addEventListener('click',()=>update({view:'grid'},true));
  $('clear-selection').addEventListener('click',()=>{selected.clear();schedule();});

  const pointers=new Map();let drag=null,pinch=null;
  const canvas=$('artwork');
  canvas.addEventListener('pointerdown',e=>{
    if(e.button!==0)return;canvas.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pointers.size===1)drag={x:e.clientX,y:e.clientY,panX:state.panX,panY:state.panY,moved:false};
    if(pointers.size===2){const [a,b]=[...pointers.values()];pinch={distance:Math.hypot(a.x-b.x,a.y-b.y),zoom:state.zoom};if(drag)drag.moved=true;}
  });
  canvas.addEventListener('pointermove',e=>{
    if(!pointers.has(e.pointerId))return;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});
    if(pointers.size===2&&pinch){const[a,b]=[...pointers.values()];update({zoom:pinch.zoom*Math.hypot(a.x-b.x,a.y-b.y)/Math.max(1,pinch.distance)});return;}
    if(!drag)return;const rect=canvas.getBoundingClientRect(),unit=Math.min(rect.width,rect.height);
    const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.hypot(dx,dy)>5)drag.moved=true;
    if(drag.moved)update({panX:drag.panX+dx/unit,panY:drag.panY+dy/unit});
  });
  function endPointer(e) {
    if(!pointers.has(e.pointerId))return;
    if(pointers.size===1&&drag&&!drag.moved&&e.type!=='pointercancel')selectTile(e);
    pointers.delete(e.pointerId);pinch=null;drag=null;
  }
  canvas.addEventListener('pointerup',endPointer);canvas.addEventListener('pointercancel',endPointer);
  canvas.addEventListener('wheel',e=>{
    e.preventDefault();const r=canvas.getBoundingClientRect(),u=Math.min(r.width,r.height);
    zoomBy(Math.exp(-e.deltaY*.0012),(e.clientX-r.left-r.width/2)/u,(e.clientY-r.top-r.height/2)/u);
  },{passive:false});
  canvas.addEventListener('keydown',e=>{
    const amount=e.shiftKey?.1:.025;
    const directions={ArrowLeft:{panX:state.panX-amount},ArrowRight:{panX:state.panX+amount},ArrowUp:{panY:state.panY-amount},ArrowDown:{panY:state.panY+amount}};
    if(directions[e.key]){e.preventDefault();update(directions[e.key]);}
    else if(e.key==='+'||e.key==='='){e.preventDefault();zoomBy(1.15);}else if(e.key==='-'){e.preventDefault();zoomBy(1/1.15);}else if(e.key==='0'){e.preventDefault();resetCamera();}else if(e.key==='Escape'){selected.clear();schedule();}
  });
  function selectTile(e) {
    if(state.view!=='tiles')return;
    const r=canvas.getBoundingClientRect(),x=(e.clientX-r.left)*canvas.width/r.width,y=(e.clientY-r.top)*canvas.height/r.height;
    const tr=C.transform(scene,state,canvas.width,canvas.height),ctx=canvas.getContext('2d');
    for(let i=scene.tiles.length-1;i>=0;i--){const t=scene.tiles[i];ctx.beginPath();t.points.forEach((p,j)=>{const q=tr.point(p);j?ctx.lineTo(q.x,q.y):ctx.moveTo(q.x,q.y);});ctx.closePath();
      if(ctx.isPointInPath(x,y)){if(selected.has(t.id))selected.delete(t.id);else selected.add(t.id);schedule();return;}}
  }
  function saveVariants(next) {
    try{localStorage.setItem(storageKey,JSON.stringify(next));variants=next;renderVariants();return true;}
    catch{toast('Could not save. Browser storage is unavailable or full. Export your artwork instead.');return false;}
  }
  $('save-variant').addEventListener('click',()=>{
    if(variants.length>=12){toast('12 variations saved. Remove one to make room.');return;}
    const id=String(Date.now())+'-'+Math.floor(Math.random()*10000);
    saveVariants([...variants,{id,name:C.nextVariantName(variants),state:{...state}}]);
  });
  function restore(v) {if(!v)return;state=C.sanitize(v.state);currentPreset=findPreset(state);selected.clear();sync();persistSession();schedule();}
  function renderVariants() {
    const list=$('variant-list');list.replaceChildren();$('variant-count').textContent=String(variants.length).padStart(2,'0');$('compare').disabled=variants.length<2;
    if(!variants.length){const p=document.createElement('p');p.className='empty-variants';p.append('Keep a good accident.',document.createElement('br'));const span=document.createElement('span');span.textContent='Save a variation to come back to it.';p.append(span);list.append(p);return;}
    variants.forEach(v=>{
      const item=document.createElement('div');item.className='variant';const button=document.createElement('button');button.className='variant-restore';button.setAttribute('aria-label','Restore '+v.name);
      const thumb=document.createElement('canvas');thumb.setAttribute('aria-hidden','true');const size=C.fitCrop(v.state.crop,276,130);draw(thumb,C.generate(v.state),v.state,size.width,size.height);
      const name=document.createElement('span');name.className='variant-name';name.textContent=v.name;button.append(thumb,name);button.addEventListener('click',()=>restore(v));
      const remove=document.createElement('button');remove.className='variant-remove';remove.textContent='×';remove.setAttribute('aria-label','Remove '+v.name);remove.addEventListener('click',()=>saveVariants(variants.filter(x=>x.id!==v.id)));item.append(button,remove);list.append(item);
    });
  }
  $('compare').addEventListener('click',()=>{
    ['a','b'].forEach((side,i)=>{const select=$('compare-'+side);select.replaceChildren();variants.forEach(v=>{const op=document.createElement('option');op.value=v.id;op.textContent=v.name;select.append(op);});select.value=variants[i].id;});
    $('compare-dialog').showModal();renderComparison();
  });
  function renderComparison(){['a','b'].forEach(side=>{const v=variants.find(v=>v.id===$('compare-'+side).value);if(v){const size=C.fitCrop(v.state.crop,720,560);draw($('compare-canvas-'+side),C.generate(v.state),v.state,size.width,size.height);}});}
  ['a','b'].forEach(side=>{$('compare-'+side).addEventListener('change',renderComparison);$('use-'+side).addEventListener('click',()=>{restore(variants.find(v=>v.id===$('compare-'+side).value));$('compare-dialog').close();});});
  $('share').addEventListener('click',async()=>{
    const url=location.href.split('#')[0]+'#s='+C.encode(state);
    try{await navigator.clipboard.writeText(url);toast('Composition link copied.');}
    catch{window.prompt('Copy this composition link:',url);}
  });
  function exportDimensions(){const edge=Number($('export-size').value),[a,b]=C.CROPS[state.crop];return {width:Math.round(edge*a/Math.max(a,b)),height:Math.round(edge*b/Math.max(a,b))};}
  function renderExportPreview(){
    const {width,height}=exportDimensions(),factor=Math.min(360/width,145/height);
    draw($('export-preview'),scene,state,width*factor,height*factor,$('transparent').checked);
    $('export-dimensions').textContent=`${width} × ${height} px · ${state.crop}${$('transparent').checked?' · transparent':''}`;
  }
  $('open-export').addEventListener('click',()=>{ensureScene();$('export-dialog').showModal();renderExportPreview();});
  ['export-size','export-type','transparent'].forEach(k=>$(k).addEventListener('change',renderExportPreview));
  document.querySelectorAll('.close-dialog').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
  document.querySelectorAll('dialog').forEach(dialog=>dialog.addEventListener('click',e=>{if(e.target!==dialog)return;const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}));
  function downloadBlob(blob,name){
    const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),2000);
  }
  $('download').addEventListener('click',()=>{
    if(pendingExport)return;pendingExport=true;$('download').disabled=true;
    const {width,height}=exportDimensions(),alpha=$('transparent').checked,type=$('export-type').value;
    const name=`bnb-pattern-${state.symmetry}-${state.seed}-${width}x${height}.${type}`;
    try{
      if(type==='svg'){downloadBlob(new Blob([C.svg(scene,state,width,height,alpha)],{type:'image/svg+xml'}),name);finishExport();}
      else{const out=document.createElement('canvas');draw(out,scene,state,width,height,alpha);out.toBlob(blob=>{if(blob){downloadBlob(blob,name);finishExport();}else finishExport(false);},'image/png');}
    }catch{finishExport(false);}
  });
  function finishExport(ok=true){pendingExport=false;$('download').disabled=false;toast(ok?'Artwork exported. Make something with it.':'Export failed. Try a smaller image.');}
  window.addEventListener('resize',schedule);
  window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#s=')){currentPreset=-1;state=C.decode(location.hash.slice(3));update({},true);}});
  buildPresets();renderVariants();sync();schedule();
})();
