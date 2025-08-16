#include <stdio.h>
#define PI 3.14

int main() {
   int radius = 6;
   int height = 10;
   printf("The area of circle with radius %d is %f\n", radius, PI * radius * radius);
   printf("The volume of cylinder  with radius %d and height %d is %f\n", radius, height, PI * radius * radius*height);
    return 0;
} 