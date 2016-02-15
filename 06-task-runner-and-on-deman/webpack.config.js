'use strict';

var path = require('path'),
    webpack = require('webpack');

// Our configuration
module.exports = {

    // Define the entry point
    entry: path.join(__dirname, 'js', 'app.js'),

    // Output configuration
    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: 'bundle.js',
        chunkFilename: '[id]-[hash].js',
        publicPath: 'js/'
    },

    externals: {
        "jquery": "jQuery"
    },

    resolve: {
        modulesDirectories: [
            'bower_components',
            'node_modules',
            'js/modules'
        ]
    },

    plugins: [
        new webpack.ProvidePlugin({
            // Automtically detect jQuery and $ as free var in modules
            // and inject the jquery library
            // This is required by many jquery plugins
            jQuery: "jquery",
            $: "jquery"
        })
    ]
};
