#!/user/bin/env node
import esbuildServe from "esbuild-serve";

esbuildServe(
  {
    logLevel: "info",
    entryPoints: ["src/js/index.js"],
    bundle: true,
    outfile: "www/bundle.js",
  },
  { root: "dist" }
);
