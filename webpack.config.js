const path = require('path');

module.exports = {
  context: __dirname,
  entry: path.join(__dirname, 'index.js'),
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'build'),
    publicPath: 'http://localhost:8080/build/'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [path.join(__dirname, 'node_modules')],
        options: {
          presets: ['react'],
          plugins: ['transform-class-properties']
        }
      },
      {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']}
    ]
  }
};
