// Functions

// Declaration
function myFun(num1, num2) {
  return num1 - num2;
}

// Expression
const addition = function (num1, num2) {
  return num1 + num2;
};

// Arrow function
const add = (num1, num2) => {
  return num1 + num2;
};

const addd = (num1, num2) => num1 + num2;

console.log(myFun(10, 30));

// Objects

const data = [
  { id: 1, name: "vincent", age: 23, loc: "hyd" },
  { id: 2, name: "riya", age: 22, loc: "banglore" },
];

console.log(data);

console.log(data[0]);
console.log(data[1]);

console.log(data[0].name);
console.log(data[1].age);
// const user1 = {
//   id: 1,
//   name: "vaishnavi",
//   age: 23,
//   loc: "hyd",
// };

// console.log(user1);

// user1.status = "mingle";

// console.log(user1);

// console.log(user1.name);