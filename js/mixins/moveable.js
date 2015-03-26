/**
 * Moveable Mixin
 * Space Invaders Package
 * Matthew Evans, 2015
 *
 * Exposes an API for an Actor that allows it to move!
 */
(function() {

    /**
     * Moveable Constructor
     * @param Actor actor
     */
    function Moveable(actor) {

    }

    /**
     * Extended from the Mixin Prototype
     */
    Moveable.prototype = Object.create(Mixin.prototype);

    /**
     * Properties
     */
    Moveable.prototype.props = {
        name: 'Moveable'
    };

    /** 
     * API
     *
     */

    /**
     * Move
     * Set the position of the superclass
     * @param int x (how much to move horizontally by)
     * @param int y (how much to move vertically by)
     */
    Moveable.prototype.move = function (x, y, mode) {
        // Respect run constant
        if(run === false) {
            return;
        }
        // Collect our current position data
        var pos = this.__super__.position;

        if(!mode || mode === 'relative') {
            x = pos.x + x;
            y = pos.y + y;
        }

        // Ensure we are not out of bounds
        if (x >= (CANVAS_X - MOVE_INCREMENT)) {
            return;
        } else

        if (x <= 0) {
            return;
        }

        // Set position
        this.__super__.position = {
            x: x,
            y: y
        }
    };

    /**
     * Vector Move
     * Set a vector for the actor to follow
     * @param object origin
     * @param int direction (1 for up, -1 for down)
     * @param int speed (ms, used for interval)
     */
    Moveable.prototype.vectorMove = function (origin, direction, speed, offset, callback) {
        var self = this;
        var origin = {
            x: (origin.x + offset.x),
            y: (origin.y + offset.y)
        };
        var pos = self.__super__.position = origin;
        var interval = setInterval(function(){
            // Respect run constant
            if(run === false) {
                return;
            }
            // Kill/despawn logic
            if(pos.y > CANVAS_Y || pos.y < 0 ) {
                clearInterval(interval);
                callback();
            }
            // Move logic
            self.__super__.position.y += (direction * speed * MOVE_COEFFICIENT);
        }, speed);
    };

    window.Moveable = Moveable;

})()
