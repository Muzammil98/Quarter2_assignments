// Make a Calculator

//     input a value from user for example num1 is 7
//     input a second value from user for example num2 is 3
//     input a third value from user for example sign is "+" or "-" or "*" or "/" or "%"
//     print operation in alert() 7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1

var num1 = Number(prompt("Enter first number"));
var num2 = Number(prompt("Enter second number"));
var sign = prompt("Enter operator", "+");
var total;
switch (sign) {
  case "+":
    total = num1 + num2;
    break;
  case "-":
    total = num1 - num2;
    break;
  case "/":
    total = num1 / num2;
    break;
  case "*":
    total = num1 * num2;
    break;
  case "%":
    total = num1 % num2;
    break;

  default:
    print("Not an operator");
    break;
}
alert(total);

// Second Assignment - Make a Percentage Calculator

//     Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
//     Calculate the total percentage formula: obtainedMarks * 100/ totalMarks
//     print output in alert.

var num1 = Number(prompt("Enter first course number"));
var num2 = Number(prompt("Enter second course number"));
var num3 = Number(prompt("Enter third course number"));
var num4 = Number(prompt("Enter fourth course number"));
var num5 = Number(prompt("Enter fifth course number"));

var obtainedMarks = num1 + num2 + num3 + num4 + num5;
var totalMarks = 500;
var percentage = (obtainedMarks / totalMarks) * 100;
alert("Your percentage:" + percentage.toFixed(2));
