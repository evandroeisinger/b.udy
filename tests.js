module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: [
      'jasmine'
    ],

    files: [
      'tests/b.udy.js',
    ],

    preprocessors: {
      'tests/b.udy.js': ['webpack'],
    },

    webpackMiddleware: {
      noInfo: true,
    },

    reporters: [
      'progress',
    ],

    browsers: [
      'PhantomJS',
    ],

    colors: true,
    autoWatch: false,
    singleRun: true,
  });
};
