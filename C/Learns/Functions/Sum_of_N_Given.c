#include <stdio.h>

int main() {
    int n, i, num, sum = 0;

    printf("Enter the number of numbers: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++) {
        printf("Enter number %d: ", i);
        scanf("%d", &num);
        sum += num;
    }

    printf("The sum of the %d numbers is: %d\n", n, sum);

    return 0;
}