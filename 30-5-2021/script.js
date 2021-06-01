// var arr = [1,2,3,4];
// arr.push
// arr.pop();
// arr.splice(2, 1);
// arr.shift();
// arr.unshift(0);
// console.log(arr.slice(1,3));

// var arr = ["Apple", "Mango", "Banana", "Orange"];
// var found = false;
// for (var i = 0; i < arr.length; i++) {
//   console.log("Finding in: " + i);
//   if (arr[i] === "Mango") {
//     found = true;
//     break;
//   }
// }

// if (!found) {
//   console.log("Not Found");
// }

for (var i = 1; i <=5; i++) {
  for (var j = 1; j <= i; j++) {
    document.write(" * ");
  }
  document.write("<br>");
}
