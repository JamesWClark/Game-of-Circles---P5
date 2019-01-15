function setup() {
    createCanvas(900, 500);
}

function draw() {
    background(0);
    
    // player
    ellipse(400, 400, 50, 50); // x, y, w, h
    
    // four enemies
    ellipse(50, 50, 50, 50);
    ellipse(150, 50, 50, 50);
    ellipse(250, 50, 50, 50);
    ellipse(350, 50, 50, 50);
}
