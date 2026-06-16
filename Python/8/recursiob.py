# factorial(5) = 5 X4X3X2X1
# factorial(N) = N X N-1 X N -2 
def factorial(n):
  if(n == 1 or n == 0):
    return 1
  return n * factorial(n-1)  
n = int(input("Enter a number: "))  
print(f"The factorial of nuber is: {factorial(n)}")
