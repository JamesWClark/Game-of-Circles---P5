function Player(x, y, team) {
    this.x = x;
    this.y = y;
    this.team = team;
    this.speed = 5;
    this.diameter = 50;
    this.left = false;
    this.right = false;
    this.up = false;
    this.down = false;
    
    this.move = function() {
        if(this.left)  this.x -= this.speed;
        if(this.right) this.x += this.speed;
        if(this.up)    this.y -= this.speed;
        if(this.down)  this.y += this.speed;

        this.x = constrain(this.x, this.diameter / 2, width  - this.diameter / 2);
        this.y = constrain(this.y, this.diameter / 2, height - this.diameter / 2);
    }
    
    this.display = function() {
        fill(255, 0, 0);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
    
    this.animate = function() {
        this.move();
        this.display();
    }
    
    this.fire = function() {
        sprites.push(new Bullet(this.x, this.y, createVector(0,-10), playerTeam));
    }
    
    this.keyDown = function () {
        switch(key) {
            case 'f':
            case 'F':
            case ' ':
                this.fire();
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

    this.keyUp = function () {
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
}