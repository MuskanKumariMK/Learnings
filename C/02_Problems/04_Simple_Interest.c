#include <stdio.h>

int main() {
int T =  10 ;
int P = 35000;
float R = 1.2 ;
  float SI = (P * R * T) / 100.0;
printf("Simple Interest for the Principle amount %d, Time taken %d years, and Rate per annum %.2f is %.2f\n", P, T, R, SI);
      return 0;
}