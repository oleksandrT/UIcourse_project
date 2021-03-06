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


  // Pikaday datetime picker assets
  app.import('bower_components/moment/moment.js');
  app.import("bower_components/pikaday-time-picker/pikaday.js");
  // app.import("bower_components/pikaday-time-picker/plugins/pikaday.jquery.js");

  app.import("bower_components/glyphicons-halflings/css/glyphicons-halflings.css");
  app.import('bower_components/glyphicons-halflings/css/glyphicons-halflings.css.map', {
    destDir: 'assets'
  });
  app.import('bower_components/glyphicons-halflings/fonts/glyphicons-halflings-regular.eot', {
    destDir: 'fonts'
  });
  app.import('bower_components/glyphicons-halflings/fonts/glyphicons-halflings-regular.ttf', {
    destDir: 'fonts'
  });
  app.import('bower_components/glyphicons-halflings/fonts/glyphicons-halflings-regular.svg', {
    destDir: 'fonts'
  });
  app.import('bower_components/glyphicons-halflings/fonts/glyphicons-halflings-regular.woff', {
    destDir: 'fonts'
  });
  app.import('bower_components/glyphicons-halflings/fonts/glyphicons-halflings-regular.woff2', {
    destDir: 'fonts'
  });

  app.import("bower_components/pikaday-time-picker/css/pikaday.css");
  app.import("bower_components/pikaday-time-picker/css/pikaday-time.css");

  //app.import("bower_components/pikaday-time-picker/css/theme.css");

  return app.toTree();
};
