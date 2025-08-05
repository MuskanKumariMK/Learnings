// Input: s = "IX"
// Output: 9
// Explanation: IX is a Roman symbol which represents 10 - 1 = 9

// Input: s = "XL"
// Output: 40
// Explanation: XL is a Roman symbol which represents 50 - 10 = 40

// Input: s = "MCMIV"
// Output: 1904
// Explanation: M is 1000, CM is 1000 - 100 = 900, and IV is 4. So we have total as 1000 + 900 + 4 = 1904
//? Rule 1:
//* When certain numerals are repeated, the number represented by them is their sum.
//*  For example, II = 1 + 1 = 2, or XX = 10 + 10 = 20, or, XXX = 10 + 10 + 10 = 30.

//? Rule 2:
//* It is to be noted that no Roman numerals can come together more than 3 times. For example, we cannot write 40 as XXXX

//? Rule 3:
//* The letters V, L, and D are not repeated.

//? Rule 4:
//*  Only I, X, and C can be used as subtractive numerals. There can be 6 combinations when we subtract.
//  These are IV = 5 - 1 = 4; IX = 10 - 1 = 9; XL = 50 - 10 = 40; XC = 100 - 10 = 90; CD = 500 - 100 = 400; and CM = 1000 - 100 = 900

//? Rule 5:
//*  When a Roman numeral is placed after another Roman numeral of greater value, the result is the sum of the numerals.
//* For example, VIII = 5 + 1 + 1 + 1 = 8, or, XV = 10 + 5 = 15,

//? Rule 6:
//* When a Roman numeral is placed before another Roman numeral of greater value, the result is the difference between the numerals.
//* For example, IV = 5 - 1 = 4, or, XL = 50 - 10 = 40, or XC = 100 - 10 = 90

//? Rule 7:
//*  When a Roman numeral of a smaller value is placed between two numerals of greater value, it is subtracted from the numeral on its right.
//*  For example, XIV = 10 + (5 - 1) = 14, or, XIX = 10 + (10 - 1) = 19

//? Rule 8:
//*  To multiply a number by a factor of 1000 a bar is placed over it.

//? Rule 9:
//*  Roman numerals do not follow any place value system.

//? Rule 10:
//* There is no Roman numeral for zero (0).

function isValidRoman(roman) {
  // Valid Roman numeral regex up to 3999 (standard range)
  const romanRegex =
    /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
  return romanRegex.test(roman);
}
function Roman_To_Integer(roman) {
  if (!isValidRoman(roman)) {
    console.log(" Invalid Roman numeral");
    return "Invalid number";
  }
  const romanNumeral = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentVal = romanNumeral[roman[i]];
    const nextVal = romanNumeral[roman[i + 1]];
    console.log(
      "roman : ",
      roman[i],
      "currentVal : ",
      currentVal,
      "next val : ",
      nextVal
    );

    if (currentVal < nextVal) {
      console.log(currentVal + " < " + nextVal);
      result -= currentVal; // subtract if smaller than next
    } else {
      result += currentVal; // otherwise, add
    }
  }

  return result;
}

console.log(Roman_To_Integer("MCMXCIV")); // Output: 4
