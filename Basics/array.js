
// ---------------------------------- Adding Value In Array--------------------------

// let arr=[1,2,3,4,5,6];
// arr.push(9) // add value in last of index
// arr.unshift(0) // add value in starting of index
// arr.splice(2,0, 'a','b','c') // adding value 1st where you want to add, any value u want  to del 0for no, and last what values you want to add
// console.log(arr);


  
// ------------------------------------------------ Searching In Primitive Values -------------------------------------------------------------------------------------------------------------------------------------

// let numbers= [1,2,3,4,5];

// console.log(numbers.indexOf(7)); // output -1 cause 7 not exist

// // we want check if a number exits in array

// console.log(numbers.includes(7)); // output false because 7 not exist
// console.log(numbers.indexOf(5, 2)); // for coustomize searching .. 5 is a no to search and 2 index is starting point
// console.log(typeof(numbers));




//---------------------------------------------- Searchimg in Objects -------------------------------------------------------------------------------------------------------------------------------------------

// let courses =[{roll_no: 21, name:'Sumant'}, {roll_no:22, name:'Love'}];
// // console.log(courses);

// let course= courses.find(function(course){
//     return course.name=='Sumant' ;
// })
// console.log(course);

// //------------------------------ Shortest way using arrow function

// let coursera=courses.find(coursera=> coursera.name=== 'Love');
// console.log(coursera);



//  ---------------Removing Element

// end       ==> pop()
// begining  ==> shift()
// middle    ==> splice()

// let lem= [1,2,3,4,5,6];
// console.log(lem.pop());
// console.log(lem.shift());
// console.log(lem.splice(3,1));
// console.log(lem);


// ------------------------------------------- Emptying an Array--------------------------


// let numbers=[1,2,3,4,5];
// let numbers2=numbers;
// // numbers.length=0;                       // method 1
// numbers.splice(0,numbers.length);          // method 2
// console.log(numbers);
// console.log(numbers2);


// ----------------------------------------------Combining And Slicing Arrays-------------------------


// let array1=[1,2,3,4];
// let array2=[5,6,7,8];
// let combined=array1.concat(array2);  // Combining 2 array using concat()
// let slice=combined.slice(2,4);       // Slicing 2 array using slice(starting index, ending index)  if we give single number then it slice before of all this num and for in empty case it creates a copy
// console.log(combined);
// console.log(slice);
// console.log(typeof(array1));

                                               // Same as non object value

// let str=[{roll_no: 21, name:'Sumant'}, {roll_no:22, name:'Love'}];;
// let str2=[{roll_no: 28, name:'Raghav'}, {roll_no:22, name:'Madhav'}];
// let combined=str.concat(str2);
// console.log(combined);
// let slice=combined.slice(0,3);
// console.log(slice);
// console.log(typeof(slice));



// We also use Spread operator to copy and combining array

// let num1=[1,2,3,4,5];
// let num2=[6,7,8,9,10];
// let combined=[...num1, ...num2]; // for combining
// // let combined=[...num1,'a','true', ...num2, 'b','false'];  // we also add value like this
// console.log(combined);

// let copy=[...combined] // for copy
// console.log(copy);


// --------------------------------------------------------- Iterating An Array --------------------------------

// let array=[10,20,3,30,4,40];

// for(let value of array){            // Using For Of loop
//     console.log(value);
    
// }



// array.forEach(function(num){     // Also do as for each loop
//     console.log(num);
    
// })

// array.forEach(number=>console.log(number))   // Same as this method




// ----------------------------------------------------------Joining Arrays ------------------------------------------


// let numbers=[10,20,30,40,50];

// let joined=numbers.join(',');                // for numbers joining
// console.log(joined);

// let message="Welcome to my soul society Yare Yare!!";
// let spliting=message.split(' ');                             // for split into parts and also creates a array output
// console.log(spliting);

// let joini=spliting.join('_');  // Using for join
// console.log(joini);






// ------------------------------------------------      Sorting Array     ------------------------------------------------------------


// let array=[5,6,8,2,9,1,7,];
// array.sort();                             // For sorting array in inc ord
// console.log(array);
// array.reverse();                          // For reverse the value 
// console.log(array);




// ------------------------------------------------  Filetring Arrays  ------------------------------------------------------


// let num=[1,3,5,-8,-4,0,-9,2];
// let fit=num.filter(function(value){
//     return value>=0;  // for positive value
//     return value<0; // for negative value
// });


// let fit=num.filter(value=> value>=0);   // using Arrow function

// console.log(fit);




// ------------------------------------------------------------ Mapping Arrays -----------------------------------------------

// let number=[1,2,3,4,5,6,7];
// let mapping=number.map(function(value){
//     return 'student_no'+ value;
// });



// let mapping=number.map(value=> 'student' + value);    using arrow function

// console.log(mapping);



// maping or creating with obj

//  let number=[1,2,-3,4,-5,6,-7];
//  let filtered=number.filter(value=> value>=0);
//  let items=filtered.map(function(num){
//     return {value:num}                       // returning in obj form
//  })


// let items=filtered.map(num=>  ({value:num}));  // using arrow function

//  console.log(items);
 


// Example Chainning Method

let number=[1,2,-3,4,-5,6,-7];

let items=number.filter(value=> value>=0).map(num=>  ({value:num}));

console.log(items);



