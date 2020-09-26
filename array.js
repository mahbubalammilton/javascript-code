/*
var names = new Array(5);
names[0] = "Mahbub";
names[1] = "toru";
names[2] = "riad";
names[3] = "richi";
names[4] = "hasin";
document.write(names[2] + "<br/>" + names + "<br/>");

//Or
var names = new Array();
names[0] = "Mahbub";
names[1] = "toru";
names[2] = "riad";
names[3] = "richi";
names[4] = "hasin";
document.write(names.length + "<br/>");

//Or

var names = ["M", "A", "G"];
document.write(names.length + "<br/>");
document.write(names);

//push,poop

var names = ["M", "A", "G", "R", 3, 8, 7];
names.push("Milton");
names.push("Masum");
document.write(names + "<br/>");

names.pop();
names.pop();
document.write(names);

//concataeation

var froots = ["appale", "orrange", "litchi"];
var foods = ["rice", "beef", "fish"];
var total = froots.concat(foods);
document.write("<br/>total =" + total);



//LOOP IN ARRAY

var num = new Array();

for (var i = 0; i <= 5; i++) {
    num[i] = parseInt(prompt("Enter the number"));
}
var sum = 0;
for (i = 0; i <= 5; i++) {
    document.write("value =" + num[i] + "<br/>");
    sum = sum + num[i];
}
document.write("sum=" + sum);


//array method 

var names = ["M", "A", "G", "R", 3, 8, 7];
names.shift(); //shift first delete, opposite of pop
document.write(names + "<br/>");

names.unshift("h"); //unshift first add opposite of push
document.write(names + "<br/>");

names.splice(2, 2, "Mahbub", "Milton", "Masum");
document.write(names + "<br/>");

names.splice(2, 2);
document.write(names + "<br/>");

var names = ["M", "A", "G", "R", 3, 8, 7];
var newArray = names.splice(1);
document.write(newArray + "<br/>");
document.write(names + "<br/>");
*/
//Problem,sort

var names = ["M", "A", "G", "R"];
var sortedName = names.sort();
document.write(sortedName + "<br/>");

var number = [82, 98, 3, 89, 23, 54];
number.sort(function(a, b) {
    return a - b //sorted
        //return b - a; //reverse
});
document.write(number + "<br/>");
//document.write(number);