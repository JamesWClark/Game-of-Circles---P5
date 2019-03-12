function Enemy(x, y, team) {
    Sprite.call(this, x, y, team);
    this.mark = 0;
}

Enemy.prototype = Object.create(Sprite.prototype);
Enemy.prototype.constructor = Enemy;
Enemy.prototype.diameter = 40;
Enemy.prototype.velocity = createVector(2, 0);
Enemy.prototype.color = color(255, 0, 0);
Enemy.prototype.wait = 700;

Enemy.prototype.move = function () {
    this.x += this.velocity.x;
    if (this.x < 0 || this.x >= width) {
        this.velocity.x *= -1;
    }
    if (millis() - this.mark > this.wait) {
        this.mark = millis();
        var vector = this.aim(_SM.getPlayer());
        this.fire(vector);
    }

}

Enemy.prototype.aim = function (target) {
    var distance = Math.sqrt(Math.pow(target.x - this.x, 2) + Math.pow(target.y - this.y, 2));

    // solve unit vector problem here
    return createVector(0, 4);
}

Enemy.prototype.fire = function (vector) {
    _SM.spawn(new Bullet(this.x, this.y, vector, this.team));
}
