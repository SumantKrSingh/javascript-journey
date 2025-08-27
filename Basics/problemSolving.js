// Reversing an array
// 1st method
function reverseArray(input) {
    let rev = [];
    for (let i = input.length - 1; i >= 0; i--) {
        rev.push(input[i]);
    }
    return rev;
}
let input = [1, 2, 3, 4, 5, 6]
//console.log(reverseArray(input));
// 2nd method
let array = [1, 2, 3, 4, 5];
let num = array.reverse();
console.log(num);


// ------------------------------------------------ Max Num in array
// 1st Method
function maxNum(array) {
    let maxValue = array[0];
    for (let value = 0; value <= array.length; value++) {
        if (array[value] > array[maxValue]) {
            array[maxValue] = array[value];
        }
    }
    console.log(`Max num in array is ${array[maxValue]}`);

}

let array = [11, 3, 55, 77, 8, 45, 2, 4, 6576, 4, 34, 5, 5546, 56];
maxNum(array);

// 2nd Method
function maxNum(array) {
    let maxValue = -Infinity;
    for (let num of array) {
        if (num > maxValue) {
            maxValue = num;
        }
    }
    return maxValue;
}


// ---------------------------------------------- Palindrome Num
// for numbers
function isPalindrome(num) {

    let ogNum = num;
    let rev = 0;
    while (num > 0) {
        let digi = num % 10;
        rev = digi + (rev * 10);
        num = Math.floor(num / 10);
    }
    return rev == ogNum;
}

let num = 123321
console.log(isPalindrome(num));

// for arrays
function isitPalindrome(num) {
    let start = 0;
    let end = num.length - 1;
    while (start < end) {
        if (num[start] !== num[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

let num = [1, 2, 3, 4, 5, 6];
console.log(isitPalindrome(num));



// ------------------------Sum of array
function sumOfArray() {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);

}

let array = [3, 3, 3];
sumOfArray(array);

// 2nd method
function sumOFArray(arra) {
    let sum = arra.reduce((a, b) => a + b, 0)
    console.log(sum);
}

let arr = [6, 6, 6]
sumOFArray(arr);


// --------------------- Counting vovel in str
function countVovels(str) {

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    console.log(count);

}

let str = "JavaScript";
countVovels(str);


// ------------------------------- Remove duplicate in array

// 1st and short method 
function removeDupli(arra) {
    return [...new Set(arra)];
}

let array = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(removeDupli(array));

// 2nd classic method
function removeDuplicate(array) {

    let result = [];
    for (let i = 0; i < array.length; i++) {
        if (!result.includes(array[i])) {
            result.push(array[i])
        }
    }
    return result;
}

let array = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(removeDuplicate(array));

// 3rd using filter
function removeDuli(array) {
    return array.filter((value, index) => array.indexOf(value) == index)
}


let array = [1, 2, 3, 3, 3, 3, 4, 5];
console.log(removeDuli(array));


//  ---------------------- Checking Anagrams
// 1st method
function areAnagram(string) {
    let [first, second] = string.split(",").map(item => item.trim().toLowerCase());

    let sorteFirst = first.split("").sort().join("");
    let secondSort = second.split("").sort().join("");

    return sorteFirst === secondSort;
}

console.log(areAnagram("silent,listen"));

//2nd method


function checkAnagramPair(string) {

    let [first, second] = string.split(",").map(item => item.trim().toLowerCase().split("").sort().join(""))

    return first === second;
}


console.log(checkAnagramPair("silent,linsten"));



//  ------------------ Second lasrgest in array
function secondLargest(array) {
    let firstLargest = -Infinity, secondLargest = -Infinity;

    for (let num of array) {
        if (num > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = num;
        }
        else if (num > secondLargest && firstLargest !== num) {
            secondLargest = num;
        }
    }
    return secondLargest;
}

let array = [34, 56, 78, 32324, 34, 2433, 999];
console.log(secondLargest(array));



// ---------------- Rotating a Array
function rotatearray(numbers, steps) {

    let length = numbers.length;
    steps = steps % length;

    let lastPart = numbers.slice(-steps);
    let firstPart = numbers.slice(0, length - steps);

    return lastPart.concat(firstPart)
}

console.log(rotatearray([1, 2, 3, 4, 5], 2));


// -------------- find unique and duplicate array
function duplicareArray(array) {
    let unique = [];
    let dupli = [];

    for (let i = 0; i < array.length; i++) {
        if (unique.includes(array[i])) {
            if (!dupli.includes(array[i])) {
                dupli.push(array[i])
            }
        } else {
            unique.push(array[i])
        }
    }
    return unique;
}

let array = [1, 3, 4, 5, 7, 8, 5, 4, 6, 4, 5];
console.log(duplicareArray(array));


// ----------------Palindrome String
function isPalindrom(string) {
    let lower = string.toLowerCase();
    let reve = lower.split("").reverse().join("");

    return lower === reve;

}

console.log(isPalindrom("Nitin"));


// --------------------- Missing num in array
function missingNum(array) {

    let sum = 0;
    let n = array.length + 1;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    let expected = n * (n + 1) / 2;

    return expected - sum;
}
let array = [1, 2, 4, 5]
console.log(missingNum(array));


// --------------------- checking frequency
function checkFrequency(array) {
    let frequency = {};

    for (let num of array) {
        if (frequency[num]) {
            frequency[num]++
        }
        else {
            frequency[num] = 1;
        }
    }
    return frequency;
}

console.log(checkFrequency([1, 2, 2, 3, 1, 4, 2]));


// ----------------------------- Targeting sum in array
function sumOfArray(array, target) {

    let result = [];
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] == target) {
                result.push([array[i], array[j]]);

            }
        }
    }
    return result;
}

let array = [1, 2, 3, 4, 5]
let target = 6;

console.log(sumOfArray(array, target));


// ----------------- Doing First word capital
function capitalizeWord(string) {

    let stri = string.split(" ").map(word => word[0].toUpperCase() + word.slice(1)).join(" ")

    return stri;
}

let string = "hello world"
console.log(capitalizeWord(string));


// -------------------- Largest word in string
function longestWord(string) {

    let longest = "";
    let word = string.split(" ");

    for (let iterate of word) {
        if (iterate.length > longest.length) {
            longest = iterate;
        }
    }
    return longest;
}

let string = "i love pizza";
console.log(longestWord(string));


// ------------- Removing duplicate in string character
//  very short method
let real = str => [...new Set(str.toLowerCase())].join("");
console.log(real("Programming"));

//  best approach
function removeString(string) {
    let unique = new Set();
    let result = "";

    for (let char of string.toLowerCase()) {
        if (!unique.has(char)) {
            unique.add(char);
            result += char;
        }
    }
    return result;
}

console.log(removeString("Nitin"));

// ------------------------------------Replace zero to end of the array
function replaceZero(array) {
    let result = [];

    for (let num of array) {
        if (num !== 0) {
            result.push(num)
        }
    }

    let zeroCount = array.length - result.length;

    for (let i = 0; i < zeroCount; i++) {
        result.push(0);
    }
    return result;
}

let array = [0, 1, 0, 3, 12]
console.log(replaceZero(array));


// ------------------- finding length of string
function lengthOfString(string) {

    let strLength = string.trim().split(" ").filter(word => word !== " ");
    return strLength.length;
}

console.log(lengthOfString(" i m a batMan"));

// ---------------------- Count of odd and even num in array

function countOddEven(numb) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < numb.length; i++) {
        if (numb[i] % 2 == 0) {
            even++;
        } else {
            odd++;
        }
    }
    console.log(`Total count of even: ${even} \n Total count of odd ${odd}`);

}

let numb = [1, 3, 5, 7, 2, 8, 4, 5, 6, 10];
countOddEven(numb);


// --------------------------------- Search target in array index
function searchTarget(array, target) {

    for (let i = 0; i < array.length; i++) {
        if (array[i] === target) {
            return i;
        }
    }
    return -1;
}

let array = [10, 20, 30, 40];
target = 30;
console.log(searchTarget(array, target));
