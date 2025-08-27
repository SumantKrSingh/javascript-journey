/*
In javascript classes are blueprint for creating objects
They provide a more structured and cleaner way to implement
object - oreintedd programming compared to traditionally
constructor functions and prototype based inheritance  */


// basic syntax
class User {
    constructor(name){
        this.name = name;
    }
    
    sayHi() {
        console.log((this.name));
        
    }
}

let user = new User("Bhagwant");
user.sayHi();



// using static
class Student {

    static name = "Bhagwant Kumar";

    static sayHii(){
        console.log(this.name);
        
    }
}
console.log(User.name);
Student.sayHii();





