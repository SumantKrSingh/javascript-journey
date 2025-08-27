// Also we can export separately

function isNum(num){
    if(!isNaN(num) && num <= 0){
        return  `${num} is a valid number`
    }else{
        return ` ${num} is not a valid number please try again`
    }
}

function sayNamaste(user){
    return `Namaste ${user} ji`
}

export {sayNamaste, isNum};


// class example 
export class User {
    constructor() {
        this.obj = {
            name: "Zin Kazama",
            live: "Tokyo",
            native: "Japan",
            language: "Japanese"
        };
    }
}


// We can also import and export using as (alias) like we use in sql for shortname

// example 
function sayBye(){
    return "Radhe - Radhe"
}


function sayHi(user){
    return `Hi ${user} `
}

export{ sayBye as bye, sayHi as hi} // and we can list same as upper




// Using default export and import

class Anime{
    constructor(name){
        this.name = name;
    }
}

export default Anime // like this no curly braces need
//There may be only one export default per file. "One thing per module"