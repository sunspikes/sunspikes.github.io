/*
 * sunspikes.com
 * https://github.com/sunspikes/sunspikes.github.io
 *
 * Copyright (c) 2014 Krishnaprasad MG
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    grunt.initConfig({
		compass: {
            dist: {
              options: {
				sassDir: 'src/styles/scss',
				cssDir: 'css',
				environment: 'production'
              }
            }
		},
        cssmin: {
          combine: {
            files: {
              'css/style.css': ['src/styles/libs/normalize.css', 'css/main.css']
            }
          },      
          minify: {
            expand: true,
            src: ['css/style.css'],
            ext: '.min.css'
          }
        }		
    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['compass', 'cssmin:combine', 'cssmin:minify']);

};