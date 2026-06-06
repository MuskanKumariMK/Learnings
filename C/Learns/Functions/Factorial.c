#include <stdio.h>

int main() {
    int num, i, factorial = 1;

    printf("Enter an integer: ");
    scanf("%d", &num);

    for (i = 1; i <= num; i++) {
        factorial *= i;
    }

    printf("The factorial of %d is: %d\n", num, factorial);

    return 0;
}