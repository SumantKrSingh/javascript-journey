/*-----------------------------------------  Promises  -------------------------------------------- */

//  Promises in JavaScript are a way to handle asynchronous operations more efficiently. 
//  They represent a value that may be available now, in the future, or never. Think of 
//  it like a commitment that something will be done eventually. Here are the main points:

// States: A promise can be in one of three states:

// 1. Pending: The initial state, neither fulfilled nor rejected.

// 2. Fulfilled: The operation completed successfully.

// 3. Rejected: The operation failed.


//_________  Example ___________

// let meraPromise= new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("I am inside the promise");
        
//     },5000)
//     // resolve(339);
//     reject(new Error("Apki request fulffiled nahi kar sakte"))
// })

// // Using then catch for working on value and errors
// meraPromise.then((value)=> {console.log(value)}, (error)=>{console.log("Recived an error")}); // best way



// console.log(meraPromise); // uutput= promise fullfield and resolve value 339  and if we reject then its marked rejected and resaon for reject

// console.log("First");



// let waada1=new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         console.log('set timeout 1 started');
        
//     },2000);
//     resolve(true);
// });

// let output=waada1.then(()=>{
//     let wada2=new Promise(function(resolve,reject){
//        setTimeout(()=>{
//         console.log('set timeout 2 started');
//        },4000)
//        resolve("wada 2 resolved")
//     });
//    return wada2;
// })
// output.then((value)=> console.log(value));




/*---------------------------- Aync And Await ------------------------ */


/*

1. When a function is marked as async, it means it returns a Promise. This allows you to 
use await within the function to pause execution until the Promise is resolved.

2. Await is used to pause the execution of an async function until the Promise is resolved. 
It can only be used inside async functions. In the example above, the code waits for the 
fetch operation to complete before moving to the next line. This makes your code look and 
behave more like synchronous code, which is much easier to read and debug.
 */





// async function utility() {
    

// let delhiWeather=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Delhi weather is high now days")
//     },3000)
// });


// let haryanaWeather=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("Haryana weather is cool now days")
//     },6000)
// });

// let dm=await delhiWeather;
// let hm=await haryanaWeather;

// return[dm,hm]
// }


/*-----------------------------------  Fetch API ---------------------------------------- */


/*
The Fetch API is a modern way to make network requests in JavaScript. It replaces the older XMLHttpRequest method 
with a simpler, more powerful interface. Fetch returns a Promise, which makes it easy to use with async/await.
*/


// async function Anime() {
//     let content= await fetch("https://jsonplaceholder.typicode.com/todos/1")
//     let output=await content.json();
//     console.log(output);
    
// }

// Anime();



/*---------------------------------------     Post Call    ------------------------------------------ */

async function helper() {
    

let options={
    method: 'POST',
    body: JSON.stringify({
      title: 'Sumant',
      body: 'javascript',
      userId: 9,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }

  let content= await fetch('https://jsonplaceholder.typicode.com/posts',options);
  let output= content.json();

  return output;

}

async function print() {
    let answ= await helper();
    console.log(answ);
     
}

print();