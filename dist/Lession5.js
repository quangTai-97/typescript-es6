"use strict";
var _loop_1 = function (i) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
};
for (var i = 1; i <= 5; i++) {
    _loop_1(i);
}
//biến x sẽ là tham trị và sẽ không là tham chiếu như biến i=> Sẽ chạy vs scope mới
// for( var i = 1; i <= 5; i++){
//     (function(x){
//         setTimeout(function(){
//             console.log(x);
//         },1000)
//     })(i)
// }
//# sourceMappingURL=Lession5.js.map