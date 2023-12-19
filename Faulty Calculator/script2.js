let random = Math.random();

let obj = {
    "+" : "-",
    "*" : "+",
    "/" : "**",
    "-" : "/",
}

let a = prompt("Enter first number");
let b = prompt("Enter second number");
let c = prompt("Enter operation");
if(random>0.1){
    //alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)

}else{
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}