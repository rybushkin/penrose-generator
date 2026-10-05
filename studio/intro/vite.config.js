import {defineConfig} from 'vite';
export default defineConfig({
  define:{'process.env.NODE_ENV':JSON.stringify('production')},
  build:{lib:{entry:'player.jsx',formats:['es'],fileName:()=> 'player.js'},minify:true,sourcemap:false},
});
