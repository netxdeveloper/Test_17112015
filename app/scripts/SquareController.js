define(function() {
    var updateWidth = function() {
        var width = this.model.getWidth();
        this.$square.css({ width: width, height: width });
        this.$input.val(width);
        this.capi.setWidth(width);
    };
    return function($square, $input, capi, model) {
        this.model = model; this.$square = $square;
        this.$input = $input; this.capi = capi;
        this.$input.on('change', function() { model.setWidth($input.val()); });
        this.capi.on('change:width', function() { model.setWidth(capi.getWidth()); });
        this.model.on('change:width', updateWidth, this);
    };
});