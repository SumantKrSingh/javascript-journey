/* 
A mixin is a design pattern in javaScript used to add reusable 
functionality to classes or object without using inheritance .
It allows you to "Mix" behaviours from multiple source into
a single class or object.
 */


let canWalk = {
    walk(){
        console.log("Walking.....");
        
    }
}

let canEat = {
    eat(){
        console.log("Eating");
        
    }
}

let human = {
    name : "Higan"
}

Object.assign(human, canWalk, canEat);
human.eat();
human.walk();



// 2nd Example


let canRun = {
    run(){
        console.log(`${this.name} Running Fast.....`);
        
    }
}

let herbiVores = {
    eating(){
        console.log(`${this.name} Eat only grass.....`);
        
    }
}

let carnivorse = {
    eated(){
        console.log(`${this.name} Eating only flesh and meat.....`);
        
    }
}

let omnivores = {
    eaten(){
        console.log(`${this.name} Eat both grass and meat`);
        
    }
}

class Creature{
    constructor(name){
        this.name = name
        console.log(this.name);
        
    }
}

class SuperCreature extends Creature{};

// Mix in all abilities

Object.assign(SuperCreature.prototype, canRun, carnivorse, herbiVores, omnivores);

let charizard = new SuperCreature(" Mega Charlizard ");

charizard.run();
charizard.eaten();
charizard.eating();
charizard.eated();