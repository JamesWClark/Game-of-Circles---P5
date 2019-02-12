// player
var player;

// teams
var playerTeam = 1;
var enemyTeam = 2;

// an array of sprites
var sprites = []; // how we create a new empty array

function setup() {
    createCanvas(575, 500);
    
    // make the player
    player = new Player(width/2, height-50, playerTeam);
    
    sprites.push(player);
    sprites.push(new Enemy(150, 50, enemyTeam));
    sprites.push(new Enemy(250, 50, enemyTeam));
    sprites.push(new Enemy(350, 50, enemyTeam));
    sprites.push(new Enemy(450, 50, enemyTeam));
    sprites.push(new Enemy(150, 50, enemyTeam));
    sprites.push(new Enemy(250, 50, enemyTeam));
    sprites.push(new Enemy(350, 50, enemyTeam));
    sprites.push(new Enemy(450, 50, enemyTeam));
    sprites.push(new Raindrop(50, 50, enemyTeam));
}

function draw() {
    background(200);
    
    for(var i = 0; i < sprites.length; i++) {
        sprites[i].animate();
        for(var j = i + 1; j < sprites.length; j++) {
            if(isColliding(sprites[i], sprites[j])) {
                console.log('collision detected');
                sprites.splice(i, 1);
                sprites.splice(j, 1);
            }
        }
    }
}

function isColliding(a, b) {
    var r1 = a.diameter / 2;
    var r2 = b.diameter / 2;
    var d = Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
    if(r1 + r2 > d && a.team !== b.team) {
        return true;
    }
    return false;
}

// key goes down
function keyPressed() {
    player.keyDown();
}

// key comes up
function keyReleased() {
    player.keyUp();
}
