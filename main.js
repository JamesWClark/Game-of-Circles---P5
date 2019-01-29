// player
var player;

// enemy objects
var e1, e2, e3, e4;

// teams
var playerTeam = 1;
var enemyTeam = 2;

function setup() {
    createCanvas(575, 800);
    
    // make the player
    player = new Player(width/2, height-50, playerTeam);
    
    // instantiate (make new objects)
    e1 = new Enemy(150, 50, enemyTeam);
    e2 = new Enemy(250, 50, enemyTeam);
    e3 = new Enemy(350, 50, enemyTeam);
    e4 = new Enemy(450, 50, enemyTeam);
}

function draw() {
    background(200);
    
    // animate each enemy
    e1.animate();
    e2.animate();
    e3.animate();
    e4.animate();
    
    // player
    player.animate();
}

// key is down (fires one time only)
function keyPressed() {
    player.keyDown();
}

// key is up (fires one time only)
function keyReleased() {
    player.keyUp();
}
