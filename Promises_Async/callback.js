/*
A callback is just a function passed as an argument to another 
function and then called inside that function 
 */


function sayHello(){
    console.log("Hello, Brother");
    
}

function greet(callback){
    //callback();
    console.log("Calling the callBack function");
    callback();
}

greet(sayHello);



// for example checking no. is odd or even 

function isEven(number){
    return number % 2 == 0;
}

function isOdd(number){
    return number % 2 != 0;
}

function CheckNumb(number, callback){
    if(callback(number)){
        console.log(`${number} satisfies the condition.`);
        
    }else{
        console.log(`${number} doesn't satisfies the condition.`);
        
    }
}
CheckNumb(5, isOdd);
CheckNumb(8, isOdd);
CheckNumb(10, isEven);