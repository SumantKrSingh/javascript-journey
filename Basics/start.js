console.log('Namaste Bharat')

// Named memory location ko variable bolte hai

let a='love'
console.log(a);

// let b=5
// let b=6;
// console.log(b);
// throw error
c

var c=5;
var c=6; 
console.log(c);
//easily run

// Var or let mei variable scope ka difference hota hai 
// var se varible redeclaration kar sakte hai lekin let se nahi
// var keyword ka use kar k varible ko globally declare kar sakte hai

// {
//     let x=110;
// }
// console.log(x);   throw error

{
    var x =100
}
console.log(x); // its creates globally variable


// const num=100;  
// num=101;
// console.log(num);




let person={
    firstName: 'Sumant',
    LastName:'Kumar',
    Age: 19

}
console.log(person.Age);

// Array is Data Structure used to contain a list of item

let arr =["Sumant", "Kumar", "Singh"];
console.log(arr[3]); // undefined cause array start with 0 index
arr[3]="N";
console.log(arr[3]); // adding new value in array


let agee=12

let ragex=(agee>=18)?"i can vote" : "yo can't nigga";
console.log(ragex);


let terna =('bababr' && false)
console.log(terna);

let marks = 68;

if(marks>=98){
    console.log("Passed with A Grade");
}
else if(marks>=85) {
    console.log("Passed with B Grade");
}
else if(marks>=65){
    console.log("Passed with C Grade");
}
else {
    console.log("Passed Only");
}


let aii=2;
switch(aii){
    case 1:
        console.log('A');
        break;

    case 2:
        console.log('B');
        break;

    case 3:
        console.log('C');
        break;

   default: console.log('D');
}



