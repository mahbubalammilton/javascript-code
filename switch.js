var digit = prompt("Enter a letter");

switch (digit) {
    case "0":
        document.write("zero" + "<br/>");
        break;
    case "1":
        document.write("one" + "<br/>");
        break;
    case "2":
        document.write("two" + "<br/>");
        break;
    case "3":
        document.write("three" + "<br/>");
        break;
    case "4":

        document.write("four" + "<br/>");
        break;
    case "5":
        document.write("five" + "<br/>");
        break;
    default:
        document.write("not digit" + "<br/>");
}
var letter = prompt("Enter a lettetr");

switch (letter) {
    case "a":
        document.write("vowel" + "<br/>");
        break;
    case "e":
        document.write("vowel" + "<br/>");
        break;
    case "i":
        document.write("vowel" + "<br/>");
        break;
    case "o":
        document.write("vowel" + "<br/>");
    case "u":
        document.write("vowel" + "<br/>");
        break;
    default:
        document.write("consonant " + "<br/>");
}
var alphabet = prompt("Enter a lettetr");
switch (alphabet) {
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        document.write("vowel" + "<br/>");
        break;
    default:
        document.write("consonant");
}