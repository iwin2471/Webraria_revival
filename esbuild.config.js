#!/user/bin/env node
import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    logLevel: "info",
    entryPoints: ["./src/js/index.ts"],
    loader: { ".mts": "ts", ".ts": "ts" },
    minify: true,
    bundle: true,
    sourcemap: true,
    outfile: "www/bundle.js",
  },
  { root: "www" }
);
