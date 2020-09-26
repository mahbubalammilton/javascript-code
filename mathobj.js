 /*
                             var num1 = parseInt(prompt("Enter the first number"));

                             var num2 = parseInt(prompt("Enter the 2nd number"));
                             var num3 = parseInt(prompt("Enter the 3rd number"));
                             var num4 = parseInt(prompt("Enter the 4th number"));

                             var maximum = Math.max(num1, num2, num3, num4);
                             document.write(maximum);
                             */

 //guessing game
 var numoflost = 0;
 var numofwin = 0;
 for (var i = 1; i <= 5; i++) {
     var guessNumber = parseInt(prompt("Enter number from 1 to 5"));
     var randomNumber = Math.floor(Math.random() * 5) + 1;
     if (guessNumber == randomNumber) {
         document.write("You have win = " + randomNumber + "<br/>");
         numofwin++;
     } else {
         document.write("You have lost = " + randomNumber + "<br/>");
         numoflost++;
     }
 }
 document.write("Total win = " + numofwin + "<br/>");
 document.write("Total win = " + numoflost);