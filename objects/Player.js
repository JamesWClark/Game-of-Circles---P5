function Player(x, y, team) {
    Sprite.call(this, x, y, team);
    this.weapon = new Simpleton(this);
    this.hostile = false;
}

Player.prototype = Object.create(Sprite.prototype);
Player.prototype.constructor = Player;
Player.prototype.speed = 5;
Player.prototype.diameter = 50;
Player.prototype.left = false;
Player.prototype.right = false;
Player.prototype.up = false;
Player.prototype.down = false;
    
Player.prototype.handleCollision = function() {
    // don't die :)
}

Player.prototype.move = function() {
    if(this.left)  this.x -= this.speed;
    if(this.right) this.x += this.speed;
    if(this.up)    this.y -= this.speed;
    if(this.down)  this.y += this.speed;

    this.x = constrain(this.x, this.diameter / 2, width  - this.diameter / 2);
    this.y = constrain(this.y, this.diameter / 2, height - this.diameter / 2);
    
    this.fire();
}

Player.prototype.fire = function() {
    if(this.weapon && this.hostile) {
        this.weapon.fire(createVector(0, -10));
    }
}
    
Player.prototype.keyDown = function () {
    switch(key) {
        case 'f':
        case 'F':
        case ' ':
            this.hostile = true;
            break;
        case '1':
            this.weapon = new Simpleton(this);
            break;
        case '2':
            this.weapon = new SpreadShot(this);
            break;
    }
    switch (keyCode) {
        case LEFT_ARROW:
            this.left = true;
            break;
        case RIGHT_ARROW:
            this.right = true;
            break;
        case DOWN_ARROW:
            this.down = true;
            break;
        case UP_ARROW:
            this.up = true;
            break;
    }
}

Player.prototype.keyUp = function () {
    switch(key) {
        case 'f':
        case 'F':
        case ' ':
            this.hostile = false;
            break;
    }
    switch (keyCode) {
        case LEFT_ARROW:
            this.left = false;
            break;
        case RIGHT_ARROW:
            this.right = false;
            break;
        case DOWN_ARROW:
            this.down = false;
            break;
        case UP_ARROW:
            this.up = false;
            break;
    }
}
