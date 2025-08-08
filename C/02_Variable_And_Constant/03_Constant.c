#include <stdio.h>
int main (){
    
    // Constants in C
    // Constants are fixed values that do not change during the execution of a program.
    // This variable’s value cannot be changed after initialization.
    const float pi = 3.14; 
    printf("The value of pi is %.2f\n", (float)pi);
const float e = 2.71828;
    printf("The value of e is %.5f\n", (float)e);
    const int value = 100;
// value = 200; // This line will cause a compilation error because 'value' is a constant

// Why use constants?
    // Prevents accidental modification of values that should remain constant.
    // Improves Code safety and readability.
    // Better Optimization by the compiler.
    // Make Intent clear to other developers.
    // If you want   to calculate the area of a circle, you can use the constant pi.
    float radius = 5.0;
    float area = pi * radius * radius;
    printf("The area of the circle with radius %.2f is %.2f\n", radius, area);
    return 0;
}