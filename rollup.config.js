import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";

const production = process.env.NODE_ENV === "production";

const bundle = (config) => ({
  ...config,
  input: "src/index.ts",
  external: (id) => !/^[./]/.test(id),
});

export default [
  bundle({
    plugins: [
      esbuild({
        minify: production,
        sourcemap: !production,
      }),
    ],
    output: [
      {
        format: "es",
        file: "dist/index.js",
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      format: "es",
      file: "dist/index.d.ts",
    },
  }),
];
