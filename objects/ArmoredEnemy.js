function ArmoredEnemy(x, y, team) {
    Sprite.call(this, x, y, team);
    this.mark = 0;
}

ArmoredEnemy.prototype = Object.create(Enemy.prototype);
ArmoredEnemy.prototype.constructor = ArmoredEnemy;
ArmoredEnemy.prototype.diameter = 80;
ArmoredEnemy.prototype.velocity = createVector(2, 0);
ArmoredEnemy.prototype.color = color(200, 0, 0);
ArmoredEnemy.prototype.wait = 700;
ArmoredEnemy.prototype.armor = 10;

ArmoredEnemy.prototype.move = function () {
    if (millis() - this.mark > this.wait) {
        this.mark = millis();
        var vector = this.aim(_SM.getPlayer());
        this.fire(vector);
    }
}

ArmoredEnemy.prototype.display = function() {
    stroke(50);
    strokeWeight(this.armor);
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    noStroke();
}

ArmoredEnemy.prototype.handleCollision = function() {
    if(this.armor > 0) {
        this.armor -= 1;
    } else {
        _SM.destroy(this);
    }
}

