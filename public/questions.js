// Tech Trap NIT - Escape Room Challenge Questions
// Room 1: MCQ - The Knowledge Lobby (C Programming Fundamentals)
// Room 2: Puzzle - The Logic Chamber (Mathematical & Logical Puzzles)
// Room 3: Output Prediction - The Code Mirror Room (Predict C code output)
// Room 4: Debugging - The Bug Fixing Lab (Find and fix bugs in C code)
// Room 5: Coding - The Final Coding Vault (Write complete C programs)

const codingQuestions = {
    // ========================================
    // ROOM 1: MCQ - THE KNOWLEDGE LOBBY
    // C Programming Fundamentals & Basics
    // 15 Questions Total - Need 10/15 to unlock "Python" key
    // ========================================
    room1: [
        {
            id: 1,
            question: "What is the size of int data type in C (on a 32-bit system)?",
            options: [
                "2 bytes",
                "4 bytes",
                "8 bytes",
                "Depends on compiler"
            ],
            correctAnswer: 1
        },
        {
            id: 2,
            question: "Which of the following is the correct way to declare a pointer in C?",
            options: [
                "int ptr;",
                "int *ptr;",
                "pointer int ptr;",
                "int &ptr;"
            ],
            correctAnswer: 1
        },
        {
            id: 3,
            question: "What does the 'break' statement do in a loop?",
            options: [
                "Exits the entire program",
                "Skips the current iteration",
                "Exits the loop completely",
                "Pauses the loop"
            ],
            correctAnswer: 2
        },
        {
            id: 4,
            question: "Which header file is used for input/output operations in C?",
            options: [
                "stdlib.h",
                "stdio.h",
                "string.h",
                "math.h"
            ],
            correctAnswer: 1
        },
        {
            id: 5,
            question: "What is the correct syntax for a 'for' loop in C?",
            options: [
                "for (i = 0; i < 10; i++)",
                "for i in range(10)",
                "for (i = 0 to 10)",
                "loop(i = 0; i < 10; i++)"
            ],
            correctAnswer: 0
        },
        {
            id: 6,
            question: "What is the default return type of a function in C?",
            options: [
                "void",
                "int",
                "char",
                "float"
            ],
            correctAnswer: 1
        },
        {
            id: 7,
            question: "Which operator is used to access the value at the address stored in a pointer?",
            options: [
                "&",
                "*",
                "->",
                "."
            ],
            correctAnswer: 1
        },
        {
            id: 8,
            question: "What is the purpose of the 'continue' statement?",
            options: [
                "Exit the loop",
                "Skip to the next iteration",
                "Pause the program",
                "Return from function"
            ],
            correctAnswer: 1
        },
        {
            id: 9,
            question: "Which of these is NOT a valid C data type?",
            options: [
                "int",
                "float",
                "boolean",
                "char"
            ],
            correctAnswer: 2
        },
        {
            id: 10,
            question: "What does 'malloc()' function do?",
            options: [
                "Frees memory",
                "Allocates memory dynamically",
                "Copies memory",
                "Compares memory"
            ],
            correctAnswer: 1
        },
        {
            id: 11,
            question: "Which loop guarantees at least one execution?",
            options: [
                "for loop",
                "while loop",
                "do-while loop",
                "None of the above"
            ],
            correctAnswer: 2
        },
        {
            id: 12,
            question: "What is the correct way to declare an array in C?",
            options: [
                "array int[] = {1,2,3};",
                "int array[3] = {1,2,3};",
                "int[] array = {1,2,3};",
                "array[3] int = {1,2,3};"
            ],
            correctAnswer: 1
        },
        {
            id: 13,
            question: "Which function is used to find the length of a string?",
            options: [
                "length()",
                "strlen()",
                "size()",
                "len()"
            ],
            correctAnswer: 1
        },
        {
            id: 14,
            question: "What does 'NULL' represent in C?",
            options: [
                "Zero value",
                "Empty string",
                "Null pointer",
                "Undefined variable"
            ],
            correctAnswer: 2
        },
        {
            id: 15,
            question: "Which keyword is used to define a constant in C?",
            options: [
                "constant",
                "const",
                "final",
                "static"
            ],
            correctAnswer: 1
        }
    ],

    // ========================================
    // ROOM 2: 3D MOTHERBOARD ASSEMBLY
    // Interactive 3D drag-and-drop challenge
    // Tagline: "Build it in 3D space"
    // 1 Question - 3D Assembly
    // ========================================
    room2: [
        {
            id: 1,
            isSlidingPuzzle: true,
            question: "Solve the Sliding Picture Puzzle",
            imagePath: "img/puzzle-image.jpg",
            gridSize: 6,
            previewTime: 10000
        }
    ],

    // ========================================
    // ROOM 3: OUTPUT PREDICTION - CODE MIRROR ROOM
    // Tagline: "See what the code reveals"
    // Predict the output of C code snippets
    // 10 Questions Total
    // ========================================
    room3: [
        {
            id: 1,
            question: "What will be the output of this C code?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>() {
    <span class="keyword">int</span> x = <span class="number">5</span>;
    <span class="function">printf</span>(<span class="string">"%d"</span>, x++);
    <span class="keyword">return</span> <span class="number">0</span>;
}`,
            options: [
                "5",
                "6",
                "Compilation Error",
                "Undefined behavior"
            ],
            correctAnswer: 0
        },
        {
            id: 2,
            question: "What will be the output of this code?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>() {
    <span class="keyword">int</span> arr[] = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>};
    <span class="function">printf</span>(<span class="string">"%d"</span>, arr[<span class="number">3</span>]);
    <span class="keyword">return</span> <span class="number">0</span>;
}`,
            options: [
                "3",
                "4",
                "5",
                "Garbage value"
            ],
            correctAnswer: 1
        },
        {
            id: 3,
            question: "What is the output of this program?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>() {
    <span class="keyword">int</span> a = <span class="number">10</span>, b = <span class="number">20</span>;
    <span class="keyword">if</span> (a < b)
        <span class="function">printf</span>(<span class="string">"A"</span>);
    <span class="keyword">else</span>
        <span class="function">printf</span>(<span class="string">"B"</span>);
    <span class="keyword">return</span> <span class="number">0</span>;
}`,
            options: [
                "A",
                "B",
                "AB",
                "Compilation Error"
            ],
            correctAnswer: 0
        },
        {
            id: 4,
            question: "What will this code print?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>() {
    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">0</span>; i < <span class="number">3</span>; i++)
        <span class="function">printf</span>(<span class="string">"%d "</span>, i);
    <span class="keyword">return</span> <span class="number">0</span>;
}`,
            options: [
                "0 1 2",
                "1 2 3",
                "0 1 2 3",
                "Compilation Error"
            ],
            correctAnswer: 0
        },
        {
            id: 5,
            question: "What is the output?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>() {
    <span class="keyword">int</span> x = <span class="number">5</span>;
    <span class="function">printf</span>(<span class="string">"%d %d"</span>, ++x, x++);
    <span class="keyword">return</span> <span class="number">0</span>;
}`,
            options: [
                "6 5",
                "6 6",
                "7 6",
                "Undefined behavior"
            ],
            correctAnswer: 3
        },
        {
            id: 6,
            question: "What will this program output?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>() {
    <span class="keyword">int</span> i = <span class="number">0</span>;
    <span class="keyword">while</span>(i < <span class="number">5</span>) {
        <span class="keyword">if</span>(i == <span class="number">3</span>)
            <span class="keyword">break</span>;
        <span class="function">printf</span>(<span class="string">"%d "</span>, i++);
    }
    <span class="keyword">return</span> <span class="number">0</span>;
}`,
            options: [
                "0 1 2",
                "0 1 2 3",
                "0 1 2 3 4",
                "Infinite loop"
            ],
            correctAnswer: 0
        },
        {
            id: 7,
            question: "Predict the output:",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>() {
    <span class="keyword">char</span> str[] = <span class="string">"Hello"</span>;
    <span class="function">printf</span>(<span class="string">"%c"</span>, str[<span class="number">1</span>]);
    <span class="keyword">return</span> <span class="number">0</span>;
}`,
            options: [
                "H",
                "e",
                "l",
                "o"
            ],
            correctAnswer: 1
        },
        {
            id: 8,
            question: "What is the output?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>() {
    <span class="keyword">int</span> x = <span class="number">10</span> % <span class="number">3</span>;
    <span class="function">printf</span>(<span class="string">"%d"</span>, x);
    <span class="keyword">return</span> <span class="number">0</span>;
}`,
            options: [
                "0",
                "1",
                "3",
                "3.33"
            ],
            correctAnswer: 1
        },
        {
            id: 9,
            question: "What will be printed?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>() {
    <span class="keyword">int</span> a = <span class="number">5</span>, b = <span class="number">10</span>;
    <span class="function">printf</span>(<span class="string">"%d"</span>, a > b ? a : b);
    <span class="keyword">return</span> <span class="number">0</span>;
}`,
            options: [
                "5",
                "10",
                "15",
                "Compilation Error"
            ],
            correctAnswer: 1
        },
        {
            id: 10,
            question: "Predict the output:",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>() {
    <span class="keyword">int</span> arr[<span class="number">3</span>] = {<span class="number">1</span>, <span class="number">2</span>};
    <span class="function">printf</span>(<span class="string">"%d"</span>, arr[<span class="number">2</span>]);
    <span class="keyword">return</span> <span class="number">0</span>;
}`,
            options: [
                "0",
                "2",
                "Garbage value",
                "Compilation Error"
            ],
            correctAnswer: 0
        }
    ],

    // ========================================
    // ROOM 4: DEBUGGING - THE BUG FIXING LAB
    // Interactive debugging with live code editor
    // Tagline: "Repair before you proceed"
    // 3 Questions Total - Get 2/3 correct to unlock "Debug" key
    // ========================================
    room4: [
        {
            id: 1,
            question: "Fix this code to print 'Hello World':",
            buggyCode: `#include <stdio.h>

int main() {
    printf("Hello World");
    retrun 0;
}`,
            expectedOutput: "Hello World",
            hint: "Check the spelling of 'return' - it's misspelled!",
            correctCode: `#include <stdio.h>

int main() {
    printf("Hello World");
    return 0;
}`
        },
        {
            id: 2,
            question: "Fix the infinite recursion:",
            buggyCode: `#include <stdio.h>

int factorial(int n) {
    if (n == 0)
        return 1;
    return n * factorial(n);
}

int main() {
    printf("%d", factorial(5));
    return 0;
}`,
            expectedOutput: "120",
            hint: "Change factorial(n) to factorial(n-1)",
            correctCode: `#include <stdio.h>

int factorial(int n) {
    if (n == 0)
        return 1;
    return n * factorial(n-1);
}

int main() {
    printf("%d", factorial(5));
    return 0;
}`
        },
        {
            id: 3,
            question: "Fix the sum calculation:",
            buggyCode: `#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int sum = 1;
    for(int i = 0; i < 5; i++)
        sum += arr[i];
    printf("%d", sum);
    return 0;
}`,
            expectedOutput: "15",
            hint: "Change sum = 1 to sum = 0",
            correctCode: `#include <stdio.h>

int main() {
    int arr[] = {1, 2, 3, 4, 5};
    int sum = 0;
    for(int i = 0; i < 5; i++)
        sum += arr[i];
    printf("%d", sum);
    return 0;
}`
        }
    ],

    // ========================================
    // ROOM 5: CODING - THE FINAL CODING VAULT
    // Algorithm design and implementation questions
    // Tagline: "Unlock the ultimate treasure"
    // 10 Questions Total
    // ========================================
    room5: [
        {
            id: 1,
            question: "Write a C program to print 'Hello World'",
            starterCode: `#include <stdio.h>

int main() {
    // Write your code here
    
    return 0;
}`,
            expectedOutput: "Hello World",
            hint: "Use printf() to display the text"
        },
        {
            id: 2,
            question: "Write a C program to add two numbers (5 and 10) and print the result",
            starterCode: `#include <stdio.h>

int main() {
    // Write your code here
    
    return 0;
}`,
            expectedOutput: "15",
            hint: "Declare two variables, add them, and print the sum"
        },
        {
            id: 3,
            question: "Write a C program to print numbers from 1 to 5",
            starterCode: `#include <stdio.h>

int main() {
    // Write your code here
    
    return 0;
}`,
            expectedOutput: "1 2 3 4 5 ",
            hint: "Use a for loop from 1 to 5"
        },
        {
            id: 4,
            question: "Write a C program to check if 7 is even or odd",
            starterCode: `#include <stdio.h>

int main() {
    // Write your code here
    
    return 0;
}`,
            expectedOutput: "Odd",
            hint: "Use modulo operator (%) to check if number is divisible by 2"
        },
        {
            id: 5,
            question: "Write a C program to find the largest of three numbers: 15, 8, and 22",
            starterCode: `#include <stdio.h>

int main() {
    // Write your code here
    
    return 0;
}`,
            expectedOutput: "22",
            hint: "Use if-else statements to compare the three numbers"
        },
        {
            id: 6,
            question: "Write a C program to calculate factorial of 5",
            starterCode: `#include <stdio.h>

int main() {
    // Write your code here
    
    return 0;
}`,
            expectedOutput: "120",
            hint: "Use a loop to multiply numbers from 1 to 5"
        },
        {
            id: 7,
            question: "Write a C program to print the first 5 even numbers",
            starterCode: `#include <stdio.h>

int main() {
    // Write your code here
    
    return 0;
}`,
            expectedOutput: "2 4 6 8 10 ",
            hint: "Use a loop and print i*2 or check if i%2==0"
        },
        {
            id: 8,
            question: "Write a C program to calculate sum of array elements: {1, 2, 3, 4, 5}",
            starterCode: `#include <stdio.h>

int main() {
    // Write your code here
    
    return 0;
}`,
            expectedOutput: "15",
            hint: "Declare an array, use a loop to add all elements"
        },
        {
            id: 9,
            question: "Write a C program to reverse the number 123",
            starterCode: `#include <stdio.h>

int main() {
    // Write your code here
    
    return 0;
}`,
            expectedOutput: "321",
            hint: "Use modulo and division to extract digits and build reversed number"
        },
        {
            id: 10,
            question: "Write a C program to check if 17 is a prime number",
            starterCode: `#include <stdio.h>

int main() {
    // Write your code here
    
    return 0;
}`,
            expectedOutput: "Prime",
            hint: "Check if number is divisible by any number from 2 to sqrt(n)"
        }
    ]
};
