var player;

function setup() {
    createCanvas(800, 600);
    
    player = new Ship(width / 2, height - 50);
}

function draw() {
    background(255);
    player.move();
    player.display();
}

function keyPressed() {
    player.keyDown();
}

function keyReleased() {
    player.keyUp();
}