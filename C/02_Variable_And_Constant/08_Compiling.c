// Compiling A C Program 
// The  compilation is the process of converting the source code written in C into an mahcine code that the computer can understand and execute.
// Source File 
// |
// | 
// Compilker
// |
// |
// Assembler 
// |
// |
// Linker
// |
// |
// Executable File
// How to Compile C files 
// 1. Open a terminal or command prompt.
// 2. Navigate to the directory where your C file is located.
// 3. Use the following command to compile the C file:
//    gcc -o output_file_name source_file_name.c
//    For example: gcc -o my_program 08_Compiling.c

// Phases of Compilation
// 1. Preprocessing: This phase handles directives like #include and #define.
// Removal Od Comments
// Expandion of the ocluded files 
// Conditional Compilation

/// The preprocessor generates an intermediate file with the extension .i
// 2. Compilation: The compiler translates the preprocessed code into assembly language.
// The output is an assembly file with the extension .s
// 3. Assembly: The assembler converts the assembly code into machine code.
// The output is an object file with the extension .o
// 4. Linking: The linker combines object files and libraries to create the final executable.
// The output is an executable file, typically with no extension on Linux or .exe on Windows.