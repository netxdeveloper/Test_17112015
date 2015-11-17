define(function(require) {
    var Backbone = require('backbone');
    return Backbone.Model.extend({
        defaults: {
            width: 0
        },
        expose : function(adapter) {
            adapter.expose('width', this, { alias: 'Square.Width' });
        },
        getWidth: function() { return this.get('width'); },
        setWidth: function(width) { this.set('width', width); }
    });
});