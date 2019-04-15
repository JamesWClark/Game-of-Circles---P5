function ArmoredTurret(x, y, team) {
    Sprite.call(this, x, y, team);
    this.mark = millis();
    this.armor = 10;
}

ArmoredTurret.prototype = Object.create(ArmoredEnemy.prototype);
ArmoredTurret.prototype.constructor = ArmoredTurret;
ArmoredTurret.prototype.color = color(255, 0, 0);
ArmoredTurret.prototype.wait = 700;

ArmoredTurret.prototype.move = function() {
    if(millis() - this.mark > this.wait) {
        this.fire(this.aim(_SM.getPlayer()));
        this.mark = millis();
    }
}

ArmoredTurret.prototype.display = function() {
    stroke(50);
    strokeWeight(this.armor);
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
    noStroke();
}

ArmoredTurret.prototype.handleCollision = function() {
    if(this.armor > 0) {
        this.armor -= 1;
    } else {
        _SM.destroy(this);
    }
}

ArmoredTurret.prototype.aim = function (target) {
    var xCom = target.x - this.x;
    var yCom = target.y - this.y;
    var distance = Math.sqrt(xCom * xCom + yCom * yCom);
    var xUnit = xCom / distance;
    var yUnit = yCom / distance;
    var magnitude = 7;
    return createVector(xUnit * magnitude, yUnit * magnitude);
}

ArmoredTurret.prototype.fire = function (vector) {
    _SM.spawn(new Bullet(this.x, this.y, vector, this.team));
}
