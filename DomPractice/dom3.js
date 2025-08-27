
/*-------------------------------------------------------------    Measure Speed of Code  --------------------------- */

// using performance.now();

// let t1=performance.now();
// for(let i=0; i<=100; i++){
//     let newElement=document.createElement('p');
//     newElement.textContent="This is Para "+ i;

//     document.body.appendChild(newElement)
// }
// let t2=performance.now();
// console.log("It takes" + (t2-t1) + " ms");  // --------This code take 0.7 ms



// This code is more optimized

// let t3=performance.now();
// let myDiv=document.createElement('div');

// for(let i=0; i<=100; i++){
//     let newElement=document.createElement('p');
//     newElement.textContent="This is Para "+ i;

//     document.body.appendChild(newElement)
// }
// document.body.appendChild(myDiv);

// let t4=performance.now();
// console.log("It takes" + (t4-t3) + " ms"); // And this takes 0.2 ms



/*-------------------------------------------------------------  Ducument Fragment  ------------------------------------- */

// Enhancing more code to protect 100 time reflow and repaint 

// let fragment=document.createDocumentFragment()
// for(let i=0; i<=100; i++){
//     let newElement=document.createElement('p');
//     newElement.textContent="This is Para "+ i;

//     fragment.appendChild(newElement)
// }
// document.body.appendChild(fragment);  // know it s only create 1 reflow and 1 repaint




/* ----------------------------------------------------   Event Loop   ------------------------------------------------------ */


// _____________________________  SET TIMEOUT FUNCTION  ________________________________________

// The setTimeout function in JavaScript is used to execute a function or a piece of code after a specified delay. Here are the key points:

// Key Features:

// 1.  Delay Execution: Executes a function after a specified number of milliseconds.
// 2   Single Execution: The function is executed only once. For repeated execution, use setInterval.
// 3   Asynchronous: Allows for non-blocking code execution, enabling other code to run while waiting for the timeout.

// Syntax:

// setTimeout(function, delay, [param1, param2, ...]);

// 1. function: The function to be executed.
// 2. delay: The time in milliseconds to wait before executing the function.
// 3. param1, param2, …: Optional parameters to pass to the function 

// Example:


// console.log('Start');

// setTimeout(() => {
//   console.log('This message is delayed by 2 seconds');
// }, 2000);

// console.log('End');

// In this example:

// 1. “Start” is logged immediately.
// 2. The setTimeout schedules the callback to run after 2 seconds.
// 3. “End” is logged immediately after “Start”.
///4. After 2 seconds, the message “This message is delayed by 2 seconds” is logged.


// Usage:

// 1. Delaying Code Execution: Useful for delaying the execution of code, such as animations or user notifications.
// 2. Simulating Delays: Can be used to simulate delays in asynchronous operations for testing purposes.



// Clearing Timeout:
// To cancel a timeout before it executes, use clearTimeout with the timeout ID returned by setTimeout:



// const timeoutID = setTimeout(() => {
//   console.log('This will not be logged');
// }, 5000);

// clearTimeout(timeoutID);




console.log("hii everyone");
setTimeout(function timeout(){
    console.log('Click the button')
},10000)
console.log('Ho gaya finally')

