import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts"; // For generating .d.ts files

export default defineConfig({
  plugins: [
    react(),
    dts({
      // Plugin to generate TypeScript declaration files
      insertTypesEntry: true, // Creates a single entry point for types
    }),
  ],
  build: {
    // Library Mode configuration
    lib: {
      entry: resolve(__dirname, "src/index.ts"), // Your library's main entry point
      name: "AtomicFlow", // Global variable name (for UMD builds)
      formats: ["es", "umd"], // Output formats (ES Module, Universal Module Definition)
      fileName: (format) => `atomic-flow.${format}.js`,
    },
    rollupOptions: {
      // Ensure React and ReactDOM aren't bundled into your library
      external: ["react", "react-dom", "react/jsx-runtime"],
      output: {
        // Provide global variables to use in the UMD build
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime", // Adjust if needed based on React 19
        },
      },
    },
    sourcemap: true, // Generate source maps for debugging
    emptyOutDir: true, // Clean the output directory before building
  },
  // Optional: Alias for easier imports if needed
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, './src'),
  //   },
  // },
});
