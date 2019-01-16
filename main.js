var playerX = 400;
var playerY = 400;
var playerSize = 50;
var playerSpeed = 15;
var eSize = 50;
var ex1 = 750;
var ey1 = 50;
var ex2 = 350;
var ey2 = 50;
var ex3 = 250;
var ey3 = 50;
var ex4 = 150;
var ey4 = 50;

function setup() {
    createCanvas(575, 800);
}

function draw() {
    background(200);
    
    // player
    ellipse(playerX, playerY, playerSize, playerSize); // x, y, w, h
    
    // four enemies
    ellipse(ex1, ey1, eSize, eSize);
    ellipse(ex2, ey2, eSize, eSize);
    ellipse(ex3, ey3, eSize, eSize);
    ellipse(ex4, ey4, eSize, eSize);
}

function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        playerX -= playerSpeed;
    }
    else if (keyCode === RIGHT_ARROW) {
        playerX += playerSpeed;
    }
}