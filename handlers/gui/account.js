var helpers = require('../../lib/helpers');

// container for the account sub-handlers
var accountHandler = {};

// account create handler
accountHandler.accountCreate = function(data, callback) {
    // handle GET method and refuse any other method
    if (data.method == 'GET') {
        // prepare data for interpolation
        var templateData = {
            'head.title' : 'Create Account',
            'head.description' : 'Signup is easy and only takes a few seconds.',
            'body.class' : 'accountCreate'
        };

        // read in a template as a string
        helpers.getTemplate('accountCreate', templateData, function (err, str) {
            if (!err && str) {
                // add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function(err, str){
                    if(!err && str){
                        // return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                });
            }
            else {
                callback(500, undefined, 'html');
            }
        });
    }
    else {
        callback(405, undefined, 'html');
    }
};

// account edit handler
accountHandler.accountEdit = function(data, callback) {
    // handle GET method and refuse any other method
    if (data.method == 'GET') {
        // prepare data for interpolation
        var templateData = {
            'head.title' : 'Edit Account',
            'body.class' : 'accountEdit'
        };

        // read in a template as a string
        helpers.getTemplate('accountEdit', templateData, function (err, str) {
            if (!err && str) {
                // add the universal header and footer
                helpers.addUniversalTemplates(str, templateData, function(err, str){
                    if(!err && str){
                        // return that page as HTML
                        callback(200, str, 'html');
                    } else {
                        callback(500, undefined, 'html');
                    }
                });
            }
            else {
                callback(500, undefined, 'html');
            }
        });
    }
    else {
        callback(405, undefined, 'html');
    }
};

// export the module
module.exports = accountHandler;