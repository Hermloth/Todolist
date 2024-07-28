const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  entry: './src/javascript.js',
  devtool: 'inline-source-map',
  mode: process.env.NODE_ENV ?? 'development',
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './src/template.html',
    }),

    // Webpack will automatically replace any process.env.<key> with the defined during build
    // environment variables are always string like - so we json encode "true"
    // We don't need to put these under process.env this can replace any string
    // Note this plugin does _direct_ replacement so everything needs to be in a double string or json encoded https://webpack.js.org/plugins/define-plugin/
    new webpack.DefinePlugin({
      "process.env.IS_PRODUCTION": JSON.stringify(process.env.NODE_ENV === "production" ? true : false),
    
      "GLOBAL_TEST": JSON.stringify("I'm defined in Webpack!!")
    })
],    
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};