function UIManager() {
    var controls = [];
    
    this.add = function(element) {
        controls.push(element);
    }
    
    this.remove = function(element) {
        var index = controls.indexOf(element);
        if(index > -1) {
            controls.splice(index, 1);
        }
    }
    
    this.manage = function() {
        for(var i = 0; i < controls.length; i++) {
            controls[i].display();
            controls[i].observe();
        }
    }
}