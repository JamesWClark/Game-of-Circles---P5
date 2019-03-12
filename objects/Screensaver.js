function ScreenSaverBot(x, y, team) {
    Sprite.call(this, x, y, team);
}

ScreenSaverBot.prototype = Object.create(Sprite.prototype);
ScreenSaverBot.prototype.constructor = ScreenSaverBot;
ScreenSaverBot.prototype.color = color(255, 255, 0);
ScreenSaverBot.prototype.diameter = 20;
ScreenSaverBot.prototype.xspeed = 8;
ScreenSaverBot.prototype.yspeed = 8;

ScreenSaverBot.prototype.move = function() {
    this.x += this.xspeed;
    this.y += this.yspeed;

    if(this.y > height || this.y < 0) {
        this.yspeed *= -1;
    }
    if(this.x > width || this.x < 0) {
        this.xspeed *= -1;
    }
}
