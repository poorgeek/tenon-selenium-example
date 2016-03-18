'use strict';

var TenonNode = require('tenon-node'),
    tenonApi = new TenonNode({
        key: process.env.TENON_API_KEY
    });

module.exports = {

    // Analyze the current URL in Tenon
    tenonAnalyzeUrl: function() {
        var url = this.url().value;
        return new Promise(function(resolve, reject) {
            tenonApi.analyze(url, function(err, tenonResult) {
                if (err) {
                    reject(err);
                } else {
                    resolve(tenonResult);
                }
            });
        });
    },

    // Analyze the HTML identified by a specified selector in Tenon
    tenonAnalyzeHtml: function(selector) {
        var html = this.getHTML(selector);
        return new Promise(function(resolve, reject) {
            tenonApi.analyze(html, function(err, tenonResult) {
                if (err) {
                    reject(err);
                } else {
                    resolve(tenonResult);
                }
            });
        });
    }
};
