/* Encapsulation - Bundling Data & Methods (but first know about access modifiers )

i. Hide internal details and expose only what's needed

ii. Reak World Uses ---> Hiding login info, tokens or sensitive logic.

*/

class User {
    #password; // private

    constructor(userName, password) {
        this.userName = userName;
        this.#password = password;
    }

    checkPassword(input) {
        return this.#password === input;
    }
}

let user = new User("Raghav", "1099");
console.log(user.checkPassword("1098")); // false cause pasword is 1099
console.log(user.userName);
//console.log(user.#password); // error cause private



