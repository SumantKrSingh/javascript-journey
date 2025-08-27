
/*---------------------------------------------------    Adding Event Listener  ----------------------------------------------- */


// For whole page
document.addEventListener('click',function(){
   // console.log("I clicked on html page");
    
});


// For a specific element like <h1>

let content=document.querySelector("h1");

content.addEventListener('click', function(){
    content.style.background='red';            //--- when we click on heading background color changed
});


// For all specific tag like all <h1> tags using querySelectorAll

let alltag=document.querySelectorAll('h1')

alltag.forEach(function(contents){                   //----- we using for each loop because selectall give result in array and we cann't direct apply functions
    contents.addEventListener('click', function(){
        contents.style.color='green'
    });
});





/*---------------------------------------------------    Removing Event Listener  ----------------------------------------------- */


// ---Rules for removing event listener

// 1. Same Event Target            --- for ex- document
// 2. Same Event Type             --- for ex- click
// 3. Same Event Function         ---- clickFunc()




function clickFunc(){                 // it is necessary to create function like this 
    console.log("Maine click kiya");
    
}

document.addEventListener('click', clickFunc);    //----- Adding event
document.removeEventListener('click',clickFunc)   //----- Removing event





/*---------------------------------------------------    The Event Object  ----------------------------------------------- */


//  When an event occurs, addEventListener() function got a event object
// and in these object have a lot of information about event .


// For example printing a event

let cont=document.querySelector("#wrapper");

cont.addEventListener('click',function(event){
    console.log(event);                            //--- output = long list of details cursor ,ponter etc info
    
});




/*---------------------------------------------------    The Default Action   ----------------------------------------------- */

// For stopping any link to redirect to ther page and server. In short stop/disable default behaviour


let link=document.querySelectorAll('a');
let thirdLink=link[2];
thirdLink.addEventListener('click', function(evento){
    evento.preventDefault();
    console.log('maja nahi aaya');
    
})




/*---------------------------------------------------   Example of at Target Phase  ----------------------------------------------- */


let myDiv=document.createElement('div');

function Parast(event){
    console.log('i clicked on ' + event.target.textContent);
}

myDiv.addEventListener('click',Parast)

for(let i=0; i<=11; i++){
    let newElement=document.createElement('p');
    newElement.textContent=" para " + i;

        
    myDiv.appendChild(newElement);

}
document.body.appendChild(myDiv)



// filtering specific tag for event listener  


// let myArticle=document.querySelector("#wrapper2");
// myArticle.addEventListener('click', function(event){
//     console.log("Span par click hua hai " + event.target.textContent);   // Iss code me jab hum para par click karte hai toh para k saath span bhi aata hai
//                                                                          // But hum chahte hai kisi ek par aaye ya span pe

//                                                                          // Toh iske liye hmm if condition lagayenge 
    
// })


let myArticle=document.querySelector("#wrapper2");
myArticle.addEventListener('click', function(event){
    if(event.target.nodeName==="SPAN"){
        console.log("Span par click hua hai " + event.target.textContent);   // Ab sirf span pe click karne pe span ka  data console pe aayega
    }
})