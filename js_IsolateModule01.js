
App.modules.module01 = function (box) {
    box.method11 = function (m) {
        document.getElementById("test").innerHTML+="<br> method11  module01" + m ;
        document.getElementById("test").innerHTML+="<br>box.constructor.prototype.transferValue: " + box.constructor.prototype.transferValue ;
        box.constructor.prototype.transferValue = 'mmm';
        document.getElementById("test").innerHTML+="<br>box.constructor.prototype.transferValue: " + box.constructor.prototype.transferValue ;

    }
    box.method12 = function (m) {
        document.getElementById("test").innerHTML+="<br> method12  module01 " + m ;
        document.getElementById("test").innerHTML+="<br>box.constructor.prototype.transferValue: " + box.constructor.prototype.transferValue ;
        
    }
    box.method13 = function (m) {
       document.getElementById("test").innerHTML+="<br> method13  module01" + m;
       document.getElementById("test").innerHTML+="<br>box.constructor.prototype.transferValue: " + box.constructor.prototype.transferValue ;
    }

}

