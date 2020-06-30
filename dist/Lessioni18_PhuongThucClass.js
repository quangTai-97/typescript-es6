"use strict";
var Personal = /** @class */ (function () {
    function Personal(name123) {
        this.name123 = name123;
        console.log(this.name123 + "constructor.");
    }
    Personal.talk = function () {
        console.log('this static method is talk');
    };
    Personal.prototype.run = function () {
        console.log('Presson running');
    };
    return Personal;
}());
var p = new Personal("TaiDoDo");
Personal.talk();
p.run();
//# sourceMappingURL=Lessioni18_PhuongThucClass.js.map