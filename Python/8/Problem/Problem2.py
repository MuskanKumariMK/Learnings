def f_to_c (f):
  return  5*(f - 32 )/9

f = int(input("Enter a temperature in Fehrenheight b: "))
print(round(f_to_c(f),2))