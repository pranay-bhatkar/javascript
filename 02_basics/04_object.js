/*
 * Tpoic : Object part 2
 */
/*
// const tinderUser = new Object(); -> singletone object

const tinderUser = {}; // -> non singleton object

tinderUser.id = "13edc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = true;

// console.log(tinderUser);

const regularUser = {
  email: "ab@ab.com",
  fullname: {
    userfullname: {
      fname: "pranay",
      lname: "bhatkar",
    },
  },
};

console.log(regularUser.fullname?.userfullname.fname); //optional chaining

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "a",
  4: "b",
};
// const obj3 = { obj1, obj2 };
// const obj3 = Object.assign({}, obj1, obj2);

const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

const users = [
  {
    id: 1,
    name: "a",
  },
  {
    id: 2,
    name: "b",
  },
  {
    id: 3,
    name: "c",
  },
  {
    id: 4,
    name: "d",
  },
  {
    id: 5,
    name: "e",
  },
];

console.log(users[1].name);
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty("isLoggedIn"));


*/
/*
 * Topice - object de-strcture
 */

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstrctor: "pranay",
};

// course.courseInstrctor
// const { courseInstrctor } = course;
const { courseInstrctor: instructor } = course;
console.log(instructor);

// api
//json

// {
//     "name":"abc",
//     "price":123,
// }

// [
//     {},
//     {},
//     {}
// ]
