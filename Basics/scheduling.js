// Using set time out function
setTimeout(()=>{
    console.log("My name is Sumant Kumar Singh");
    
},3000);


// 2
function timeOutFunc( greet , name){
    
    return setTimeout(()=> {
        console.log(`${greet} ${name}`);
        
    },4000);
}

timeOutFunc("Sumant", "Singh");


// using of set time interval 

// its print each after two second
setInterval( () => {
    console.log(" Tik Tik ");
    
},2000)


// 2. Using clearInterval() for finishing this function at certain point

let timerId = setInterval( ()=> {
    console.log(" Makshad nahi bhulna bhaijan ");
    
},5000);

setTimeout( () => {
    clearInterval(timerId);
    console.log(" Makshad failed ");
    
},14000)



// Nested setTimeout

function countDown( n ) {
    if( n < 0 ){
        return;
    }
        console.log( n );
        setTimeout( () => {
            countDown(n -1);
            
        },1000)
        
    }
    
countDown(10);


// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

//using nested setTimeout
function printNum(from, to){
    if( from  > to){
        return;
    }
    console.log(from);
    setTimeout( () => {
        printNum( from + 1, to);
    },1000)
    
}

printNum(1, 10);


// using setInterval
function printNum(from, to){
    let current = from;

    let timerId = setInterval( () => {
        console.log(current);

        if(current === to){
            clearInterval(timerId);
        }
        current ++;
        
    },1000)
}

printNum(1, 10)

