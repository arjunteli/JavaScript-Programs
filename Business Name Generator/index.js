let a1 = "Crazy";
let a2 = "Amazing"
let a3 = "Fire"
let b1 = "Engine"
let b2 = "Foods"
let b3 = "Garments"
let c1 = "Bros"
let c2= "Limited"
let c3 = "Hub";

let a;
let b;
let c;
if(Math.random() <0.3){
    a = a1;
}else if (Math.random() <0.6){
    a = a2;
}else{
    a = a3;
}

if(Math.random() <0.3){
    b = b1;
}else if (Math.random() <0.6){
    b = b2;
}else{
    b = b3;
}

if(Math.random() <0.3){
    c = c1;
}else if (Math.random() <0.6){
    c = c2;
}else{
    c = c3;
}


alert (a+" " +b+" "+c);

