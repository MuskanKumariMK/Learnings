//? Sum of natural number
function sumOfNaturalNumbers(n) {
  if (isNaN(n)) {
    return "Please enter a valid positive integer.";
  }
  if (n < 0) {
    return "Please enter a positive integer.";
  }
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
// console.log(sumOfNaturalNumbers(-120)); // Output: 5050

function factorial(n) {
  if (isNaN(n)) {
    return "Please enter a valid positive integer.";
  }
  if (n < 0) {
    return "Please enter a positive integer.";
  }
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact = fact * i;
  }
  return fact;
}
// console.log(factorial(5)); // Output: 120
function prime(n) {
  if (isNaN(n)) {
    return "Please enter a valid positive integer.";
  }
  if (n < 0) {
    return "Please enter a positive integer.";
  }
  // let fact = 1;
  for (let i = 1; i <= n; i++) {
    if (i % 1 === 0 && i % n === 0) {
      if (n % i === 0) return false;
      console.log(i);
    }
  }
  return true;
}
// console.log(true + true);
// console.log(prime(1)); // Output: 120
function primeFactor(n) {
  if (isNaN(n)) {
    return "Please enter a valid positive integer.";
  }
  if (n < 0) {
    return "Please enter a positive integer.";
  }
  for (let i = 1; i <= Math.floor(n / 2); i++) {
    if (n % i === 0) {
      // console.log(i);
    }
  }
  console.log(n);
}
// console.log(primeFactor(36)); // Output: 120
//?
// console.time("loopDuration"); // Start timer

// setTimeout(() => {
//   console.log("This is a timeout message");
// }, 1000);
// for (let i = 0; i < 5000; i++) {
//   console.log("Hello");
//   //   if (i % 2 === 0) {
//   //     console.log(i + " is even");
//   //   } else {
//   //     console.log(i + " is odd");
//   //   }
// }
// console.log("Loop finished");
// console.timeEnd("loopDuration"); // End timer and print duration
// console.log("Loop finished");
// for (let i = 0; i < 23; i++) {
//   if (i === 11) console.log(i + " is the middle number");
//   else console.log(i);
// }

//For pattern
// for (start ; end ; change ){

// }
// While
// start ;
// while (end){
//   //code
//   change
// }
// let age = prompt("Enter a age");

// while (age < 18) {
//   console.log("You are not eligible to vote");
//   // age = prompt("Enter a age");
//   age++
// }
// console.log("you are eligible to vote");

// var n = Number(prompt("Enter first  number"));
function sum(n) {
  // var b = Number(prompt("Enter second number"));
  if (isNaN(n)) {
    return "Please enter a valid positive integer.";
  }
  if (n < 0) {
    return "Please enter a positive integer.";
  }
  var sum = 0;
  while (n > 0) {
    var rem = n % 10;
    console.log("Remainder: " + rem);
    sum += rem;
    n = Math.floor(n / 10);
    console.log("Number after removing last digit: " + n);
    console.log("Current sum: " + sum);
  }
  console.log(sum);
  return sum;
}
// sum(123);

function reverse(n) {
  //123 -> 321
  if (isNaN(n)) {
    return "Please enter a valid positive integer.";
  }
  if (n < 0) {
    return "Please enter a positive integer.";
  }
  var rev = 0;
  while (n > 0) {
    var rem = n % 10;
    console.log("Remainder: " + rem);
    console.log("Number before removing last digit: " + n);
    rev = rev * 10 + rem;
    console.log("Reversed number so far: " + rev);
    n = Math.floor(n / 10);
  }
  return rev;
}
// console.log(reverse(123)); // Output: 321
function strongNumber(n) {
  if (isNaN(n)) {
    return "Please enter a valid positive integer.";
  }
  if (n < 0) {
    return "Please enter a positive integer.";
  }
  let sum = 0;
  var rem = 0;
  var originalN = n;
  while (n > 0) {
    var rem = n % 10;
    // console.log("Remainder: " + rem);
    // sum += rem;
    var fact = factorial(rem);
    // console.log(" factorial: " + fact);
    sum += fact;
    // console.log("Current sum: " + sum);
    n = Math.floor(n / 10);
  }
  // console.log(originalN + " is the original number");
  if (originalN === sum) {
    return originalN + " is a strong number";
  } else {
    return originalN + " is not a strong number";
  }
}
// console.log(strongNumber(40585)); // Output: 145 is a strong number
function countStrongNumbers(n) {
  let count = 0;
  for (let i = 1; i <= n; i++) {
    if (strongNumber(i).includes("is a strong number")) {
      count++;
      console.log(i + " is a strong number");
    }
  }
  console.log("Total strong numbers between 1 and " + n + ": " + count);
  return count;
}
// countStrongNumbers(1000);

// do{
//   //code
// }(condition)
// var i = 11;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);
// Prmpot for Hello
// var name = prompt("Enter your name");

// do {
//   console.log("Hello World " + name);
//   name = prompt("Enter your name");
// } while (name !== "exit" && name !== "Exit" && name !== "EXIT");
function GuessTheNumber() {
  let randomNumber = Math.floor(Math.random() * 100) + 1;
  console.log(randomNumber);
  let number = 0; 
  while (number !== randomNumber) {
    number = Number(prompt("Guess the number between 1 and 100:"));
    if (isNaN(number) || number < 1 || number > 100) {
      console.log("Please enter a valid number between 1 and 100.");
      continue;
    }
    if (number < randomNumber) {
      console.log("Too low! Try again.");
    } else if (number > randomNumber) {
      console.log("Too high! Try again.");
    } else {
      console.log(
        "Congratulations! You've guessed the number: " + randomNumber
      );
    }
  }
}
GuessTheNumber(100);
