let n = "Arjun";
fun("Karan");
function fun(name) {
  console.log(name + " is a Name ");
  console.log(name + " is a good developer ");
  console.log(name + " has 2 Cars ");
  console.log(name + " stays in BTM ");
}
sum(4, 5);
function sum(a, b) {
  console.log("Sum of " + a + " + " + b + " = " + (a + b));
  return;
}

function calculateSum(a, b, c = 4) {
  // c is default value
  //console.log("Sum of "+a+" + "+b+" = "+(a+b));
  return a + b + c;
}

result = calculateSum(6, 7, 0);
console.log("Sum = " + result);
console.log(calculateSum(8, 9));

console.log("********************************   ");
//Arrow FUNCTIONS
const fun1 = (x) => {
  console.log("Arrow FUNCTION " + x);
};
fun1(23, 56);
fun1(43);
