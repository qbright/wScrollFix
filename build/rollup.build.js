const uglify = require("rollup-plugin-uglify");
const babel = require('rollup-plugin-babel');
module.exports = {
  input: "./lib/scrollFix.js",
  name: "wScrollFix",
  output: {
    file: "./dist/wScrollFix.js",
    format: "umd"
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    uglify()
  ]
}




