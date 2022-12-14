const path = require("path");
const HtmlWebpagePlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    dev: path.resolve(__dirname, "./src/index.js"),
  },

  output: {
    filename: "[name].bundle.js", //crea el archivo .js
    path: path.resolve(__dirname, "./build"), //crea la carpeta build
  },
  devServer: {
    open: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      { 
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource',
      },     
      {
        test: /\.s[ac]ss$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }

      
    ],
  },

  plugins: [
    new HtmlWebpagePlugin({
      title: "my webPage",
    }),
  ],
};
