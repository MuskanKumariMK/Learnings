// let a = 10, b = 12
// console.log(a + b)

// ? Funtion to check whether number is odd or even

function isEven(nums) {
  if (nums % 2 === 0) {
    return `${nums} is even number`;
  } else {
    return `${nums} is odd number`;
  }
}
// console.log(isEven(13))

// ? Make a function to reverse the string

function stringNotReverse(str) {
  // return str.slice(1,3)
  let list = [];
  for (let char = 0; char <= str.length - 1; char++) {
    // console.log(str.slice(char, char + 1))
    // console.log(str[char])
    list.push(str[char]);
  }
  // return list.join('')
  return list;
}
// console.log(stringNotReverse('Hello'))
// ? Make a function to reverse the string

function reverseString(str) {
  let list = [];
  for (let char = str.length - 1; char >= 0; char--) {
    list.push(str[char]);
  }
  return list.join("");
}
// console.log(reverseString('Hello'));  // Output: "olleH"

// console.log(reverseString('Hello'))
// ? Make a function to find the largest of the three numbers
function largestNumber(a, b, c) {
  if (a > b && a > c) {
    return `${a} is the largest number`;
  } else if (b > a && b > c) {
    return `${b} is the largest number`;
  } else if (a === b && a === c) {
    return `All numbers are same`;
  } else {
    return `${c} is the largest number`;
  }
}
// // console.log(largestNumber(30, 30, 30));
// console.log(largestNumber(10, 20, 5));
// ? Find the sum of array

function sumArray(arr) {
  let sum = 0;
  for (let num = 0; num < arr.length; num++) {
    sum += arr[num];
  }
  return sum;
}
// console.log(sumArray([1, 2, 3, 4, 5]))

// ? Fimd the ,aximum number in the array
function maxArray(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}
// console.log(maxArray([1, 5, 6, 8]));

// ? Check array contains the number or not
function isNumInArray(arr, nums) {
  for (let num = 0; num < arr.length; num++) {
    // console.log(arr[num])
    if (arr[num] === nums) {
      // return `${nums} is in the array`
      return true;
    }
  }
  return false;
}
// // console.log(isNumInArray([1, 2, 3, 4, 5], 10))
// console.log(isNumInArray([2, 4, 6, 8], 4))
// ? Check for number is palidrom

function isPalindrome(str) {
  str = str.toString();
  // return str.slice(1,3)
  let reverse = "";
  for (let char = str.length - 1; char >= 0; char--) {
    reverse = reverse + str[char];
    // console.log(reverse)
    if (reverse === str) {
      console.log(reverse);
      return true;
    }
    // console.log(str.slice(char, char + 1))
    // console.log(str[char])
  }
  return false;
}
console.log(isPalindrome(121));
// console.log(isPalindrome('madam'))

// ? Count the number of vowel in string
function countVowel(str) {
  let vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let char = 0; char < str.length; char++) {
    if (vowels.includes(str[char])) {
      count++;
    }
  }
  return count > 0 ? `Total vowels: ${count}` : "No vowel found";
}
// console.log(countVowel('hello worlds'))

// ? Find the factorial of n
// 5! = 5 * 4 * 3 * 2 * 1 = 120
function factorial(n) {
  let result = 1;
  for (let num = n; num >= 1; num--) {
    // console.log(num)
    result *= num;
  }
  return result;
}
// console.log(factorial(5))

// ? Fibonacci series Fn = Fn-1+Fn-2
// 0 1 1 2 3 5 8 13 21
// function fibonacci(n) {

// }

// ! Intermediate
// ? Find the character count in the string
function CharacterCount(str) {
  let charCount = {};
  for (let char = 0; char < str.length; char++) {
    console.log(char);
    if (charCount[str[char]]) {
      charCount[str[char]]++;
    } else {
      charCount[str[char]] = 1;
    }
  }
  return charCount;
}
// console.log(CharacterCount('aabcbbd'))
// ? Find the first non repeating character in the string
function NonRepeating(str) {
  let charCount = {};

  // Step 1: Count occurrences of each character
  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Step 2: Find the first character with count 1
  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }

  return null;
}
// console.log(NonRepeating('aabcbbd'))

// ? remove duplicate from array
function removeDuplicate(arr) {
  let newArr = [];
  for (let char of arr) {
    console.log(char);
    if (!newArr.includes(char)) {
      newArr.push(char);
    }
  }
  return newArr;
}
// console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5])) // Output: [1, 2, 3, 4, 5]
// console.log(removeDuplicate([1, 8, 1, 9, 2, 4, 6, 3, 77, 96, 46, 3, 63, 3, 3, 3, 337, 7]))
// const result = removeDuplicate([1, 8, 1, 9, 2, 4, 6, 3, 77, 96, 46, 3, 63, 3, 3, 3, 337, 7])
// ? Check if array has duplicate values
function isSet(arr) {
  return new Set(arr).size === arr.length;
}
// console.log(isSet([1, 2, 2, 3, 4, 4, 5]))
// console.log(isSet(result))

// ? Find the missing number in the array

// function missingNumber(arr) {

// }
// missingNumber([1, 2, 4, 5]);

// ? Check anangram
// * Dono shabdon me same letters hone chahiye, bus unka order different ho sakta hai.
// * Koi bhi extra ya missing letter nahi hona chahiye.
// * Meaningful word banana zaroori hai.
function isAnagram(str1, str2) {
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  if (str1.length !== str2.length) {
    return false;
  }
  let string1 = str1.split("").sort().join("");
  let string2 = str2.split("").sort().join("");
  // console.log(string1)
  // console.log(string2)
  return string1 === string2;
}
// // console.log(isAnagram('listen', 'silent'));
// // console.log(isAnagram('Race', 'Care'));
// console.log(isAnagram('Earth', 'Heart'));F
// console.log(isAnagram("listen", "silent"));  // true
// console.log(isAnagram("hello", "world"));    // false
// console.log(isAnagram("rat", "tar"));        // true
// console.log(isAnagram("abc", "abcd"));       // false
// ? Longest consecutive sequence

// ? Ikmplement custom map method
// ?  Implement a Debounce Function Create a debounce() function that delays execution of a given function until a certain time has passed.

// ? Find most frequent element in array
function mostFrequent(arr) {
  let freq = {};
  let maxCount = 0;
  let mostFrequentElement = null;

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > maxCount) {
      maxCount = freq[num];
      mostFrequentElement = num;
    }
  }

  return mostFrequentElement;
}

// console.log(mostFrequent([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4]));

// console.log(mostFrequent([5, 1, 3, 6, 8, 6, 6, 3, 6, 6, 7, 8, 9, 1, 2, 3, 4]));

// ? Implement number to roman number conversion
// * 1 - I
// * 5 - V
// * 10 - X
// * 50 - L
// * 100 - C
// * 500 - D
// * 1000 - M
// * Rule 1: When certain numerals are repeated, the number represented by them is their sum.
// ?For example, II = 1 + 1 = 2, or XX = 10 + 10 = 20, or, XXX = 10 + 10 + 10 = 30.

// * Rule 2: It is to be noted that no Roman numerals can come together more than 3 times.For example, we cannot write
// ?40 as XXXX

// * Rule 3: The letters V, L, and D are not repeated.
// *   Rule 4: Only I, X, and C can be used as subtractive numerals.There can be 6 combinations when we subtract.These are
// ?IV = 5 - 1 = 4; IX = 10 - 1 = 9; XL = 50 - 10 = 40; XC = 100 - 10 = 90; CD = 500 - 100 = 400; and CM = 1000 - 100 = 900
// * Rule 5: When a Roman numeral is placed after another Roman numeral of greater value, the result is the sum of the numerals.
// ? For example, VIII = 5 + 1 + 1 + 1 = 8, or, XV = 10 + 5 = 15,
// *   Rule 6: When a Roman numeral is placed before another Roman numeral of greater value, the result is the difference between the numerals.
// ?For example, IV = 5 - 1 = 4, or, XL = 50 - 10 = 40, or XC = 100 - 10 = 90
// *Rule 7: When a Roman numeral of a smaller value is placed between two numerals of greater value, it is subtracted from the numeral on its right.
// ?For example, XIV = 10 + (5 - 1) = 14, or, XIX = 10 + (10 - 1) = 19
// * Rule 8: To multiply a number by a factor of 1000 a bar is placed over it.
// *   Rule 9: Roman numerals do not follow any place value system.
// *    Rule 10: There is no Roman numeral for zero(0).

function NumberToRoman(num) {
  let roman = "";
  const romanNumList = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  if (num < 1) {
    return "";
  }

  for (let value in romanNumList) {
    if (num >= romanNumList[value]) {
      return value + NumberToRoman(num - romanNumList[value]);
    }
  }
}
// // console.log(NumberToRoman(-1));
// console.log(NumberToRoman(1234));  // MCCXXXIV
// console.log(NumberToRoman(58))
// * First Iteration:

// 1234 >= 1000 → Yes
// Append "M" → "M"
// Recursive call: NumberToRoman(1234 - 1000) = NumberToRoman(234)

// * Second Iteration:

// 234 >= 100 → Yes
// Append "C" → "MC"
// Recursive call: NumberToRoman(234 - 100) = NumberToRoman(134)

// * Third Iteration:

// 134 >= 100 → Yes
// Append "C" → "MCC"
// Recursive call: NumberToRoman(134 - 100) = NumberToRoman(34)

// * Fourth Iteration:

// 34 >= 10 → Yes
// Append "X" → "MCCX"
// Recursive call: NumberToRoman(34 - 10) = NumberToRoman(24)

// * Fifth Iteration:

// 24 >= 10 → Yes
// Append "X" → "MCCXX"
// Recursive call: NumberToRoman(24 - 10) = NumberToRoman(14)

// * Sixth Iteration:

// 14 >= 10 → Yes
// Append "X" → "MCCXXX"
// Recursive call: NumberToRoman(14 - 10) = NumberToRoman(4)

// * Seventh Iteration:

// 4 >= 4 → Yes
// Append "IV" → "MCCXXXIV"
// Recursive call: NumberToRoman(4 - 4) = NumberToRoman(0)
// * Final Condition:

// num = 0 → Returns ''
// Returns "MCCXXXIV" ✅
// ! Advanced
// ? Implement Test justification : Given an array of words and a line width k, format the text so that each line contains exactly k characters and is fully justified.
// function testJustify(text ,k){

// }

// ? Function convert the decimal to binary
function decimalToBinary(num) {
  let binary = "";
  while (num > 0) {
    console.log(num);
    remainder = num % 2;
    // console.log(remainder)
    binary = remainder + binary;
    // console.log(binary)
    num = Math.floor(num / 2);
  }

  return binary;
}
// console.log(decimalToBinary(10)) // Output: 1010
// ? Convert units (Length, Weight, Temperature, etc.)
function unitConversion(value, fromUnit, toUnit) {
  const conversion = {
    kg: { pound: 2.20462, gram: 1000 },
  };
  if (fromUnit === "kg" && toUnit === "pound") {
    return value * conversion.kg.pound;
  }
}

// console.log(unitConversion(12, 'kg', 'pound'))
// ? Currency convertor

function currencyConverter(amount, from, to) {
  var exchangeRates = {
    USD: 87.14,
    EUR: 93.45,
    GBP: 100.51,
    JPY: 0.65,
  };
  if (!(from in exchangeRates) || !(to in exchangeRates)) {
    return "Invalid currency code!";
  }
  if (from === to) {
    return amount;
  }
  let amountInINR = amount * exchangeRates[from];
  let convertedAmount = amountInINR / exchangeRates[to];
  return convertedAmount;
}
// console.log(currencyConverter(100, 'USD', 'EUR'))
// console.log(currencyConverter(100, 'USD', 'EUR'));
// console.log(currencyConverter(100, 'USD', 'GBP'));
// console.log(currencyConverter(100, 'USD', 'JPY'));
// console.log(currencyConverter(100, 'EUR', 'USD'));
// console.log(currencyConverter(100, 'INR', 'USD'));

function timeConvertor(time) {
  let hours = Math.floor(time / 60);
  let minutes = time % 60;
  let sec = time % 60;
  let milisec = time % 1000;
  return `${hours} hours and ${minutes} minutes and ${sec} seconds and ${milisec} miliseconds`;
}
// console.log(timeConvertor(1000))

// ? number to digit
function numberToDigit(num) {
  const numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let digit = "";
  // while (num > 0) {
  //   let remainder = num % 10
  //   digit = numbers[remainder] + ' ' + digit
  //   num = Math.floor(num / 10)
  // }
  let numStr = num.toString();
  // let places = ''
  // if (numStr.length === 1000) {
  //   places = 'thousand'
  // } else if (numStr.length === 100) {
  //   places = 'hundred'
  // } else {
  //   places = digit
  // }
  for (let char of numStr) {
    digit += numbers[parseInt(char)] + " ";
  }
  return digit;
}
// console.log(numberToDigit(1234))
// ? Birth Calculator
function birthCalculator(birthDate, birthMonth, birthYear) {
  let currentYear = new Date().getFullYear();
  let currentMonth = new Date().getMonth();
  let currentDay = new Date().getDate();
  let months = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  birthMonth = months[birthMonth];
  let year = currentYear - birthYear;
  let daysDiff = currentDay - birthDate;
  let monthsDiff = currentMonth - birthMonth;
  if (monthsDiff < 0) {
    year--; // If birth month is ahead of current month, subtract 1 year
    monthsDiff += 12;
  }
  if (daysDiff < 0) {
    monthsDiff--; // If birth day is ahead of current day, subtract 1 month

    // Get total days of the previous month
    let prevMonth = (currentMonth - 1 + 12) % 12; // Handle January case
    let daysInPrevMonth = new Date(currentYear, prevMonth + 1, 0).getDate();

    daysDiff += daysInPrevMonth;
  }

  return `You are ${year} years, ${monthsDiff} months and ${daysDiff} days old`;
}

// console.log(birthCalculator(14, 'May', 2005))
// console.log(birthCalculator(25, 'February', 2000))
// ? Factorial calculation
function factorial(n) {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
// console.log(factorial(5))
// ? Area
function Area(length, width = null, shape) {
  if (shape === "rectangle" || shape === "Reactangle") {
    return length * width;
  } else if (shape === "square" || shape === "Square") {
    return length * length;
  } else if (shape === "circle" || shape === "Circle") {
    return Math.PI * length * length;
  } else if (shape === "triangle" || shape === "Triangle") {
    return 0.5 * length * width;
  } else {
    return "Invalid shape";
  }
}
// console.log(Area(10, 20, 'rectangle'))
// console.log(Area(10, 10, 'square'))
// console.log(Area(10, null, 'circle'))
// console.log(Area(10, 20, 'triangle'))
// ? Algebra formula
function Algebra(a, b, n, operator) {
  if (operator === "+") {
    return (a + b) ** n;
  } else if (operator === "-") {
    return (a - b) ** n;
  } else if (operator === "*") {
    return (a * b) ** n;
  } else if (operator === "/") {
    return (a / b) ** n;
  } else {
    return "Invalid operator";
  }
}
// console.log(Algebra(4, 5, 2, '+'))

function mean(arr) {
  return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}
// console.log(mean([10, 20, 30, 40, 50]));

function speed(distance, time) {
  return distance / time;
}
// console.log(speed(100, 2));
function percentage(value, total) {
  return `${(value / total) * 100}%`;
}
// console.log(percentage(50, 200)); // 25%

// ? Quadratic Formula
// x = -b ± √(b² - 4ac) / 2a
function quadratic(a, b, c) {
  let D = Math.sqrt(b * b - 4 * a * c);
  console.log("Discriminant : " + D);
  let x = (-b + D) / (2 * a);
  let y = (-b - D) / (2 * a);
  return [x, y];
}
// console.log(quadratic(15, 16, 3))
// console.log(quadratic(1, 5, 6)) // [-2, -3]

// ? Logarithm
// function logBase(x, base) {
//   return Math.log(x) / Math.log(base);
// }

// console.log(logBase(100, 10)); // 2

// Trignometry Formula
// ? temperature conversion
// ? random number generator

// prime number
// ! Basic Challenges:
// Write a function to check if a number is prime.
// Write a function to find the second largest number in an array.
// Write a function to merge two sorted arrays into one sorted array.
// Implement a function to check if a string is a pangram(contains all letters of the alphabet).
// Write a function to count the occurrences of a word in a sentence.
// ! Intermediate Challenges:
// Implement a function that removes falsy values(false, 0, "", null, undefined, NaN) from an array.
// Write a function to rotate an array by k positions.
// Implement a function to flatten a nested array(without using flat()).
// Create a function to find the longest palindrome substring in a given string.
// Write a function to find all pairs in an array that sum up to a given number.
// ! Advanced Challenges:
// Implement a function that converts a decimal number to binary.
// Implement a function that finds the longest consecutive sequence in an unsorted array.
// Implement a custom filter() function.
// Implement a function to generate all permutations of a given string.
// Write a function to generate Pascal's Triangle up to n rows.
// Would you like challenges in a specific category or difficulty level ? 🚀
