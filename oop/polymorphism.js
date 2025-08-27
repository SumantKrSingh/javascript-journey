/*          Polymorphism Many Forms of a Method           */

/*

i. Same method name, different behaviour  depending on the object

ii. Real World Use ---> UI rendering, game, objects, animations or plugins

*/

class Shape {
    draw(){
        console.log("Draw shapes");
    }
}

class Square extends Shape{
    draw(){
        console.log("Draw square shapes");   
    }
}

class Circle extends Square{
    draw(){
        console.log("Draw circle shapes");
        
    }
}

let shapes = [ new Shape(), new Square(), new Circle()];
shapes.forEach(shape => shape.draw());