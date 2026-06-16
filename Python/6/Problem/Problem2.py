# Marksheet
marks1 = int(input("Enter Hindi marks: "))
marks2 = int(input("Enter English marks: "))
marks3 = int(input("Enter Math marks: "))
marks4 = int(input("Enter Science marks: "))
marks5 = int(input("Enter Sst marks: "))

Obtained_marks = marks1 + marks2 + marks3 + marks4 + marks5
print("Total marks: " ,Obtained_marks)
percentage  = (Obtained_marks * 100)/500
print("Percentage: " ,percentage,"%")

if(percentage >= 90 ):
  print("Grade: A")
elif(percentage >= 80 ):
  print("Grade: B")
elif(percentage >= 70 ):
  print("Grade: C")
elif(percentage >= 60 ):
  print("Grade: D")
elif(percentage >= 50 ):
  print("Grade: E")
elif(percentage >= 40 ):
  print("Grade: F")
else:
  print("Grade: Fail")