const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  plugins: [new CleanWebpackPlugin()],
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'ink-story-manager.js',
    library: 'InkStoryManager',
    libraryTarget: 'umd',
  },
};
