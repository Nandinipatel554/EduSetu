const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("EduSetu Backend Running");
});

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message: "Backend Working"
    });
});
app.post("/api/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({
            success: false,
            message: "Email and password are required"
        });
    }

    res.json({
        success: true,
        message: "Login successful"
    });
});

app.post("/api/ask-ai", (req, res) => {
    const question = req.body.question;

    if (!question) {
        return res.status(400).json({
            success: false,
            message: "Question is required"
        });
    }

    const q = question.toLowerCase();

    let answer = "";

    if (q.includes("array")) {
        answer =
            "📚 An array is a collection of elements of the same data type stored together. " +
            "For example, int marks[5] can store 5 integer values. " +
            "Arrays are useful when we need to store multiple related values.";
    }

    else if (q.includes("variable")) {
        answer =
            "📚 A variable is a named memory location used to store data. " +
            "For example, int age = 18; creates an integer variable named age.";
    }

    else if (q.includes("loop")) {
        answer =
            "📚 A loop is used to repeat a block of code multiple times. " +
            "Common C++ loops are for, while, and do-while loops.";
    }

    else if (q.includes("function")) {
        answer =
            "📚 A function is a reusable block of code that performs a specific task. " +
            "Functions help make programs easier to organize and reuse.";
    }

    else if (q.includes("if") || q.includes("condition")) {
        answer =
            "📚 An if statement is used to execute code only when a condition is true. " +
            "For example: if (age >= 18) { ... }";
    }

    else if (q.includes("physics")) {
        answer =
            "📚 Physics is the study of matter, energy, motion, forces, and their interactions. " +
            "Try breaking the topic into concepts, formulas, examples, and practice questions.";
    }

    else if (q.includes("math") || q.includes("mathematics")) {
        answer =
            "📚 For Mathematics, first understand the concept, then study the formula, " +
            "and finally solve practice questions step by step.";
    }

    else {
        answer =
            "📚 EduSetu Study Assistant: Start by identifying the main concept in your question. " +
            "Understand the basic definition, study a simple example, and then practice a few questions.";
    }

    res.json({
        success: true,
        answer: answer
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});