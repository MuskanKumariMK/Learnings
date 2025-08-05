// ...existing code...

class Utils {
  // Check if a number is even or odd
  static isEven(num) {
    return num % 2 === 0 ? `${num} is even number` : `${num} is odd number`;
  }

  // Reverse a string
  static reverseString(str) {
    return str.split("").reverse().join("");
  }

  // Find the largest of three numbers
  static largestNumber(a, b, c) {
    if (a === b && b === c) return "All numbers are same";
    return Math.max(a, b, c) + " is the largest number";
  }

  // Sum of array
  static sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }

  // Maximum number in array
  static maxArray(arr) {
    return Math.max(...arr);
  }

  // Check if array contains a number
  static isNumInArray(arr, num) {
    return arr.includes(num);
  }

  // Check if string is palindrome
  static isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }

  // Count vowels in string
  static countVowel(str) {
    const vowels = "aeiou";
    let count = 0;
    for (let char of str.toLowerCase()) {
      if (vowels.includes(char)) count++;
    }
    return count > 0 ? `Total vowels: ${count}` : "No vowel found";
  }

  // Factorial (recursive)
  static factorial(n) {
    if (n <= 1) return 1;
    return n * Utils.factorial(n - 1);
  }

  // Character count in string
  static characterCount(str) {
    const charCount = {};
    for (let char of str) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
  }

  // First non-repeating character
  static firstNonRepeating(str) {
    const count = Utils.characterCount(str);
    for (let char of str) {
      if (count[char] === 1) return char;
    }
    return null;
  }

  // Remove duplicates from array
  static removeDuplicate(arr) {
    return [...new Set(arr)];
  }

  // Check if array has duplicates
  static isSet(arr) {
    return new Set(arr).size === arr.length;
  }

  // Check if two strings are anagrams
  static isAnagram(str1, str2) {
    const normalize = (s) => s.toLowerCase().split("").sort().join("");
    return normalize(str1) === normalize(str2);
  }

  // Most frequent element in array
  static mostFrequent(arr) {
    const freq = {};
    let maxCount = 0,
      most = null;
    for (let num of arr) {
      freq[num] = (freq[num] || 0) + 1;
      if (freq[num] > maxCount) {
        maxCount = freq[num];
        most = num;
      }
    }
    return most;
  }

  // Number to Roman numeral
  static numberToRoman(num) {
    if (num < 1) return "";
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
    for (let key in romanNumList) {
      if (num >= romanNumList[key]) {
        return key + Utils.numberToRoman(num - romanNumList[key]);
      }
    }
    return "";
  }

  // Decimal to binary
  static decimalToBinary(num) {
    return num.toString(2);
  }

  // Unit conversion (example: kg to pound/gram)
  static unitConversion(value, fromUnit, toUnit) {
    const conversion = {
      kg: { pound: 2.20462, gram: 1000 },
    };
    if (conversion[fromUnit] && conversion[fromUnit][toUnit]) {
      return value * conversion[fromUnit][toUnit];
    }
    return "Invalid conversion";
  }

  // Currency converter (example rates)
  static currencyConverter(amount, from, to) {
    const rates = { USD: 87.14, EUR: 93.45, GBP: 100.51, JPY: 0.65 };
    if (!(from in rates) || !(to in rates)) return "Invalid currency code!";
    if (from === to) return amount;
    let amountInINR = amount * rates[from];
    return amountInINR / rates[to];
  }

  // Time converter (minutes to hours, etc.)
  static timeConvertor(time) {
    let hours = Math.floor(time / 60);
    let minutes = time % 60;
    let sec = time % 60;
    let milisec = time % 1000;
    return `${hours} hours and ${minutes} minutes and ${sec} seconds and ${milisec} miliseconds`;
  }

  // Number to digit words
  static numberToDigit(num) {
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
    return num
      .toString()
      .split("")
      .map((d) => numbers[parseInt(d)])
      .join(" ");
  }

  // Birth calculator
  static birthCalculator(birthDate, birthMonth, birthYear) {
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
      year--;
      monthsDiff += 12;
    }
    if (daysDiff < 0) {
      monthsDiff--;
      let prevMonth = (currentMonth - 1 + 12) % 12;
      let daysInPrevMonth = new Date(currentYear, prevMonth + 1, 0).getDate();
      daysDiff += daysInPrevMonth;
    }
    return `You are ${year} years, ${monthsDiff} months and ${daysDiff} days old`;
  }

  // Area calculation
  static area(length, width = null, shape) {
    switch (shape.toLowerCase()) {
      case "rectangle":
        return length * width;
      case "square":
        return length * length;
      case "circle":
        return Math.PI * length * length;
      case "triangle":
        return 0.5 * length * width;
      default:
        return "Invalid shape";
    }
  }

  // Algebra formula
  static algebra(a, b, n, operator) {
    switch (operator) {
      case "+":
        return (a + b) ** n;
      case "-":
        return (a - b) ** n;
      case "*":
        return (a * b) ** n;
      case "/":
        return (a / b) ** n;
      default:
        return "Invalid operator";
    }
  }

  // Mean of array
  static mean(arr) {
    return Utils.sumArray(arr) / arr.length;
  }

  // Speed calculation
  static speed(distance, time) {
    return distance / time;
  }

  // Percentage calculation
  static percentage(value, total) {
    return `${(value / total) * 100}%`;
  }

  // Quadratic formula
  static quadratic(a, b, c) {
    let D = Math.sqrt(b * b - 4 * a * c);
    let x = (-b + D) / (2 * a);
    let y = (-b - D) / (2 * a);
    return [x, y];
  }
}

module.exports = Utils;
console.log(Utils.area(5, 10, "rectangle"));

