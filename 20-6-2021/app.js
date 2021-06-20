// function myFunc(x, y) {
//   // x, y are parameters
//   return x * y;
// }

// myFunc(5, 8); // 5, 8 are arguments

// var myName = "Ishaq"; // Global Variable
// function anotherFunc() {
//   var myName = "Mohammad Ishaq"; // Local Variable
//   myName = "Mohammad Ishaq Bhojani";
//   console.log("Local Var", myName);
// }

// anotherFunc();

// console.log("Global Var", myName);
// console.log(myData);

// Closure

function parent(x) {
  return function child(y) {
    return x + y;
  };
}
// x = 5, y = 3
var call = parent(5);
var call2 = parent(10);

console.log(call(3));
console.log(call2(5));
