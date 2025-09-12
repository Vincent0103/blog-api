import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import "dotenv/config";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    cors: {
      origin: process.env.ORIGIN_URL,
    },
  },
  build: {
    manifest: true,
    rollupOptions: {
      input: "src/main.tsx",
    },
  },
});
