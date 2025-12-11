/*
 * Topic : Object
 */

// singleton
Object.create;

// literal -> ❌ singleton
// constuctor -> singleton

// object literals
// in boject the type of the key is string| symbol

const mySym = Symbol("key1");
const JSUser = {
  name: "pranay",
  "full name": "pranay bhatkar",
  [mySym]: "mykey1", // declare the symbole to the object
  //   mySym: "mykey1",
  age: 23,
  location: "mumbai",
  email: "eb@d.vom",
  isLoggedIn: false,
  lastLoginDays: ["Mon", "Sat"],
};

console.log(typeof JSUser["name"]); // string - name - key

console.log(JSUser.name);
console.log(JSUser["name"]);
console.log(JSUser["full name"]);
console.log(typeof JSUser[mySym]);
// console.log(typeof JSUser.mySym);
console.log(JSUser[mySym]);

JSUser.email = "psg@psb.com";

// Object.freeze(JSUser); // it freese the object i.e. lock
JSUser.email = "psg@psb.c";
console.log(JSUser);

JSUser.greeting = function () {
  console.log("Hello");
};
JSUser.greetingTwo = function () {
  console.log(`Hello, ${this.name}`);
};

// console.log(JSUser.greeting); // undefined
console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());
