import path from 'path'
const assetsPath = path.resolve(__pkg._assetsPath);

export default {
  context: path.resolve(assetsPath, 'src/js'),

  entry: {
    scripts: './compose'
//    polyfills: ['./vendors/modernizr', 'flexibility']
  },

  output: {
    path: path.resolve(assetsPath, 'dist', 'js'),
    filename: '[name].js'
  },

  externals: {
    'jquery': 'jQuery',
    'lodash': '_',
    'underscore': '_',
    'backbone': 'Backbone'
  },

  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel'
    }]
  }
}