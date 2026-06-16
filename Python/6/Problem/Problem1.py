a1 = int(input("Enter a number1: "))
a2 = int(input("Enter a number2: "))
a3 = int(input("Enter a number3: "))
a4 = int(input("Enter a number4: "))

# Checking the greatest and smallest for each number

# Check if a1 is the greatest or smallest
if a1 > a2 and a1 > a3 and a1 > a4:
    print("number1 is greatest of all numbers")
elif a1 < a2 and a1 < a3 and a1 < a4:
    print("number1 is smallest of all numbers")

# Check if a2 is the greatest or smallest
if a2 > a1 and a2 > a3 and a2 > a4:
    print("number2 is greatest of all numbers")
elif a2 < a1 and a2 < a3 and a2 < a4:
    print("number2 is smallest of all numbers")

# Check if a3 is the greatest or smallest
if a3 > a1 and a3 > a2 and a3 > a4:
    print("number3 is greatest of all numbers")
elif a3 < a1 and a3 < a2 and a3 < a4:
    print("number3 is smallest of all numbers")

# Check if a4 is the greatest or smallest
if a4 > a1 and a4 > a2 and a4 > a3:
    print("number4 is greatest of all numbers")
elif a4 < a1 and a4 < a2 and a4 < a3:
    print("number4 is smallest of all numbers")
