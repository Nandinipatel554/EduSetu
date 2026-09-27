const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


// ===============================
// HOME
// ===============================

app.get("/", (req, res) => {
    res.send("EduSetu Backend Running");
});


// ===============================
// HEALTH CHECK
// ===============================

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Backend Working"
    });
});


// ===============================
// LOGIN
// ===============================

app.post("/api/login", (req, res) => {

    const { email, password } = req.body;

    const demoEmail = "student@edusetu.com";
    const demoPassword = "EduSetu123";

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    }

    if (
        email.trim() === demoEmail &&
        password === demoPassword
    ) {
        return res.json({
            success: true,
            message: "Login successful"
        });
    }

    return res.status(401).json({
        success: false,
        message: "Invalid email or password"
    });
});


// ===============================
// AI STUDY ASSISTANT
// ===============================

app.post("/api/ask-ai", (req, res) => {

    const question = req.body.question;

    if (!question || !question.trim()) {
        return res.status(400).json({
            success: false,
            message: "Question is required"
        });
    }

    const q = question.toLowerCase();

    let answer = "";

    if (q.includes("array")) {

        answer =
            "📚 Array: An array stores multiple values of the same data type. " +
            "For example, int marks[5] can store 5 integer values. " +
            "Arrays are useful for storing related data together.";

    }

    else if (q.includes("variable")) {

        answer =
            "📚 Variable: A variable is a named memory location used to store data. " +
            "Example: int age = 18; Here, age is an integer variable.";

    }

    else if (q.includes("loop")) {

        answer =
            "📚 Loop: A loop is used to repeat a block of code. " +
            "Common C++ loops are for, while, and do-while loops.";

    }

    else if (q.includes("function")) {

        answer =
            "📚 Function: A function is a reusable block of code that performs " +
            "a specific task. Functions make programs easier to organize and reuse.";

    }

    else if (
        q.includes("if") ||
        q.includes("else") ||
        q.includes("condition")
    ) {

        answer =
            "📚 If-Else: An if statement runs code when a condition is true. " +
            "An else block runs when the condition is false.";

    }

    else if (q.includes("pointer")) {

        answer =
            "📚 Pointer: A pointer is a variable that stores the memory address " +
            "of another variable. Example: int *p = &x;";

    }

    else if (
        q.includes("class") ||
        q.includes("object") ||
        q.includes("oop")
    ) {

        answer =
            "📚 OOP: Object-Oriented Programming uses classes and objects. " +
            "A class is a blueprint, while an object is an instance of that class.";

    }

    else if (
        q.includes("dsa") ||
        q.includes("data structure")
    ) {

        answer =
            "📚 DSA: Data Structures organize data efficiently, while Algorithms " +
            "are step-by-step methods used to solve problems.";

    }

    else if (
        q.includes("physics") ||
        q.includes("force") ||
        q.includes("motion")
    ) {

        answer =
            "📚 Physics: Start by understanding the concept, then learn the " +
            "important formula, understand its units, and solve practice questions.";

    }

    else if (
        q.includes("math") ||
        q.includes("mathematics") ||
        q.includes("formula")
    ) {

        answer =
            "📚 Mathematics: First understand the concept, then learn the formula, " +
            "and finally solve practice questions step by step.";

    }

    else {

        answer =
            "📚 EduSetu Study Assistant: Break your question into three steps: " +
            "understand the basic concept, study a simple example, and then practice " +
            "a few questions.";

    }

    res.json({
        success: true,
        answer: answer
    });
});


// ===============================
// START SERVER
// ===============================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});