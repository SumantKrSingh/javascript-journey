// let rectangle={
//     length:1,
//     breadth:2,

//     draw : function(){
//         console.log('draw');
        
//     }
// };

// console.log(rectangle);
// console.log( rectangle.draw());


// ------------------------------------------------------ Factory Function -------------------------------------------------

function creatrRectangle(a , b){

    let rectangle={
        length:a,
        breadth:b,

        draw(){
            console.log("Draw rectangle");
            
        }
    }
    return rectangle;
    
}


let objrec1= creatrRectangle(5,6); // calling factory funnction
console.log(objrec1);

let objrec2= creatrRectangle(40,16);
console.log(objrec2);



// ---------------------------------------------- Constructor Function ----------------------------------------

function rectangles(a,b){
    this.length=a;
    this.breadt=b;
     
    this.draw=function(){
        console.log("Draw a Rectangle");
        
    }
}
 let rectangleobj=new rectangles(15,25);
 let rectangleobj1=new rectangles(154,35);

//  console.log(rectangleobj);
 
//  console.log(rectangleobj1);
//  console.log(typeof(rectangleobj))
 
 rectangleobj.color='yellow'; // Addition of new value
//  delete rectangleobj.color; // For delete property and value
 console.log(rectangleobj);
 
console.log(rectangleobj.constructor);
console.log(rectangles.constructor);


// -------------------------------------------- Function Constructor ----------------------------------

let Rectangle1 =new Function(
    'length', 'breadth',
    `this.length=length;
    this.breadth=breadth;
     
    this.draw=function(){
        console.log("Draw a Rectangle");
        
    }  `
);
let act=new Rectangle1(44,54);
console.log(act);





// ----------- Primitive data type are copied their value
// ----------- And Non-Primitive Data type copied by their address
// -----------Jab kisi primitive ko non primitive data type mei pass karte hai toh copy banti so changes copy mei honge org mei nahi

let a=10;
function inc(a){
    a++
}
console.log(a); // example of passs by value


let k={value:10};

function orang(k){ // examp of non primitive
    k.value++
}

orang(k);
console.log(k.value);


