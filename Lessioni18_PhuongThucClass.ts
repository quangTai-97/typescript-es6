class Personal{
    constructor(name123){
            this.name123 = name123;
            console.log(this.name123 + "constructor.");
    }

    static talk(){
        console.log ('this static method is talk');

    }
    run(){
        console.log('Presson running');
    }

}
let p =new Personal("TaiDoDo");

Personal.talk();
p.run();
