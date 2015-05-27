'use strict';

var tenonNode = require('tenon-node'),
    tenonApi = new tenonNode({
        key: process.env.TENON_API_KEY
    });

module.exports = {

    // Analyze the current URL in Tenon
    tenonAnalyzeUrl: function(cb) {
        this.url(function(err, urlResult) {
            tenonApi.analyze(urlResult.value, function(err, tenonResult) {
                if (err) {
                    console.error(err);
                } else {
                    cb(err, tenonResult);
                }
            });
        });
    },

    // Analyze the HTML identified by a specified selector in Tenon
    tenonAnalyzeHtml: function(selector, cb) {
        this.getHTML(selector, function(err, html) {
            tenonApi.analyze(html, function(err, tenonResult) {
                if (err) {
                    console.error(err);
                } else {
                    cb(err, tenonResult);
                }
            });
        });
    }
};
