// What is a Data Type in C?
    // A data type is a classification that specifies which type of value a variable can hold.
#include <stdio.h>
int main (){
    // Basic Data Types in C
    // int, char, float, double
    int a ;
    a = 42;
    printf("The number is %d\n", a);
    printf("The size of int is %d bytes\n", sizeof(a));
    char b = 'A';
    printf("The character is %d\n", b);
    printf("The size of char is %d bytes\n", sizeof(b));
    float c = 3.14f;
    printf("The float is %.2f\n", c);
    printf("The size of float is %d bytes\n", sizeof(c));
double d = 2.71828;
    printf("The double is %.5f\n", d);
    printf("The size of double is %d bytes\n", sizeof(d));
// Derived Data Types in C
    // Arrays, Pointers, Structures, Unions
    int arr[5] = {1, 2, 3, 4, 5};
    printf("The first element of the array is %d\n", arr[0]);
  // Enumerated Data Types in C
  // User defined  types 
    return 0;
}