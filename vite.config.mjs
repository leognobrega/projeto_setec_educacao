import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: [
        'index.html',
        'selecao-frente.html',
        'login.html',
        'frente-infantil.html',
        'frente-adulto.html',
        'frente-reeducacional.html',
      ],
    },
  },
});