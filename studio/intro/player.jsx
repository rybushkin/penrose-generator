import React,{useLayoutEffect,useRef,Component} from 'react';
import {createRoot} from 'react-dom/client';
import {Player} from '@remotion/player';
import {useCurrentFrame,useVideoConfig} from 'remotion';

function Mosaic({scene,colors}){
  const canvas=useRef(null),frame=useCurrentFrame(),{width,height}=useVideoConfig();
  useLayoutEffect(()=>window.StudioIntro.draw(canvas.current,scene,frame,width,height,colors),[scene,frame,width,height,colors]);
  return <canvas ref={canvas} aria-hidden="true" style={{width:'100%',height:'100%',display:'block'}}/>;
}
class Boundary extends Component{
  state={failed:false};
  static getDerivedStateFromError(){return{failed:true};}
  componentDidCatch(){this.props.onError();}
  render(){return this.state.failed?null:this.props.children;}
}
export function mount(element,{scene,colors,portrait,onReady,onFrame,onPlay,onPause,onEnd,onError}){
  const root=createRoot(element);let player=null,disposed=false;
  const events={frameupdate:e=>onFrame(e.detail.frame),play:onPlay,pause:onPause,ended:onEnd,error:onError};
  function connect(ref){
    if(player)for(const [name,fn]of Object.entries(events))player.removeEventListener(name,fn);
    player=ref;
    if(player){for(const [name,fn]of Object.entries(events))player.addEventListener(name,fn);onReady();}
  }
  root.render(<Boundary onError={onError}><Player ref={connect} component={Mosaic}
    inputProps={{scene,colors}} durationInFrames={540} fps={30}
    compositionWidth={portrait?1080:1920} compositionHeight={portrait?1350:1080}
    style={{width:'100%',height:'100%'}} controls={false} autoPlay={false}
    loop={false} initiallyMuted moveToBeginningWhenEnded={false}/></Boundary>);
  return{
    play(){if(!disposed)player?.play();},pause(){player?.pause();},
    seek(frame){if(!disposed)player?.seekTo(frame);},frame(){return player?.getCurrentFrame()??0;},
    dispose(){if(disposed)return;disposed=true;player?.pause();root.unmount();player=null;},
  };
}
