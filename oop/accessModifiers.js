/*Defination 

Access Modifiers in JavaScript are keywords or conventions
used to control the visibility of class properties and methods.
Although JavaScript doesn't use explicit keywords like public, private, 
or protected like other languages (e.g., Java), it supports access control in the following ways:

*/


/* Uses

i. Encapsulation: Hides internal data and logic.

ii. Data Protection: Prevents unwanted access or modifications.

iii. Code Clarity: Clearly separates public APIs from internal logic.

*/




/* --------------------      Public ( Default )     --------------------------- */

/* All properties and methods in javaScript class are public
default -- thet can be accesed from outside the class .
*/

class Hero{
    constructor(name){
        this.name = name;
    }

    greet(){
        console.log(`Hi my name is ${this.name}`);
        
    }
}

let hero = new Hero("Sumant");
hero.greet();
console.log(hero.name); // both accessible







/* ---------------------------      Private (#) -Truly Private        ------------------------------ */

// You can't access them from outside not even accidently


//example hiding sensitive data

class BancAccount {
    #balance = 0;

    deposit(amount){
        if(amout > 0){
            this.#balance += amount;
        }
        getBalance()
            return this.#balance;

    }
}

let myAcc = new BancAccount();
myAcc.deposit(1000);
console.log(myAcc.getBalance());
// console.log(myAcc.#balance); // error 







/*  ------------------------     Protected (Simulation Only)     ------------------------ */

/*
 JavaScript doesn't have real Protected access like java and c++. 
 But devs simulate it using naming conventions.
 */

 class Parent {
    constructor(){
        this._protectedValue = 42;;
    }
 }

 class Child extends Parent{
        showValue(){
            console.log(this._protectedValue);
            
        }
 }

let obj = new Child();
obj.showValue();
console.log(obj._protectedValue); // Access but not recommended to use
