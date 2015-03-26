/**
 * Ship Actor
 * Space Invaders Package
 * Matthew Evans, 2015
 *
 */
(function() {

    /**
     * Renderable Constructor
     * This provides registration with the renderables array.
     *
     * @param Actor actor
     */
    function ShipActor(position, name) {
        Actor.call(this, Renderable, Moveable, Shootable);
        this.type = 'Ship';
        this.position = position || { x: 0, y: 0 };
        this.name = name || '';
    }

    /**
     * Extended from the Mixin Prototype
     */
    ShipActor.prototype = Object.create(Actor.prototype);

    /** 
     * API
     *
     */

    window.ShipActor = ShipActor;

})()
