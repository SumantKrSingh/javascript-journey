
//Array Destructuring

let arr =  [ "John", "Smith" ];
let [firstName, lastName] = arr;
//console.log(`${firstName}  ${lastName}`);


//2nd Example
let [Firstname, Lastname] = "Sumant Singh".split(' ');
console.log(`${Firstname}  ${Lastname}`);


//3rd example of swapping any values array etc
let a = 100, b=200;
[a, b] = [b, a];
console.log(`value of a is: ${a} and value of b is: ${b}`);



//4th example settinf default value of array
let [name="Sumant", middleName="Kumar", lastname="Singh"] = ["Raghav"]  //=> ther i only provide value of first name
console.log(`${firstName}, ${middleName}, ${lastname} `);  //=> but i access all value so output is Raghav kumar singh 
// kumar singh from default and if i didn't set default value and not giving in array value then its shows undefined




// All of these are same apply for objects


let salaries ={
    "John": 100,
    "Pete": 300,
    "Mary": 250,
  };
  
  function topPaidEmp(salaries) {
    let maxName ='';
    let maxSalary =0
    for(let [name, salary] of Object.entries(salaries)){  
        if(maxSalary < salary){
          maxSalary = salary;
          maxName = name
        }
    }
    return maxName;
    
  }
  console.log(topPaidEmp(salaries));