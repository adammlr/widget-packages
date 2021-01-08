const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function getConfig(dirName) {
  return {
    mode: 'development',
    entry: './src/app.js',
    output: {
      path: path.resolve(dirName, 'dist')
    },
    devServer: {
      contentBase: './dist'
    },
    devtool: 'eval-cheap-module-source-map',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
      new HtmlWebpackPlugin({
        template: 'index.html'
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
}

module.exports = getConfig;
