// Usually, we put a list of what to import in curly braces import {...}, like this:

import { sayNamaste, isNum } from "./export.js";
console.log(sayNamaste('Raghav'));
console.log(isNum(0));


// class example

import {User} from "./export.js";
const user = new User();
for( let value of Object.values(user.obj)){
    console.log(value);
    
}



// But if there’s a lot to import, we can import everything as an object using import * as <obj>, for instance:

import * as say from "./export.js";
console.log(say.hi("Higan"));
console.log(say.bye());



// default export import example

import Anime from "./export.js";
let anime =new Anime("God of tower");
console.log(anime);




