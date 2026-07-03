import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import VitePluginSitemap from "vite-plugin-sitemap";

// https://vite.dev/config/
export default defineConfig({
  server: {
    allowedHosts: ["*"],
  },
  plugins: [
    react(),
    tailwindcss(),
    VitePluginSitemap({
      hostname: "https://parsisricharan.qzz.io",
    }),
  ],
});
