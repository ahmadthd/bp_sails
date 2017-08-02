/**
 * `clean`
 *
 * ---------------------------------------------------------------
 *
 * Remove the files and folders in your Sails app's web root
 * (conventionally a hidden directory called `.tmp/public`).
 *
 * For usage docs see:
 *   https://github.com/gruntjs/grunt-contrib-clean
 *
 */
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

module.exports = function(grunt) {

  grunt.config.set('browserSync', {
    dev: {
        bsFiles: {
            src : ['views/**/*'],
        },
        options: {
                proxy: "http://localhost:1337"
            }
    }
  });
  grunt.loadNpmTasks('grunt-browser-sync');
};
