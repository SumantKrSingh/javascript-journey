/*
                            Reusing Code Via Child            

i. Class inheritance is a way for one class to extend another class. Using "extends" keyword 

ii. A class can inherit from another and extend/override behavior

iii. Real World Use ---> Base Ui components, game characters, transport system.

 */



// Basic
class Animal {
    eat(){
        console.log("Animal is eating");
        
    }
}

class Dog extends Animal {
    // nothing
}
const pet = new Dog();
pet.eat(); // Animal is eating



// Overriding (also call as polymorphism)
class Animals {
    eat(){
        console.log("Animal is eating");
    }
}

class Horse extends Animals{
    eat(){
        console.log("Horse is grazing"); // overriding same name but different parameter
        
    }
}
let pets = new Horse();
pets.eat() // horse...




/*---------------------------------------    Cars example   --------------------------------- */

class Car {
    constructor(name, speed = 0, body = 'metal body', price = '1 crore', engine = 'standard engine') {
        this.name = name;
        this.speed = speed;
        this.body = body;
        this.price = price;
        this.engine = engine;
    }

    run(speed) {
        console.log(`${this.name} covers 0 to ${speed} km/h in just 4 seconds.`);
    }

    madeBy(body) {
        console.log(`${this.name} is made of ${body}.`);
    }

    cost(price) {
        console.log(`${this.name} is approximately priced at ₹${this.price}.`);
    }

    machine(engine) {
        console.log(`${this.name} has a ${engine} engine.`);
    }

    intro() {
        console.log(`This is a generic car: ${this.name}`);
    }
}

class BMW extends Car {
    intro() {
        console.log(`This is a BMW model: ${this.name}`);
    }

}

class Bugatti extends BMW {
    intro() {
        console.log(`I am the legendary Bugatti: ${this.name}`);
    }

}

// Usage
const bugatti = new Bugatti("Bugatti Veyron");

bugatti.intro();
bugatti.run(100);
bugatti.madeBy("carbon fibre");
bugatti.cost("20 crore");
bugatti.machine("7,000 horsepower");






// using this and super keywords
/*-----------------------------     Real Life example Bank Account   ------------------------------------------------ */
class BankAccount {
    constructor(accountNumber, holderName, balance = 0) {
        this.accountNumber = accountNumber;
        this.holderName = holderName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`${amount.toFixed(2)} ₹ deposited. New balance: ${this.balance.toFixed(2)} ₹`);
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Withdrawal denied: Insufficient balance.");
        } else {
            this.balance -= amount;
            console.log(`${amount.toFixed(2)} ₹ withdrawn. New balance: ${this.balance.toFixed(2)} ₹`);
        }
    }

    getBalance() {
        console.log(`Current balance: ${this.balance.toFixed(2)} ₹`);
        return this.balance;
    }
}

class SavingAccount extends BankAccount {
    constructor(accountNumber, holderName, balance, interestRate = 0.05) {
        super(accountNumber, holderName, balance);
        this.interestRate = interestRate;
    }

    addInterest() {
        let interest = this.interestRate * this.balance;
        this.balance += interest;
        console.log(`Interest added: ${interest.toFixed(2)} ₹. New balance: ${this.balance.toFixed(2)} ₹`);
    }
}

class CurrentAccount extends BankAccount {
    constructor(accountNumber, holderName, balance, overdraftLimit = 10000) {
        super(accountNumber, holderName, balance);
        this.overdraftLimit = overdraftLimit;
    }

    withdraw(amount) {
        if (amount > this.balance + this.overdraftLimit) {
            console.log("Withdrawal denied: Overdraft limit exceeded.");
        } else {
            this.balance -= amount;
            console.log(`${amount.toFixed(2)} ₹ withdrawn using Current Account. New balance: ${this.balance.toFixed(2)} ₹`);
        }
    }
}


let savingAcc = new SavingAccount(1098, 'Sumant Singh', 10000000);
savingAcc.deposit(1);
savingAcc.addInterest();
savingAcc.withdraw(5000000);
savingAcc.getBalance();

console.log(`-------------------------------------------------------`);

let currentAcc = new CurrentAccount(1100, 'Sumant Kumar Singh', 10000000000000);
currentAcc.deposit(1);
currentAcc.withdraw(50000000000);
currentAcc.withdraw(1000000000000000);
currentAcc.getBalance();

