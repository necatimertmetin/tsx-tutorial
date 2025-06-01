// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // veya host: '0.0.0.0'
    port: 3000, // istersen portu buradan belirle
  },
});
