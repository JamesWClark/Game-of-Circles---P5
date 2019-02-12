function SpriteManager() {
    var player = new Player(width / 2, height - 100);
    
    var sprites = [];
    var destroyed = [];
    
    this.getPlayer = function() {
        return player;
    }
        
    this.spawn = function(obj) {
        sprites.push(obj);
    }

    this.destroy = function(target) {
        destroyed.push(target);
    }
    
    this.animate = function() {
        for(var i = 0; i < sprites.length; i++) {
            sprites[i].animate();
        }
        checkCollisions();
        bringOutTheDead();
    }
    
    function checkCollisions() {
        for(var i = 0; i < sprites.length; i++) {
            for(var j = i + 1; j < sprites.length; j++) {
                var a = sprites[i];
                var b = sprites[j];
                if(a.team !== b.team && a.isColliding(b)) {
                    sprites[i].handleCollision();
                    sprites[j].handleCollision();
                }
            }
        }
    }
    
    function bringOutTheDead() {  
        for(var i = 0; i < destroyed.length; i++) {
            // https://stackoverflow.com/a/5767357/1161948
            var target = destroyed[i];
            var index = sprites.indexOf(target);
            if(index > -1) {
                sprites.splice(index, 1);
            }
        }
    }
}