var _SM = new SpriteManager();
var _UI = new UIManager();

function setup() {
    createCanvas(575, 500);
    // rectMode(CENTER);

    _SM.setPlayer(new Player(width/2, height-100, 1));
    _SM.spawn(new ArmoredEnemy(width - 100, 100, 2));
    
    var rainButton = new Button("Raindrop", 50, 50, 100, 30);
    rainButton.handleClick = function() {
        _SM.spawn(new Raindrop(random(width), -50, 2));
    }
    
    _UI.add(rainButton);
}

function draw() {
    background(200);
    _SM.manage();
    _UI.manage();
}

// key goes down
function keyPressed() {
    _SM.getPlayer().keyDown();
}

// key comes up
function keyReleased() {
    _SM.getPlayer().keyUp();
}
