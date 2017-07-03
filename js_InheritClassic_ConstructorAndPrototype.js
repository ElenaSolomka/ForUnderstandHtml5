// родительский конструктор
function Parent(name) {
    this.name = name || "Adam";
}

// дополнительное поведение добавленное в прототип.
Parent.prototype.say = function () {
    alert("Hello my name is " + this.name);
}

Parent.prototype.func = function () { alert("This is PARENT");}

// дочерний конструктор.
function Child(name) {
    Parent.apply(this, arguments);
}
Child.prototype = new Parent();
Child.prototype.func = function () { alert("This is CHILD!!!"); }
Child.prototype.super = function () { alert("This is Super"); }

Parent.prototype.vjuh = function () { alert("This is Vjuh Vjuh Vjuuuuh!"); }