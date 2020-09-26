//for loop
/*
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var x = 0; x < numbers.lenght; x++) {
    document.write(numbers[x]);

}

//forEach loop
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(myFunction)

function myFunction(x) {
    document.write(x)
}
 
//OR
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function(x) {
    document.write(x);
});


//square number  
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var squareNumber = [];

numbers.forEach(function(x) {
    squareNumber.push(x * x);
})
document.write(squareNumber);

*/
//sum with array value

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
numbers.forEach(function(x, index, array) {
    array[index] = x + 5;
})
console.log(numbers);




)