// let a= prompt("Enter your first number");
// let b = prompt("Enter your second number");
// let c =Number(a)+Number(b);
// let d =Number(a)-Number(b);
// let e =Number(a)*Number(b);
// let f =Number(a)/Number(b);
// let g =Number(a)%Number(b);

// document.write("Addition = "+c + "<br>");
// document.write("Subtraction = "+d + "<br>");
// document.write("Multiplication = "+e+ "<br>");
// document.write("Division = "+f+ "<br>");
// document.write("Remainder = "+g);


let b = Number(prompt("Enter your age"));
let result = "";
if (b > 18) {
    result = "eligible";
    document.write(result);
}
else {
    result = "Ineligible";
    document.write(result);
}