/**
 * Projectile Actor
 * Space Invaders Package
 * Matthew Evans, 2015
 *
 */
(function() {

    /**
     * Renderable Constructor
     * This provides registration with the renderables array.
     *
     * @param position
     */
    function ProjectileActor(position) {
        Actor.call(this, Renderable, Moveable);
        this.type = 'Projectile';
        this.position = position || { x: 0, y: 0 };
    }

    /**
     * Extended from the Mixin Prototype
     */
    ProjectileActor.prototype = Object.create(Actor.prototype);

    /** 
     * API
     *
     */

    window.ProjectileActor = ProjectileActor;

})()
