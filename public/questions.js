// Tech Trap NIT - Escape Room Challenge Questions
// Room 1: MCQ - The Knowledge Lobby (CS Fundamentals, AI & ML, Networking)
// Room 2: Puzzle - The Logic Chamber (Jigsaw + Maze)
// Room 3: Output Prediction - The Code Mirror Room (Predict C code output)
// Room 4: Debugging - The Bug Fixing Lab (Find and fix bugs in C code)
// Room 5: Coding - The Final Coding Vault (Write complete C programs)

const codingQuestions = {
    // ========================================
    // ROOM 1: MCQ - THE KNOWLEDGE LOBBY
    // CS Fundamentals, AI & ML, Networking
    // 20 Questions Total - Need 13/20 to unlock "JAVA" key
    // ========================================
    room1: [
        {
            id: 1,
            question: "What is the smallest unit of data in computing?",
            options: ["Byte", "Bit", "Nibble", "Kilobyte"],
            correctAnswer: 1
        },
        {
            id: 2,
            question: "How many bits are in a byte?",
            options: ["4", "8", "16", "1024"],
            correctAnswer: 1
        },
        {
            id: 3,
            question: "In programming, a loop that executes at least once, regardless of the condition, is called:",
            options: ["While loop", "For loop", "Do-while loop", "Recursive loop"],
            correctAnswer: 2
        },
        {
            id: 4,
            question: "What is the output of 2 + 4 / 2 + 6 * 2?",
            options: ["16", "15", "18", "20"],
            correctAnswer: 0
        },
        {
            id: 5,
            question: "Which data structure is used to handle recursion?",
            options: ["Stack", "Queue", "Linked List", "Graph"],
            correctAnswer: 0
        },
        {
            id: 6,
            question: "Which of the following is NOT an Object-Oriented Programming (OOP) concept?",
            options: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"],
            correctAnswer: 2
        },
        {
            id: 7,
            question: "Who is known as the \"Father of Artificial Intelligence\"?",
            options: ["Alan Turing", "John McCarthy", "Geoffrey Hinton", "Andrew Ng"],
            correctAnswer: 1
        },
        {
            id: 8,
            question: "What is the primary goal of Machine Learning?",
            options: [
                "To make computers perform manual tasks",
                "To enable systems to learn from data without explicit programming",
                "To replace software engineers",
                "To build faster hardware"
            ],
            correctAnswer: 1
        },
        {
            id: 9,
            question: "Which type of machine learning requires labeled data for training?",
            options: ["Unsupervised Learning", "Supervised Learning", "Reinforcement Learning", "Clustering"],
            correctAnswer: 1
        },
        {
            id: 10,
            question: "What does the abbreviation \"PEAS\" stand for in AI agent design?",
            options: [
                "Peer, Environment, Actuators, Sense",
                "Performance, Environment, Actuators, Sensors",
                "Program, Environment, Agents, Sensors",
                "Practical, Efficient, Active, Smart"
            ],
            correctAnswer: 1
        },
        {
            id: 11,
            question: "Which of the following devices is responsible for connecting multiple computers in a local area network (LAN)?",
            options: ["Router", "Modem", "Switch", "Firewall"],
            correctAnswer: 2
        },
        {
            id: 12,
            question: "Which networking device operates at the Data Link Layer of the OSI model?",
            options: ["Router", "Hub", "Switch", "Firewall"],
            correctAnswer: 2
        },
        {
            id: 13,
            question: "What does ISP stand for in the context of internet connectivity?",
            options: ["Internet Service Provider", "Internet Security Protocol", "Internet Speed Test", "International Server Protocol"],
            correctAnswer: 0
        },
        {
            id: 14,
            question: "Which protocol is used for secure file transfer over a network?",
            options: ["FTP", "HTTP", "SSH", "SNMP"],
            correctAnswer: 2
        },
        {
            id: 15,
            question: "Which type of firewall operates at the application layer of the OSI model?",
            options: ["Packet-filtering firewall", "Proxy firewall", "Stateful firewall", "Intrusion detection system"],
            correctAnswer: 1
        },
        {
            id: 16,
            question: "What is the term for a security threat that involves a cybercriminal gaining unauthorized access to a network or system?",
            options: ["Phishing", "Malware", "Hacking", "Firewall breach"],
            correctAnswer: 2
        },
        {
            id: 17,
            question: "What does BIOS stand for in computing?",
            options: ["Basic Input Output System", "Binary Input Output Service", "Basic Internet Operating System", "Binary Information Output Setup"],
            correctAnswer: 0
        },
        {
            id: 18,
            question: "Antivirus is a type of:",
            options: ["System software", "Application software", "Hardware", "Network protocol"],
            correctAnswer: 1
        },
        {
            id: 19,
            question: "Which of the following is the correct way to declare a pointer in C?",
            options: ["int ptr;", "int *ptr;", "pointer int ptr;", "int &ptr;"],
            correctAnswer: 1
        },
        {
            id: 20,
            question: "What does 'NULL' represent in C?",
            options: ["Zero value", "Empty string", "Null pointer", "Undefined variable"],
            correctAnswer: 2
        }
    ],

    // ========================================
    // ROOM 2: THE LOGIC CHAMBER
    // Jigsaw Puzzle + Maze Game
    // 2 Questions - Need 2/2 to unlock "BIT" key
    // ========================================
    room2: [
        {
            id: 1,
            isJigsawPuzzle: true,
            question: "Complete the Jigsaw Puzzle",
            imagePath: "img/jigsaw.PNG",
            rows: 4,
            cols: 5,
            previewTime: 10000
        },
        {
            id: 2,
            isMazePuzzle: true,
            question: "Use your brain power to find the exit! Guide the bug through the maze using arrow keys.",
            mazeSize: 31
        }
    ],

    // ========================================
    // ROOM 3: OUTPUT PREDICTION - CODE MIRROR ROOM
    // 10 Questions Total - Need 5/10 to unlock "HTML" key
    // ========================================
    room3: [
        {
            id: 1,
            question: "What will be the output of this C code?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>\n\n<span class="keyword">int</span> <span class="function">main</span>() {\n    <span class="keyword">int</span> i = <span class="number">0</span>;\n    <span class="keyword">for</span>(; i &lt; <span class="number">5</span>; i++);\n    <span class="function">printf</span>(<span class="string">"%d"</span>, i);\n    <span class="keyword">return</span> <span class="number">0</span>;\n}`,
            options: ["0 1 2 3 4", "5", "4", "Infinite loop"],
            correctAnswer: 1
        },
        {
            id: 2,
            question: "What will be the output of this code?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>\n\n<span class="keyword">int</span> <span class="function">main</span>() {\n    <span class="keyword">int</span> a = <span class="number">10</span>;\n    <span class="keyword">int</span> *p = &amp;a;\n    <span class="function">printf</span>(<span class="string">"%d"</span>, *p + <span class="number">1</span>);\n    <span class="keyword">return</span> <span class="number">0</span>;\n}`,
            options: ["10", "11", "Address + 1", "Compilation Error"],
            correctAnswer: 1
        },
        {
            id: 3,
            question: "What is the output of this program?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>\n\n<span class="keyword">int</span> <span class="function">main</span>() {\n    <span class="keyword">int</span> a[] = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>, <span class="number">4</span>};\n    <span class="function">printf</span>(<span class="string">"%d"</span>, *(a + <span class="number">2</span>));\n    <span class="keyword">return</span> <span class="number">0</span>;\n}`,
            options: ["1", "2", "3", "4"],
            correctAnswer: 2
        },
        {
            id: 4,
            question: "What will this code print?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>\n\n<span class="keyword">void</span> <span class="function">fun</span>(<span class="keyword">int</span> x) {\n    x = <span class="number">10</span>;\n}\n\n<span class="keyword">int</span> <span class="function">main</span>() {\n    <span class="keyword">int</span> a = <span class="number">5</span>;\n    <span class="function">fun</span>(a);\n    <span class="function">printf</span>(<span class="string">"%d"</span>, a);\n    <span class="keyword">return</span> <span class="number">0</span>;\n}`,
            options: ["10", "5", "0", "Compilation Error"],
            correctAnswer: 1
        },
        {
            id: 5,
            question: "What is the output?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>\n\n<span class="keyword">int</span> <span class="function">main</span>() {\n    <span class="keyword">int</span> a[] = {<span class="number">10</span>, <span class="number">20</span>, <span class="number">30</span>};\n    <span class="keyword">int</span> *p = a;\n    <span class="function">printf</span>(<span class="string">"%d"</span>, *p++);\n    <span class="keyword">return</span> <span class="number">0</span>;\n}`,
            options: ["10", "20", "11", "Compilation Error"],
            correctAnswer: 0
        },
        {
            id: 6,
            question: "What will this program output?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>\n\n<span class="keyword">int</span> <span class="function">main</span>() {\n    <span class="keyword">int</span> i;\n    <span class="keyword">for</span>(<span class="function">printf</span>(<span class="string">"A"</span>), i = <span class="number">0</span>; i &lt; <span class="number">2</span>; i++, <span class="function">printf</span>(<span class="string">"B"</span>))\n        <span class="function">printf</span>(<span class="string">"C"</span>);\n    <span class="keyword">return</span> <span class="number">0</span>;\n}`,
            options: ["ABCBC", "ACBCB", "ABCABC", "AACBB"],
            correctAnswer: 1
        },
        {
            id: 7,
            question: "Predict the output:",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>\n\n<span class="keyword">int</span> <span class="function">main</span>() {\n    <span class="keyword">int</span> i = <span class="number">0</span>;\n    <span class="keyword">if</span> (i = <span class="number">1</span>)\n        <span class="function">printf</span>(<span class="string">"YES"</span>);\n    <span class="keyword">else</span>\n        <span class="function">printf</span>(<span class="string">"NO"</span>);\n    <span class="keyword">return</span> <span class="number">0</span>;\n}`,
            options: ["YES", "NO", "Compilation Error", "0"],
            correctAnswer: 0
        },
        {
            id: 8,
            question: "What is the output?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>\n\n<span class="keyword">int</span> <span class="function">main</span>() {\n    <span class="keyword">int</span> x = <span class="number">0</span>;\n    <span class="keyword">int</span> y = x++ &amp;&amp; ++x;\n    <span class="function">printf</span>(<span class="string">"%d"</span>, y);\n    <span class="keyword">return</span> <span class="number">0</span>;\n}`,
            options: ["1", "0", "2", "Undefined behavior"],
            correctAnswer: 1
        },
        {
            id: 9,
            question: "What will be printed?",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>\n\n<span class="keyword">int</span> <span class="function">main</span>() {\n    <span class="keyword">int</span> a = <span class="number">2</span>;\n    <span class="function">printf</span>(<span class="string">"%d %d"</span>, a &lt;&lt; <span class="number">1</span>, a &gt;&gt; <span class="number">1</span>);\n    <span class="keyword">return</span> <span class="number">0</span>;\n}`,
            options: ["4 1", "2 1", "1 4", "2 2"],
            correctAnswer: 0
        },
        {
            id: 10,
            question: "Predict the output:",
            codeBlock: `<span class="keyword">#include</span> <span class="string">&lt;stdio.h&gt;</span>\n\n<span class="keyword">int</span> <span class="function">main</span>() {\n    <span class="keyword">int</span> a[] = {<span class="number">1</span>, <span class="number">2</span>, <span class="number">3</span>};\n    <span class="keyword">int</span> *p = a;\n    <span class="function">printf</span>(<span class="string">"%d"</span>, *++p);\n    <span class="keyword">return</span> <span class="number">0</span>;\n}`,
            options: ["1", "2", "3", "Compilation Error"],
            correctAnswer: 1
        }
    ],

    // ========================================
    // ROOM 4: DEBUGGING - THE BUG FIXING LAB
    // 3 Questions Total - Get 2/3 correct to unlock "DEBUG" key
    // NO HINTS - Challenging bugs
    // ========================================
    room4: [
        {
            id: 1,
            question: "This program should swap two numbers without a temp variable, but it has a bug. Fix it so it prints 'a=10 b=5':",
            buggyCode: `#include <stdio.h>\n\nint main() {\n    int a = 5, b = 10;\n    a = a + b;\n    b = a + b;\n    a = a - b;\n    printf("a=%d b=%d", a, b);\n    return 0;\n}`,
            expectedOutput: "a=10 b=5",
            correctCode: `#include <stdio.h>\n\nint main() {\n    int a = 5, b = 10;\n    a = a + b;\n    b = a - b;\n    a = a - b;\n    printf("a=%d b=%d", a, b);\n    return 0;\n}`
        },
        {
            id: 2,
            question: "This recursive function should return the nth Fibonacci number (fib(6) = 8), but it has a logic error. Fix it:",
            buggyCode: `#include <stdio.h>\n\nint fib(int n) {\n    if (n <= 0) return 0;\n    if (n == 1) return 1;\n    return fib(n - 1) + fib(n - 3);\n}\n\nint main() {\n    printf("%d", fib(6));\n    return 0;\n}`,
            expectedOutput: "8",
            correctCode: `#include <stdio.h>\n\nint fib(int n) {\n    if (n <= 0) return 0;\n    if (n == 1) return 1;\n    return fib(n - 1) + fib(n - 2);\n}\n\nint main() {\n    printf("%d", fib(6));\n    return 0;\n}`
        },
        {
            id: 3,
            question: "This program should reverse the string 'HELLO' in-place and print 'OLLEH', but it has two bugs. Fix them:",
            buggyCode: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "HELLO";\n    int len = strlen(str);\n    for (int i = 0; i < len; i++) {\n        char temp = str[i];\n        str[i] = str[len - i];\n        str[len - i] = temp;\n    }\n    printf("%s", str);\n    return 0;\n}`,
            expectedOutput: "OLLEH",
            correctCode: `#include <stdio.h>\n#include <string.h>\n\nint main() {\n    char str[] = "HELLO";\n    int len = strlen(str);\n    for (int i = 0; i < len / 2; i++) {\n        char temp = str[i];\n        str[i] = str[len - 1 - i];\n        str[len - 1 - i] = temp;\n    }\n    printf("%s", str);\n    return 0;\n}`
        }
    ],

    // ========================================
    // ROOM 5: CODING - THE FINAL CODING VAULT
    // 1 Question - Pattern Generation (10 min)
    // NO HINTS
    // ========================================
    room5: [
        {
            id: 1,
            questionText: "Write a C program to print the following centered pyramid number pattern (5 rows):",
            patternDisplay: "    1\n   1 2\n  1 2 3\n 1 2 3 4\n1 2 3 4 5",
            question: "Write a C program to print the following centered pyramid number pattern (5 rows):",
            starterCode: `#include <stdio.h>\n\nint main() {\n    // Generate the centered pyramid pattern\n    // Each row i prints (5-i) spaces then numbers 1 to i\n    // Separate numbers with a space\n    // End each row with a newline\n    \n    return 0;\n}`,
            expectedOutput: "    1\n   1 2\n  1 2 3\n 1 2 3 4\n1 2 3 4 5"
        }
    ],

    // ========================================
    // TIEBREAKER: Additional Level for tied participants
    // Uses same Final Coding Vault UI
    // ========================================
    tiebreaker: [
        {
            id: 1,
            questionText: "Write a C program to print the following diamond star pattern (5 rows):",
            patternDisplay: "    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *",
            question: "Write a C program to print the following diamond star pattern (5 rows):",
            starterCode: `#include <stdio.h>\n\nint main() {\n    // Generate the diamond star pattern\n    // Upper half: row i has (n-i) spaces then (2*i-1) stars\n    // Lower half: mirror of upper half\n    // n = 5 rows for each half\n    \n    return 0;\n}`,
            expectedOutput: "    *\n   ***\n  *****\n *******\n*********\n *******\n  *****\n   ***\n    *"
        }
    ]
};
