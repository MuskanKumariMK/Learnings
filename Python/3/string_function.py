# name ="Muskan"
# welcome ="Hello world "
# print(len(name))
# print(name.endswith("kan"))
# print(name.startswith("Mus"))
# print(name.capitalize())
# print(name.lower())
# print(name.upper())

# print(welcome.replace("world","Python"))

# print(",".join(["a","b","c"]))
# print(name.find("a"))
# print(name.isdigit())
# print(name.title())

name = "Muskan"
welcome = "Hello world 123"

# A to C
print(name.capitalize())              # Capitalizes first letter: "Muskan"
print(name.casefold())                # Converts to lowercase (more aggressive): "muskan"
print(name.center(10, "*"))           # Centers the string with padding: "**Muskan**"
print(welcome.count("o"))             # Counts occurrences of "o": 2

# E to F
print(name.endswith("kan"))           # Checks if ends with "kan": True
print(name.expandtabs(4))             # Expands tabs in a string, example only useful with tab characters
print(welcome.find("world"))          # Finds index of first occurrence of "world": 6
print(welcome.format())               # Formats the string (used mostly in formatted strings)
print("{0} loves {1}".format("Muskan", "coding"))  # Output: "Muskan loves coding"

# I to J
print(name.index("s"))                # Finds index of first occurrence of "s": 2
print("12345".isalnum())              # Checks if alphanumeric: True
print(name.isalpha())                 # Checks if alphabetic: True
print("123".isdigit())                # Checks if digits only: True
print("hello".islower())              # Checks if lowercase: True
print("HELLO".isupper())              # Checks if uppercase: True
print("Hello World".istitle())        # Checks if title case: True
print("   ".isspace())                # Checks if whitespace only: True
print(",".join(["a", "b", "c"]))      # Joins list into string with commas: "a,b,c"

# L to P
print(name.ljust(10, "*"))            # Left-justifies with padding: "Muskan****"
print(name.lower())                   # Converts to lowercase: "muskan"
print("   Hello   ".lstrip())         # Strips whitespace from left: "Hello   "
print("Welcome".partition("l"))       # Partitions string at first occurrence of "l": ("We", "l", "come")

# R
print("1234".rjust(10, "0"))          # Right-justifies with padding: "0000001234"
print("Hello world".replace("world", "Python"))  # Replaces "world" with "Python": "Hello Python"
print("hello world".rfind("o"))       # Finds last index of "o": 7
print("hello world".rindex("o"))      # Finds last index of "o" (raises error if not found): 7
print("Welcome".rpartition("l"))      # Partitions from right: ("We", "l", "come")
print("   Hello   ".rstrip())         # Strips whitespace from right: "   Hello"

# S to T
print("apple,banana,orange".split(","))  # Splits string by commas: ['apple', 'banana', 'orange']
print("apple\nbanana\norange".splitlines())  # Splits by lines: ['apple', 'banana', 'orange']
print(name.startswith("Mus"))           # Checks if starts with "Mus": True
print("   Hello   ".strip())            # Strips whitespace from both sides: "Hello"
print("hello world".title())            # Converts to title case: "Hello World"
print("HELLO".swapcase())               # Swaps case of each character: "hello"

# U to Z
print(name.upper())                     # Converts to uppercase: "MUSKAN"
print("123".zfill(5))                   # Pads string with zeroes: "00123"
