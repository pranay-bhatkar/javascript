/*
 * Primitive -> call by values (copy)
 *  7 types
 *      string
 *      number
 *      boolean
 *      null (empty)
 *      undefined
 *      symbol (unique)
 *      BigInt
 */

/*
 * Reference [Non Primitive]
 * Array
 * Objects
 * Functions
 */

/*
 * JS is a dynamically type
 */

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false

const bigNumber = 1n;

// objects
{
  name: "pranay";
  age: 23;
}

const heros = ["shaktiman", "nagraj"];

const myFunction = function () {
  console.log("Hello world!");
};

console.log(typeof bigNumber);

const me = null;
console.log(typeof me); // object

console.log(typeof myFunction); // object function

/******************************************/
// Stack Memory (Primitive) -> copy
// Heap Memory (Non Primitive) -> refrence (original value)
/******************************************/

let myChannel = "NerdChannel";

let anotherName = myChannel;
anotherName = "newChannelNerd";

console.log(myChannel);
console.log(anotherName);

let userOne = {
  name: "user 1",
  email: "user@google.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "user2@google.com";

console.log(userOne.email);
console.log(userTwo.email);
