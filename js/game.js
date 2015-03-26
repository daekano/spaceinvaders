/**
 * Game Logic
 * Space Invaders Package
 * Matthew Evans, 2015 
 *
 * Main file containing bootstrap, helpers, and glue functionality.
 */

var MOVE_INCREMENT = 20;
var MOVE_COEFFICIENT = 1;
var CANVAS_X = 500;
var CANVAS_Y = 500;
var SHIP_BASELINE = 450;

// RUNNING ?
var run = true;

// Ship
var ship = new ShipActor({ x: CANVAS_X / 2, y : SHIP_BASELINE }, 'USS Enterprise');

// Pause Game
$('#pause').on('click', function () {
    run = !run;
});

/**
 * Input
 */
$(document).on('keydown', function (e) {
    // Step 1 - Stop Default Action
    e.preventDefault();

    // Step 2 - Respect run constant
    if(run === false) {
        return;
    }

    // Step 3 - Determine what to do based on the input key
    switch(e.which) {
        // SPACEBAR
        case 32:
            ship.Shootable.shoot();
        break;
        // LEFT ARROW
        case 37:
            ship.Moveable.move(-MOVE_INCREMENT, 0);
        break;
        // RIGHT ARROW
        case 39:
            ship.Moveable.move(MOVE_INCREMENT, 0);
        break;
    }
});

/**
 * Update
 *
 */
function update () {}

/**
 * Render
 *
 * Call render functionality
 */
function render() {
    // Step 1 - Respect run constant
    if(run === false) {
        return;
    }

    // Step 2 - Manage the full game canvas
    var $canvas = $('#game');
    $canvas.empty();

    // Step 3 - Manage individual items
    renderables.forEach(function(renderable){
        renderable.Renderable.render($canvas);
    });
}

/**
 * Game Loop
 *
 */
function gameLoop() {
    requestAnimationFrame(gameLoop);
    update();
    render();
}

/**
 * Bootstrap
 */
gameLoop();