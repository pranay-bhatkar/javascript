const name = "pranay";
const repoCount = 10;

// console.log(name + repoCount + "Value");

console.log(`Hello my is ${name} and repo count is ${repoCount}`);

const gameName = new String("Pranay-PSB"); // object
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.toLocaleUpperCase());
console.log(gameName.indexOf("r"));
console.log(gameName.charAt(2));

const newStr = gameName.substring(1, 3); // end value exclude

console.log(newStr);

const anotherStr = gameName.slice(-9, 3);

console.log(anotherStr);

// .trim()
// .replace
// .includes()

