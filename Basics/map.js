/*
Iteration over Map
For looping over a map, there are 3 methods:

map.keys() – returns an iterable for keys,
map.values() – returns an iterable for values,
map.entries() – returns an iterable for entries [key, value], it’s used by default in for..of.
*/


let recipeMap = new Map( [
    ["Cucumber", 50],
    ["Beetroot", 80],
    ["Carrot", 40]
]);

for(let items of recipeMap.keys()){ // .values() for value and nothing for entry
    console.log(items);

}


// Besides that, Map has a built-in forEach method, similar to Array:
recipeMap.forEach(function(values, key, map){
    console.log(`${key}: ${values}`);
    
})



//we can create a map from an object like this:

let obj = {
    name : "Sumant Kumar Singh",
    age : 21,
}

let map = new Map(Object.entries(obj));
console.log(map.get("age"));

//1.  There’s Object.fromEntries method that does the reverse:
//    given an array of [key, value] pairs, it creates an object from them:
//2.  We can use Object.fromEntries to get a plain object from Map.

let maps = new Map();
maps.set('banana', 1);
maps.set('orange', 2);
maps.set('meat', 4);

let objt = Object.fromEntries(maps.entries()); // make a plain object (*)

// done!
// obj = { banana: 1, orange: 2, meat: 4 }

alert(objt.orange); // 2







// Printing unique values from array

function duplicateArray(){

    let array = ["Hare Krishna", "Hare Krishna", "Krishna Krishna", "Hare Hare", "Hare Rama", "Hare Rama", "Rama Rama", "Hare Hare"];
    let removeDupli = new Set( array );

    // console.log(removeDupli); // return unique no. of object
    

    // using spread opt to convt again into a unique array
    let unique = [...removeDupli];
    console.log(unique);
    
}
duplicateArray();



// in short
function removeDuplicate() {
    let array = ["Hare Krishna", "Hare Krishna", "Krishna Krishna", "Hare Hare", "Hare Rama", "Hare Rama", "Rama Rama", "Hare Hare"];
    console.log(Array.from(new Set(array)));
    
}
removeDuplicate();








//Write a function aclean(arr) that returns an array cleaned from anagrams.

function aclean(arr) {
    
    let map = new Map();

    for( let word of arr){
        let sorted = word.toLowerCase().split('').sort().join('');
        map.set(sorted, word);
        
    }

    let result = Array.from(map.values())
    console.log(result);

    
}
let array = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
aclean(array);




// counting of keys and value using entries


function sumSalaries(salaries) {

    let sum =0;
    for(let count of Object.values(salaries)){
        sum += count;
    }
    console.log(sum);
    
  }

  let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };

//   sumSalaries(salaries);

//in short way
function sumOfsalaries(){
  return Object.values(salaries).reduce((a, b)=> a + b, 0)
}

console.log(sumOfsalaries(salaries));


//counting total keys
function countOfnum( numb){
  return Object.values(numb).length;
}

console.log(countOfnum(salaries));

