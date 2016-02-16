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

    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
};
