module.exports = {
  mode: "development",
  entry: {
    styles: "./src/styles.scss"
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
      {
        loader: "css-loader"
      },
      {
        loader: "sass-loader",
        options: {
          includePaths: ["node_modules/"]
        }
      }]
    }]
  }
};