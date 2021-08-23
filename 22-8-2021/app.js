// const saveData = (key, data) => {
//     localStorage.setItem(key, JSON.stringify(data));
// }

// const getData = (key) => {
//     JSON.parse(localStorage.getItem(key));
// }

// CALLBACKS

// function func(callback) {
//     setTimeout(function () {
//         console.log("Done");
//         callback("string");
//     }, 5000);
// }

// CALLBACKS HELL

// func(function (data) {
//     func2(function (data) {
//         func3(function (data) {
//             func4(function (data) {
//                 console.log(data);
//             });
//         });
//     });
// });

// PROMISE

// function func() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             console.log("Done");
//             const random = Math.random();
//             if (random > 0.5) {
//                 resolve(random);
//             } else {
//                 reject(random);
//             }
//         }, 2000);
//     });
// }

// func().then(function(data) {
//     console.log("Data: ",data);
// }).catch(function(error) {
//     console.log("Error: ",error);
// })

// ASYNC / AWAIT

// async function hello() {
//     try {
//         return await func();
//     } catch (err) {
//         console.log(err);
//     }
// };

// hello().then(alert);

// GENERATOR FUNCTIONS

// function* range (lives) {
//     while (lives > 0) {
//         yield lives--;
//     }
// }
// const funcRange = range(3);
// console.log(funcRange.next());
// console.log(funcRange.next());
// console.log(funcRange.next().done);
// console.log(funcRange.next().value);

// function* generator(i) {
//     yield i;
//     yield i + 10;
//   }
  
//   const gen = generator(10);
  
//   console.log(gen.next().value);
//   // expected output: 10
  
//   console.log(gen.next().value);
//   // expected output: 20