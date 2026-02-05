// Tech Trap NIT - Escape Room Challenge Questions
// Room 1: The Knowledge Lobby - General Tech Quiz
// Room 2: Bug Fixing Lab - Find and fix bugs in code
// Room 3: The Logic Chamber - Logic puzzles and problem solving

const codingQuestions = {
    // ========================================
    // ROOM 1: THE KNOWLEDGE LOBBY
    // General technology and programming quiz
    // ========================================
    room1: [
        {
            id: 1,
            question: "What does CPU stand for?",
            options: [
                "Central Processing Unit",
                "Computer Personal Unit",
                "Central Program Utility",
                "Computer Processing Utility"
            ],
            correctAnswer: 0
        },
        {
            id: 2,
            question: "Which programming language is known as the 'mother of all languages'?",
            options: [
                "Python",
                "C",
                "Java",
                "Assembly"
            ],
            correctAnswer: 1
        },
        {
            id: 3,
            question: "What is the binary representation of the decimal number 10?",
            options: [
                "1100",
                "1010",
                "1001",
                "1110"
            ],
            correctAnswer: 1
        },
        {
            id: 4,
            question: "Which data structure uses FIFO (First In First Out) principle?",
            options: [
                "Stack",
                "Queue",
                "Tree",
                "Graph"
            ],
            correctAnswer: 1
        },
        {
            id: 5,
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Tech Modern Language",
                "Hyper Transfer Markup Language",
                "Home Tool Markup Language"
            ],
            correctAnswer: 0
        }
    ],

    // ========================================
    // ROOM 2: BUG FIXING LAB
    // Find the bug in the code snippets
    // ========================================
    room2: [
        {
            id: 1,
            question: "Find the bug in this Python code that should print numbers 1 to 5:",
            codeBlock: `<span class="keyword">for</span> i <span class="keyword">in</span> <span class="function">range</span>(<span class="number">1</span>, <span class="number">5</span>):
    <span class="function">print</span>(i)`,
            options: [
                "range(1, 5) should be range(1, 6)",
                "print should be Print",
                "for should be For",
                "There is no bug"
            ],
            correctAnswer: 0
        },
        {
            id: 2,
            question: "What's wrong with this JavaScript code?",
            codeBlock: `<span class="keyword">function</span> <span class="function">greet</span>(name) {
    <span class="keyword">return</span> <span class="string">"Hello, "</span> + Name;
}
<span class="function">console.log</span>(<span class="function">greet</span>(<span class="string">"Alice"</span>));`,
            options: [
                "Missing semicolon",
                "Variable 'Name' should be 'name' (case sensitive)",
                "Function syntax is wrong",
                "console.log is incorrect"
            ],
            correctAnswer: 1
        },
        {
            id: 3,
            question: "Find the bug in this Python function that calculates factorial:",
            codeBlock: `<span class="keyword">def</span> <span class="function">factorial</span>(n):
    <span class="keyword">if</span> n == <span class="number">0</span>:
        <span class="keyword">return</span> <span class="number">1</span>
    <span class="keyword">return</span> n * <span class="function">factorial</span>(n)`,
            options: [
                "Base case is wrong",
                "Should be n * factorial(n-1)",
                "Missing return statement",
                "Function name is invalid"
            ],
            correctAnswer: 1
        },
        {
            id: 4,
            question: "What's the error in this CSS code?",
            codeBlock: `<span class="keyword">.container</span> {
    <span class="function">background-color</span>: <span class="string">#ffffff</span>
    <span class="function">padding</span>: <span class="number">20px</span>;
    <span class="function">margin</span>: <span class="number">10px</span>;
}`,
            options: [
                "Wrong color format",
                "Missing semicolon after background-color",
                "Padding value is invalid",
                "Class selector is wrong"
            ],
            correctAnswer: 1
        },
        {
            id: 5,
            question: "Find the bug in this array sum function:",
            codeBlock: `<span class="keyword">function</span> <span class="function">sumArray</span>(arr) {
    <span class="keyword">let</span> sum = <span class="number">1</span>;
    <span class="keyword">for</span> (<span class="keyword">let</span> i = <span class="number">0</span>; i < arr.length; i++) {
        sum += arr[i];
    }
    <span class="keyword">return</span> sum;
}`,
            options: [
                "Loop condition is wrong",
                "sum should be initialized to 0, not 1",
                "Missing return statement",
                "Array indexing is wrong"
            ],
            correctAnswer: 1
        }
    ],

    // ========================================
    // ROOM 3: THE LOGIC CHAMBER
    // Logic puzzles and algorithmic thinking
    // ========================================
    room3: [
        {
            id: 1,
            question: "If it takes 5 machines 5 minutes to make 5 widgets, how long would it take 100 machines to make 100 widgets?",
            options: [
                "100 minutes",
                "5 minutes",
                "20 minutes",
                "1 minute"
            ],
            correctAnswer: 1
        },
        {
            id: 2,
            question: "What is the next number in the sequence: 2, 6, 12, 20, 30, ?",
            options: [
                "40",
                "42",
                "44",
                "36"
            ],
            correctAnswer: 1
        },
        {
            id: 3,
            question: "A farmer has 17 sheep. All but 9 run away. How many sheep does the farmer have left?",
            options: [
                "8",
                "17",
                "9",
                "0"
            ],
            correctAnswer: 2
        },
        {
            id: 4,
            question: "If you have a 3-gallon jug and a 5-gallon jug, how can you measure exactly 4 gallons of water?",
            options: [
                "Fill 5-gallon, pour into 3-gallon until full, empty 3-gallon, pour remaining 2 into 3-gallon, fill 5-gallon, pour into 3-gallon until full",
                "Fill 3-gallon twice",
                "Fill 5-gallon, pour out 1 gallon",
                "It's impossible"
            ],
            correctAnswer: 0
        },
        {
            id: 5,
            question: "What is the time complexity of binary search on a sorted array of n elements?",
            options: [
                "O(n)",
                "O(n²)",
                "O(log n)",
                "O(1)"
            ],
            correctAnswer: 2
        }
    ]
};
