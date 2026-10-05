
const EventEmitter = require("events");

const button = new EventEmitter();

// Click event
button.on("click", () => {
    console.log("Button was clicked!");
});

// Mouseover event
button.on("mouseover", () => {
    console.log("Mouse is over the button!");
});

// Another click listener
button.on("click", () => {
    console.log("Performing another click action...");
});

// Simulate click
console.log("Simulating click...");
button.emit("click");

// Simulate mouseover
console.log("Simulating mouseover...");
button.emit("mouseover");