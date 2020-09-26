/*
var x = 6;
if (true) {
    x = 5;
}

console.log(x);

//Es6
let x = 6;
if (true) {
    let x = 5;
    console.log(x);
}

console.log(x);



let x = 15;
for (let x = 0; x <= 10; x++) {
    console.log(x); //0 to 10 output
}

console.log(x); //15 output

//string concat

//let x = 20;
//let y = 30;
let name = "Mahbub Milton";
let name2 = "Nuhan babu";
//document.write(`sum is ${x+y}.the end`);
document.write(`Name is ${name2} i am ${name}`);
*/
//function in Es6
const add = (x, y) => {
    let sum = x + y;
    document.write(sum);
}

add(30, 40);