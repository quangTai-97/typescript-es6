// nhóm parameter trích xuất biến thành 1 mảng
//kiểm tra truy xuất tất cả các biến trong hàm mà k cần biết các tham số cụ thể
let disPlayColor = function(message,...colors:string[]){
   // for (let i in colors)
   // {
        //truyển ra vị trí các biến
        //console.log(color);

        //lấy giá trị của biến
        //onsole.log(arguments[i])
  //  }
  console.log(message);
  console.log(colors);
  console.log(arguments.length);
}
let message = "Hello";
disPlayColor(message,'Red');
disPlayColor(message,'Red','Green');
disPlayColor(message,'Red','Green','Blue');