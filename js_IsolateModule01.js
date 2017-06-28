 
App.modules.module01 = function (box) {
    box.method11 = function (m) {
        document.getElementById("test").innerHTML += "<br>invoke 'method11' from 'module01', input value= " + m;
        DisplayTransferValue(box);
        box.constructor.prototype.transferValue = 'записываем значение';
        document.getElementById("test").innerHTML += "<br>SET transferValue"  ;
        DisplayTransferValue(box);

    }
    box.method12 = function (m) {
        document.getElementById("test").innerHTML += "<br>invoke 'method12' from 'module01', input value= " + m;
        DisplayTransferValue(box);
        
    }
    box.method13 = function (m) {
        document.getElementById("test").innerHTML += "<br>invoke 'method13' from 'module01', input value= " + m;
        DisplayTransferValue(box);
    }

}

