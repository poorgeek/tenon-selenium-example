'use strict';

var assert = require('assert'),
    webdriverio = require('webdriverio'),
    tenonCommands = require('./helpers/tenonCommands');

// Load the Tenon helper commands
browser
    .addCommand('tenonAnalyzeUrl', tenonCommands.tenonAnalyzeUrl)
    .addCommand('tenonAnalyzeHtml', tenonCommands.tenonAnalyzeHtml);


beforeEach(function() {
    browser.url('http://www.google.com');
});

describe('google.com', function() {
    it('should have "Google" as the page title', function(done) {
        browser.getTitle(function(err, res) {
            assert(res === 'Google');
        })
        .call(done);
    });

    it('should have no accessibility errors', function(done) {
        browser.tenonAnalyzeUrl(function(err, res) {
            assert(res.resultSet.length === 0, 'should have 0 errors');
        })
        .call(done);
    });
});

describe('Google Settings menu', function() {
    it('should have no accessibility errors', function(done) {
        browser
        .click('#fsettl')
        .pause(100)
        .tenonAnalyzeHtml('#fsett', function(err, res) {
            assert(res.resultSet.length === 0, 'should have 0 errors');
        })
        .call(done);
    });

});

// client
//     .init()
//     .title(function(err, res) {
//         assert.strictEqual(res === 'Google');
//     })
//     .tenonAnalyzeUrl(function(err, res) {
//         assert.strictEqual(res.resultSet.length === 6, 'should have 6 errors');
//     })

    // .click('input[name="q"]')
    // .keys(['http://www.google.com'])
    // .pause(2000)
    // .keys(['Enter'])

    // // On to the Tenon Results page
    // .title(function(err, res) {
    //     assert.strictEqual(res === 'Google Results');
    // })
    // .tenonAnalyzeUrl(function(err, res) {
    //     assert.strictEqual(res.resultSet.length === 0, 'should have 0 errors from Tenon.io');
    // })

    // .end();
