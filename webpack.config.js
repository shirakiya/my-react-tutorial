const webpack = require('webpack');

module.exports = {
  entry: './src/entry.js',
  output: {
    path: __dirname + '/public/',
    filename: 'bundle.js',
    publicPath: '/public/',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    // new webpack.optimize.UglifyJsPlugin({
    //   minimize: true,
    //   compress: {
    //     warnings: false,
    //   },
    //   output: {
    //     comments: false,
    //   },
    // })
  ]
}
