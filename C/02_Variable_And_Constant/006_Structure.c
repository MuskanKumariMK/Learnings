// Structure in C
// Documentation: https://www.learn-c.org/en/Structures
/*
Description : This program demonstrates the use of structures in C.
Name        : 06_Structure.c
Programmer  : Your Name
Date        : 2023-10-01
Time        : 10:00 AM
*/

// Processor Section: All the header files of the program will be included here
#include <stdio.h>
#include <math.h>

// Definition:
// Processors are the programs that process our source code before the process of compilation.
// In this case, we are including the standard input-output header file for using printf and scanf.

// Global Declarations:
// The global declarations section is used to declare global variables, constants, and function prototypes.
int num = 18;

// Structure definition
struct Student {
    char name[50];
    int roll;
    float marks;
};

// Main Function
// The main function is the entry point of the program where execution starts.

int main() {
    struct Student s1;

    printf("Enter name: ");
    scanf("%s", s1.name);

    printf("Enter roll number: ");
    scanf("%d", &s1.roll);

    printf("Enter marks: ");
    scanf("%f", &s1.marks);

    printf("\nDisplaying Information:\n");
    printf("Name: %s\n", s1.name);
    printf("Roll: %d\n", s1.roll);
    printf("Marks: %.2f\n", s1.marks);

    return 0;
}

// Sub Program:
// User defined functions or subprograms can be defined here.
