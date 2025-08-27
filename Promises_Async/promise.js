/* 1.
In JavaScript, a Promise is an object that represents the eventual 
result of an asynchronous operation. It lets you write async code 
in a more readable and manageable way, avoiding deeply nested callbacks,
also known as callback hell.

2.
A Promise has three states:
i. Pending – the initial state, before the result is known.
ii. Fulfilled – the operation completed successfully.
iii. Rejected – the operation failed.

3.
To handle the result, you use:
i. .then() for success
ii. .catch() for errors
iii. .finally() for cleanup (optional)

*/



/*
4. Bonus Point

Promises are the foundation of modern async JavaScript, especially 
with async/await, which is just syntactic sugar over promises.

that means

This means that behind most modern asynchronous code (like async/await),
Promises are doing the actual work. They are the core building block of handling asynchronous operations.

Syntactic sugar means:
A prettier or cleaner way to write code that does the same thing under the hood.
*/



/*

5.
"async/await is built on top of promises. It doesn't replace them — 
it just makes promise-based code more readable and easier to manage,
especially when dealing with multiple asynchronous steps."

*/


let promises = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Success"), 4000)

  setTimeout(() => reject("whoops"), 4000) // this is ignored because we call resolve first & opposite 
});

promises
  .then(result => {
    console.log("Promise result: ", result);
    console.log("Task successfully completed");

  })

  .catch(error => {
    console.log(error, "Operation is rejected");

  })



// Using finally()

const task = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Task done");
  } else {
    reject("Task failed");
  }
});

task
  .then(res => console.log(res))
  .catch(err => console.log(err))
  .finally(() => console.log("Cleanup complete ✅"));




// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

//The function delay(ms) should return a promise. That promise should resolve after ms milliseconds,


function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

delay(3000).then(() => console.log('runs after 3 seconds'));




// Rethrowing error

function isEven(num) {
  try {
    if (typeof num !== "number") {
      throw new Error("Not a number");
    }

    return num % 2 === 0;
  } catch (err) {
    console.log("Caught inside isEven:", err.message);
    throw err; // 🔁 Rethrow it to be handled outside
  }
}

try {
  let result = isEven(4); // ❌ Not a number
  console.log("Is even:", result);
} catch (e) {
  console.log("Handled outside:", e.message); // This will run
}







// then catch chaining

let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
});

promise
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })

  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })

  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  });



// checking  a prime num is true or not

let isPrime = (num) => {

  if (num < 2) return false;
  if (num === 2 || num === 3) return true;
  if (num % 2 == 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i == 0 || num % (i + 2) == 0) {
      return false;
    }
  }
  return true;
}

let num = 4;

let checkIt = new Promise((resolve, reject) => {
  if (isPrime(num)) {
    resolve("its a prime number")
  } else {
    reject("thats not a prime number")
  }
})


checkIt
  .then(result => {
    console.log(result);
  })
  .catch(result => {
    console.log(result);
  })
  .finally(() => {
    console.log("I'm a cleaner");

  })



