function Raindrop(x, y, team) {
    Sprite.call(this, x, y, team);
}

Raindrop.prototype = Object.create(Sprite.prototype);
Raindrop.prototype.constructor = Raindrop;
Raindrop.prototype.color = color(0, 255, 255);
Raindrop.prototype.diameter = 50;
Raindrop.prototype.speed = 4;

Raindrop.prototype.move = function() {
    this.y += this.speed;
    this.x += random(-2,2);

    if(this.y > height) {
        this.y = -50;
    }
}
