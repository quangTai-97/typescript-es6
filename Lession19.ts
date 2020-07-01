class Personnall{
    constructor (name){
        console.log(name +' person Contrcutor');
    }

    getID(){
        return 10;
    }
}
//Kế thừa từ personal
class Employee extends Personnall{
     constructor(name){
         //super: sử dụng lại của contructor person
         super(name);
         console.log(name + " employee cóntructor");
     }
     getiD(){
         return super.getID();
     }
}
var emp = new Employee("TaiDoDo");
console.log(emp.getiD());
