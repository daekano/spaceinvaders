/**
 * Renderable Mixin
 * Space Invaders Package
 * Matthew Evans, 2015
 *
 * The Renderable Mixin allows actors to be rendered.
 * When activated, the Mixin registers itself with the 'renderables' array and is guaranteed
 * to have the right information to be rendered.
 */
(function() {

    /**
     * Machinery
     */
    var renderables = [];

    /**
     * Renderable Constructor
     * This provides registration with the renderables array.
     *
     * @param Actor actor
     */
    function Renderable(actor) {
        window.renderables.push(actor);
    }

    /**
     * Extended from the Mixin Prototype
     */
    Renderable.prototype = Object.create(Mixin.prototype);

    /**
     * Properties
     */
    Renderable.prototype.props = {
        name: 'Renderable'
    };

    /** 
     * API
     *
     */
    Renderable.prototype.render = function ($canvas) {
        var x = this.__super__.position.x;
        var y = this.__super__.position.y;
        var classes = 'actor ' + this.__super__.type.toLowerCase();
        $actor = $('<div>', { id: this.__super__.id, class: classes }).css({ left: x, top: y });
        $canvas.append($actor);
    };

    /**
     * Destroy Takedown
     *
     */
    Renderable.prototype.destroy = function() {
        var id = this.id;
        window.renderables = _.filter(window.renderables, function(elm){
            return elm.id !== id;
        });
    };

    window.Renderable = Renderable;
    window.renderables = renderables;

})()
