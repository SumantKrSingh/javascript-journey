let now = new Date(24 * 3600 * 1000);
//console.log(now);


let date = new Date("2003-09-05");
//console.log(date);


let current = new Date();
//console.log(current.getUTCHours());


let today = new Date();
today.setHours(0);                   // still today but hour is changed to 0
//console.log(today.getHours()); 


let date1 = new Date(2025, 1, 28);
date1.setDate(date1.getDate()+2);  // Adding 2 days on feb more after 28
console.log(date1); 
 // so its autocorrect and shift to march ... because of 29 is not available it give 1 march


 // if we set date.set(0)  because min day is 1, so the last day of the previous month is assumed


 let start = Date.now(); // start measuring time

 // do the job
 for (let i = 0; i < 100000; i++) {
   let doSomething = i * i * i;
 }
 
 let end = Date.now(); // end measuring time
 
 console.log(`Start time ${start} ms`);
 console.log(`Start time ${end} ms`);
 
 
 console.log( `The loop took ${end - start} ms` );
 
 
 
 
 
 
 // comparing which one is fast
 function diffSubtract(date1, date2){
   return date2 - date1;
 }
 
 function diffGetTime(date1, date2){
   return date2.getTime() - date1.getTime();
 }
 
 function bench(f){
   let date1 = new Date(0);
   let date2 = new Date();
 
   let start = Date.now();
   for(let i = 0; i < 100000; i++) f(date1, date2);
   return Date.now()-start;         
 
 }
 
 console.log('Time of diffSubtract: ' + bench(diffSubtract) + 'ms');
 console.log( 'Time of diffGetTime: ' + bench(diffGetTime) + 'ms');
 
 
 
 let day = new Date();
 console.log(day.toDateString());
 


 // creating custom date with output browser format

 let dates = new Date(2012,1,20,3,12);
console.log(dates.toLocaleString("en-US"));
console.log(dates.toString());




// checking previous date of month
function lastDayofMonth(year, month) {
  let date = new Date(year, month +1, 0); // 1 are used to go for next month and zero treats 1 day before of this month
  return date.getDate();
  
}
console.log(lastDayofMonth(2020,1)); 
//1 is indicate for feb calling func incrase 1 month then before coming march what is last date is 29 feb (output)



// checking (any)days ago what date 
function getDateAgo( date, days ) {

  let dateCopy = new Date(date);
  dateCopy.setDate(date.getDate() - days);
  return dateCopy.getDate()
}
let damn = new Date(2025,2,22);
console.log(getDateAgo(damn, 2)); // its return 20 




// how many seconds passed today
function getSecondsToday(){
  let date = new Date();
  let time =date.getHours() * 3600 + "-" + date.getMinutes() * 60 + "-" + date.getSeconds();
  console.log(time);
  
}
getSecondsToday();



//How many seconds till tomorrow?
function getSecondsTomorrow(){
  let now = new Date();
  let tommo = new Date(now.getFullYear(), now.getMonth(), now.getDate()+ 1);
  let diff = tommo - now;
  console.log(diff);
  
}
getSecondsTommorrow();

// 2nd method 

function getSecondsToTomorrow() {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
  let totalSecondsInADay = 86400;

  return totalSecondsInADay - totalSecondsToday;
}
console.log(getSecondsToTomorrow());


