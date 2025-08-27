/*Iterable objects are a generalization of arrays. 
That’s a concept that allows us to make any object useable in a for..of loop.*/

// let range = {
//     from : 1 ,
//     to : 10,
// }

// for(let num of range){
//   //  console.log(num); // it give an error ( range is not iterable )
    
// }


// for iterate the range we use two function 1. symbol.iterator and 2. next()

let ranges = {
    from : 1,
    to : 10,
                            //1. call to for of loop initially call this
    [Symbol.iterator](){    // it returns the iterator object
                            //2. Onward, for..of works only with the iterator object below, asking it for next values

        return{             

            first : this.from,
            last : this.to,

                                // 3. next() is called on each iteration by the for..of loop
            next(){
                                // 4. it should return the value as an object {done:.., value :...}

                if(this.first <= this.last){
                    return { done : false, value : this.first++ };
                }else{
                    return { done: true };

                }
            }
        }
    }
}
// now its work
for(let num of ranges){
   // console.log(num);
    
}








// String is iterable 

for(let str of "test"){ 
   // console.log(str);
   
}

// And it works correctly with surrogate pairs





// Calling an iterator explicity

function stringIterator() {
    let user = require("readline-sync");

    let ask = user.question("Enter a string: ");

    let iterartor = ask[Symbol.iterator]();

    while(true){
        
        let result = iterartor.next();
        if(result.done){
            break;
        }else{
            console.log(result.value);
            
        }
    }

}





// There’s a universal method Array.from that takes an iterable or array-like value and makes a “real” Array from it.

let arrayLike = {
    0 : "Chai Pioge",
    1 : "Kyu Nahi",
    length : 2,
}

let arr = Array.from(arrayLike) // it creates a real array of an obj

//console.log(arr.pop()); // kyu nahi removed ... length define length of array so it doesn;t remove




// we can also use like this function()
let  arra = Array.from(ranges, num=> num * num); // taking ranges value from above code
//console.log(arra);



// And same as for symbols and characters in strings




// here is example of printing only even numbers 

let str = [2,5,7,9,6,2,5];
let iter = str[Symbol.iterator]();
let result = iter.next();


str.forEach( function(value){
    if(value % 2 == 0){
        console.log(` ${value} value is even `);
        result = iter.next();
    }
})







