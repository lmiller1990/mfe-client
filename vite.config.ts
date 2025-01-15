import { defineConfig } from "vite";
import { federation } from "@module-federation/vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  build: {
    target: "esnext",
  },
  base: "/mfe-client/",
  plugins: [
    vue(),
    federation({
      name: "mfe-client",
      filename: "remoteEntry.js",
      exposes: {
        "./place": "./src/place.ts",
      },
      remotes: {
        mfe_host: {
          name: "mfe_host",
          entry: "https://lmiller1990.github.io/mfe-host/remoteEntry.js",
          type: "module",
        },
      },
    }),
  ],
});
