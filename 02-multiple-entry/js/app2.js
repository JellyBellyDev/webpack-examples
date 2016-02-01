'use strict';

var hello = require('./hello'),
    document = window.document;

document.write('<h1>' + hello.hi('PugRoma') + '</h1>');
