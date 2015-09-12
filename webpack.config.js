'use strict';

module.exports = {
  entry: {
    main: "./app/index.jsx", 
  },
  output: {
    path: "./dist", 
    filename: "[name].[hash].js"
  },
  resolve: {
    extensions: ["", ".js", ".jsx"], 
  },
  module: {
    loaders: [
      { test: /\.jsx$/, include: /app/, loaders: ['babel'] }
    ]
  }
};
