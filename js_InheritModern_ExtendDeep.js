function extendDeep(parent, child) {
    var i,
        toString = Object.prototype.toString,
        aStr = "[object Array]";

    child = child || {}; // проверка наличия второго аргумента.

    for (i in parent) {
        if (parent.hasOwnProperty(i)) {
            if (typeof parent[i] == "object") {
                child[i] = (toString.call(parent[i]) == aStr) ? [] : {};
                extendDeep(parent[i], child[i]); // рекурсивный вызов, для того что бы скопировать все свойства объякта или элементы массива.
            }
            else {
                child[i] = parent[i];
            }
        }
    }

    return child;
}
