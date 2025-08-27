


/*Hoisting in JavaScript is a behavior where variable and function declarations
 are moved to the top of their containing scope during the compilation phase. 
 This means you can use variables and functions before you declare them in your code.  
*/



// --------------------------------  Function Declaration ---------------------------------------------------


//Function declarations are hoisted completely, meaning you can call the function before its declaration.

/*
run(); // Because of hoisting in javascript this function run and return output (Run at 12km per hour)

function run() {
    console.log('Run at 12km per hour');

}
    */


// ----------------------------------- Named Function Assignment ------------------------


/*
walk(); //Hoisting only work on function declaration not in function assignment 
also not use in class or variable ....... only in var variable hoisting works

let walk=function old(){
    console.log('Budhe Budhe ');
    
}
    */

// ----------------------------------- Annonymous Function Assignment ------------------------
/*
let talk=function(){    // only removing name of after function {old()} is count on Annonymous Function Assignment
    console.log('Chala Ja B ');
    
}
talk();
*/



// -------------------------------------------- Function----------------------------------------

/*
function sum(a,b){
    console.log(arguments);  // its return key value pair of values in a and b ...... its return object not array
    return a+b;
    
}

console.log(sum(1+2));
*/



// ------------------------------------ For Multiple Parameters (Eg. of Dynamically Function) -------------------------------

/*
function sum(){
    let total=0;
    for(let value of arguments){   // using of these function we put unlimited parameters   
      total=total+value;          // & arguments always return objects its look like array but its a an a object

    }
    return total;
   
}
console.log(sum(1,2,3,4,5)); // generally without loop we put only two values like sum(a,b) because it is dependent on function given parameter
*/




/* ------------------------------------------------------- Rest Operator ----------------------------------------------------


// Rest operator return in form of array and rest parameter is alway last formal parameter we cann't put any variable name after rest operator


function sum(...args){
    console.log(args);
    
}
sum(1,2,3,4,5);  // return in array form al number



// Adding multiple values

function addNumbers(...numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  

console.log(addNumbers(1,2,3,4,5));

*/



/*--------------------------------------------------------  Default Parameter  ---------------------------------------------------

function loan(p,r=20,y=5){     // r=10, y=5 is method to put default parameter
    return p*r*y/100;     // so we set default parameter because if any case we/user did not put any value to give answere according to fix parameter value without any error
}

console.log(loan(10000,10));

*/


/*--------------------------------------------------------------  Getter Setter  -------------------------------------------------------

let person={
    fname :'Sumant',
    lname : 'Kumar',
    get fullname() {
        // return `${person.fname +' '+  person.lname}`;
        return `${person.fname}  ${person.lname}`
    },

    set fullname(value){
        let parts=value.split(' ');
        this.fname=parts[0];
        this.lname=parts[1];
    }
}


// console.log(fullname()); // calling getter

person.fullname="Rahul Baniya";
console.log(person.fullname);  // calling setter 

 */





/* ---------------------------------------------------------- Error Handling ---------------------------------------------


let person={
    fname :'Sumant',
    lname : 'Kumar',
    get fullname() {
        return `${person.fname}  ${person.lname}`
    },

    set fullname(value){

        if (typeof value != String){
            throw new Error('You have not sent a String')
        }
        let parts=value.split(' ');
        this.fname=parts[0];
        this.lname=parts[1];
    }
}

try{
    person.fullname=true;
} 

catch (e){
    alert(e);
}


console.log(person.fullname); 

*/


//========================================================================================

// let arra=[1,2,3,4];
// let total=0;

// for(let value of arra){
//     total+=value;
// }


//  total=arra.reduce((accumulator,currentValue)=> accumulator+currentValue,0);
// console.log(total);





/* -------------------------------------------------- taking user input data ----------------------------------- */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter your name: ', (name) => {
  console.log(`Hello, ${name}!`);
  rl.close();
});