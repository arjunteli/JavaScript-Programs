let real_name = "Javascript";

for (let i = 0; i < 12; i++) {
  console.log(real_name[i]);
}
let b = "  Python ";

console.log("*************************************************");
console.log(real_name + " and " + b + " are programming languages.");
console.log(`${real_name} and ${b} are programming languages`);//String interpollution language
//console.log(`We are &{real_name} `)

console.log("rohan\"kai")

console.log(b.toUpperCase())
console.log(b)
console.log(b.length)
console.log(b.slice(0,4))
console.log(b = b.trim())
console.log(b)

b  = b + " Program";
console.log(b)
console.log(b.replace("o","Z"))
console.log(b)

console.log(b.concat(" is ", "a ","easy ","langauge"))