function Button(text, x, y, w, h) {
    this.text = text;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

Button.prototype.radius = 7;
Button.prototype.fill = color(204);
Button.prototype.stroke = color(255);
Button.prototype.strokeWeight = 3;
Button.prototype.textColor = color(0);

Button.prototype.display = function() {
    fill(this.fill);
    stroke(this.stroke);
    strokeWeight(this.strokeWeight);
    rect(this.x, this.y, this.w, this.h, this.radius);
    noStroke();
    fill(this.textColor);
    textAlign(CENTER, CENTER);
    text(this.text, this.x + this.w / 2, this.y + this.h / 2);
}

Button.prototype.observe = function() {
    // mouseover
    if(mouseX >= this.x && mouseY >= this.y && mouseX <= this.x + this.w && mouseY <= this.y + this.h) {
        this.mouseOver = true;
        this.fill = color(225);
    } else { // mouseout
        this.active = false;
        this.mouseOver = false;
        this.fill = color(204);
    }
    
    // mouseover and click down
    if(this.mouseOver && mouseIsPressed) {
        this.fill = color(150);
        this.active = true;
    }
    
    // mouseover and click release
    if(this.active && this.mouseOver && !mouseIsPressed) {
        this.handleClick()
        this.active = false
    }
}

Button.prototype.handleClick = function() {
    console.log('click');
}