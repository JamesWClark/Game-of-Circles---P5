function Enemy(x, y, team) {
    Sprite.call(this, x, y, team);
}

Enemy.prototype = Object.create(Sprite.prototype);
Enemy.prototype.constructor = Enemy;
Enemy.prototype.diameter = 40;
Enemy.prototype.velocity = createVector(2, 0);
Enemy.prototype.color = color(255, 0, 0);

Enemy.prototype.move = function() {
    this.x += this.velocity.x;
    if(this.x < 0 || this.x > width) {
        this.velocity.x *= -1;
    }
}

Enemy.prototype.display = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
}