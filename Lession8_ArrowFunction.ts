//Arrow Function: cách viết func viết tắt dạng ngắn (bỏ qua return, tên hàm)
var calculate = function(){
    return 1000000;
}
let calculateArrow = (bonus:number,tax:number) => 5000000 + bonus - tax;
console.log(calculate());
console.log(calculateArrow(1200,200));