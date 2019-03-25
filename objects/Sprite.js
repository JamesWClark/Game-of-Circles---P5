function Sprite(x, y, team) {
    if(this.constructor === Sprite) {
        throw new Error("Can't instantiate abstract Sprite class.");
    } else {
        this.x = x;
        this.y = y;
        this.team = team;
    }
}

Sprite.prototype.color = color(255);
Sprite.prototype.diameter = 50;

Sprite.prototype.handleCollision = function() {
    _SM.destroy(this);
}

Sprite.prototype.isColliding = function(other) {
    var radius1 = this.diameter / 2;
    var radius2 = other.diameter / 2;
    var distance = dist(this.x, this.y, other.x, other.y);
    return radius1 + radius2 > distance;
}

Sprite.prototype.move = function() {
    // does nothing
}

Sprite.prototype.display = function() {
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
}

Sprite.prototype.animate = function() {
    this.move();
    this.display();
}
