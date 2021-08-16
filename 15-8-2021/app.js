// var data = 5;
// var name = "Ishaq";
// // console.log("Hi "+ name + " Data: " + data);
// console.log(`Hi ${name} Data: ${data}`);

// const data = "data5";
// const abc = "xyz";
// const obj = {
//     //data: data
//     data, abc,
//     [data]: 'xyz',
//     foo () {
//         return "bar";
//     }
// };
// // obj[data] = 'xyz'
// console.log(obj);
// console.log(obj.foo());

// const list = [ 1, 2, 3 ];
// const [ a, b ] = list;
// console.log(b);

// const users = [{
//     name: "Nadir",
//     id: 12,
//     roll: 2345
// }, {
//     name: "Usman",
//     id: 13,
//     roll: 3456
// }];
// let [{ name }, {name: name2}] = users;
// console.log(name, name2);

// function Student(roll, name) {
//     this.roll = roll;
//     this.name = name;
// }

// class Student {
//     constructor(roll, name) {
//         this.roll = roll;
//         this.name = name;
//     }

//     markAttendance () {
//         console.log(`${this.roll} is Present.`);
//     }
// }

// const nadir = new Student(2345, "Nadir");
// nadir.markAttendance();
// console.log(nadir);

class Shape {
    constructor(id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move(x, y) {
        this.x = x
        this.y = y
        console.log(`Move: ${this.id}`);
    }
}

class Circle extends Shape {
    constructor(id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}

const myCircle = new Circle(12, 2, 5, 50);
myCircle.move(5, 7);
console.log(myCircle);