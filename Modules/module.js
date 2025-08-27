/*
"A module in JavaScript is a file that encapsulates code so it can be
reused and maintained easily. It promotes separation of concerns and
helps organize large applications into smaller parts. We use export to
expose variables, functions, or classes, and import to use them in other files.

In real-world projects, modules are used for utilities, API services, 
UI components, configs, and shared state — helping teams work efficiently and codebases stay clean."
*/

/* in Short module is --> 

A module is just a file that contains code you can reuse — such as variables, functions, classes, etc.
It helps you split your program into separate, manageable, and reusable pieces.

*/

// Example 1
export function isOddEven(num){
    
    if(num % 2 == 0){
        return `${num} is a even number`;
        
    }else{
        return `${num} is a odd number`;
    }
}


// Example 2
// in this examplw we declare a empty object and set the name on practice.js and access the property on practice2.js
export let user = { };

export function sayHi(){
    console.log(`${user.name} Ready to fight`);
}