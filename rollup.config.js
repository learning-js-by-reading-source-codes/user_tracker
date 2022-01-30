// rollup.config.js
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import { terser } from "rollup-plugin-terser";
export default {
  input: "src/index.js",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "ZxmSpm",
  },
  plugins: [
    resolve(),
    babel({
      exclude: "**/node_modules/**",
    }),
    commonjs(),
    terser({
      compress: {
        drop_console: false,
      },
    }),
  ],
};
