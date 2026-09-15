console.log("hlo");
document.write("hlo");
window.alert("dangerous");
let a=10;
var b=20;
const c=30;
let a=1;
var b=2;
const c=3;
console.log(a);
console.log(b);
console.log(c);

let student = {
    name:"Saurabh",
    age:20
};

let arr=[1,2,3];
console.log(student , arr);

let z = true;
console.log("data type of c", typeof z);

let y = Number.MAX_SAFE_INTEGER;
console.log("max limit of y ",y);
console.log(y+1);
console.log(y+3);
console.log(y+9);

let x = BigInt(y);
console.log(x);  //9007199254740991n
console.log(x+BigInt(4));
console.log(x+BigInt(9));

let w = 12/0;
console.log(w);

let t;
console.log(t);
console.log(typeof(t));

let e= null;
console.log(typeof(e));

object

let student = {name: "Saurabh Suman",
               roll : 367,
               CGPA : 8.4,
               ispass : true,
};
console.log(student);

let marks = [54,24,16,90];
console.log(marks[0])


let student = {name : [ "Saurabh Suman","Shivang Kumar","Rahul Sharma"],
               city : [ "delhi","jaipur","goa"],
               CGPA : [8.4,8.9,9.0]};
                        console.table(student);
               for(let i=0;i<student.length;i++){
                if(student[i].CGPA>=8 && student[i].city="delhi")
               }
         console.log(student[i]);

         let obj = {
            name: "pen",
            price: 25
         }
console.log("the cost of",obj.name, "is", obj.price);
console.log(`the cost of ${obj.name} is ${obj.price}`)

