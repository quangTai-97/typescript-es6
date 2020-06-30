"use strict";
// nhóm parameter trích xuất biến thành 1 mảng
//kiểm tra truy xuất tất cả các biến trong hàm mà k cần biết các tham số cụ thể
var disPlayColor = function (message) {
    // for (let i in colors)
    // {
    //truyển ra vị trí các biến
    //console.log(color);
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    //lấy giá trị của biến
    //onsole.log(arguments[i])
    //  }
    console.log(message);
    console.log(colors);
    console.log(arguments.length);
};
var message = "Hello";
disPlayColor(message, 'Red');
disPlayColor(message, 'Red', 'Green');
disPlayColor(message, 'Red', 'Green', 'Blue');
//# sourceMappingURL=Lession11_RestParamater.js.map