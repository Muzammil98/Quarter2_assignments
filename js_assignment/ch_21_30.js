// Java-script assignments chapter 21 to 30

//     Take a input from user in number with decimal point user input is 3.4
//     Convert it into greater number Example: Math.ceil(3.4); to 4
//     Declear a variable of string and assign some text var text="This is my dummy text"
//     Slice the text into a new variable from 0 to the rounded number 0 to 4; Example: text.slice(0, 4) | sliceText = This
//     Use for loop and concatination to reverse the sliced string; 0==>4 ==> This ===> shiT
//     print value in alert "shiT"

// var input = Number(prompt("Enter a number", "3.4"));
// var digit = Math.ceil(input);
// var text = "This is my dummy text";
// var str = text.slice(0, digit);
// var reverse = "";

// for (var i = 0; i < str.length; i++) {
//   var length = str.length - 1; // This
//   var a = str.charAt(length); // s
//   reverse = reverse.push(a); // reverse = "s"
//   length--; // i
// }
// alert(reverse);

// Second Assignment

//     input value from user in String var inputValue="cloUd naTive computinG"
//     Convert every first letter of the content in Capitalize case. inputValue="Cloud Native Computing"
//     print value in console.log() console.log(inputValue) | check result in browser console
var inputValue = prompt("Enter string", "cloUd naTive computinG");

function toCapitalize(letter) {
  letter = letter.toUpperCase();
  return letter;
}

function getWords(input) {
  var index = input.indexOf(" ");
  var sliced = input.slice(0, index);

  var lastIndex = input.lastIndexOf(" ");
  var sliced2 = input.slice(lastIndexOf, input.length);
  return sliced;
}
var word = getWords(inputValue);
console.log(word);
