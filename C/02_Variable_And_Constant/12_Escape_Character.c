#include <stdio.h>
int main()
{
    // Escape characters are used in C to represent special characters in strings.
    printf("Hello, World!\n"); // \n is used for a new line
    printf("This is a tab:\tTabbed text\n"); // \t is used for a horizontal tab
    printf("Backslash: \\\n"); // \\ is used to print a backslash
    printf("Single quote: \'\n"); // \' is used to print a single quote
    printf("Double quote: \"\n"); // \" is used to print a double quote
    printf("Carriage return: Hello\rWorld\n"); // \r moves the cursor to the beginning of the line
//   \n: Newline - Moves the cursor to the beginning of the next line.
// \t: Horizontal Tab - Inserts a horizontal tab space.
// \b: Backspace - Moves the cursor back one position, potentially erasing a character.
// \r: Carriage Return - Moves the cursor to the beginning of the current line, overwriting previous characters.
// \f: Form Feed - Advances the printing position to the next page or form (less common in modern console output).
// \v: Vertical Tab - Moves the cursor to the next vertical tab stop.
// \\: Backslash - Represents a literal backslash character.
// \': Single Quote - Represents a literal single quote character.
// \": Double Quote - Represents a literal double quote character.
// \?: Question Mark - Represents a literal question mark character (useful in some contexts).
// \0: Null Character - Represents the null terminator, used to mark the end of C strings.
// \xhh: Hexadecimal Escape Sequence - Represents a character by its hexadecimal ASCII value (e.g., \x41 for 'A').
// \ooo: Octal Escape Sequence - Represents a character by its octal ASCII value (e.g., \101 for 'A').

    return 0;
}