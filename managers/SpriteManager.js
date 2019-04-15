function SpriteManager() {
    
    var player;
    
    var sprites = []; // active sprites
    var destroyed = []; // destroyed sprites
    
    this.getPlayer = function() {
        return player;
    }

    this.setPlayer = function(playerInstance) {
        player = playerInstance;
        this.spawn(player);
    }
    
    this.spawn = function(obj) {
        sprites.push(obj);
    }

    this.destroy = function(target) {
        destroyed.push(target);
    }
    
    this.manage = function() {
        updateCoordinates();
        checkCollisions();
        bringOutTheDead();
    }
    
    function updateCoordinates() {
        for(var i = 0; i < sprites.length; i++) {
            sprites[i].animate();
        }
    }
    
    function checkCollisions() {
        for(var i = 0; i < sprites.length; i++) {
            for(var j = i + 1; j < sprites.length; j++) {
                var a = sprites[i];
                var b = sprites[j];
                if(a.team !== b.team && collision(a, b)) {
                    sprites[i].handleCollision();
                    sprites[j].handleCollision();
                }
            }
        }
    }
    
    function collision(a, b) {
        if (a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y) {
            return true;
        } else {
            return false;
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
