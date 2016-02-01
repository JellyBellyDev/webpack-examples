'use strict';

var path = require('path'),
    webpack = require('webpack'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

// Our configuration
module.exports = {

    // Define the entry point
    entry: {
        'app1': path.resolve(__dirname, 'js', 'app1.js'),
        'app2': path.resolve(__dirname, 'js', 'app2.js')
    },

    // Output configuration
    output: {
        path: path.resolve(__dirname, 'public', 'js'),
        filename: '[name].js'
    },

    // Define plugins
    plugins: [
        new CommonsChunkPlugin('common', '[name].js')
    ],

    // Define the module loaders
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style!css'}
        ]
    }
};
