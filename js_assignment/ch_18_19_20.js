// Make a TODO

// Customize previous assignment "ch_15_16_17" with for loop...
// Make a TODO

//     Create an empty array with the name is courses. ```example: var courses=[] ``
//     Get the 5-course name from the user, example: var course1 =prompt("course 1", "computer") and save all 5 value in "courses" array. example: courses.push(course1)
//     print courses array in alertexample: alert(courses)
//     print all full 5-course name one by one in prompt. example: course1=prompt(course1, course1Value)
//     If the user edit any value (through prompt), then that value is edit in the array. example: course1=prompt(course1, course1ValueEdit)
//     use Array.splice() to replace and edit index in array
//     print courses array in alertexample: alert(courses)

var courses = [];
var course1 = prompt("Course1:", "Computer Science");
var course2 = prompt("Course2:");
var course3 = prompt("Course3:");
var course4 = prompt("Course4:");
var course5 = prompt("Course5:");

courses.push(course1);
courses.push(course2);
courses.push(course3);
courses.push(course4);
courses.push(course5);
alert("Your courses:" + courses);

course1 = prompt("Course1:", course1);
course2 = prompt("Course2:", course2);
course3 = prompt("Course3:", course3);
course4 = prompt("Course4:", course4);
course5 = prompt("Course5:", course5);

courses.splice(0, courses.length, course1, course2, course3, course4, course5);

alert("Your courses:" + courses);
