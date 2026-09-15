const express = require("express");
const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.json({
        message1: "Hello World!",
        message2: "My name is Saurabh Suman",
        message3: "hi"
    });
});

app.listen(PORT, () => {
    console.log(`App is running on PORT ${PORT}`);
});