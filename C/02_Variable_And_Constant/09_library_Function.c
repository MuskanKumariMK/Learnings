// Library Function In C
// Library functions are built-in functions provided by C standard library.
// They are used to perform common tasks such as input/output, string manipulation, mathematical calculations, etc.
// stdio.h is a standard header file in C that contains declarations for input/output functions.
// math.h for mathematical functions.
// string.h for string manipulation functions.
// assert.h for debugging and assertions.
// complex.h for complex number operations.
// float.h for floating-point operations.
// limits.h for limits of integral types.
// time.h for time and date functions.

// Header files are included at the beginning of the program to use these functions.
// WHy Use Include Header Files?
// Including header files allows the compiler to know about the functions and their prototypes.
// It helps in avoiding errors during compilation and linking.

// Example 1 
#include <stdio.h>  // Standard Input/Output header file
#include <math.h>   // Math header file for mathematical functions
#include <string.h> // String header file for string manipulation functions
#include <assert.h> // Header file for debugging and assertions
#include <complex.h> // Header file for complex number operations
#include <float.h> // Header file for floating-point operations
#include <limits.h> // Header file for limits of integral types
#include <time.h> // Header file for time and date functions
#define PI 3.14159 // Defining a constant for PI
int main() {
    printf("Hello , Muskan\n");
    printf("Welcome to C Programming\n");
    double num = 9.0;
    double squareRoot = sqrt(num); // Using sqrt function from math.h
    printf("Square root of %.2f is %.2f\n", num, squareRoot);
     double radius = 5.0;
    double area = PI * radius * radius; // Calculating area of a circle
    printf("Area of circle with radius %.2f is %.2f\n", radius, area);
    printf("Maximum value of Float = %.10e\n", FLT_MAX); // Using float.h to get max float value
    printf("Minimum value of Float = %.10e\n", FLT_MIN); // Using
  
    printf("Number of bits in a byte %d\n",
           CHAR_BIT);
    printf("Minimum value of SIGNED CHAR = %d\n",
           SCHAR_MIN);
    printf("Maximum value of SIGNED CHAR = %d\n",
           SCHAR_MAX);
    printf("Maximum value of UNSIGNED CHAR = %d\n",
           UCHAR_MAX);
    printf("Minimum value of SHORT INT = %d\n",
           SHRT_MIN);
    printf("Maximum value of SHORT INT = %d\n",
           SHRT_MAX);
    printf("Minimum value of INT = %d\n",
           INT_MIN);
    printf("Maximum value of INT = %d\n",
           INT_MAX);
    printf("Minimum value of CHAR = %d\n",
           CHAR_MIN);
    printf("Maximum value of CHAR = %d\n",
           CHAR_MAX);
    printf("Minimum value of LONG = %ld\n",
           LONG_MIN);
    printf("Maximum value of LONG = %ld\n",
           LONG_MAX);
    return (0);
}