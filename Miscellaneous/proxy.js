/*
“A Proxy in JavaScript allows us to define custom behavior when interacting 
with an object. It’s especially useful for logging, validation, and reactivity
— and it’s the secret behind how frameworks like Vue implement two-way data binding.”
*/

/* In Short

A Proxy is an object that wraps another object and allows
you to intercept and customize operations performed on that object.

*/

//Syntax
let target ={}
let proxy = new Proxy( target ,{});

proxy.test = "Hello, Guys !"
console.log(target.test);

for(let key in proxy){
    console.log(key);
    
}


// example 1.
let numbers = [0,1,2,3];

numbers = new Proxy(numbers, {
    get(target, prop){
        if(prop in target){
            return target[prop];
        }else{
            return 0;
        }
    }
})
console.log(numbers[123]);




//example 2.
// Default value with get trap 

let dictionary = {
    hello : "Namaste",
    bye_bye : "Radhe Radhe",
    morning : "SubhPrabhat"
}

let proxy = new Proxy(dictionary, {
    get(target, pharse){
        if(pharse in target){
            return target[pharse];

        }else{
            return pharse;
        }
    }
})

console.log(proxy['bye_bye']);



// Example .3
// Using set trap

let number =[];

number = new Proxy(number,{
    set(target, prop, value){
        if(typeof value == "number"){
           target[prop] = value;
           return true;

        }else{
            return false;
        }
    }
});

number.push(12);
number.push(23);
console.log(`length of numbers is ${number.length}`);



// Example .4 Iteration with 'ownKeys' and 'getOwnPropertyDescriptor

let user ={
    name : 'Sumant',
    age : 20,
    _password : "*****",
}

user = new Proxy( user, {
    ownKeys(target){
        return Object.keys(target).filter(key => !key.startsWith("_")); // if there we return custom keys like [a,b,c] thats not work cause of propery descriptor
    }
});

for(let key in user){
   console.log(`${key} : ${user[key]}`);
    
}

console.log(Object.values(user));
console.log(Object.keys(user));  // they both also works



// Example .5 Using property descriptor for change object keys value


let obj ={
    name : 'Sumant',
    age : 20,
    _password : "*****",
};

obj = new Proxy(obj, {
    ownKeys(target){
        return ['a' , 'b' , 'c']
    },
    getOwnPropertyDescriptor(target, prop){
        return{
            enumerable : true,
            configurable : true,
        };
    }
});

console.log(Object.keys(obj));  // output : [ a b c]
//Let’s note once again: we only need to intercept [[GetOwnProperty]] if the property is absent in the object.



// Example 6. Using has to check in range

let range ={
    start : 1,
    end : 10,
}

range = new Proxy(range, {
    has(target, prop){
        return prop >= target.start && prop <= target.end;
    }
});
