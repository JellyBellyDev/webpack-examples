'use strict';

var path = require('path'),
    webpack = require('webpack'),
    CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;

// Our configuration
module.exports = {

    // Define the entry point
    entry: {
        'bundle1': path.join(__dirname, 'js', 'app1.js'),
        'bundle2': path.join(__dirname, 'js', 'app2.js')
    },

    // Output configuration
    output: {
        path: path.join(__dirname, 'public', 'js'),
        filename: '[name].js'
    },

    // Define plugins
    plugins: [
        new CommonsChunkPlugin('common', '[name].js')
    ]
};
