/* 
In JavaScript, objects have a special hidden property [[Prototype]] (as named in 
the specification), that is either null or references another object. That object is called “a prototype”:


When we read a property from object, and it’s missing, JavaScript automatically 
takes it from the prototype. In programming, this is called “prototypal inheritance”
*/



// example 1
let animals = {
    eat : true,
}

let birds = {
    fly : true,
}

let human = {
    doAnything : true,
}

birds.__proto__ = animals;
human.__proto__ = birds;

console.log(human.eat);



// Example 2
let animal = {
    prey : true,
    eat : true,

    walk (){
        return `walk and run `
    },
}

let birds = {
    fly : true,
    swim : true,
    __proto__ : animal,  // we can inherit like this
}

let human = {
    __proto__ : birds,
}

console.log(human.walk());



// Example 3
let aniMal = {
    eat : true,
    walk (){
            // nothing to print
    }
}

let rabbit ={
    __proto__ : aniMal,
}

rabbit.walk = function(){
     console.log("Bounce - Bounce"); // customize there
}

rabbit.walk();



// Example 4
let user = {
    name : "Sumant Kumar",
    surname : " Singh ",
    
    set fullName(value){
        [this.name , this.surname] = value.split(" ");
    },

    get fullName(){
        return `${this.name}  ${this.surname}`
    }
}

let admin = {
    isAdmin : true,
    __proto__ : user,
}

console.log(admin.name);
console.log(admin.surname);
admin.fullName = "Raghunath Ji" // also we can modify here and return name and surname 
console.log(admin.name); // Raghunath for older user.fullName





// Example 5 The for..in loop iterates over inherited properties too.
let sharmaJi ={
    study : true,
}

let guptaJi = {
    sports : true,
    __proto__ : sharmaJi,
}

console.log(Object.keys(guptaJi));

for(let prop in guptaJi){
    //console.log(prop); // print all


    let isOwn = guptaJi.hasOwnProperty(prop); // to check prop is own of object and which inherited
    if(isOwn){
        console.log( `this is our ${prop}`);
    }else{
        console.log( `this is inherited ${prop}`)
    }
    
    
}





/*---------------------------------------    F.prototype   ---------------------------------------------*/

let vegatable ={
    vitamins : true,
}

function Fruits(value){
    this.value = value;
}

Fruits.prototype = vegatable;

console.log(Fruits.vitamins);





/* ---------------------------------     Best syntax to use   -------------------------------- */

let lion = {
    eat : true,
    run : true,

    walk(){
        return `he can walk`
    }
}

let birds = Object.create(lion);
birds.fly = true;

let humans = Object.create(birds);

console.log(human.eat);


// Avoid __proto__ for better performance and maintainability




// for modifying

let cat = {
    makeSound : function () {
        console.log("Meow Meow");
        
    }
}

let dog = {}; // empty obj

Object.setPrototypeOf(dog, cat);

dog.makeSound();





//
let animal1 = {
    prey: true,
    eat: true,
    walk() {
        return `walk and run`;
    },
};

// Create birds that inherit from animal
let birds = Object.create(animal1);
birds.fly = true;
birds.swim = true;

// Create human that inherits from birds
let human = Object.create(birds);

console.log(Object.getPrototypeOf(human) === birds); // true
console.log(Object.getPrototypeOf(birds) === animal1); // true
console.log(Object.getPrototypeOf(animal) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null (end of prototype chain)







 