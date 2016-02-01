'use strict';

var path = require('path');

// Our configuration
module.exports = {

    // Define the entry point
    entry: path.resolve(__dirname, 'js', 'app.js'),

    // Output configuration
    output: {
        path: path.resolve(__dirname, 'public', 'js'),
        filename: 'bundle.js'
    },


    resolve: {
        modulesDirectories: [
            'js/modules',
            '../node_modules'
        ]
    }
};
