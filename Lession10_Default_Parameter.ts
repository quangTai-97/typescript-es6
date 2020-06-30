//Truyển giá trị mặc định
let getPercent = () => 2;
let getBonus = (value = 10,tax = value*getPercent()) =>{
     console.log(value + tax);
    //số lượng tham số
    // console.log(arguments.length);
}

getBonus();
//getBonus(40);
//getBonus(undefined, 40);