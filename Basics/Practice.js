// function printnumbers(){
//     for(let i=1; i<=10; i++)
//         console.log(i);

// }
// printnumbers();


// function printArray(arr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=0; j<arr[0].length; j++ ){
//             console.log(arr[i][j]);
//     }
//     }
// }

// let arra=[[1,2,3], [4,5,6], [7,8,9]];
// printArray(arra);



// function averageNum(a,b,c){
//     let sum= (a+b+c);
//     let avg=sum/3;
//     console.log(avg);

// }
// averageNum(5,10,30);

// function areaOf(side){
//     let area= side*side;
//     console.log(area);

// }
// areaOf(8);

// console.log(typeof(areaOf));

// function priceWithGst(item1,item2,item3){
//     let total=item1+item2+item3;
//     let gst=total*0.18;
//     let bill= total+gst;
//     console.log(bill);

// }

// priceWithGst(30,80,2500);


// function incomeTaxCalc(income){

//     let tax;

//     if(income<=50000){
//        tax=income*0;
//     }
//     else if(income>=50000 && income<=70000){
//         tax=income*0.10;
//     }
//     else if(income>=70000 && income<=100000){
//         tax=income*0.15;
//     }
//     else{
//         tax=income*0.30;
//     }
//     console.log(tax);

// }
// incomeTaxCalc(60000);



// function oddOrEven(num){
//     let check=((num%2)==0)? "Even" : "Odd";
//     console.log(check);

// }
// oddOrEven(99);



// function sumOfNaturalNum(num){
//     let sum=0;
//     for(let i=1; i<=num; i++){
//         sum +=i;

//     }
//     console.log(sum);

// }
// sumOfNaturalNum(5);



// function revNum(number){
//     let rev=0;
//     while(number>0){
//         let lastdig=number%10;
//         rev=rev*10+lastdig;
//         number=Math.floor(number/10);
//     }
//     console.log(rev);

// }
// revNum(12345);



// function factoNum(num){
//     let fact=1;
//    for(let i=2; i<=num; i++){
//     fact*=i;
//    }
//    console.log(fact);

// }
// factoNum(5);


// function primeNo(num){
//     if(num==2){
//         return true;
//     }
//     for(let i=2; i<Math.sqrt(num); i++){
//         if(i%num==0){
//             return false;
//         }
//         else{
//             return true;
//         }
//     }
// }
// console.log(primeNo(5));




// function binaryToDecimal(binnum){
//     let mynum=binnum;
//     let power=0;
//     let decnum=0;

//     while(binnum>0){
//         let lastdigit=binnum%10;
//         decnum=decnum+(lastdigit*Math.pow(2,power));
//         power++;
//         binnum=Math.floor(binnum/10);

//     }
//     console.log(`Decimal of ${mynum} = ${decnum}`);
// }

// console.log(binaryToDecimal(101));




// function decimalToBinary(num){
//     let mynum=num;
//     let power=0;
//     let decnum=0;

//     while(num >0){
//         let lastdigit=num%2;
//         decnum=decnum+(lastdigit*Math.pow(10,power));
//         power++;
//         num=Math.floor(num/2);
//     }
//     console.log(`Decimal of ${mynum} = ${decnum}`);
// }

// console.log(decimalToBinary(5));




// function printtraingle(n){
//     for (let i=1; i<=n; i++){
//         let str="";
//         for(let j=0; j<i; j++){
//             str += "* ";
//         }
//         console.log(str);
//     }

// }

// printtraingle(10)


// -------------------------------------prime no.
// let isPrime=function(number){
//     if(number==2){
//         console.log(`${number} is a prime number`);
//         return;
//     }
//     for(let i=2; i<=Math.floor(Math.sqrt(number)); i++){
//         if(number%i==0){
//             console.log(`${number} isn't a prime number`);
//             return;
//         }
//     }
//     console.log(`${number} is a prime number`);

// }

// isPrime(11);


// function showMessage(from, text = "no text given") {
//     console.log( from + ": " + text );
//   }

//   showMessage("Ann");


// function showCount(count) {
//     console.log(count ?? "uknown");

// }

// // showCount(0);
// // showCount();
// // showCount(null)

// function checkAge(age) {
//     return (age > 18) ? true : false;

// }

// // console.log(checkAge(17));

// function minNumb(a, b) {
//     return (a < b) || b;
// }
// // console.log(minNumb(-17,8));


// // let power=(x,n)=>{
// //     let result=x;
// //     for(let i=1; i<n; i++){
// //         result*=x;
// //     }
// //     console.log(result);

// // }

// // power(3,2);

// let power = (x, n) =>
//     console.log(x ** n);

// // power(2,3);









// let user = {
//         name: "Jin Kazama",
//         age: 20, 
//         country: "Japan",
//         greet: function () { 
//         console.log(`Hello ${this.name}, are you fine?`);
//     } 
// }; 
//     // user.greet();


// let student = {
//         name: "Jin Kazama",
//         age: 20, 
//         country: "Japan",
//         isAdult: function(){
//             return this.age > 18 ;
//         }      
// }; 
// //    console.log(student.isAdult());



// function togetProperty(obj, property){
//     if(property in obj){
//         return obj[property];
//     }
//     else{
//         return "property dosn't exist"
//     }
// }

// console.log(togetProperty(student, 'gender'));


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

//   function addSalary(salaries){
//     let total=0;
//     for(let prop in salaries){
//         total+=salaries[prop];
//     }
//     console.log(total);
    
//   }

// //   addSalary();

// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
// };

// function multiplyNumeric(objec) {
//     for (let key in objec) {
//         if (typeof objec[key] == "number") {
//             objec[key] = objec[key] * 2; // Assign the multiplied value back to the property
//         }
//     }
// }

// multiplyNumeric(menu);

// console.log(menu);




// let firstArray = ["i", "love", "it", "when", "you", "call", "me","senorita"]

// let removed = firstArray.splice(8,0,"Let's", "dance", "senorita");
// // console.log(firstArray);
// console.log(removed);




// function calculator() {

//     while (true) {
//         let firstValue = parseInt(prompt("Enter Your First Value"));
//         let secondValue = parseInt(prompt("Enter Your second Value"));
//         let opt = prompt("(*, +, -, /, % )");
//         let result = 0;
//         switch (opt) {
//             case '+':
//                 result = firstValue + secondValue;
//                 break;

//             case '-':
//                 result = firstValue - secondValue;
//                 break;

//             case '*':
//                 result = firstValue * secondValue;
//                 break;

//             case '/':
//                 result = firstValue / secondValue;
//                 break;

//             case '%':
//                 result = firstValue % secondValue;
//                 break;

//             default:
//                 alert("Wrong input enter");
//                 continue;
//         }
//         alert(" Result is " + result);

//         let i = parseInt(prompt("Enter value 0 for exit 1 for continue"))

//         if (i == 1) {
//             continue;
//         }
//         else if (i == 0) {
//             return "Thank you for using this programme";
//             break;
//         } else {
//             return "invalid no.";
//             break;
//         }

//     }
// }

// console.log(calculator())




// const user=require("readline-sync")

// function calculator() {

//     while (true) {
//         let firstValue = parseInt(user.question("Enter Your First Value"));
//         let secondValue = parseInt(user.question("Enter Your second Value"));
//         let opt = user.question("(*, +, -, /, % )");
//         let result = 0;
//         switch (opt) {
//             case '+':
//                 result = firstValue + secondValue;
//                 break;

//             case '-':
//                 result = firstValue - secondValue;
//                 break;

//             case '*':
//                 result = firstValue * secondValue;
//                 break;

//             case '/':
//                 result = firstValue / secondValue;
//                 break;

//             case '%':
//                 result = firstValue % secondValue;
//                 break;

//             default:
//                 alert("Wrong input enter");
//                 continue;
//         }
//         console.log(" Result is " + result);

//         let i = parseInt(user.question("Enter value 0 for exit 1 for continue"))

//         if (i == 1) {
//             continue;
//         }
//         else if (i == 0) {
//             return "Thank you for using this programme";
//             break;
//         } else {
//             return "invalid no.";
//             break;
//         }

//     }
// }

// console.log(calculator())



// let user = require("readline-sync");

// function calCulator(){

//     this.read = function(){
//         this.a = +user.question("put value of a " , 0);
//         this.b = +user.question("put value of b ", 0);
//     }

//     this.sum = function(){
//         return this.a + this.b;
//     }

//     this.mul = function(){
//         return this.a * this.b;
//     }

//     this.sub = function(){
//         return this.a - this.b;
//     };
// }

// let calculator = new calCulator();
// calculator.read();
// console.log("sum of two no. is  " + calculator.sum());
// console.log("sub of two no. is  " + calculator.sub());
// console.log("mul of two no. is  " + calculator.mul());



// let user = require("readline-sync");

// function isAccumulator(startingValue){
//     this.value =startingValue;

//     this.read = function(){
//         this.value += +user.question("How much value you want to add\n ");
//     };
// }

// let acumulator = new isAccumulator(1);
// acumulator.read();
// acumulator.read();
// acumulator.read();
// console.log(acumulator.value);


// let user = {}; // a user without "address" property

// console.log(user.address.street); 

// #_Avoiding 0 to use e
// let crore = 1e8;
// console.log(crore); // for positive 1 crore no. to ignore putting 0

// let negative = -1e-6;
// console.log(negative); // for negative no.



//  #_Hexa Decimal No. topic
// let number =123456;
// let pok = number.toString(36);
// console.log(typeof(pok));

// Round of numbers
// let num = 1.234567
// console.log(Math.round(num * 1000)/1000);

// easiet way for round of
// let num = 1.234567
// console.log(+num.toFixed(3));



// let user = require("readline-sync");

// let number = parseInt(user.question("Enter Your Number\n"));
// console.log(isFinite(Number(number)));




// function readnumber(num){
//     const user = require("readline-sync");
//     do{
//          num = user.question("Enter a number ");
//     }
//     while (!isFinite(num)) {
//         if(num === null || num == ""){
//             return null;
//         }
//         else{
//             return num;
//         }
//     }
// }
// console.log(readnumber());




// let str = "as sly as a fox, as strong as an ox";
// let target = "as";
// let indices ;

// for(let i = 0; i <= str.length; i++){
//     if(str.indexOf(target, i) == i){
//         indices = i;
//         console.log(indices);
        
//     }
// }



// let str = "Widget with id";

// if (str.indexOf("with") ) {
//     console.log("We found it"); 
// }else{
//     console.log("not found");
    
// }



// let array = [ "Apple" , {name : "Sumant", age : 21} , function(){console.log("its working");}, 55];
// array[2]();



// let test =['coke', 'pizza', 'burger',];
// console.log(test.unshift('Fries'));
// console.log(test);



// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[1] = "Classic";

// console.log(styles);


// function sumInput(){
//     let user = require("readline-sync");
//     let number = [];

//     while(true){
//         let ask = user.question("Enter a number and press char for exit\n");

//         if(ask === null || ask === "" || !isFinite(ask)) break;
//         number.push(+ask);
//     }

//     let sum =0;
//     for(let i = 0; i < number.length; i++){
//         sum += number[i];
//     }
//     return sum;
// }

// console.log(sumInput());

// let obj ={
//     name : "Sumant",
//     age : 22,
//     greet(){
//         console.log(this.name);
//     },
    
// }
// obj.greet();



// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let user = require("readline-sync");
// let ask = user.question("Enter a number: ");

// array.forEach(( item, total) =>{
//     total = ask * item;
//     console.log(`${ask} * ${item} = ${total}`);
    
// })


// let number = [1,2,3,4,5,6,7,8,9,];
// let sum =0;

// number.forEach((number)=>{
//     sum +=number;
// })

// console.log(sum);

// let array =[1, 2, 3, 4, 5, 6, 7,];
// array.forEach((array, index)=>{
//     console.log(`${array} at position index ${index}`);
    
// })






// let array =[
//     {id: 1, name: "John Wick"},
//     {id: 2, name: "Picky Blinder"},
// ];

// let user = array.find(item => item.id == 1);
// console.log(user.name);

// let users = [
//     {id: 1, name: "John"},
//     {id: 2, name: "Pete"},
//     {id: 3, name: "Mary"}
//   ];
  
//   // returns array of the first two users
//   let someUsers = users.filter(item => item.id < 3);
  
//   console.log(someUsers);


// let array = [ "Sumant", "Kumar", "Singh",];
// let lenth = array.map(item => item.length);
// console.log(lenth);

// function compareNumeric( a, b ) {
//     if(a < b) return 1;
//     if(a == b) return 0;
//     if (a > b) return -1;
// }

// let array = [ 2, 4, 9, 2, 155, 0, -1,];
// // console.log(array.sort(compareNumeric));


// console.log(array.sort( ( a, b )=> b - a));

// let array = [ "Sumant", "Kumar", "Singh",];
// console.log(array.sort( ( a, b ) => a.localeCompare( b) ) );


// function camelize(str) {
//     return str.split('-')

//     .map( (word, index) => index == 0 ? word : word.charAt(0).toUpperCase() + word.slice(1) )
//     .join('-');
    
// }
// console.log(camelize( 'hello-ji-kaise-ho-aap'));


// function filterRange( arr, a, b, ) {

//     let filtering = arr.filter(item => (item >= a && item <= b));
//     console.log(filtering);

// };

// let array = [ 1, 4, 3, 7, 6, 9, 18, 14, 20, 22, ];
// filterRange(array, 1, 9);


// function sortinDec() {
//     let array = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ];

//     let sorted = array.sort( (a, b) => b - a);
//     console.log(sorted);
    
// }

// sortinDec();

// let sumant = { name : "Sumant", surName : "Kumar Singh", id : 1};
// let dhruv = { name : "Dhruv", surName : "Chamar", id: 2};
// let vishal = { name : "Vishal", surName : "Dogla", id : 3};

// let users = [sumant, dhruv, vishal,];

// let userMapped = users.map( user => ({
//     fullname : `${user.name} ${user.surName}`,
//     id : user.id,
// }));

// console.log(userMapped[1].fullname);



// let sumant = { name : "Sumant", surName : "Kumar Singh", id : 10};
// let dhruv = { name : "Dhruv", surName : "Chamar", id: 12};
// let vishal = { name : "Vishal", surName : "Dogla", id : 3};

// let users = [ sumant, dhruv, vishal, ];

// let gotSort = users.sort((a, b) => a.id - b.id);

// console.log(gotSort[1].name);




