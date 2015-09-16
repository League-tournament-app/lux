'use strict';
const webpack = require('webpack');
const GitSHAPlugin = require('git-sha-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

// The hash is generated from the git SHA hash.
// This means that it won't work very well on the dev server as
// we would have to change the index template with each change.
// the hash however is useful for long-term storage of files as well
// as cache-busting in IE.
let outputFilenamePattern = '[name].js';
let plugins = [
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')
];

const cssLoader = { test: /\.scss$/, include: /src/, loader: 'style!css!autoprefixer!sass' };
if(process.env.NODE_ENV === 'production') {
  outputFilenamePattern = '[name].[chunkgitsha].js';
  cssLoader.loader = ExtractTextPlugin.extract('style', 'css!autoprefixer!sass');
  plugins.push(new GitSHAPlugin({ length: 7 }));
  plugins.push(new ExtractTextPlugin('styles.css'));
}

module.exports = {
  entry: {
    main: "./src/index.jsx",
    vendor: ['react', 'react-router', 'react-dom']
  },
  output: {
    path: "./dist", 
    filename: outputFilenamePattern
  },
  plugins: plugins,
  resolve: {
    extensions: ["", ".js", ".jsx"], 
  },
  module: {
    loaders: [
      { test: /\.jsx$/, include: /src/, loaders: ['babel'] },
      { test: /\.scss$/, include: /src/, loader: cssLoader }
    ]
  },
  devServer: {
    host: process.env.IP || 'localhost',
    port: process.env.PORT || 8080,
    contentBase: './public',
    historyApiFallback: true
  }
};
