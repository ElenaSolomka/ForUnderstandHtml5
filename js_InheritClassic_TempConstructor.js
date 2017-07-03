// родительский конструктор
function Parent(name) {
    this.name = name || "Adam";
    var surname;

}

// дополнительное поведение добавленное в прототип.
Parent.prototype.say = function () {
    alert("Hello my name is " + this.name);
}

Parent.prototype.func = function () { alert("This is PARENT"); }
function Child(name) {
    //this.name = "bla vla vla";
    this.name = name || "Adam";
}

inherit(Child, Parent);

function inherit(C, P) {
    var F = function () { }; // пустая функция, которая будет использоваться для задания прототипа дочернему объекту
    F.prototype = P.prototype; // установка для прототипа новой функции прототипа родителя
    C.prototype = new F();
}


Child.prototype.say2 = function () {
    alert("Hello my SYPER name is The " + this.name);
}
Child.prototype.func = function () { alert("This is CHILD!!!"); }
Child.prototype.super = function () { alert("This is Super"); }