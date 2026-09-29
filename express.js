const express = require("express");

const app = express();
const PORT = 3000;

// Home route
app.get("/", (req, res) => {
    res.send("Welcome to Express.js!");
});

// About route
app.get("/about", (req, res) => {
    res.send("This is the About page.");
});

// User route
app.get("/user", (req, res) => {
    res.json({
        name: "Saurabh",
        course: "CSE",
        college: "ABES Engineering College"
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});