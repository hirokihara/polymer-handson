'use strict';

module.exports = function (grunt) {

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  var options = {
    paths: {
      app: 'app',
      dist: 'dist'
    }
  };

  var configs = require('load-grunt-configs')(grunt, options);

  grunt.initConfig(configs);

  grunt.registerTask('serve', function (target) {
    grunt.task.run([
      'wiredep',
      'browserSync:dev',
      'watch'
    ]);
  });
};