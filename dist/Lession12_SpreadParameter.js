"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var disPlayColor1 = function (message1) {
    var colors2 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors2[_i - 1] = arguments[_i];
    }
    for (var i in colors2) {
        console.log(colors2[i]);
    }
};
var message1 = "Hello";
var colors2 = ['Red', 'Green', 'Blue'];
disPlayColor1.apply(void 0, __spreadArrays([message1], colors2));
//  disPlayColor(message,'Red');
//  disPlayColor(message,'Red','Green');
//  disPlayColor(message,'Red','Green','Blue');
//# sourceMappingURL=Lession12_SpreadParameter.js.map