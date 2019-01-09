function Ship(x, y) {
    var x = x;
    var y = y;
    var w = 40;
    var h = 40;
    var speed = 5;
    
    var up = false;
    var down = false;
    var left = false;
    var right = false;
    
    var self = this;
    
    self.move = function() {
        if(up) y -= speed;
        if(down) y += speed;
        if(left) x -= speed;
        if(right) x += speed;
    }
    
    self.display = function() {
        ellipse(x, y, w, h);
    }
    
    self.keyUp = function() {
        switch(keyCode) {
            case UP_ARROW:
                up = false;
                break;
            case DOWN_ARROW:
                down = false;
                break;
            case LEFT_ARROW:
                left = false;
                break;
            case RIGHT_ARROW:
                right = false;
                break;
        }
    }
    
    self.keyDown = function() {
        switch(keyCode) {
            case UP_ARROW:
                up = true;
                break;
            case DOWN_ARROW:
                down = true;
                break;
            case LEFT_ARROW:
                left = true;
                break;
            case RIGHT_ARROW:
                right = true;
                break;
        }
    }
}