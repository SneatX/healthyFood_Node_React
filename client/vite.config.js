import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import dotenv from 'dotenv';

// Carga el archivo .env desde un nivel superior
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Accede a la variable de entorno
const port = process.env.VITE_PORT || 3000;

export default defineConfig({
  plugins: [react()],
  server: {
    port: Number(port),
  },
});
