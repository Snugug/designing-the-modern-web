(function () {
  'use strict';
  var deepmerge = require('deepmerge');
  var matchdep = require('matchdep');

  module.exports = function (grunt) {

    grunt.initConfig({
      // Development Server
      connect: {
        server: {
          options: {
            port: 8808,
            base: '.'
          }
        }
      },

      // Watch Task
      watch: {
        options: {
          livereload: 8088
        },
        html: {
          files: '**/*.html'
        },
        // sass: {
        //   files: 'sass/**/*.scss',
        //   tasks: ['compass:dev'],
        //   options: {
        //     livereload: false
        //   }
        // },
        css: {
          files: 'css/**/*.css'
        },
        js: {
          files: 'js/**/*.js'
        },
        files: {
          files: [
            'images/**/*',
            'videos/**/*'
          ]
        }
      },

      // Compass
      // compass: {
      //   options: {
      //     sassDir: 'sass',

      //   }
      // }
    });

    //////////////////////////////
    // Grunt Task Loads
    //////////////////////////////
    matchdep.filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    //////////////////////////////
    // Server Task
    //////////////////////////////
    grunt.registerTask('server', 'Runs a server to dev from', function() {
      grunt.task.run(['connect', 'watch']);
    });
  }
})();