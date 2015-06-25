'use strict';

var assert = require('assert'),
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
