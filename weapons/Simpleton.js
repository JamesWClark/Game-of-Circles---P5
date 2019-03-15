function Simpleton(handler) {
    this.handler = handler;
    
    var mark = 1000;
    var wait = 1000;
    
    this.fire = function(vector) {
        if(millis() - mark > wait) {
            mark = millis();
            _SM.spawn(new Bullet(handler.x, handler.y, vector, handler.team));
        }
    }
}
