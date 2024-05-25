import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: path.resolve(__dirname, "src"),
      },
      {
        find: "@ui",
        replacement: path.resolve(__dirname, "src/components/ui"),
      },
      {
        find: "@element",
        replacement: path.resolve(__dirname, "src/components/element"),
      },
      {
        find: "@context",
        replacement: path.resolve(__dirname, "src/components/context"),
      },
    ],
  },
});
