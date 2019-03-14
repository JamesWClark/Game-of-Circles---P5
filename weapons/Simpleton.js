function Simpleton(handler) {
    this.handler = handler;
    
    var mark = 0;
    var wait = 1000;
    
    this.fire = function(vector) {
        if(millis() - mark > wait) {
            _SM.spawn(new Bullet(handler.x, handler.y, vector, handler.team));
        }
    }
}
