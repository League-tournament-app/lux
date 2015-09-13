'use strict';
const webpack = require('webpack');
const GitSHAPlugin = require('git-sha-webpack-plugin');

// The hash is generated from the git SHA hash.
// This means that it won't work very well on the dev server as
// we would have to change the index template with each change.
// the hash however is useful for long-term storage of files as well
// as cache-busting in IE.
let outputFilenamePattern = '[name].js';
let plugins = [
  new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js');
];

if(process.env.NODE_ENV === 'production') {
  outputFilenamePattern = '[name].[chunkgitsha].js';
  plugins.push(new GitSHAPlugin({ length: 7 }));
}

module.exports = {
  entry: {
    main: "./app/index.jsx",
    vendor: ['react', 'react-router']
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
      { test: /\.jsx$/, include: /app/, loaders: ['babel'] }
    ]
  },
  devServer: {
    port: 8080,
    contentBase: './public',
    historyApiFallback: true
  }
};
