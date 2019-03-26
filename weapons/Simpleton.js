function Simpleton(handler) {
    this.handler = handler;
    
    var mark = millis();
    var wait = 100;
    
    this.fire = function(vector) {
        if(millis() - mark > wait) {
            mark = millis();
            _SM.spawn(new Bullet(handler.x, handler.y, vector, handler.team));
        }
    }
}
