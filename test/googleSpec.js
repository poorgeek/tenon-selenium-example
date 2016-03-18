'use strict';

var assert = require('assert');
var tenonCommands = require('./helpers/tenonCommands');

// Load the Tenon helper commands
browser.addCommand('tenonAnalyzeUrl', tenonCommands.tenonAnalyzeUrl);
browser.addCommand('tenonAnalyzeHtml', tenonCommands.tenonAnalyzeHtml);

beforeEach(function() {
    browser.url('https://www.google.com');
});

describe('google.com', function() {
    it('should have "Google" as the page title', function() {
        var title = browser.getTitle();
        assert(title === 'Google');
    });

    it('should have no accessibility errors', function() {
        var response = browser.tenonAnalyzeUrl();
        assert(response.resultSet.length === 0, 'should have 0 errors');
    });
});

describe('Google Settings menu', function() {
    it('should have no accessibility errors', function() {
        browser.click('#fsettl');
        browser.pause(100);
        var response = browser.tenonAnalyzeHtml('#fsett');
        assert(response.resultSet.length === 0, 'should have 0 errors');
    });
});
