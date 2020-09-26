/*var m = parseInt(prompt("Enter the 1st value number"));
var n = parseInt(prompt("Enter the last number"));
var sum = 0;

for (var i = m; i < n; i = i + 2) {
    sum = sum + i;
}
document.write(sum);
*/
//5 time loop running
/*
for (var i = 1; i < 5; i = i + 1) {
    var m = parseInt(prompt("Enter the 1st value number"));
    var n = parseInt(prompt("Enter the last number"));
    var sum = 0;
    sum = m + n;
    document.write(sum);
}


for (var i = 1; i <= 100; i++) {
document.write("integer = " + i);
}
*/
//while loop
/*
i = 0;
while (i <= 100) {
    document.write(" " + i)
    i = i + 1;
}

//summation of all integer which is divisable by 3&5 from 1=100
var sum = 0;
var i = 1;
while (i <= 100) {
    {
        if (i % 3 == 0 && i % 5 == 0)
            document.write(" " + i);
        sum = sum + i;
    }
    i = i + 1;
}
document.write("<br/>" + " " + sum);
document.write("<h1>Summation</h1>");


//break, continue in loop

for (i = 0; i <= 100; i++) {
    if (i == 20) {
        break;
    }
    document.write(" " + i);
}
*/

for (i = 0; i <= 100; i++) {
    if (i <= 20) {
        continue; //20 is not print
    }
    document.write(" " + i);
}