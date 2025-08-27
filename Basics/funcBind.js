//  Once a method is passed somewhere separately from the object – this is lost.
// To fix this we use several methods

// Example of problem

let user ={
    name: "Sumant",
    sayHi : function(){
        console.log(this.name);
        
    }
}

setTimeout(user.sayHi, 1000);  // so it's return undefined



// Solution 1
let user1 = {
    name: "Sumant Singh",
    sayHi : function(){
        console.log(this.name);
        
    }
}

setTimeout( () => {
    user.sayHi();
},2000)



// Solution 2 using of bind() method
let detail = {
    name: "Aizen",
}

let detail1 = {
    name : "Ichigo",
}

function sayHello(){
    console.log(`Hello ${this.name}`);
    
}

let print = sayHello.bind(detail); // its work to all function 
print();

let print1 = sayHello.bind(detail1);// if any func bind with its work
print1();




// Solution 3
let users = {
    name : "Uchiha Madara",
    sayHola : function(){
        console.log(` ${this.name}`);
        
    }
}

let sayHii = users.sayHola.bind(users);
sayHii();

setTimeout(sayHii, 2000); // now its also work cause its fin on lexical environment
// if the value now changes after 2 second but result is same cause its prebounded to first



// solution 4th
let user2 = {
    name: "Sumant",
    greet: function() {
      console.log(`Hello, my name is ${this.name}`);
    }
  };
  
  user2.greet(); // Output: Hello, my name is Sumant
  
  let greetFn = user2.greet;
  greetFn(); // Output: Hello, my name is undefined (because `this` refers to global object)
  
  for (let key in user2) {
    if (typeof user2[key] == 'function') {
      user2[key] = user2[key].bind(user2);
    }
  }
  
  greetFn = user2.greet;
  greetFn(); // Output: Hello, my name is Sumant (now `this` is bound to `user`)
  

  