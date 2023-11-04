import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
