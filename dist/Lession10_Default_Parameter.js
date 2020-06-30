"use strict";
//Truyển giá trị mặc định
var getPercent = function () { return 2; };
var getBonus = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * getPercent(); }
    console.log(value + tax);
    //số lượng tham số
    // console.log(arguments.length);
};
getBonus();
//getBonus(40);
//getBonus(undefined, 40);
//# sourceMappingURL=Lession10_Default_Parameter.js.map