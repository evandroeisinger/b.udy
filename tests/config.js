var webpack = require('webpack');

module.exports = function(config) {
  config.set({
    singleRun: true,
    basePath: '',
    browsers: ['Chrome'],
    frameworks: ['jasmine'],
    files: ['b.udy.js'],

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
    ],

    preprocessors: {
      'b.udy.js': ['webpack'],
    },

    webpackMiddleware: {
      noInfo: true
    },
  });
};