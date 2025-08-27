// // Jab hume same repetation of task karna hota hai tab hum loop ka use karte hai


//  /*          --------- For Loop ----------
           
// for(let i=10; i<=10; i++){
//     console.log(i);
// }
//     */


// /*       ------------------ While Loop-------------

// let i=0
// while(i<=10){
//     console.log(i);
//     i++;
// }
//  */


// let x=0
// do{
//     console.log("Sumant" + x);
//     x++;
// }while(x<=5);


// ----------------------------- For in Loop ----------------------------

let traingle ={
    height:5,
    width:12
};

// for(let key in traingle){

//     console.log(key,traingle[key]); // keys are reflected through variable name and trainglr[key] reflected to numbers variable property;
  
// }


// ------------------------------------ For of Loop ----------------------------

// let circle={
//     radius:15,
//     diameter:42
// };

// // Basically for of loop are used in iteration values like array but this method we can use on non-iteration values

// for(let key of Object.keys(circle)){
//     console.log(key);
    
// } 
// for(let key of Object.values(circle)){
//     console.log(key);
    
// }

// for(let key of Object.entries(circle)){
//     console.log(key);
    
// }

// ------------------------------------// Checking in  method a values/property exist or not

// if('radius' in circle){
//     console.log("Present");
    
// }
// else{
//     console.log("Absent");
    
// }


// +++++++++++++++++++++++++++++++++++++++++++++++ Cloning a object using ++++++++++++++++++++++++++++++++++++


// 1. Iteration


let src={
    name:'Gon',
    father:'Zin',
    age:22
};

let clone={};

for(let key in src){
  clone[key]=src[key];
  console.log(key,clone[key]);
}


// 2. Assign

let empty= Object.assign({},src);
console.log(empty);


// 3. Spread

let dest ={... src};

console.log(dest);





































// ===================================================== Practice ======================================================

 

// function Pattern(star){
// for(let i=0; i<=star; i++){
//     let patt='';
//     for(let j=1; j<=i; j++){
//         patt += "*";
        
//     }
//     console.log(patt);
    
    
// }
// }
// let starPattern=new Pattern(10);
// console.log(starPattern);


// function oddEven(num){
//     if(num%2==0){
//         console.log("Even Number");
        
//     }
//     else{
//         console.log("Odd Number");
        
//     }
// }

// let result = new oddEven(5);
// console.log(result);


// function primeOrNot(numb){
//     if(numb==2){
//         console.log(`Your number ${numb} is a Prime number`);
        
//     }
//     for(let i=2; i<=numb-1; i++){
//         if(numb%i==0){
//             console.log(`${numb} Not a Prime Number`);
            
//         }
//     }
//     console.log(`Your number ${numb} is a Prime number`);
    
// }

// let checkingprimeornot= new primeOrNot(13);
// console.log(checkingprimeornot);
