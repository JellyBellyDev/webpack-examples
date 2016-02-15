'use strict';

var document = window.document;

(function init() {

    var btn = document.getElementById('show-template-text');

    function getTemplate(templateName, callback) {
        require([], function (require) {
            callback(require('../templates/' + templateName)());
        });
    }

    btn.addEventListener('click', function () {
        getTemplate('a', function (a) {
            console.log(a);
        });

        getTemplate('b', function (b) {
            console.log(b);
        });
    });

})();
