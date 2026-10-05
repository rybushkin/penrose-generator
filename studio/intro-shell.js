(function(){
  'use strict';
  const $=id=>document.getElementById(id),M=window.StudioIntro;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)'),portrait=matchMedia('(max-width: 1000px)');
  let controller=null,scene=null,editorPromise=null,generation=0,frame=0,playing=false,hiddenPause=false;
  const colors=(()=>{const css=getComputedStyle(document.documentElement),read=k=>css.getPropertyValue(k).trim();return{canvas:read('--canvas'),ink:read('--ink'),accent:read('--accent'),surface:read('--intro-tile-surface'),line:read('--intro-scene-line')};})();
  function stateLabel(){
    $('intro-pause').textContent=playing?'Pause':frame>=539?'Play again':'Play';
    $('intro-pause').setAttribute('aria-label',playing?'Pause intro':frame>=539?'Play intro again':'Play intro');
  }
  function poster(){
    if(!scene||$('intro').hidden)return;
    const w=portrait.matches?1080:1920,h=portrait.matches?1350:1080;
    M.draw($('intro-poster'),scene,539,w,h,colors);
  }
  function fallback(){
    controller?.dispose();controller=null;playing=false;frame=539;
    $('intro-stage').classList.remove('is-ready');poster();
    $('intro-caption').textContent='Inspired by Sir Roger Penrose.';
    $('intro-pause').disabled=true;$('intro-replay').disabled=true;
    $('intro-pause').textContent='Still frame';
  }
  async function loadPlayer(resume=true){
    const token=++generation;
    try{
      const module=await import('./intro/dist/player.js');
      if(token!==generation||$('intro').hidden)return;
      controller=module.mount($('intro-player'),{scene,colors,portrait:portrait.matches,
        onReady(){
          if(token!==generation)return;
          $('intro-stage').classList.add('is-ready');$('intro-pause').disabled=false;$('intro-replay').disabled=false;
          // React mounts asynchronously, so the controller is assigned before this callback.
          if(reduced.matches||frame>=539){frame=539;controller.seek(539);stateLabel();}
          else{controller.seek(frame);if(resume)controller.play();else stateLabel();}
        },
        onFrame(f){frame=f;$('intro-caption').textContent=M.caption(f);},
        onPlay(){playing=true;stateLabel();},onPause(){playing=false;stateLabel();},
        onEnd(){playing=false;frame=539;stateLabel();},onError(){fallback();},
      });
    }catch{if(token===generation&&!$('intro').hidden)fallback();}
  }
  function enter(){
    ++generation;controller?.dispose();controller=null;playing=false;
    $('intro').hidden=true;$('editor').hidden=false;
    window.scrollTo(0,0);
    if(!editorPromise){
      editorPromise=new Promise((resolve,reject)=>{
        const script=document.createElement('script');script.src='studio.js';script.onload=resolve;script.onerror=reject;document.body.append(script);
      }).catch(()=>{
        editorPromise=null;$('editor').hidden=true;$('intro').hidden=false;
        $('entry-status').textContent='Could not open the studio. Please try again.';
        fallback();
      });
    }
    editorPromise.then(()=>{if(!$('editor').hidden)$('artwork').focus({preventScroll:true});});
  }
  $('enter-studio').addEventListener('click',enter);
  $('intro-pause').addEventListener('click',()=>{
    if(!controller)return;
    if(playing)controller.pause();else{if(frame>=539)controller.seek(0);controller.play();}
  });
  $('intro-replay').addEventListener('click',()=>{controller?.seek(0);controller?.play();});
  window.addEventListener('hashchange',()=>{if(location.hash.startsWith('#s=')&&$('editor').hidden)enter();});
  document.addEventListener('visibilitychange',()=>{
    if(document.hidden){hiddenPause=playing;controller?.pause();}
    else if(hiddenPause){hiddenPause=false;controller?.play();}
  });
  reduced.addEventListener('change',()=>{if(reduced.matches&&controller){controller.pause();controller.seek(539);frame=539;stateLabel();}});
  portrait.addEventListener('change',()=>{
    if($('intro').hidden)return;
    const resume=playing;
    controller?.dispose();controller=null;playing=false;$('intro-stage').classList.remove('is-ready');poster();loadPlayer(resume);
  });
  if(location.hash.startsWith('#s=')){enter();return;}
  scene=M.createScene();poster();loadPlayer();
})();
