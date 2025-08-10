// Documentation
/**
 * * file: 06_Structure.c
 * author:  Muskan 
 * dscription: This file contains the implementation of structures in C.
 * date: 10/08/2025
 * time: 12:20 PM
 * version: 1.0
 */

// Processor Section 
#include <stdio.h>

// Definition Section
#define X 20 

// Global Declaration Section
int sum(int y);   

// Main ()  Function Section
int main() {
     int y = 55;
  printf("Sum: %d", sum(y));
  return 0;
}
// Subprogram
int sum(int y) 
{
  return y + X;
}