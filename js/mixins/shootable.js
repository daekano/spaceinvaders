/**
 * Shootable Mixin
 * Space Invaders Package
 * Matthew Evans, 2015
 *
 * Exposes an API for an Actor that allows it to shoot!
 */
(function() {

    /**
     * Shootable Constructor
     * @param Actor actor
     */
    function Shootable(actor) {

    }

    /**
     * Extended from the Mixin Prototype
     */
    Shootable.prototype = Object.create(Mixin.prototype);

    /**
     * Properties
     */
    Shootable.prototype.props = {
        name: 'Shootable'
    };

    /**
     * Shoot
     */
    Shootable.prototype.shoot = function () {
        var projectile = new ProjectileActor();
        var origin = _.clone(this.__super__.position);
        projectile.Moveable.vectorMove(origin, -1, 3, { x: 6, y: 0 }, function(){
            projectile.destroy.call(projectile);
        });
    };

    window.Shootable = Shootable;

})()
