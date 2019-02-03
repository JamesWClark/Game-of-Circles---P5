function Bullet(x, y, vector, team) {
    this.x = x;
    this.y = y;
    this.team = team;
    this.vector = vector;
    this.diameter = 10;
    
    this.move = function() {
        this.x += vector.x;
        this.y += vector.y;
    }
    
    this.display = function() {
        fill(0);
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
    
    this.animate = function() {
        this.move();
        this.display();
    }
}