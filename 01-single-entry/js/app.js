'use strict';

var hello = require('./hello'),
    document = window.document;
require('../css/style.css');

document.write('<h1>' + hello.hi('RomaJS') + '</h1>');