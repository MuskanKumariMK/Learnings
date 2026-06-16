# friend = ["Apple","Orange",45 ,45.5, False] 
# friend.append("Muskan")
# print(friend)
li = [1,8,6,9,2,3,7,8,2,4,5,3,4,5,56,23,]
# li.sort()
# print(li)
# li.reverse()
# print(li)
# li.extend([4,5])
# print(li)
# li.insert(3,333) # insert 333 its index in the list 3
# print(li)
# li.insert(3,333) # insert 333 its index in the list 3
# print(li)
# print(li.pop(3) )
# print(li)
# print(li.remove(4) )
# print(li)
my_list = [1, 2, 3]
my_list.clear()
print(my_list)  # Output: []
my_list = [1, 2, 3]
index_of_2 = my_list.index(2)
print(index_of_2)  # Output: 1
my_list = [1, 2, 2, 3, 2]
count_of_2 = my_list.count(2)
print(count_of_2)  # Output: 3
my_list = [3, 1, 2]
my_list.sort()
print(my_list)  # Output: [1, 2, 3]

# Sorting in reverse
my_list.sort(reverse=True)
print(my_list)  # Output: [3, 2, 1]
my_list = [1, 2, 3]
my_list.reverse()
print(my_list)  # Output: [3, 2, 1]
my_list = [1, 2, 3]
my_list_copy = my_list.copy()
print(my_list_copy)  # Output: [1, 2, 3]
my_list = [1, 2, 3]
del my_list[1]  # Deletes element at index 1
print(my_list)  # Output: [1, 3]

del my_list  # Deletes the entire list
my_tuple = (1, 2, 3)
my_list = list(my_tuple)
print(my_list)  # Output: [1, 2, 3]





