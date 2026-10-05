// visualise vent loop using settimeout and set immidiate function

console.log(" 1. programm started ");

setTimeout(() => {
    console.log("2. setTimeout executed");
}, 4000);

setImmediate(() => {
    console.log("3. setImmediate executed");
});

process.nextTick(() => {
    console.log( "4. process.nextTick executed");
});
console.log("4. End");