/*globals console, checkBrowser, document*/
define (function(require){
    var $ = require('jquery');
    var $body;

    require('sim-common/Detect');
    require('sim-common/VersionCheck');

    var notSupportedTemplate = require('text!sim-common/templates/notSupported.html');
    // Require SimCapi
    var backboneAdapter = require ('api/snapshot/adapters/BackboneAdapter').getInstance();
    var transporter = require('api/snapshot/Transporter').getInstance();
    var AppModel = require('AppModel');
    var Capi = require('Capi');
    var SquareController = require('SquareController');

    function init() {
        var appModel = new AppModel();
        var capi = new Capi();

        new SquareController($('.square'), $('#width'), capi, appModel);
        capi.expose(backboneAdapter);
    }

    $(document).ready(function() {
        $body = $('body');
        if (!checkBrowser()) {
            $body.prepend(notSupportedTemplate);
            return;
        }

        transporter.addInitialSetupCompleteListener(init);
        transporter.notifyOnReady();
    });
});
