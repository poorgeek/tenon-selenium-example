'use strict';

module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-webdriver');
    grunt.loadNpmTasks('grunt-selenium-standalone');

    grunt.initConfig({
        webdriver: {
            test: {
                configFile: './wdio.conf.js'
            }
        },

        selenium_standalone: {
            server: {
                stopOnExit: true,
                seleniumVersion: '2.47.0',
                seleniumDownloadURL: 'http://selenium-release.storage.googleapis.com',
                drivers: {
                    chrome: {
                        version: '2.20',
                        arch: process.arch,
                        baseURL: 'http://chromedriver.storage.googleapis.com'
                    }
                }
            }
        }
    });

    grunt.registerTask('default', [
        'selenium_standalone:server:install',
        'selenium_standalone:server:start',
        'webdriver:test',
        'selenium_standalone:server:stop'
    ]);
};
