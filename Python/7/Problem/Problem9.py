# Star pattern 
n = int(input("Enter the number: ")) 
for i in range(1,n+1):
   if(i == 1 or i == n ):
    print("*"* n,end="")
   else: 
    print("*", end="")                # Left border
    print(" " * (n - 2), end="")       # Hollow space in the middle
    print("*", end="")                 # Right border
    print("")                  