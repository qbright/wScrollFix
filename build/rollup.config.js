const sourcemap = require("rollup-plugin-sourcemaps");
const resolve = require("rollup-plugin-node-resolve");
const server = require("rollup-plugin-serve");
const path = require("path");
const uglify = require("rollup-plugin-uglify");

module.exports = {
  input: "./lib/scrollFix.js",
  name: "wScrollFix",
  output: {
    file: "./dist/wScrollFix.js",
    format: "umd"
  },
  sourcemap: true,
  plugins: [
    sourcemap(),
    server({
      contentBase: path.resolve(__dirname, "../"),
      port: 8080

    })
  ],
  watch: {
    include: "lib/**/*"
  }
}




