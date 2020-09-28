const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/utils.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'utils.min.js',
    library: 'Utils',
    libraryTarget: 'umd',
  },
  externals: {
    inkjs: {
      commonjs: 'inkjs',
      commonjs2: 'inkjs',
      amd: 'inkjs',
      root: 'inkjs',
    },
  },
};
