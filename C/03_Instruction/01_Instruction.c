// Instruction : Instruction are essentially the commands or statement that direct the C compiler to perform specific action or task 
// Types of Instruction 
// Types Declarative Instruction 
// Arithimetic Instruction 
// Control Instruction
#include <stdio.h>

int main() {
    int a; // Declare Integer variables
    float b ;  // Declare Float 
    char c ; // Declare Character
    a = 10; // Assign value to a 
    b =12.00;  // Assign value to b
    c = 'A';  // Assign value to c

    printf("The value of a is %d , the value is %.2f the value of c is %c\n", a,b,c);
    return 0;
}