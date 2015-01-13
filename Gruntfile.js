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
    jshint: {
      //files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      files: ['Gruntfile.js', 'src/**/app.js', 'test/**/*.js', 'src/**/yjm.js', 'src/modules/*.js'],
      options: {
        // Enforcing
        indent: 4,
        curly: true,
        strict: true,
        undef: true,
        unused: true,
        eqeqeq: true,

        // Relaxing
        es3: true,
        shadow: true,

        // Environments
        jquery: true,
        qunit: true,
        devel: true,
        globals: {
          jQuery: false,
          sinon: false
        }
      }
    },
    qunit: {
      all: ['test/**/*.html']
    },
    concat: {
      options: {

      },
      dist: {
        src: [
          'src/yjm.js',
          'src/modules/loader.js',
          'src/modules/readpoint.js'
        ],
        dest: 'dist/yjm.js'
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint', 'qunit']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jshint', 'qunit']);
};
