'use strict';

(function init() {

    var btn = document.getElementsByI('show-template-text');

    function getTemplate(templateName, callback) {
        require.ensure([], function (require) {
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
