// CLOSURES

// function abc (x) {
//     return function (y) {
//         return x + y;
//     }
// }

// var called = abc(5);
// console.log(called(3));

// RECURSIONS
// abc 1
// abc 2
// abc 3

// function abc(current, end) {
//     console.log(current);
//     if(current >= end) {
//         return 'Done ';
//     }
//     return abc(++current, end);
// }

// console.log(abc(1, 5));

// function factorial (num) {
//     if (num === 1) {
//         return 1;
//     }
//     return num * factorial(--num);
// }
// // 5 * 4 * 3 * 2 * 1
// console.log(factorial(5));
// var dayOfWk = "Sat";
// switch (dayOfWk) {
//   case "Sat":
//     alert("Whoopee");
//     break;
//   case "Sun":
//     alert("Whoopee");
//     break;
//   case "Fri":
//     alert("TGIF!");
//     break;
//   default:
//     alert("Shoot me now!");
// }

// setInterval(function () {
//     console.log("Called")
// }, 1000);
