function Block(x, y, w, h, team) {
    Sprite.call(this, x, y, team);
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

Block.prototype = Object.create(Sprite.prototype);
Block.prototype.constructor = Block;
Block.prototype.color = color(255, 0, 0);

Block.prototype.display = function() {
    stroke(0);
    strokeWeight(1);
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);
}