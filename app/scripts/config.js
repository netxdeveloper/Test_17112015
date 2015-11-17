/*global requirejs */
requirejs.config({
    'shim': {
        'jquery': {
            'exports': '$'
        },
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': ['jquery', 'underscore'],
            'exports': 'Backbone'
        },
        'sinon': {
            'exports': 'sinon'
        }
    },
    'paths': {
        'text': '../../../bower_components/requirejs-text/text',
        'jquery': '../../../bower_components/jquery/dist/jquery',
        'underscore': '../../../bower_components/underscore/underscore',
        'backbone': '../../../bower_components/backbone/backbone',

        'check': "../../../bower_components/check-js/check.min",
        'sinon': '../../../test/libs/sinon-1.7.3',

        'templates': "../templates",

        'sim-common': '../../../bower_components/common/app/scripts/sim-common',

        'api/snapshot': '../../../bower_components/pipit/app/scripts/api/snapshot'


    }
});