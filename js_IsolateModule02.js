App.modules.module02 = function (box) {
    box.method21 = function (m) { document.write("<br> method21  module02" + m); }
    box.method22 = function (m) { document.write("<br> method22  module02" + m); }
}

App.modules.module03 = function (box) {
    box.method21 = function (m1,m2) { document.write("<br> method21  module03" + m1 + m2); }
    box.method22 = function (m1, m2) { document.write("<br> method22  module03" + m1 + m2); }
}

App.modules.module04  = function (box) {
    box.method41 = function (m1, m2) { document.write("<br> method41  module04" + m1 + m2); }
    box.method42 = function (m1, m2) { document.write("<br> method42  module04" + m1 + m2); }
}