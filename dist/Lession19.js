"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personnall = /** @class */ (function () {
    function Personnall(name) {
        console.log(name + ' person Contrcutor');
    }
    Personnall.prototype.getID = function () {
        return 10;
    };
    return Personnall;
}());
//Kế thừa từ personal
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = 
        //super: sử dụng lại của contructor person
        _super.call(this, name) || this;
        console.log(name + " employee cóntructor");
        return _this;
    }
    Employee.prototype.getiD = function () {
        return _super.prototype.getID.call(this);
    };
    return Employee;
}(Personnall));
var emp = new Employee("TaiDoDo");
console.log(emp.getiD());
//# sourceMappingURL=Lession19.js.map