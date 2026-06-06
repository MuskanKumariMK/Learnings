#include <stdio.h>

int main() {
    int A[100], B[100], C[200];
    int n, m, i, j, k;

    printf("Enter size of first array: ");
    scanf("%d", &n);

    printf("Enter elements of first array (sorted): ");
    for(i = 0; i < n; i++) {
        scanf("%d", &A[i]);
    }

    printf("Enter size of second array: ");
    scanf("%d", &m);

    printf("Enter elements of second array (sorted): ");
    for(j = 0; j < m; j++) {
        scanf("%d", &B[j]);
    }

    i = j = k = 0;

    // Merge process
    while(i < n && j < m) {
        if(A[i] < B[j]) {
            C[k++] = A[i++];
        } else {
            C[k++] = B[j++];
        }
    }

    // Remaining elements
    while(i < n) {
        C[k++] = A[i++];
    }

    while(j < m) {
        C[k++] = B[j++];
    }

    // Output
    printf("Merged Array: ");
    for(i = 0; i < k; i++) {
        printf("%d ", C[i]);
    }

    return 0;
}