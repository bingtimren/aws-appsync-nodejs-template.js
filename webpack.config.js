module.exports = {
    context: __dirname,
    mode: 'development',
    entry: "./test.js",
    target: "node",
    devtool: "eval-source-map",
    output: {
      filename: "test.js"
    }
  }