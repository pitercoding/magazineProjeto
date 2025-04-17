import tailwindcss from "tailwindcss";
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  // Define o caminho base do projeto (mantenha se for necessário)
  base: "/MagazineHashtag/",

  plugins: [],

  resolve: {
    alias: {
      // Alias para facilitar a importação de arquivos
      '@': resolve(__dirname, 'src'),
    },
  },

  css: {
    postcss: {
      plugins: [tailwindcss], // Configuração do PostCSS para o TailwindCSS
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"), // Página principal
        checkout: resolve(__dirname, "checkout.html"), // Página de checkout
        pedidos: resolve(__dirname, "pedidos.html"), // Página de pedidos
      },
    },
    // Você pode adicionar outras opções de build, como otimizações
  },
});
