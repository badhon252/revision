var x = 5;
console.log(x);
let y = 5;
console.log(y);
const firstName = "Khalid Hossain ";
console.log(firstName);
let k = true;
console.log(typeof k);
k = x == y ? "true" : "false";
console.log(k);

function myName(firstName, lastName = "Badhon") {
  console.log(firstName + lastName);
}

myName(name, "Badhon");
