'use strict';

var path = require('path'),
    webpack = require('webpack');

// Our configuration
module.exports = {

    // Define the entry point
    entry: path.resolve(__dirname, 'js', 'app.js'),

    // Output configuration
    output: {
        path: path.resolve(__dirname, 'public', 'js'),
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.BannerPlugin('/*! This code is compiled by webpack: <%= pkg.name %> */\n', {raw: true}),
        new webpack.optimize.UglifyJsPlugin({compress: {warnings: false}}), //https://github.com/mishoo/UglifyJS2#usage
        new webpack.optimize.OccurrenceOrderPlugin()
    ],

    resolve: {
        modulesDirectories: [
            'bower_components',
            'node_modules',
            'js/modules'
        ]
    }
};
