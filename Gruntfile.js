/**
 * Gruntfile.js
 */
module.exports = function(grunt) {
  "use strict";

  grunt.initConfig({

    connect: {
      server: {
        options: {
          hostname: '2nd-party.local',
          port: 9000,
          base: '.'
        }
      }
    },
    qunit: {
      all: ['test/**/*.html']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('default', ['qunit']);
};
