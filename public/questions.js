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
        }
    ],

    // ========================================
    // ROOM 2: PUZZLE - THE LOGIC CHAMBER
    // Mathematical and Logical Puzzles (Drag-and-Drop)
    // Tagline: "Think smart to move ahead"
    // ========================================
    room2: [
        {
            id: 1,
            question: "🔢 NUMBER SEQUENCE PUZZLE",
            instructions: "Complete the sequence: 2, 6, 12, 20, 30, ?  (Pattern: n×(n+1))",
            isDragDrop: true,
            components: [
                { id: 'ans42', name: '42', icon: '🔢', color: '#00f0ff' },
                { id: 'ans36', name: '36', icon: '🔢', color: '#ff6b6b' },
                { id: 'ans40', name: '40', icon: '🔢', color: '#a855f7' },
                { id: 'ans48', name: '48', icon: '🔢', color: '#ec4899' }
            ],
            dropZones: [
                { id: 'answer-slot', label: '? = ', accepts: 'ans42' },
                { id: 'wrong1', label: 'Wrong', accepts: 'ans36' },
                { id: 'wrong2', label: 'Wrong', accepts: 'ans40' },
                { id: 'wrong3', label: 'Wrong', accepts: 'ans48' }
            ]
        },
        {
            id: 2,
            question: "🚣 RIVER CROSSING LOGIC",
            instructions: "Order the steps: Farmer crosses with fox, chicken, and grain. Fox eats chicken, chicken eats grain.",
            isDragDrop: true,
            components: [
                { id: 'step1', name: '1. Take Chicken', icon: '🐔', color: '#00f0ff' },
                { id: 'step2', name: '2. Return Alone', icon: '⬅️', color: '#39ff14' },
                { id: 'step3', name: '3. Take Fox', icon: '🦊', color: '#ec4899' },
                { id: 'step4', name: '4. Bring Chicken Back', icon: '🐔⬅️', color: '#a855f7' }
            ],
            dropZones: [
                { id: 'first-move', label: 'First Trip', accepts: 'step1' },
                { id: 'second-move', label: 'Second Trip', accepts: 'step2' },
                { id: 'third-move', label: 'Third Trip', accepts: 'step3' },
                { id: 'fourth-move', label: 'Fourth Trip', accepts: 'step4' }
            ]
        },
        {
            id: 3,
            question: "⚡ ALGORITHM COMPLEXITY",
            instructions: "Match time complexity to the correct algorithm",
            isDragDrop: true,
            components: [
                { id: 'on2', name: 'O(n²)', icon: '📈', color: '#ff6b6b' },
                { id: 'onlogn', name: 'O(n log n)', icon: '📊', color: '#00f0ff' },
                { id: 'on', name: 'O(n)', icon: '📉', color: '#39ff14' },
                { id: 'ologn', name: 'O(log n)', icon: '⚡', color: '#a855f7' }
            ],
            dropZones: [
                { id: 'bubble-sort', label: 'Bubble Sort', accepts: 'on2' },
                { id: 'merge-sort', label: 'Merge Sort', accepts: 'onlogn' },
                { id: 'linear-search', label: 'Linear Search', accepts: 'on' },
                { id: 'binary-search', label: 'Binary Search', accepts: 'ologn' }
            ]
        },
        {
            id: 4,
            question: "🗼 TOWER OF HANOI",
            instructions: "Move 3 disks from A to C (smaller on larger only). Minimum moves?",
            isDragDrop: true,
            components: [
                { id: 'moves7', name: '7 moves', icon: '🔢', color: '#00f0ff' },
                { id: 'moves5', name: '5 moves', icon: '🔢', color: '#ff6b6b' },
                { id: 'moves9', name: '9 moves', icon: '🔢', color: '#ec4899' },
                { id: 'moves15', name: '15 moves', icon: '🔢', color: '#a855f7' }
            ],
            dropZones: [
                { id: 'correct-answer', label: 'Minimum Moves', accepts: 'moves7' },
                { id: 'wrong1', label: 'Incorrect', accepts: 'moves5' },
                { id: 'wrong2', label: 'Incorrect', accepts: 'moves9' },
                { id: 'wrong3', label: 'Incorrect', accepts: 'moves15' }
            ]
        },
        {
            id: 5,
            question: "⚖️ WEIGHTED JOB SCHEDULING",
            instructions: "Jobs: A=10, B=20, C=30, D=40. A conflicts with C, B with D. Max weight?",
            isDragDrop: true,
            components: [
                { id: 'w60', name: '60 (B+D)', icon: '⚖️', color: '#00f0ff' },
                { id: 'w50', name: '50 (A+D)', icon: '⚖️', color: '#ff6b6b' },
                { id: 'w70', name: '70 (C+D)', icon: '⚖️', color: '#39ff14' },
                { id: 'w100', name: '100 (All)', icon: '⚖️', color: '#a855f7' }
            ],
            dropZones: [
                { id: 'max-weight', label: 'Maximum Weight', accepts: 'w60' },
                { id: 'wrong1', label: 'Wrong', accepts: 'w50' },
                { id: 'wrong2', label: 'Wrong', accepts: 'w70' },
                { id: 'wrong3', label: 'Wrong', accepts: 'w100' }
            ]
        }
    ],

    // ========================================
    // ROOM 3: OUTPUT PREDICTION - CODE MIRROR ROOM
    // Tagline: "See what the code reveals"
    // Predict the output of C code snippets
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
        }
    ],

    // ========================================
    // ROOM 4: DEBUGGING - THE BUG FIXING LAB
    // Find and fix bugs in C code
    // ========================================
    room4: [
        {
            id: 1,
            question: "Find the bug in this C code that should print numbers 1 to 5:",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>() {
    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">1</span>; i < <span class="number">5</span>; i++)
        <span class="function">printf</span>(<span class="string">"%d "</span>, i);
    <span class="keyword">return</span> <span class="number">0</span>;
}`,
            options: [
                "Loop condition should be i <= 5",
                "printf format is wrong",
                "Missing semicolon",
                "There is no bug"
            ],
            correctAnswer: 0
        },
        {
            id: 2,
            question: "What's wrong with this factorial function?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">factorial</span>(<span class="keyword">int</span> n) {
    <span class="keyword">if</span> (n == <span class="number">0</span>)
        <span class="keyword">return</span> <span class="number">1</span>;
    <span class="keyword">return</span> n * <span class="function">factorial</span>(n);
}`,
            options: [
                "Base case is wrong",
                "Should be factorial(n-1) not factorial(n)",
                "Missing return type",
                "Function name is invalid"
            ],
            correctAnswer: 1
        },
        {
            id: 3,
            question: "Find the bug in this array sum code:",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>() {
    <span class="keyword">int</span> arr[] = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>, <span class="number">5</span>};
    <span class="keyword">int</span> sum = <span class="number">1</span>;
    <span class="keyword">for</span>(<span class="keyword">int</span> i = <span class="number">0</span>; i < <span class="number">5</span>; i++)
        sum += arr[i];
    <span class="function">printf</span>(<span class="string">"%d"</span>, sum);
}`,
            options: [
                "Loop condition is wrong",
                "sum should be initialized to 0",
                "Array declaration is wrong",
                "Missing return statement"
            ],
            correctAnswer: 1
        },
        {
            id: 4,
            question: "What's the error in this pointer code?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>() {
    <span class="keyword">int</span> x = <span class="number">10</span>;
    <span class="keyword">int</span> *ptr;
    <span class="function">printf</span>(<span class="string">"%d"</span>, *ptr);
    <span class="keyword">return</span> <span class="number">0</span>;
}`,
            options: [
                "Pointer declaration is wrong",
                "ptr is not initialized before use",
                "printf format is incorrect",
                "Missing semicolon"
            ],
            correctAnswer: 1
        },
        {
            id: 5,
            question: "Find the bug in this string comparison:",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>

<span class="keyword">int</span> <span class="function">main</span>() {
    <span class="keyword">char</span> str1[] = <span class="string">"hello"</span>;
    <span class="keyword">char</span> str2[] = <span class="string">"hello"</span>;
    <span class="keyword">if</span> (str1 == str2)
        <span class="function">printf</span>(<span class="string">"Equal"</span>);
    <span class="keyword">else</span>
        <span class="function">printf</span>(<span class="string">"Not Equal"</span>);
}`,
            options: [
                "String declaration is wrong",
                "Should use strcmp() instead of ==",
                "Missing return statement",
                "if condition syntax is wrong"
            ],
            correctAnswer: 1
        }
    ],

    // ========================================
    // ROOM 5: CODING - THE FINAL CODING VAULT
    // Write complete C programs
    // ========================================
    room5: [
        {
            id: 1,
            question: "Write a C program to check if a number is prime. What is the correct approach?",
            options: [
                "Check divisibility from 2 to n-1",
                "Check divisibility from 2 to sqrt(n)",
                "Check divisibility only by 2",
                "Check divisibility by all numbers"
            ],
            correctAnswer: 1
        },
        {
            id: 2,
            question: "To reverse an array in-place, which method is most efficient?",
            options: [
                "Create a new array and copy in reverse",
                "Use two pointers from start and end, swap elements",
                "Use recursion to swap each element",
                "Sort the array in descending order"
            ],
            correctAnswer: 1
        },
        {
            id: 3,
            question: "What is the correct way to find the largest element in an array?",
            options: [
                "Sort array and return last element",
                "Initialize max with first element, iterate and compare",
                "Use binary search",
                "Check each element with all others"
            ],
            correctAnswer: 1
        },
        {
            id: 4,
            question: "To implement a function that counts vowels in a string, what should you do?",
            options: [
                "Use nested loops to check each vowel",
                "Iterate string once, check if each char is vowel using conditions",
                "Convert string to uppercase then check",
                "Use regex pattern matching"
            ],
            correctAnswer: 1
        },
        {
            id: 5,
            question: "What is the correct logic for Fibonacci sequence generation?",
            options: [
                "fib(n) = fib(n-1) + fib(n-2) with base cases fib(0)=0, fib(1)=1",
                "fib(n) = 2 * fib(n-1)",
                "fib(n) = n * fib(n-1)",
                "fib(n) = fib(n-1) - fib(n-2)"
            ],
            correctAnswer: 0
        }
    ]
};
