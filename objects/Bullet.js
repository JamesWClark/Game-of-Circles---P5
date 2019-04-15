function Bullet(x, y, vector, team) {
    Sprite.call(this, x, y, team);
    this.vector = vector;
}

Bullet.prototype = Object.create(Sprite.prototype);
Bullet.prototype.constructor = Bullet;
Bullet.prototype.color = color(0);
Bullet.prototype.diameter = 10;
Bullet.prototype.w = 10;
Bullet.prototype.h = 10;

Bullet.prototype.move = function() {
    this.x += this.vector.x;
    this.y += this.vector.y;
}
