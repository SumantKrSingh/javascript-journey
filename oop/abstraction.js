/*               Abstraction - Hide complexity, show only essential            */

/*
i. Expose what is necessary, hide the complex inner logic

ii. Real World USe: APIs, libraries, payment systems or hardware controls.

 */


class Car{
    startEngine(){
        this.#igniteFuel();
        console.log(" Engine started ");
        
    }

    #igniteFuel(){
        console.log(" Fuel ignited ");
        
    }
}

let cars = new Car();
cars.startEngine()

// cars.#igniteFuel(); // error