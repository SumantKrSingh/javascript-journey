/* A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation.*/

// There are 6 static methods in the Promise class. 

/* 1.
Promise.all()

🔍 What it does:
Waits for all promises in an array to finish (resolve), and then gives you their results in the same order as the array.

🧠 Use case:
Download 10 files/images/data together → Wait for all → Show UI
*/

let urls = [
  'https://api.github.com/users/iliakan',
  'https://api.github.com/users/remy',
  'https://api.github.com/users/jeresig'
];

let requests = urls.map(url => fetch(url));

Promise.all(requests)
  .then(responses => {
    return Promise.all(responses.map(res => res.json()));
  })
  .then(users => {
    users.forEach(user => console.log(user.name));
  });


// 💥 If any one promise fails, Promise.all fails.
Promise.all([
  Promise.resolve(1),
  Promise.reject("Failed"), // this one fails
  Promise.resolve(3)
]).catch(console.log); // Output: "Failed"

//Perfect for "all or nothing" tasks. You need everything to succeed before moving on.









/* 2. 
🔸 Promise.allSettled()

🔍 What it does:
Waits for all promises to finish (either resolve or reject), then gives an array of result objects:

{ status: "fulfilled", value: result }
{ status: "rejected", reason: error }

 */

// ✅ Real-World Example:
// Say you’re fetching product reviews from multiple sources. Some may fail, but you still want the rest.

let urls = ['good_url', 'bad_url', 'another_good'];

Promise.allSettled(urls.map(url => fetch(url)))
  .then(results => {
    results.forEach((res, index) => {
      if (res.status === 'fulfilled') {
        console.log(`Success from ${urls[index]}`);
      } else {
        console.warn(`Failed to fetch from ${urls[index]}:`, res.reason);
      }
    });
  });

//🔥 Importance:
// Useful when you don’t want one failure to ruin the rest. Great for UI or analytics data collection.






/* 3. 
 Promise.race()

🔍 What it does:
Waits for the first settled promise (resolved or rejected), then uses its result.

✅ Real-World Example:
Use for timeout logic: fetch something, but if it takes too long, reject it.

*/

let slowFetch = new Promise(resolve => setTimeout(() => resolve("Data"), 3000));
let timeout = new Promise((_, reject) => setTimeout(() => reject("Timeout"), 2000));

Promise.race([slowFetch, timeout])
  .then(console.log)
  .catch(console.warn); // Output: "Timeout"

// 💡 Importance:
// Helps prevent hanging requests. Useful in network timeout, backup request, competition scenarios.





/* 4.
🔸 Promise.any()

🔍 What it does:
Waits for the first resolved promise. Ignores rejections unless all fail.

✅ Real-World Example:
Try loading from multiple CDNs or servers — use the one that responds first.

*/

let server1 = new Promise((_, reject) => setTimeout(() => reject("Fail 1"), 1000));
let server2 = new Promise(resolve => setTimeout(() => resolve("Loaded from Server 2"), 1500));
let server3 = new Promise(resolve => setTimeout(() => resolve("Loaded from Server 3"), 2000));

Promise.any([server1, server2, server3])
  .then(console.log); // Output: "Loaded from Server 2"

//🔥 If all promises fail, you get an AggregateError.
Promise.any([
  Promise.reject("Error A"),
  Promise.reject("Error B")
]).catch(e => {
  console.log(e.constructor.name); // AggregateError
  console.log(e.errors); // ["Error A", "Error B"]
});

//💡 Importance:
// Best for fallbacks — like image loading from multiple sources.





/* 5. 
🔸 Promise.resolve(value)

🔍 What it does:
Returns a promise that instantly resolves with the value.
*/

Promise.resolve(5).then(console.log); // Output: 5

//✅ Real-World Example:
// Say you cache data. On later calls, just return that cached value — 
// but wrapped as a promise so the rest of the code works the same:

let cache = new Map();

function loadCached(url) {
  if (cache.has(url)) {
    return Promise.resolve(cache.get(url)); // cache hit
  }

  return fetch(url)
    .then(res => res.text())
    .then(text => {
      cache.set(url, text);
      return text;
    });
}

//💡 Importance:
// Useful when a function must always return a promise, even for ready values.








/* 6. 
🔸 Promise.reject(error)

🔍 What it does:
Returns a promise that instantly rejects with the error.

*/

Promise.reject("Oops!").catch(console.warn); // Output: "Oops!"

//✅ Use case:
// In custom validation functions or testing, when you need to simulate a failure.