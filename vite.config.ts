import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  // Load environment variables based on the current mode (development/production)
  // Using '.' for current directory is more appropriate in Vite context
  const env = loadEnv(mode, ".", "");

  return {
    plugins: [react()],
    base: "/portfolio/", // Use environment variable or fallback to root
    optimizeDeps: {
      include: ["react", "react-dom"],
    },
    server: {
      port: 5173,
      host: true,
    },
  };
});
