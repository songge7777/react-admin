import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import { resolve } from "path";
/** 路径查找 */
const pathResolve = (dir: string): string => {
  return resolve(__dirname, ".", dir);
};
export default defineConfig(({ mode, command }) => {
  return {
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".json"],
      alias: {
        "@": pathResolve("src")
      }
    },
    plugins: [react()],
    build: {
      sourcemap: true
    },
  };
});
