/**
 * Actor Component
 * Space Invaders Package
 * Matthew Evans, 2015
 *
 * First Cut
 * - Actors can accept an unlimited number of mixins in their constructor.
 */

/**
 * Actor Constructor
 *
 * So far the constructor only accepts mixins
 */
function Actor() {
    // Check for mixins and apply them.
    if (arguments.length > 0) {
        // Mix in the provided mixins
        for (var i = 0; i < arguments.length; i++) {
            var mixin = new arguments[i](this);
            mixin.__super__ = this;
            this[mixin.props.name] = mixin;
        }
    }

    // Create a unique id
    this.id = Date.now().toString(36); 

    // Set Position Defaults
    this.position = { x: 0, y: 0 }
}

/**
 * Destroy Actor
 * Called to remove the actor from the game completely.
 */
Actor.prototype.destroy = function () {
    for(var o in this) {
        if(this[o].__proto__.hasOwnProperty('destroy')) {
            this[o].__proto__.destroy.call(this);
        }
    }
}