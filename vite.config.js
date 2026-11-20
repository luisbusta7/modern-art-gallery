import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  // Rutas relativas para que funcione en GitHub Pages
  base: "./",
  build: {
    rollupOptions: {
      // Proyecto multipágina: Vite solo compila index.html si no se indica
      input: {
        main: resolve(__dirname, "index.html"),
        location: resolve(__dirname, "location.html"),
      },
    },
  },
});
