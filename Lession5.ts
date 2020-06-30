for( let i = 1; i <= 5; i++){
    setTimeout(function(){

        console.log(i);
    },1000)
}


//biến x sẽ là tham trị và sẽ không là tham chiếu như biến i=> Sẽ chạy vs scope mới
// for( var i = 1; i <= 5; i++){
//     (function(x){
//         setTimeout(function(){

//             console.log(x);
//         },1000)

//     })(i)
    
// }