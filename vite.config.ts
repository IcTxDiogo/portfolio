import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Descomente a linha abaixo e configure com o nome do seu repositório para GitHub Pages
  // base: '/nome-do-seu-repositorio/',
});
