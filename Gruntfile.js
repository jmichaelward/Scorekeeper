'use strict';

module.exports = function (grunt) {
    // Load all tasks
    require('load-grunt-tasks')(grunt);
    // Show elapsed time
    require('time-grunt')(grunt);

    grunt.initConfig({
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    compass: false
                },
                files: {
                    'assets/css/main.css': [
                        'assets/scss/main.scss'
                    ]
                }
            },
            build: {
                options: {
                    style: 'compressed',
                    compass: false
                },
                files: {
                    'assets/css/main.css': [
                        'assets/scss/main.scss'
                    ]
                }
            }
        },
        uglify: {
            dist: {
                files: {
                    'assets/js/main_app.min.js': 'assets/js/main_app.js'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 versions']
            },
            dev: {
                options: {
                    map: {
                        prev: 'assets/scss/'
                    }
                },
                src: 'assets/css/main.css'
            },
            build: {
                src: 'assets/css/main.css'
            }
        },
        watch: {
            sass: {
                files: [
                    'assets/scss/*.scss',
                    'assets/scss/**/*.scss'
                ],
                tasks: ['sass:dev', 'autoprefixer:dev']
            },
            js: {
                files: [
                    'assets/js/*.js'
                ],
                tasks: ['uglify']
            },
            livereload: {
                // Browser live reloading
                // https://github.com/gruntjs/grunt-contrib-watch#live-reloading
                options: {
                    livereload: true
                },
                files: [
                    'assets/scss/**/*.scss',
                    'assets/css/main.css',
                    'assets/js/*.js',
                    '**/*.php'
                ]
            }
        }
    });

    // Register tasks
    grunt.registerTask('default', [
        'dev'
    ]);

    grunt.registerTask('dev', [
        'sass:dev',
        'autoprefixer:dev'
    ]);
    grunt.registerTask('build', [
        'sass:build',
        'autoprefixer:build',
        'uglify'
    ]);
};