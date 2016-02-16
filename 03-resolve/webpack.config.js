'use strict';

var path = require('path');

// Our configuration
module.exports = {

    // Define the entry point
    entry: path.join(__dirname, 'js', 'app.js'),

    // Output configuration
    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: 'bundle.js'
    },

    resolve: {
        modulesDirectories: [
            'bower_components',
            'node_modules',
            'js/modules'
        ]
    }
};
