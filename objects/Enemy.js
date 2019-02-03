function Enemy(x, y, team) {
    this.x = x;
    this.y = y;
    this.team = team;
    this.diameter = 50;
    this.speed = 4;
    
    this.move = function() {
        this.x += this.speed;
        this.y += random(-2,2);
        
        if(this.x < 0 || this.x > width) {
            this.speed *= -1;
        }
    }
    
    this.display = function() {
        fill(0,0,255);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
    
    this.animate = function() {
        this.move();
        this.display();
    }
    
    this.fire = function() {
        
    }
}