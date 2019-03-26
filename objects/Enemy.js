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
    var xCom = target.x - this.x;
    var yCom = target.y - this.y;
    var distance = Math.sqrt(xCom * xCom + yCom * yCom);
    var xUnit = xCom / distance;
    var yUnit = yCom / distance;
    var magnitude = 7;
    return createVector(xUnit * magnitude, yUnit * magnitude);
}

Enemy.prototype.fire = function (vector) {
    _SM.spawn(new Bullet(this.x, this.y, vector, this.team));
}
