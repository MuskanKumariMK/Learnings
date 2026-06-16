# def is_spam(comment):
#     # List of spam keywords
#     spam_keywords = ["make a money", "buy now", "subscribe this", "click here", "visit now"]

#     # Check if any spam keyword is in the comment (case insensitive)
#     for keyword in spam_keywords:
#         if keyword.lower() in comment.lower():
#             return True  # Comment is spam

#     return False  # Comment is not spam

# # Test the function with a sample comment
# comment = input("Enter the comment: ")

# if is_spam(comment):
#     print("This comment is likely spam.")
# else:
#     print("This comment seems fine.")

p1= "make a money"
p2=  "buy now"
p3= "subscribe"
p4 =  "click here"
p5 = "visit now" 
p = input("Enter a Comment here : ")
if((p1 in p) or (p2 in p) or (p3 in p) or (p4 in p) or (p5 in p)):
  print("This comment is likely spam.")
else :
  print("This comment is likely not a spam.")  