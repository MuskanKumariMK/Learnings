
# letter = '''Dear <Student> 
# You are passed 
# in the <Date> Exam '''
# print(letter.replace("<Student>" ,"Muskan").replace("<Date>", "14 April"))
date = input("Enter date : ")
name = input("Enter name : ")

letter = '''Dear <Student> 
You are passed 
in the <Date> Exam '''
print(letter.replace("<Student>" ,name).replace("<Date>", date))