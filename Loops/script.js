let a = 10;

for (let i = 0; i < 100; i++) {
  //console.log(a+i);
}

let obj = {
  Name: "Arjun",
  Id: 234,
  Genders: "MALE",
  phone: 23456789987,
};
for (const key in obj) {
  if (Object.hasOwnProperty.call(obj, key)) {
    const element = obj[key];
    console.log(element);
  }
}
console.log(a, obj)

for (const iterator of "ARJUN") {
    console.log(iterator)
}

while(a>0){
    console.log(a) ;a--
}

a = -1
do{
    console.log(a) ;
    a--
}while(a>0);