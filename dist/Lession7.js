"use strict";
var iSDone = false;
console.log(iSDone);
var decimal = 6;
console.log(decimal);
var color = "green";
console.log(color);
var fullName = "Bố tài";
var sentence = "Hello, my name is " + (fullName + 1) + ".\n";
console.log(sentence);
//Mảng
var List = [1, 2, 3];
//Mảng hỗn hợp 
var x;
x = ["hihi", 10];
console.log(x[0]);
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var colorName = Color[2];
console.log(colorName);
//# sourceMappingURL=Lession7.js.map