
let disPlayColor1 = function(message1,...colors2:string[]){
  for(let i in colors2)
  {
      console.log(colors2[i]);
  }
 }
 let message1 = "Hello";
 let colors2 = ['Red','Green','Blue']
 disPlayColor1(message1,...colors2);
//  disPlayColor(message,'Red');
//  disPlayColor(message,'Red','Green');
//  disPlayColor(message,'Red','Green','Blue');