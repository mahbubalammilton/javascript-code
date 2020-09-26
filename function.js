/*function sqaure() {
    var num = 5;
    var result = num * num;
    document.write("result " + result + "<br/>");
}

sqaure();
sqaure();

//
function sqaure(num) {
    var result = num * num;
    document.write("result " + result + "<br/>");
}

sqaure(5);
sqaure(6);

//
function sqaure(num1, num2) {
    var result = num1 * num2;
    document.write("result " + result + "<br/>");
}

sqaure(5, 6);
//

function sqaure(num) {
    var result = num * num;
    document.write("result " + result + "<br/>");
}

sqaure(5);
sqaure(6);




//Addition and subtraction

function addition(x, y) {
    var sum = x + y;
    document.write("sum =" + sum + "<br/>");
}

function subtract(x, y) {
    var sub = x - y;
    document.write("sub =" + sub + "<br/>");
}
addition(5, 7);
addition(7, 9);
subtract(80, 30);
subtract(30, 10);

*/

//return

function sqaure(x, y) {
    var result = x * y;
    return result;
}
var res = sqaure(5, 7);
document.write("result =" + res + "<br/>");