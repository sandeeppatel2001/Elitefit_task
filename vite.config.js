import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/V2": {
        target: "https://elitefit4you.com/test-api/testimonials.json", // Correct the target URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/V2/, ""), // Remove /V2 prefix
      },
    },
  },
});
