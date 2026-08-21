document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let fatherName = document.getElementById("Fname").value.trim();
    let motherName = document.getElementById("Mname").value.trim();
    let roll = document.getElementById("roll").value.trim();
    let dob = document.getElementById("date").value;
    let mobile = document.getElementById("number").value.trim();
    let email = document.getElementById("mail").value.trim();
    let branch = document.getElementById("BRANCH").value.trim();
    if (
        name === "" ||
        fatherName === "" ||
        motherName === "" ||
        roll === "" ||
        dob === "" ||
        mobile === "" ||
        email === "" ||
        branch === ""
    ) {
        alert("Please fill all the fields.");
        return;
    }
    if (mobile.length !== 10) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }
    let courses = document.querySelectorAll('input[id="COURSE"]:checked');

    if (courses.length === 0) {
        alert("Please select a course.");
        return;
    }

    alert("Registration Successful!");
    console.log("Name:", name);
    console.log("Father Name:", fatherName);
    console.log("Mother Name:", motherName);
    console.log("Roll Number:", roll);
    console.log("Date of Birth:", dob);
    console.log("Mobile:", mobile);
    console.log("Email:", email);
    console.log("Branch:", branch);
});