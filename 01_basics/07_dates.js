let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

// let myCreatedDate = new Date(2025, 0, 26);
// let myCreatedDate = new Date("2025-01-26");
let myCreatedDate = new Date("01-14-2025");
console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getDate);
console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);

newDate.toLocaleString("defaulr", {
  weekday: "long",
});
