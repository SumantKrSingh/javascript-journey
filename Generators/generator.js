/* 1. What is generator?
 A generator is a special type of function that can pause and resume its execution.
 i. Declared using function*
 ii. Uses the yield keyword to pause execution
 iii. Returns a Generator object, which conforms to the iterator protocol */


 /* 2. Why use Generators?
   i. They allow lazy evaluation (values are generated only when needed).
    ii. Useful for implementing iterators, especially over large or infinite data sets.
    iii. Can simplify asynchronous flows (before async/await existed). */


/* 3.Real Life uses 

 i. Custom Iterators / Lazy Data Loading
    Create custom sequences like a range of numbers or paginated results.
    Useful when you want to load or generate data one piece at a time instead of all at once (memory-efficient).

 ii. Infinite Sequences (e.g., ID Generators)
    Generate unique IDs, random numbers, or timestamps without limit.
    Helpful in apps like to-do lists, databases, and DOM rendering, where each item needs a unique identifier.

iii. Chunk-wise Processing of Large Data
    Process large strings, files, or datasets in small chunks.
    Ideal for file parsing, streaming data, or reading logs without loading everything into memory.

iv. Recursive Data Structure Traversal (e.g., Trees)
    Walk through nested data structures like DOM trees, JSON trees, or folder hierarchies.
    Makes it easy to build features like file explorers, collapsible menus, or syntax trees.

*/





// ----------- Example 1 ------------
function* generateSequeance(){
    yield 1;
    yield 2;
    yield 3;  // return 3;
    }
    
    
    let genearte = generateSequeance();
    // let one = genearte.next();
    // console.log(JSON.stringify(one));
    // let two = genearte.next();
    // console.log(JSON.stringify(two));
    // let three = genearte.next();
    // console.log(JSON.stringify(three));
    
    for(let value of genearte){  //for..of iteration ignores the last value, when done: true. So, if we want all results
      console.log(value);        //  to be shown by for..of, we must return them with yield: else its return only 1 and 2
      
    }





// ---------- Example 2 ------------
// As generators are iterables we can call all related functionality eg. the spread syntax...

function* generateSequeances(){
    yield 1;
    yield 2;
    yield 3;
  }
  
  let similarity = [0, ...generateSequeance()];
  console.log(similarity);
  


// ---------------------- Example 3 --------------------------
// here is the example of iterables chap using generator or symbol.iterator for more convinient
let range ={
    from : 1,
    to : 5,
  
    *[Symbol.iterator](){
      for(let value = this.from; value <= this.to; value++){
        yield value;
      }
    }
  }
  
  console.log([...range]);



// ----------- example 4 -------------------
function* generateSequance(start, end){
    for( let i = start; i <= end; i++ ){
      yield i;
    }
  }
  for(let num of generateSequance(1,10)){
    console.log(num);
    
  }




// ---------------- Example 5 ------------------
// Genearting password
function* generateSequance(start, end){
    for(let i = start; i <= end; i++){
      yield i;
    }
  }
  
  function* geneartePassword(){
  
    yield* generateSequance(48, 57);
  
    yield* generateSequance(65, 90);
  
    yield* generateSequance(90, 97);
  
    yield* generateSequance(97, 122);
  }
  
  let str ='';
  for(let code of geneartePassword()){
    str += String.fromCharCode(code);
    count ++;
  }
  
  console.log(str);

  


// ------------  Example 6  -----------------
// We can set value inside a function like this
function* gen() {
    let ask1 = yield "2 + 2 = ?";
  
    console.log(ask1); // 4
  
    let ask2 = yield "3 * 3 = ?"
  
    console.log(ask2); // 9
  }
  
  let generator = gen();
  
  console.log( generator.next().value ); // "2 + 2 = ?"
  
  console.log( generator.next(4).value ); // "3 * 3 = ?"
  
  console.log( generator.next(9).done ); 






// ----------- Example 7 -------------------
// error handling in generators
function* errorInGen(){
    try{
      let result = yield '2+2 =?';
  
      console.log("The execution doesn't reach");
      
    }catch(e){
      console.log(e);
      
    }
  }
  
  let gen = errorInGen();
  let question = gen.next().value;
  gen.throw (new Error("The answer is not in my database"))
  


// ------------- Example 8 ------------------------
//return example
function* gen() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const g = gen();
  
  console.log(g.next());        // { value: 1, done: false }
  console.log(g.return('foo')); // { value: "foo", done: true }
  console.log(g.next());        // undefined
  console.log(g.return('Bankai')); // bankai