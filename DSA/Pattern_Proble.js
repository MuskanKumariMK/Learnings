let prompt = require("prompt-sync")();
let a = Number(prompt("Enter the number : "));
// process.stdout.write(a);
// // console.log(a);
// for (let i = 0; i < a; i++) {
//   //   console.log("*".repeat(i + 1));
//   process.stdout.write("* ");
// }
// for (let i = 0; i < a; i++) {
//   for (let j = 0; j < a; j++) {
//     //print the first row
//     process.stdout.write("*  ");
//   }
//   // print the new line

//   console.log();
// }
// table row - >  5 coloumn - > 5
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *
// * * * * * *

//! Question Started
//! 1.
//?  Question
// *
// * *
// * * *
// * * * *
// * * * * *
// for (let i = 1; i <= a; i++) {
//   //   console.log("i", i);
//   for (let j = 1; j <= i; j++) {
//     //print the first row
//     // console.log("j", j);
//     process.stdout.write("* ");
//   }
//   console.log("");
//   //   console.log("--------------------");
// }
//? Question
// 1
// 1  2
// 1  2  3
// 1  2  3  4

// for (let i = 1; i <= a; i++) {
//   //   console.log("i", i);
//   for (let j = 1; j <= i; j++) {
//     //print the first row
//     // console.log("j", j);
//     process.stdout.write(j + " ");
//   }
//   console.log("");
//   //   console.log("--------------------");
// }

// A
// A  B
// A  B  C
// A  B  C  D
// for (let i = 1; i <= a; i++) {
//   //   console.log("i", i);
//   for (let j = 1; j <= i; j++) {
//     //print the first row
//     // console.log("j", j);
//     process.stdout.write(String.fromCharCode(64 + j) + " ");
//   }
//   console.log("");
//   //   console.log("--------------------");
// }
//? Question : Inverted Right Triangle
// * * * * *
// * * * *
// * * *
// * *
// *
// for (let i = a; i >= 1; i--) {
//   //   console.log("i", i);
//   for (let j = 1; j <= i; j++) {
//     //print the first row
//     // console.log("j", j);
//     process.stdout.write("*");
//   }
//   console.log("");
//   //   console.log("--------------------");
// }

//? Question : Mirror Right Triangle

// for (let i = 1; i <= a; i++) {
//   //   console.log("i", i);
//   // Inverted Right Triangle with spaces
//   for (let j = 1; j <= a - i + 1; j++) {
//     //print the first row
//     // console.log("j", j);
//     process.stdout.write("  ");
//   }
//   //Right Triangle with spaces

//   for (let j = 1; j <= i; j++) {
//     //print the first row
//     // console.log("j", j);
//     process.stdout.write("* ");
//   }

//   console.log("");
//   //   console.log("--------------------");
// }

//? Question :  X
// *        *
//   *    *
//     *
//   *    *
// *        *
// if (a % 2 == 0) {
//   a = a + 1; // Make it odd for symmetry
// }
// console.log(a);
// for (let i = 1; i <= a; i++) {
//   for (let j = 1; j <= a; j++) {
//     if (i == j || i + j == a + 1) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("   ");
//     }
//   }
//   console.log("");
// }

//? Question : V
// for (let i = 1; i <= a; i++) {
//   for (let j = 1; j <= 2 * a - 1; j++) {
//     if (i == j || i + j == a + a) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write("   ");
//     }
//   }
//   console.log("");
// }
//? Question :  Full Pyramid
//       *
//     * * *
//   * * * * *
// * * * * * * *

// for (let i = 1; i <= a; i++) {
//   //   console.log("i", i);
//   // Inverted Right Triangle with spaces
//   for (let j = 1; j <= a - i + 1; j++) {
//     //print the first row
//     // console.log("j", j);
//     process.stdout.write("  ");
//   }
//   //Right Triangle with spaces

//   for (let j = 1; j <= 2 * i - 1; j++) {
//     //print the first row
//     // console.log("j", j);
//     process.stdout.write("* ");
//   }

//   console.log("");
//   //   console.log("--------------------");
// }

//? Question : Number Pyramid

// for (let i = 1; i <= a; i++) {
//   //   console.log("i", i);
//   // Inverted Right Triangle with spaces
//   for (let j = 1; j <= a - i + 1; j++) {
//     //print the first row
//     // console.log("j", j);
//     process.stdout.write("  ");
//   }
//   //Right Triangle with spaces

//   for (let j = 1; j <= 2 * i - 1; j++) {
//     //print the first row
//     // console.log("j", j);
//     process.stdout.write(j + " ");
//   }

//   console.log("");
//   //   console.log("--------------------");
// }
//? Question : Alphabet Pyramid

// for (let i = 1; i <= a; i++) {
//   //   console.log("i", i);
//   // Inverted Right Triangle with spaces
//   for (let j = 1; j <= a - i + 1; j++) {
//     //print the first row
//     // console.log("j", j);
//     process.stdout.write("  ");
//   }
//   //Right Triangle with spaces

//   for (let j = 1; j <= 2 * i - 1; j++) {
//     //print the first row
//     // console.log("j", j);
//     process.stdout.write(String.fromCharCode(64 + j) + " ");
//   }

//   console.log("");
//   //   console.log("--------------------");
// }
//? Question :  Inverted Full Pyramid
//      * * * * *
//       * * * *
//        * * *
//         * *
//          *

// for (let i = 1; i <= a; i++) {
//   // Print leading spaces
//   for (let j = 1; j < i; j++) {
//     process.stdout.write("  ");
//   }
//   // Print stars with spaces
//   for (let j = 1; j <= 2 * (a - i) + 1; j++) {
//     process.stdout.write("* ");
//   }
//   console.log();
// }
//? Question : Hollow Full Pyramid
//           *
//         *   *
//       *       *
//     *           *
//   * * * * * * * * *

// for (let i = 1; i <= a; i++) {
//   for (let j = 1; j <= a - i; j++) {
//     process.stdout.write(" ");
//   }

//   for (let j = 1; j <= 2 * i - 1; j++) {
//     if (j === 1 || j === 2 * i - 1 || i === a) {
//       process.stdout.write("* ");
//     } else {
//       process.stdout.write(" ");
//     }
//   }
//   console.log();
// }

//? Question :  Half Diamond
// *
// **
// ***
// ****
// *****
// ******
// *****
// ****
// ***
// **
// *
// for (let i = 1; i <= a; i++) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("*");
//   }

//   console.log();
// }
// for (let i = a - 1; i >= 1; i--) {
//   for (let j = 1; j <= i; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
//? Question : Full Diamond
//       *
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************
//  ***********
//   *********
//    *******
//     *****
//      ***
//       *
// for (let i = 1; i <= a; i++) {
//   for (let j = 1; j <= a - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
// for (let i = a - 1; i >= 1; i--) {
//   for (let j = 1; j <= a - i; j++) {
//     process.stdout.write(" ");
//   }
//   for (let j = 1; j <= 2 * i - 1; j++) {
//     process.stdout.write("*");
//   }
//   console.log();
// }
//? Question : A  using Starts
//        *
//       *  *
//      *     *
//     *        *
//    * * * * * * *
//   *              *
//  *                 *
// *                    *

//? Question :  Solid  Square
// *  *  *
// *  *  *
// *  *  *
// // for (let i = 0; i < a; i++) {
//   for (let j = 0; j < a; j++) {
//     //print the first row
//     process.stdout.write("*  ");
//   }
//   // print the new line

//   console.log();
// }
//? Question :  Hollow Square
// a = 3
// *  *  *
// *     *
// *  *  *
// a = 5
// *  *  *  *  *
// *           *
// *           *
// *           *
// *  *  *  *  *
// // for (let
//? Question :  Hollow rectangle
//? Question :  Stair case
//? Question :   Swastika Pattern
//? Question :  Circle Pattern
//? Question :  Diagonal Star Pattern
//? Question :  Solid and Hollow rhombus
//? Question :  Butterfly Pattern
//? Question :  Arrow Pattern
//? Question :  alphabet a to z
//? Question :  reverse character bridge
//? Question :  reapezium
//? Question :  Hour glass Pattern

// 1 2 3* 4 5 6 7
//  2 3 4 5 6 7
//   3 4 5 6 7
//    4 5 6 7
//     5 6 7
//      6 7
//       7
//      6 7
//     5 6 7
//    4 5 6 7
//   3 4 5 6 7
//  2 3 4 5 6 7
// 1 2 3 4 5 6 7
//? Question : Inner reducing Pattern
// 4444444;
// 4333334;
// 4322234;
// 4321234;
// 4322234;
// 4333334;
// 4444444;
