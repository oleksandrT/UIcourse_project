/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    sourcemaps: {
      enabled: false
    },
    sassOptions: {
      inputFile: 'app.scss',
      sourceMap: false,
      extension: 'scss'
    }
  });

  // app.trees.styles = app.concatFiles(app.trees.app, {
  //   inputFiles: [
  //     'styles/*.scss',
  //     'styles/*/*.scss'
  //   ],
  //   outputFile: 'app.scss',
  //   description: 'Concat: Sass'
  // });

  

  return app.toTree();
};
