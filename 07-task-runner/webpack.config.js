'use strict';

var path = require('path'),
    webpack = require('webpack');

// Our configuration
module.exports = {

    // Define the entry point
    entry: path.resolve(__dirname, 'js', 'app.js'),

    // Output configuration
    output: {
        path: path.join('public', 'js'),
        filename: 'bundle.js',
        chunkFilename: '[id]-[hash].js',
        publicPath: '/js/'
    },

    resolve: {
        modulesDirectories: [
            'bower_components',
            'node_modules',
            'js/modules'
        ]
    }
};
