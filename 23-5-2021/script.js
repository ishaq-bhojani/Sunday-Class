// for (var i = 10; i >= 1; i -= 2) {
//   console.log("Print number " + i);
// }

// Functions

/* function myFunc() {
  console.log("Hello user");
}

myFunc();
myFunc();
myFunc(); */

/* function myFunc(num) {
  console.log("Hello user " + num);
}

myFunc(5);
myFunc(8);
myFunc(); */

/* function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

var answer = add(5, 5);
var answer2 = substract(answer, 5);
console.log(answer);
console.log(answer2); */

// ARRAY

var months = ["January", "February", "March"];
// console.log(months[1]);
months[3] = "April";
// console.log(months[3]);
months.push("May");
// console.log(months[4]);
// console.log(months);
// console.log(months[months.length - 1]);

for (var i = 0; i < months.length; i++) {
  console.log(months[i]);
}

months.forEach(function (month, index) {
  console.log(month, index);
});
