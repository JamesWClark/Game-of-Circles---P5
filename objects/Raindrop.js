function Raindrop(x, y, team) {
    this.x = x;
    this.y = y;
    this.team = team;
    this.diameter = 50;
    this.speed = 4;
    
    this.move = function() {
        this.y += this.speed;
        this.x += random(-2,2);
        
        if(this.y > height) {
            this.y = -50;
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