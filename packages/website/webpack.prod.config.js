const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/widget.js',
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        '../address/dist/ascendon-selfcare-address.js',
        '../dashboard/dist/ascendon-selfcare-dashboard.js',
        './widget.html'
      ]
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat'
    }
  }
};
