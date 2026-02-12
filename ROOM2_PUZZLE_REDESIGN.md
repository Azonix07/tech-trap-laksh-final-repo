# Room 2: The Logic Chamber - Computer-Themed Interactive Puzzles

## Overview
Room 2 has been completely redesigned with **computer science and technology-focused interactive puzzles** that simulate real-world activities like assembling hardware, decoding binary, and designing circuits.

## What Changed

### Before (Generic Logic Puzzles)
- Bridge crossing, water jugs, clock angles
- General mathematical problems
- Not computer/tech related

### After (Computer Activity Puzzles)
- **Hardware assembly challenges**
- **Binary/networking calculations**
- **Logic circuit design**
- **CPU pipeline analysis**
- **Real-world CS scenarios**

## The 5 Computer-Themed Puzzle Challenges

### Puzzle 1: 🖥️ MOTHERBOARD ASSEMBLY CHALLENGE
**Type:** Hardware Recognition & Assembly
**Challenge:** Given a motherboard with 6 slots and 5 components (CPU, RAM, Graphics Card, NVMe SSD, Power Cable), identify which THREE components are absolutely essential for a bootable system.
**Answer:** BCE (CPU, RAM, Power)
**Skills:** Computer hardware knowledge, system requirements understanding
**Activity Feel:** Like physically assembling a PC - participants visualize component placement

### Puzzle 2: 🔢 BINARY PUZZLE DECODER
**Type:** Binary to ASCII Conversion
**Challenge:** Decode a binary message: `01001000 01000101 01001100 01001100 01001111`
**Answer:** HELLO
**Skills:** Binary number system, ASCII encoding, data representation
**Activity Feel:** Like a hacker decoding intercepted messages

### Puzzle 3: 🧮 CPU INSTRUCTION PIPELINE
**Type:** Computer Architecture & Pipelining
**Challenge:** Calculate total cycles needed for 4 instructions in a pipelined CPU (FETCH→DECODE→EXECUTE→WRITEBACK)
**Answer:** 7 cycles
**Skills:** CPU architecture, pipeline optimization, parallel processing
**Activity Feel:** Simulating CPU instruction scheduling

### Puzzle 4: 🌐 IP ADDRESS SUBNET PUZZLE
**Type:** Network Configuration
**Challenge:** Calculate the network address given IP 192.168.10.45 and subnet mask 255.255.255.224
**Answer:** 192.168.10.32
**Skills:** Networking, IP addressing, bitwise operations, subnetting
**Activity Feel:** Like configuring a real network setup

### Puzzle 5: ⚙️ LOGIC GATE CIRCUIT BUILDER
**Type:** Digital Logic Design
**Challenge:** Evaluate a circuit with AND, OR, XOR, and NOT gates given inputs A=1, B=0, C=1
**Answer:** 0
**Skills:** Boolean logic, digital circuits, gate-level design
**Activity Feel:** Like building circuits in a logic simulator

## Computer Science Topics Covered

✅ **Computer Hardware** - Motherboard components, essential vs. optional parts
✅ **Data Representation** - Binary numbers, ASCII encoding
✅ **Computer Architecture** - CPU pipelining, instruction execution
✅ **Networking** - IP addressing, subnet calculations, bitwise operations
✅ **Digital Logic** - Logic gates, Boolean algebra, circuit evaluation

## Educational Value

### Puzzle 1: Hardware Assembly
- Teaches what makes a computer bootable
- Differentiates essential vs. enhancement components
- Real-world PC building knowledge

### Puzzle 2: Binary Decoder
- Foundation of all digital communication
- Understanding how computers store text
- Practical encoding/decoding skills

### Puzzle 3: CPU Pipeline
- How modern processors work
- Parallel processing concepts
- Performance optimization thinking

### Puzzle 4: Network Subnetting
- Critical for network administration
- IP address management
- Binary math in networking

### Puzzle 5: Logic Circuits
- Foundation of computer hardware
- Digital design principles
- Boolean algebra application

## New UI Features

### Interactive Input System
```css
- Large, glowing input field for answers
- Cyan border with neon effects
- Changes to green on focus
- Supports both text and number inputs
```

### Hint System
- Each puzzle has an optional hint button (💡 Show Hint)
- Hints appear with smooth animation
- Purple-themed hint boxes
- Helps participants who are stuck

### Detailed Explanations
- When answer is incorrect, full solution is shown
- Step-by-step explanation provided
- Helps learning even from mistakes

### Visual Enhancements
- White-space preserved for multi-line puzzle descriptions
- Emoji icons for visual appeal (🧩🔢⚖️🕐🏺)
- "Puzzle X of 5" instead of "Question X of 5"
- Enter key to submit (in addition to button)

## Technical Implementation

### Question Structure (questions.js)
```javascript
{
    id: 1,
    question: "Puzzle description with emojis and formatting",
    isPuzzle: true,              // NEW: Identifies as puzzle type
    inputType: "number",         // NEW: Can be "number" or "text"
    correctAnswer: "17",         // NEW: String format for flexibility
    hint: "Optional hint text",  // NEW: Helpful guidance
    explanation: "Full solution" // NEW: Detailed explanation
}
```

### UI Changes (index.html)
1. **New CSS Classes:**
   - `.puzzle-input-container` - Container for input
   - `.puzzle-input` - Styled text/number input
   - `.puzzle-hint` - Hint display box
   - `.hint-button` - Button to toggle hints

2. **Modified Functions:**
   - `displayQuestion()` - Detects puzzle type and renders accordingly
   - `submitAnswer()` - Handles both text input and MCQ
   - `toggleHint()` - NEW: Shows/hides hint boxes

3. **Answer Validation:**
   - Numbers: Exact match using parseFloat()
   - Text: Case-insensitive comparison
   - Automatic input disabling after submission

## Alignment with Event Document

✅ **"Mathematical and logical puzzles"** - All 5 puzzles are pure logic
✅ **"Algorithmic thinking without coding"** - No code required, pure reasoning
✅ **"Analytical thinking"** - Bridge crossing, weighing scale require analysis
✅ **"Logical reasoning"** - Pattern recognition, clock angles
✅ **"Strategic problem-solving"** - Water jug, optimization challenges

## User Experience Flow

1. **Participant enters Room 2**
2. **Sees first puzzle** with detailed description
3. **Types answer** in glowing input field
4. **Can request hint** if needed (optional)
5. **Submits answer** (button or Enter key)
6. **Gets instant feedback** (✓ or ✗)
7. **Sees full solution** if incorrect
8. **Clicks "Next"** to proceed to next puzzle
9. **Completes all 5 puzzles** to unlock Room 3

## Testing Status

✅ Server running successfully on port 3000
✅ Puzzle input fields rendering correctly
✅ Hint system functional
✅ Answer validation working (number and text)
✅ Detailed explanations displaying properly
✅ Enter key submission active
✅ Compatible with existing MCQ rooms (1, 3, 4, 5)

## Benefits of This Design

1. **More Engaging** - Active problem-solving vs passive selection
2. **Educational** - Detailed explanations teach concepts
3. **Challenging** - Requires genuine analytical thinking
4. **Fair** - Hints available for those who need guidance
5. **Professional** - Matches real coding challenge platforms
6. **Memorable** - Participants will remember the puzzles

---

**Room 2 Status:** ✅ Puzzle-Based Challenge Complete
**Difficulty Level:** Medium to Hard
**Average Time:** 2-3 minutes per puzzle (10-15 min total)
**Ready for Event:** Yes
