# Structure in C

**Documentation:** [https://www.learn-c.org/en/Structures](https://www.learn-c.org/en/Structures)

---

## Program Information

```c
/*
Description : This program demonstrates the use of structures in C.
Name        : 06_Structure.c
Programmer  : Your Name
Date        : 2023-10-01
Time        : 10:00 AM
*/
```

---

## Processor Section

All the header files required by the program will be included here.

```c
#include <stdio.h>
#include <math.h>
```

**Definition:**  
Processors are programs that process our source code before compilation.  
In this case, we are including the **Standard Input-Output** header file (`stdio.h`) for using `printf` and `scanf`.

---

## Global Declarations

The **global declarations** section is used to declare global variables, constants, and function prototypes.

Example:

```c
int num = 18;
```

---

## Main Function

The **main function** is the entry point of the program where execution starts.

---

## Subprograms

User-defined functions (subprograms) can be defined here.

---

## Example Code

```c
#include <stdio.h>

struct Student {
    char name[50];
    int roll;
    float marks;
};

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
```

<!-- // Strucutre in C
// Documentation: https://www.learn-c.org/en/Structures
//* Add Description of the program , name of the program ,and the creation date and time of the program
// description , name of the program ,ptrogrammer name , date , time etc .,
/*
description: This program demonstrates the use of structures in C.
name: 06_Structure.c
programmer: Your Name
date: 2023-10-01
time: 10:00 AM
*/
// Processor Section: All the Header files of the programwitll be included here
// #include <stdio.h>
// #include <math.h>

// Definition :
// Processors  are the preograms that process our source code before the process od Compilation.
// In this case, we are including the standard input-output header file for using printf and scanf
// Global Declarations : The global declarations section is used to declare global variables, constants, and function prototypes.
// int num = 18;
// Main Function
// The main function is the entry point of the program where execution starts.
//Sub Program : User defined functions or subprograms can be defined here.
// -->
