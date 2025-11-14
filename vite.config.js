import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/react-smart-fhir-demo/',   // ← REQUIRED for GitHub Pages
});
