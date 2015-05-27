'use strict';

module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-webdriver');

    grunt.initConfig({
        webdriver: {
            options: {
                desiredCapabilities: {
                    browserName: 'chrome'
                }
            },
            all: {
                tests: ['test/**/*Spec.js'],
            }
        }
    });
};
