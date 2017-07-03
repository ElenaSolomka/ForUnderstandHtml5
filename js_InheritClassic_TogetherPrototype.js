// родительский конструктор
function Parent(name) {
    this.name = name || "Adam";
}

// дополнительное поведение добавленное в прототип.
Parent.prototype.say = function () {
    alert("Hello my name is " + this.name);
}

function Child() {
}

inherit(Child, Parent);

function inherit(C, P) {
    C.prototype = P.prototype;
}

Child.prototype.say = function () {
    alert("Hello my SUPERname is " + this.name);
}