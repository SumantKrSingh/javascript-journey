// Adding one to hundred numbers.

// 1. Using loop

function loopAddition(num){
    let total = 0;
    for( let i = 0; i <= num; i++){
        total += i;
    }
    console.log(total);
    
}
loopAddition(100);

// Also use this without creating a extra variable (total)

function loopAdditionNext(num) {
    for (let i = num - 1; i > 0; i--) {
        num += i;
    }
    console.log(num);
}

loopAdditionNext(100);



// 2. Using recursion method

function recurAddition(sum){
    
    if(sum == 0){
        return sum;

    }else{
        return sum + recurAddition( sum - 1 );
    }
}
console.log(recurAddition(100));





// 3. Using Arithmetic Operation

function arithmeticAdd(sum){
    
    let total = sum * (sum + 1) / 2;
    console.log(total);
    
}
arithmeticAdd(100);





// Calculating Factorial num using recursion

function factorialNum( num ) {

    if( num == 1){
        return num;
        
    }else{
        return num * factorialNum(num - 1);
    }
}
console.log(factorialNum(5));

//using ternory opt

function ternoryFact( num ) {
    
    return ( num == 1) ? num : num * ternoryFact( num - 1);
}
console.log(ternoryFact(5));




//  Fibnocci Numbers 

function fibnocciNum( n ){
    if( n < 0){
        return 0;
    }
    if( n == 1 ){
        return 1;
    }

    let a=0, b=1, sum;
    for(let i = 2; i <= n; i++){
        sum = a + b;
        a = b;
        b = sum;
    }
    return b;
}
console.log(fibnocciNum(77));


// in more short way and both are fast

function fib(n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
  }

console.log(fib(77));



// Write a function printList(list) that outputs list items one-by-one.

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
  };

//using loop & its best because time and space complexity
function loopList(list){
    let current = list;

    while(current){
    console.log(current.value);
    current = current.next;  
    }
}
loopList(list)

//using recursion ... its time complexcity is equal to loop but not space 
function recurList(list){
    if(!list){
        return;
    }
    console.log(list.value);
    recurList(list.next);
    
}
recurList(list);





// Output a single-linked list in the reverse order

// Use recursion when the list is small or when elegance matters.
function reverseRecurList( list ) {

    if(!list){
        return;
    }
    reverseRecurList(list.next);
    console.log(list.value);
    
  }
  reverseRecurList(list)



  //using loop for big numbers
  function reverseLoopList( list ){
    let current = list;
    let stack =[];

    while(current){
        stack.push(current.value);
        current = current.next;
    }

    while(stack.length){
        console.log(stack.pop());
        
    }
  }
  reverseLoopList(list)

