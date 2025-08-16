// Arithmetic Instructions : 
#include <stdio.h>

int main() {
// 10 & 5 is operands 
// +,-,*,/,% ,= are the operators 
// sum , product , sub , rem ,divide are the results 
// 1. Operands can be the int/float etc., +,*,/,- are the arithmetic operators 
// 2. % is the  module divisor operators 
//  -> return the remainder 
//  ->  cannot applied to float 
//  ->  sign is same of numbers (-5%2= -1)

int sum = 10+5; // sum of 10 and 5 will be 15
    printf("The sum of 10 and 5  is %d\n", sum);
    int sub = 10- 5 ;
    printf("The differnce of 10  and 5 is %d\n", sub);
    int product = 10* 5 ;
    printf("The Product of 10 and  5 is %d\n" , product);
    int divide = 10 / 5 ;
    printf("The Divide  of 10 and  5 is %d\n" , divide);
int rem = 10 % 5 ;
printf("The Remainder  of 10 and  5 is %d\n" , rem);
printf("/** ----------------------------------------**/\n");
// using the variables
int a = 12 ,b =6;
 sum = a+b; // sum of 10 and 5 will be 15
    printf("The sum of %d and %d  is %d\n",a,b, sum);
     sub =a - b ;
    printf("The differnce of %d  and %d is %d\n",a,b,sub);
     product = a * b ;
    printf("The Product of %d and  %d is %d\n" ,a,b,product);
     divide = a / b;
    printf("The Divide  of %d and  %d is %d\n" ,a,b, divide);
 rem =a % b ;
printf("The Remainder  of %d and  %d is %d\n" , a,b,rem);
return 0;
}