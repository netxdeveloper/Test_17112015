define(function(require) {
    var Backbone = require('backbone');
    return Backbone.Model.extend({
        defaults: {
            width: 0
        },
        getWidth: function() { return this.get('width'); },
        setWidth: function(width) { this.set('width', width); }
    });
});