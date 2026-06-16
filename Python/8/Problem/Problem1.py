def greatest(a,b,c):
  if(a>b and a>c):
    return a
  elif(b>a and b>c ):
    return b 
  elif(c>a and c>b):
    return c

a = int(input("Enter a number in a: "))
b = int(input("Enter a number in b: "))
c = int(input("Enter a number in c: "))
print(greatest(a,b,c))

