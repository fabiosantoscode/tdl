const path = require('path');

const babelLoaderConfig = process.env['NODE_ENV'] === 'production' ?
  [{
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'babel',
    query: {
      presets: ['stage-0']
    }
  }] : []

module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [].concat(babelLoaderConfig)
  }
};
