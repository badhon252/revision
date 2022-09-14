// var x = 5;
// console.log(x);
// let y = 5;
// console.log(y);
// const firstName = "Khalid Hossain ";
// console.log(firstName);

// k = x === y;
// console.log(typeof k);
// console.log(k);
// let j = toString(k);
// console.log(j);
// function myName(firstName, lastName = "Badhon") {
//   if (k == true) {
//     console.log("It's worked!");
//   } else {
//     console.log("Does'nt worked!");
//   }
//   console.log(firstName + lastName);
// }

// myName(firstName, "Badhon");

// let newObject = {
//   name: "Khalid",
//   age: 21,
//   address: "Barishal",
//   email: "khalidhossainbadhon@gmail.com",
//   myInfo: function () {
//     console.log(this.name);
//   },
// };
// console.log(newObject.myInfo);

// newObject = {
//   phone: "01706107019",
// };

// function myName(fName, lName) {
//   firstName = fName;
//   lastName = lName;
//   console.log(firstName);
//   return fName + lName;
// }

// myName("Khalid", "Hossain");

// console.log("Hello world!, I'm Badhon!");

// How to write a function?
var f = function (n) {
  console.log(n);
};
f(3); // logs 3

f(3); // what is f? breaks.
var f = function (n) {
  console.log(n);
};

function abc(n) {
  console.log(n);
}

abc(3); // logs 3
xyz(5); // logs 5

function xyz(n) {
  console.log(n);
}

(function () {
  // code in here will execute right away
  // since the () at the end executes this (function(){})
})();

!(function (i) {
  // again, the tailing () will execute this
  console.log(i + 3);
})(10);
