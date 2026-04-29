import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    // loadEnv is kept so VITE_* variables in .env.local are exposed to the client.
    // NOTE: Do NOT add non-VITE_ secrets (e.g. GEMINI_API_KEY) to the define block —
    // anything put there gets embedded verbatim in the client-side JS bundle.
    loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
