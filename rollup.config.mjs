import babel from "@rollup/plugin-babel"
import filesize from "rollup-plugin-filesize"
import resolve from '@rollup/plugin-node-resolve';

const config = {
    input: "./src/index.ts",
    output:{
        dir: "dist/bundle.js",
        format:"cjs"
    },
    external: ["react", /@babel\/runtime/],
    plugins:[babel({babelHelpers: "runtime", plugins: ["@babel/plugin-transform-runtime"]}), filesize(), resolve() ],

}

export default config