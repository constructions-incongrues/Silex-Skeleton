// Generated on 2014-04-03 using generator-webapp 0.4.2
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function(grunt) {

    // Load tasks
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Config
    grunt.initConfig({
        watch: {
            compass: {
                files: ['src/web/styles/{,*/}*.{scss,sass}'],
                tasks: ['compass']
            }
        },
        compass: {
            options: {
                sassDir: 'src/web/styles',
                cssDir: 'src/web/dist/styles',
                generatedImagesDir: 'src/web/.tmp/images/generated',
                imagesDir: 'src/web/images',
                javascriptsDir: 'src/web/scripts',
                fontsDir: 'src/web/styles/fonts',
                importPath: 'src/web/bower_components',
                httpImagesPath: '/images',
                httpGeneratedImagesPath: '/images/generated',
                httpFontsPath: '/styles/fonts',
                relativeAssets: false
            },
            dist: {
                options: {
                    generatedImagesDir: 'src/web/images/generated'
                }
            }
        }
    });

    // Default task.
    grunt.registerTask('default', ['compass']);

};
