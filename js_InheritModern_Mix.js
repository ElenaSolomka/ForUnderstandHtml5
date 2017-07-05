function mix() {
    var arg, prop, child = {};
    for (arg = 0; arg < arguments.length; arg++) {
        for (prop in arguments[arg]) {
            if (arguments[arg].hasOwnProperty(prop)) {
                child[prop] = arguments[arg][prop];
            }
        }
    }

    return child;
}
function mixExtend() {
    var arg, prop, child = {};
    for (arg = 0; arg < arguments.length; arg++) {
        extendDeep(arguments[arg], child)
        //for (prop in arguments[arg]) {
        //    if (arguments[arg].hasOwnProperty(prop)) {
        //        child[prop] = arguments[arg][prop];
        //    }
        //}
    }

    return child;
}