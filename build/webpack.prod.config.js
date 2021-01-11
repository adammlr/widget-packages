const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

function getConfig(dirname, package) {
  return {
    mode: 'production',
    entry: './src/widget.js',
    output: {
      path: path.resolve(dirname, 'dist'),
      filename: `ascendon-selfcare-${package}.js`,
      library: `ascendonSelfcare${package}`
    },
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
      }),
      new CopyWebpackPlugin({
        patterns: ['./widget.html']
      }),
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
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
