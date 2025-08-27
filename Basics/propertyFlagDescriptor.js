// Object properties, besides a value, have three special attributes.

// 1. writable – if true, the value can be changed, otherwise it’s read-only.
// 2. enumerable – if true, then listed in loops, otherwise not listed.
// 3. configurable – if true, the property can be deleted and these attributes can be modified, otherwise not.




// example 1. The method { Object.getOwnPropertyDescriptor } allows to query the full information about a property.

let student = {
    name : "Sumant",
    age : 21,
}

let descriptor = Object.getOwnPropertyDescriptor(student, 'name');
console.log(JSON.stringify(descriptor, null, 2)); // using jso.stri.. to convert in string and easy to read 




/* example 2. If the property exists, defineProperty updates its flags. 
Otherwise,it creates the property with the given value and flags; in that
case, if a flag is not supplied, it is assumed false. */

let user = {}; // empty object

Object.defineProperty(user, 'name', {
    value : 'Himanshu shukla'
});

let print = Object.getOwnPropertyDescriptor(user, 'name');
console.log(JSON.stringify(print, null, 2)); // its written only value and other false








// Example 3. Making a non - writable Object property

let baby = {
    name : 'Johnny',
}

Object.defineProperty(baby, 'name',{
    writable : false
});

baby.name = "Juliya";

console.log(baby.name); // return john its dosen't update


// same as but object created from scratch
let baby1 = { };

Object.defineProperty(baby1, 'name',{
    value : 'Rahu',
    enumerable : true,
    configurable : true,  // other two set default to current opposite
});

console.log(baby1.name); 
baby1.name = 'Ketu'; // error doesn't change





//






