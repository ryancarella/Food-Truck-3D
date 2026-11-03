import { defineConfig } from 'vite';
export default defineConfig({base:'/Food-Truck-3D/',build:{target:'es2022',chunkSizeWarningLimit:1000,rollupOptions:{input:{studio:'index.html',viewer:'viewer.html'}}}});
