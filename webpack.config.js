const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    compress: true,
    port: 9000,
    publicPath: '/',
  },
};
