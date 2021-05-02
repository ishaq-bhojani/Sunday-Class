// document.write("Hello world")
// document.write("Saylani" + (5 + 5));

// Pre -- Increment -- Post
// Pre -- Decrement -- Post

// var num = 8;
// document.write(--num);
// document.write('<br>');
// document.write(num);

// var num = 5;
// console.log(num);
// num /= 5;
// console.log(num);

// var random = 10 + Number('10.5') + 30;
// console.log(random);

var dahiAvailable = false;
var tomatoAvailable = false;

// if (dahiAvailable) {
//     console.log("1 Pao dahi dedo!");
// } else if (tomatoAvailable) {
//     console.log("1 Pao timatar dedo!");
// } else {
//     console.log("1 Pao doodh dedo!");
// }
var random = Math.random();
random = Math.round(random * 10);
var askedNum = prompt('Write a number');
askedNum = Number(askedNum);

if (askedNum === random) {
    console.log("You Win!");
} else {
    console.log("You Lose!");
}
console.log(random);
console.log(askedNum);
console.log(3 ** 3);