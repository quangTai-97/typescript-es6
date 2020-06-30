let iSDone: boolean = false;
console.log(iSDone);

let decimal: number  = 6 ;
console.log(decimal);

let color: string = "green";
console.log(color);


let fullName: string = "Bố tài"
let sentence : string = `Hello, my name is ${ fullName +1 }.
`;
console.log(sentence);

//Mảng
let List: Array<number> = [1,2,3];

//Mảng hỗn hợp 
let x: [string,number];
x = ["hihi",10];
console.log(x[0]);

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];
console.log(colorName);

