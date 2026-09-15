// Student Information Management using Text File
// File: student.js

const fs = require("fs");

const fileName = "student.txt";

// 1. Create/Write student details
const studentDetails = `Name: Rahul
Roll Number: 101
Branch: CSE
Semester: 3
`;

fs.writeFileSync(fileName, studentDetails);

console.log("Student basic information written successfully.");

// 2. Read and display student details
const data1 = fs.readFileSync(fileName, "utf-8");

console.log("\n--- Student Details ---");
console.log(data1);

// 3. Update the existing file
const additionalDetails = `Subject: Full Stack Development
Marks: 85
Attendance: 92%
`;

fs.appendFileSync(fileName, additionalDetails);

console.log("Additional student information added successfully.");

// 4. Read the updated file again
const data2 = fs.readFileSync(fileName, "utf-8");

console.log("\n--- Complete Updated Student Information ---");
console.log(data2);

console.log("Student information management completed successfully.");
