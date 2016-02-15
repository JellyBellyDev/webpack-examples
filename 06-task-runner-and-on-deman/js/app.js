'use strict';

(function init() {

    var $btn = $('#show-template-text'),
        $container = $('#container');

    function getTemplate(templateName, callback) {
        require([], function (require) {
            callback(require('templates/' + templateName)());
        });
    }

    $btn.on('click', function () {
        getTemplate('a', function (a) {
            $container.append('<p>' + a + '</p>');
        });

        getTemplate('b', function (b) {
            $container.append('<p>' + b + '</p>');
        });
    });

})();
