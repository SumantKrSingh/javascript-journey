// Easiest sorting of integer array

function integerSorting() {
let array = [ 2, 4, 9, 2, 155, 0, -1,];

// sorting in increasing order and b - a for opposite
let sortedArray = array.sort( ( a, b ) => a - b) 

console.log(`Sorting of array is: ${sortedArray}`);

}


// Easy sorting of string array
function stringSorting() {
    let strings = [ "Aman", "Amit", "Azaad", "Vishnu", "Shivaay", "Aadi-Yogi",];

    let sortedString = strings.sort( ( a, b) => a.localeCompare( b ) );

    console.log(sortedString);
}


// Also for reverse an array
function revArray() {
    let array = [ 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,];
    
    console.log( array.reverse() );
    
}


// using of Split
function usingSplit() {
    let arr = 'Bilbo, Gandalf, Nazgul, Saruman'.split(', ', 2);

    console.log(arr); // returns bilbo and gand..

    let isString = 'test'.split('');

    console.log(isString); // return 't', 'e' ...
}



// using join method
function usingJoin() {
    let isString = ['Bilbo', 'Gandalf', 'Nazgul', 'Saruman'];

    let answer = isString.join(';');

    console.log(answer); // its merge all string 

}


//using reduce / reduceright method
function reduceAndright() {
    let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];

    let answ = array.reduce( (sum, elem) => sum + elem ); // it count right to left

    console.log(answ); //55
    
}


// sorting a object converting into array and sort by their id
function sortedByid(){

    let sumant = { name : "Sumant", surName : "Kumar Singh", id : 10};
    let dhruv = { name : "Dhruv", surName : "Chamar", id: 12};
    let vishal = { name : "Vishal", surName : "Mendak", id : 3};

    let users = [ sumant, dhruv, vishal, ];

    let gotSort = users.sort((a, b) => a.id - b.id);

    console.log(gotSort[1].name);

}

// Shuffle an array using Fisher-Yates shuffle technique

function shuffledArray(array) {
    
    for(let i = array.length-1; i > 0; i--) {
        const j = Math.floor(Math.random() *(i + 1));

        [array[j], array[i]] = [array[i], array[j]]
    }
    return array;
}

let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,];

//console.log(shuffledArray(array));


