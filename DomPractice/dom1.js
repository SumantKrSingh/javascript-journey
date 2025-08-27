/*-----------------------------------  Window -----------------*/


//  In the JavaScript world, the window object is a big deal. 
// It's the global object in a browser environment, meaning it represents
// the whole browser window. Think of it as the master controller that has all 
// kinds of properties and methods to interact with the browser.

//For example, window.alert() pops up an alert box, window.location can redirect the page, and window.document gives access to the DOM.



// Window Object
window.console.log('Window Object');
// alert('window.console.log')
// window.alert('Alert');  



/*-----------------------------------  DOM -----------------*/


// “The Document Object Model, or DOM, is a programming interface for web documents.It represents
// the page so that programs can change the document structure, style, and content.Essentially,
// it treats an HTML or XML document as a tree structure, where each node is an object representing
// a part of the document, such as an element, attribute, or text node.Using the DOM, developers
//  can manipulate the web page dynamically, updating content, structure, and styling without needing
//  to reload the entire page.It’s fundamental for modern web development, enabling the dynamic,
// interactive web experiences users expect today.”


console.log(document);
console.log(document.body);




/*-----------------------------------  getElementById,Class,Tag -----------------*/



// getElementById: Gets a single element by id.

// getElementsByClassName: Gets all elements with a specific class name.

// getElementsByTagName: Gets all elements with a specific tag name.




//1. ----- getElementById

// Purpose: Selects an element based on its unique id.

// Syntax: document.getElementById('id')

let elements = document.getElementById('java');
console.log(elements);

//  This method returns a single element with the matching id or null if no such 
// element exists. The id attribute must be unique within a document, so it only retrieves one element.


//2. ----------getElementsByClassName

// Purpose: Selects elements based on their class name.

// Syntax: document.getElementsByClassName('className')

let element1 = document.getElementsByClassName('nextSlide');
console.log(element1);

//  This method returns a live HTMLCollection of all elements that have the specified
//  class name. A "live" collection means that it automatically updates when the document changes.


//3. --------- getElementsByTagName

// Purpose: Selects elements based on their tag name.

// Syntax: document.getElementsByTagName('tagName')

let element2 = document.getElementsByTagName('ul');
console.log(element2);

// Details: This method returns a live HTMLCollection of all elements with the specified tag
//  name. Like getElementsByClassName, it updates automatically if the document's structure changes.






/*----------------------------           $0                -----------------*/

// $0 returns the most recently selected element or
//  JavaScript object, $1 returns the
//  second most recently selected one, and so on.
let item = $0;
console.log(item);




/*----------------------------           querySelector and querySelectorAll           -----------------*/


querySelector();
// This method returns the first element that matches a specified CSS 
// selector within the document. Think of it as fishing for just one, even if there are many.

// We can select anything by querySelector 

// #1 - class 
let classItem = document.querySelector('.nextSlide');
console.log(classItem);

// #2 - id 
let idItem = document.querySelector('#java');
console.log(idItem);

// #3 - TAg Name 
let tagItem = document.querySelector('li');
console.log(tagItem);



querySelectorAll();
// This method returns a static NodeList of all elements that match the specified CSS selector.
// So, if you're aiming to grab a whole bunch of elements, this is your tool. Like this:

// We can select anything by querySelectorAll 

// #1 - class 
let classItem1 = document.querySelectorAll('.nextSlide');
console.log(classItem1);

// #2 - id 
let idItem2 = document.querySelectorAll('#java');
console.log(idItem2);

// #3 - TAg Name 
let tagItem3 = document.querySelectorAll('li');
console.log(tagItem3);






/*----------------------------           innerHTML And outerHTML              -----------------*/


innerHTML; 
//This property gets or sets the HTML content inside an element. So, if you want
// to change or retrieve the content within a specific tag, you use this.

//for get
let list = document.querySelector('#list');
console.log(list.innerHTML);

//set
list.innerHTML="<p>Kaise ho bhai log</p>"


outerHTML;
// This property gets or sets the HTML content including the element itself. So,
// this will also replace the entire element along with its content. 

let list1 = document.querySelector('#list');
console.log(list1.innerHTML);






/*----------------------------          innerText And textContent              -----------------*/


innerText:

// Reflects the visible text content of a node.

// Takes CSS styling into account (e.g., display: none or visibility: hidden).

// Triggers a reflow to ensure up-to-date content.

// Slower because of its connection with CSS.

let list3 = document.querySelector('#list');
console.log(list3.innerText); //Hidden Element not show


textContent:

// Reflects the full text content of a node and its descendants.

// Ignores CSS styling.

// Does not trigger reflow.

// Generally faster because it directly accesses the node content.

let list4 = document.querySelector('#list');
console.log(list4.textContent);//show hidden list





/*--------------------------------------  createElement And appendChild ---------------------------------*/

createElement:

// This method is used to create a new HTML element.

// It's like conjuring an empty shell of an element that you can then customize and populate with content.

let newElement = document.createElement('h1') //create h1 
// add content in h1 
let content = document.createTextNode("This is Heading");
newElement.appendChild(content);
console.log(newElement)    // output= <h1>This is heading</h1>




appendChild:

// This method is used to append a created or existing child node to a parent node.

// It’s like taking an element (say, from createElement) and placing it into the document structure.


let parent = document.querySelector('#list');

let newElement1 = document.createElement('h1') //create h1 
// add content in h1 
let content1 = document.createTextNode("This is Heading");
newElement1.appendChild(content1);

parent.appendChild(newElement1);          // in short create element naye tag create karta hai or appendChild usme content bharne ka kaam karta hai






/*--------------------------------------  insertAdjacentHTML  ---------------------------------*/


insertAdjacentHTML();
 // is a nifty method that allows you to insert HTML into a document at specified positions relative to an element.

Types: 

//1.  'beforebegin': Inserts HTML just before the element itself.

//2.  'afterbegin': Inserts HTML as the first child of the element.

//3.  'beforeend': Inserts HTML as the last child of the element.

//4.  'afterend': Inserts HTML just after the element itself.




let parents = document.querySelector('#list');
// console.log(parent);

// Create Child 
let child1 = document.createElement('li');
let content10 = document.createTextNode("Before End");
child1.appendChild(content10);

// As a Element we can send our element 
parent.insertAdjacentElement('beforeend',child1);


let child2 = document.createElement('li');
let content2 = document.createTextNode("Before Begin");
child2.appendChild(content2);

// As a HTML SEnd - using stirng 
parents.insertAdjacentHTML('beforebegin','<li>BEfore Begin</li>')








/*--------------------------------------  Romoving Child Element From Parent element In HTML ---------------------------------*/

//First method when you know parent class
let childElement = document.querySelector(".child");
let parentElement = document.querySelector(".parent");
//parentElement.removeChild(childElement);

//console.log(parentElement);  --- for viewing result in console


//Second method when you don't have idea of parent element

let element = document.querySelector(".child") // jo bhi element del karna hai 
//element.remove();

//console.log(element); -- output is null because child element deleted




/*--------------------------------------  Finding Parent Element OF Specific class and id or html page etc---------------------------------*/



let item7 = document.querySelector('#item2');
console.log(item7);                        //output ----- what stores in item7?

console.log(item7.parentNode);         //parent class,id of item7
console.log(item7.parentElement);







/*---------------------------------------------  Customijing CSS using JS Property  ---------------------------------------- */

parentElement.style.color = 'red';                                      // ------ Drawback single property at the time
//                            -- for changing color of element

parentElement.style.backgroundColor = 'black';
//                                   ----- for changing background color & its also apply for child element


let first = document.querySelector(".anotherparent");
let second = document.querySelector(".anotherchild");

first.style.cssText = 'color:green; backgroundColor:yellow; font-size:5em';  //-------- Changing multiple property at the time


second.setAttribute("style", "color:white; background-color:crimson;")    //--------- example of setAttribute

second.setAttribute("class", "Monkey;")  //---------- changing of classs name anotherchild to monkey

// .className return number of words in class name like "first class" so it return in array form like 2["first class"]
// And same as .classList it return class name in list like [0=first, 1=second]

// ClassList return array of classes --------- methods = add(), remove(), toggle(), contains()




