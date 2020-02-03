import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";

import pkg from "./package.json";

let tsconfig = {
  compilerOptions: { declaration: true, jsx: "react", isolatedModules: false }
};

export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: pkg.module,
      format: "es",
      sourcemap: true
    }
  ],
  plugins: [
    postcss({
      plugins: [],
      minimize: true,
      sourceMap: "inline"
    }),
    external({
      includeDependencies: true
    }),
    url(),
    svgr(),
    resolve(),
    typescript({
      rollupCommonJSResolveHack: true,
      exclude: ["**/__tests__/**", "**/pages/**"],
      clean: true,
      tsconfigOverride: tsconfig
    }),
    babel({
      presets: ["react-app"],
      plugins: [
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-proposal-optional-chaining",
        "@babel/plugin-syntax-dynamic-import",
        "@babel/plugin-proposal-class-properties",
        "transform-react-remove-prop-types"
      ],
      exclude: "node_modules/**",
      runtimeHelpers: true
    }),
    commonjs(),
    terser()
  ]
};
