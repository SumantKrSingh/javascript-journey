/*
The try...catch block in JavaScript is used for error handling. 
It allows you to run code that might throw an error inside the try block,
and handle that error gracefully in the catch block — without crashing the program.
*/


//Example 1.  Not declaring variable

try {
  console.log(sum);

} catch (error) {
  console.log("Error caught : ", error.message);

}


// Example 2. Missing curly braces in json }
let str = '{"name" : "Sumant", "age" : 20';

try {
  let user = JSON.parse(str);
  console.log(user.name);

} catch (error) {
  console.log("JSON Error :", error.message);

}


// Example 3. Checking a no. is odd or even with custom error using "Throw"
function oddOrEven(num) {

  try {
    if (num <= 0) {
      throw new Error("Negative Numbers and zero are not allowed");
    }

    else if (num % 2 == 0) {
      console.log("Number is even ");

    } else {
      console.log("number is odd");
    }

  } catch (error) {
    console.log("caught an error", error.message);

  }
}

oddOrEven(5);


// Example 4. Dividing two numbers

function divide(a, b) {

  try {
    if (b === 0 || a === 0) {
      throw new Error("Cannot divided by zero")
    }
    console.log("Result : ", a / b);

  } catch (error) {
    console.log("Error caught: ", error.message);

  }
}

divide(0, 6);




// Example 5 Custom error handling
class UserNotFound extends Error {
  constructor(message) {
    super(message);
    this.name = "userNotFound"
  }
}

function loginUser(username) {
  const user = ["Sumant", "Dhruv"]
  if (!user.includes(username)) {
    throw new UserNotFound(`User ${username} not found`)
  }
  return "Login succesfully";
}

try {
  console.log(loginUser("Raghav"));

} catch (error) {
  if (error instanceof UserNotFound) {
    console.log("Custom handling", error.message);

  } else {
    console.log("Manually handling", error.message);

  }
}



