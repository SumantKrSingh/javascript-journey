/*

 */


// Syntax

let obj = {};

Reflect.set(obj, 'name', 'Jack');
console.log(obj.name);



// using get set with proxy

let user = {
    name : "Time-Pass"
}

user = new Proxy(user,{
    get(target, prop){
        console.log(`Get ${prop} in ${target}` );
        return Reflect.get(target, prop)
    },
    set(target, prop, value){
        console.log(`Set ${prop} = ${value}`);
        return Reflect.set(target, prop, value);
    }
});

let name = user.name;
name = "Sumant"


