//<button onclick="alert('hello')">click me</button>//html code
//<p onclick="myMessage3()">demo</p>//html code

/*
function myMessage1() {
    alert("Hello everyone");
}

function myMessage2() {
    alert("I am here");
}

function myMessage3() {
    alert("I am paragraph");
}

// 
function myMessage1() {
    var myVar = document.querySelector("#paraid");
    myVar.innerHTML = "clik on button 1";
}

function myMessage2() {
    var myVar = document.querySelector("#paraid");
    myVar.innerHTML = "clik on button 2";
}
*/
//Or same as //
var myVar = document.querySelector("#paraid");

function myMessage1() {
    myVar.innerHTML = "clik on button 1";
}

function myMessage2() {
    myVar.innerHTML = "clik on button 2";
}