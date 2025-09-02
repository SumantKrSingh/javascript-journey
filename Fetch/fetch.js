/*
1. What is Fetch API ?
Modern way to make HTTP requests in JavaScript.
Returns a Promise that resolves to a Response object.
Replaces older XMLHttpRequest.

2. Common Options:
method: GET, POST, PUT, DELETE
headers: { "Content-Type": "application/json" }
body: Data to send (e.g., JSON.stringify({...}))

4. Key Features:
Promise-based → easier async handling.
Streams response (can read partially).
Doesn’t reject on HTTP errors (like 404/500) → must check response.ok.
*/



/* Using Async Await */
// let url = "https://api.github.com/repos/SumantKrSingh/javascript-mini-projects/commits";
// let response = await fetch(url);
// let commits = await response.json()
// console.log(commits[0].author.login);


/* Using Promises */
// fetch("https://api.github.com/repos/SumantKrSingh/javascript-mini-projects/commits")
//     .then(response => response.json())
//     .then(commits => console.log(commits[0].author.login)
//     )


// let response = await fetch("url");

// if (response.ok) {
//     let json = response.json()
// } else {
//     console.log("Http Error" + response.status);

// }



//  uSing headers 
let response = await fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits');

console.log(response.headers.get('Content-Type'));

if (response.ok) {
    for (let [key, value] of response.headers) {
        console.log(`${key} = ${value}`);

    }
} else {
    console.log(`Http error ${response.status}`);

}
