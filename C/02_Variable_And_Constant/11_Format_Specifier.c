#include <stdio.h>
int main (){
    // Format specifiers are used in C to define the type of data that is being printed or read.
    int nums = 10;
    printf("The value of nums is: %d\n", nums); // %d is used for integers
    float price = 50.14;
    printf("The price is: %.2f\n", price); // %.2f is used for floating-point numbers with 2 decimal places
    char grade = 'A';
    printf("Your grade is: %c\n", grade); // %c is used for characters
    char name[] = "Muskan";
    printf("Hello, %s!\n", name); // %s is used for strings
    double pi = 3.14159;    
    printf("The value of pi is: %.5f\n", pi); // %.5f is used for double precision floating-point numbers
    unsigned int uNum = 20;
    printf("The unsigned integer is: %u\n", uNum); // %u is used for unsigned integers
}