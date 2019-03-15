function SpreadShot(handler) {
    this.handler = handler;
    
    var mark = 0;           // a marker in time
    var wait = 400;         // time between shots fired
    var canShoot = true;    // cooldown nstate
    
    this.fire = function(vector) {
        // only shoot when on cooldown
        if(canShoot) {
            var v1 = vector;
            var v2 = createVector(v1.x - 2, v1.y);
            var v3 = createVector(v1.x + 2, v1.y);
            _SM.spawn(new Bullet(handler.x, handler.y, v1, handler.team));
            _SM.spawn(new Bullet(handler.x, handler.y, v2, handler.team));
            _SM.spawn(new Bullet(handler.x, handler.y, v3, handler.team));
            canShoot = false; // don't forget to turn off cooldown
        }
        
        // move the marker and ready another shot
        if(millis() - mark > wait) {
            mark = millis();
            canShoot = true;
        }
    }
}
