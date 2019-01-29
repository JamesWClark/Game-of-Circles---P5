// player
var player;

// enemy objects
var e1, e2, e3, e4;

// teams
var playerTeam = 1;
var enemyTeam = 2;

// sprites
var sprites = [];

function setup() {
    createCanvas(575, 800);
    
    // make the player
    player = new Player(width/2, height-50, playerTeam);
    
    sprites.push(player);
    sprites.push(new Enemy(150, 50, enemyTeam));
    sprites.push(new Enemy(250, 50, enemyTeam));
    sprites.push(new Enemy(350, 50, enemyTeam));
    sprites.push(new Enemy(450, 50, enemyTeam));
}

function draw() {
    background(200);
    
    for(var i = 0; i < sprites.length; i++) {
        sprites[i].animate();
    }
}

// key is down (fires one time only)
function keyPressed() {
    player.keyDown();
}

// key is up (fires one time only)
function keyReleased() {
    player.keyUp();
}
