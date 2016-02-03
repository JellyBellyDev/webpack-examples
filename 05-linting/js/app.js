'use strict';

var hello = require('hello'),
    moment = require('moment'),
    document = window.document;

document.write('<h1>' + hello.hi('RomaJS') + '</h1>');
document.write('<p id="time"></p>');
timedUpdate();
setInterval(function () {
    timedUpdate();
}, 1000);

function timedUpdate() {
    document.getElementById('time').innerHTML = moment().format('DD MMMM YYYY, hh:mm:ss a');
}
