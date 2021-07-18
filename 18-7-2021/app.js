// function Plan(name, price, space, transfer, pages) {
//   this.name = name;
//   this.price = price;
//   this.space = space;
//   this.transfer = transfer;
//   this.pages = pages;
// }

// var plan1 = new Plan("Basic", 3.99, 100, 1000, 10);
// var plan2 = new Plan("Basic 1", 4.99, 200, 2000, 20);
// console.log(plan1, plan2);

// function User(userName, age, email, gender) {
//   this.name = userName;
//   this.age = age;
//   this.email = email;
//   this.gender = gender;
// }
// User.prototype.like = function (userObj) {
//     if (this.gender === 'm' && userObj.gender === "f") {
//       console.log("Tharki");
//     } else {
//       console.log(this.name + " liked a picture of " + userObj.name);
//     }
//   };

// var nadir = new User("Nadir", 22, "n@n.com", "m");
// var usman = new User("Usman", 21, "u@u.com", "m");
// var mehwish = new User("Mehwish", 20, "m@m.com", "f");
// console.log(nadir);
// nadir.like(usman);
// usman.like(mehwish);

// var obj = {
//     name: "ishaq",
//     age: 22
// };
// for (var key in obj) {
//     console.log(key, obj[key]);
// }

