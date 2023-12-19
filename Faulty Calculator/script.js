/*
FAULTY CALCULATOR using JAVASCRIPT
1. It takes input from the user 
2. It performs wrong operations as follows :

+ ----> -
* ----> +
- ----> /
/ ----> **

It performs wrong operations 10 % of the times (10 % probability)

*/

let prob = Math.random() * 100;
let a = prompt("Enter first number");
const num1 = parseInt(a, 10);
let b = prompt("Enter second number");
const num2 = parseInt(b, 10);
let c = prompt("Enter operator :- +, -, /, **");

if (prob > 10) {
  console.log(rightCalculator(num1, num2, c));
} else {
  console.log(faultyCalculator(num1, num2, c));
}
function rightCalculator(a, b, c) {
  if (c === "+") {
    return a + b;
  } else if (c === "-") {
    return a - b;
  } else if (c === "/") {
    return a / b;
  } else if (c === "*") {
    return a * b;
  } else {
    return "Invalid Operator";
  }
}

function faultyCalculator(a, b, c) {
  if (c === "+") {
    return a - b;
  } else if (c === "-") {
    return a / b;
  } else if (c === "/") {
    return a ** b;
  } else if (c === "*") {
    return a + b;
  } else {
    return "Invalid Operator";
  }
}
