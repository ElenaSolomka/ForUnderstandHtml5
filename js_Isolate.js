// Шаблон изолированного пространства имен предоставляет каждому модулю окуржение, излированное от других модулей
// и их пространст имен.

function App() {
    // преобразовываем аргкменты в массив.
    var args = Array.prototype.slice.call(arguments),
        // функция обратного вызова
        callback = args.pop(),
        // имена модулей могут передаться как один массив или через запятую.
        modules = (args[0] && typeof args[0] == "string") ? args : args[0],
        i;

    // проверка, была ли функция вызвана с ключевым слововм new
    if (!(this instanceof App)) {
        return new App(modules, callback);
    }

    // свойства
    this.productName = "Isolated Namespace Sample";
    this.version = "1.0.0.0";

    // если в параметр modules передано значение * или модули не указаны - нужно подключить все доступные модули.
    if (!modules || modules === "*") {
        modules = [];
        for (i in App.modules) {
            alert('i=' + i + "\n modules[i]=" + App.modules[i]);

            if (App.modules.hasOwnProperty(i)) {
                //alert("push");
                modules.push(i)
            }
        }
    }

    // инициализация всех необходимых модулей
    for (i = 0; i < modules.length; i++) {
        // каждый модуль представленн функцией. см. код ниже.
        App.modules[modules[i]](this);
    }

    callback(this);
}

// опредленение модуелй.
App.modules = {}

