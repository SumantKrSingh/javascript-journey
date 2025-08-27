/*1. 
In JavaScript, async/await is syntactic sugar over Promises. It allows you to write
asynchronous code that looks and behaves like synchronous code, making it easier to read, write, and debug.
 */


/*2. Explanation

"async/await is a feature introduced in ES2017 (ES8) that allows handling 
asynchronous operations in a more readable and maintainable way. The async 
keyword is used to declare a function as asynchronous, and within that function,
await pauses the execution until the awaited Promise is resolved or rejected."

*/


/*3. Summary

"async/await makes asynchronous code easier to read and maintain by allowing 
us to write it in a synchronous style. It improves over callbacks and .then()
chains by supporting try/catch blocks for error handling and reducing nesting. 
It’s built on top of Promises, so it doesn’t replace them — it complements them."

*/

//. Ex1
async function fetchData() {

  return "data"
}

console.log(fetchData());  // Promise {'data'}



//. Ex2
async function printOutput() {
  let promise = new Promise((resolve, reject) => setTimeout(() => resolve("Data"), 3000));
  let result = await promise;

  console.log(result);

}
// printOutput(); output --> Data
console.log(printOutput());          // Promise {pending} after 3 sec print 'Data'






// when have to async func in normal func call

async function wait() {
  await new Promise(resolve => setTimeout(resolve, 1000));

  return 10;
}

function f() {
  wait().then(result => console.log(result)
  )
}

f();





// using try catcch with async func
async function fetchProfile(username) {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      throw new Error(`User not found. Status: ${response.status}`);
    }

    const data = await response.json();
    console.log(`✅ Name: ${data.name}`);
    console.log(`📍 Location: ${data.location}`);
  } catch (err) {
    console.error(`❌ Error fetching profile: ${err.message}`);
  }
}

fetchProfile("nonexistentuser123"); // Try with valid and invalid usernames



//  some questions

let logIn = (userName, passWord) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userName === "Sam" && passWord === "1100") {
        resolve("Login Successful")
      } else {
        reject("Not a valid user")
      }
    })
  })
}

let check = async () => {
  try {
    let result = await logIn("Sam", "100");
    console.log(result);

  } catch (error) {
    console.log(error);

  }
}
check();



// using callback and async 
let masterChhef = () => {
  console.log("Chef : So that's dish okay");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Chef : Food is ready");

      setTimeout(() => {
        console.log("Waiter : Here is your food sir");
        resolve("Waiter : food is served")
      }, 3000);

    }, 4000)
  })


}

let customer = async () => {

  let wait = await masterChhef();
  console.log(wait);

  console.log("Customer : Looking delicious ");
  setTimeout(() => {
    console.log("Customer : I'm gonna eat");
  }, 2000);

}

customer();





