// var objIshaq = {
//     name: "Ishaq",
//     id: 00001,
//     email: '...@...',
//     phoneNo: '+92........'
// };

// var objUsman = {
//     name: "Usman",
//     id: 00002,
//     email: '...@....',
//     phoneNo: '+91........'
// };

// var persons = [{
//     name: "Ishaq",
//     id: '00001',
//     email: '...@...',
//     phoneNo: '+92........'
// }, {
//     name: "Usman",
//     id: '00002',
//     email: '...@....',
//     phoneNo: '+91........'
// }];

// console.log(persons[1]['name']);

// for(var i = 0; i < persons.length; i++){
//     for (var key in persons[i]){
//         // console.log(key);
//         console.log(persons[i][key]);
//     }
// }

// var classes = [class1];
// var class1 = {
//   teacher: teachers[0],
//   course: "Web n App",
//   days: "Weekend",
//   students: [student1],
// };
// var student1 = {
//   name: "Usman",
//   id: "00002",
//   email: "...@....",
//   phoneNo: "+91........",
// };

// var teachers = [teacher1];
// var teacher1 = {
//   name: "Ishaq",
//   id: "00001",
//   email: "...@...",
//   phoneNo: "+92........",
//   startingTime: 10,
//   endingTime: 17,
//   inClass: function () {
//     var hours = new Date().getHours();
//     return this.startingTime < hours && this.endingTime > hours;
//   },
// };
// teacher1.name = "Arshad";

// console.log(teacher1);


for (var i = 0; i < 10; i++) {
    for (var j = 0; j < i; j++) {
        document.write(' * ');
    }
    document.write('<br>');
}
