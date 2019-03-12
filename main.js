var _SM = new SpriteManager();

function setup() {
    createCanvas(575, 500);

    _SM.setPlayer(new Player(width/2, height-100, 1));
    _SM.spawn(new Raindrop(200, -50, 2));
    _SM.spawn(new Raindrop(300, -50, 2));
    _SM.spawn(new Raindrop(100, -50, 2));
    _SM.spawn(new Enemy(150, 50, 2));
    _SM.spawn(new Enemy(250, 50, 2));
    _SM.spawn(new Enemy(350, 50, 2));
    _SM.spawn(new ScreenSaverBot(50, 50, 2));
}

function draw() {
    background(200);
    _SM.manage();
}

// key goes down
function keyPressed() {
    _SM.getPlayer().keyDown();
}

// key comes up
function keyReleased() {
    _SM.getPlayer().keyUp();
}
