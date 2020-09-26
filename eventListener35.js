//problem
var myVar document.querySelector("h1");
myVar.addEventListener("mouseover", function() {
    myVar classList.add("event-style");
});

myVar.addEventListener("mouseout", function() {
    myVar classList.remove("event-style");
});

//click eventListener lekha click korle style change hbe;
/*
document.querySelector("button").addEventListener("click", myFunction);

function myFunction() {
    alert("Hello");
}

*/