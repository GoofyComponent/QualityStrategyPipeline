import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/ on https://GoofyComponent.github.io/QualityStrategyPipeline
export default defineConfig({
  base: "/QualityStrategyPipeline/",
  plugins: [react()],
});
