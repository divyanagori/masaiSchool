// Ques 1
   // A
console.log(`${5 + 7 - 12}`);
//B
const msg = `
Line 1
Line 2
Line 3
`;
//c
const firstName = "John";
const lastName = "Doe";
console.log(`${firstName} ${lastName}`);
//Ques 2
//A
const square = n => n * n;
//B
//Arrow function do not have their own this.this.value refers to global this,not obj.value,so it prints undefined.
//C
const obj = {
  value: 50,
  test() {
    console.log(this.value);
  }
};
obj.test();
//QUES 3
//A
const product = { name: "Pen", price: 10 };
const copy = { ...product };
//B
const a = { x: 1 };
const b = { y: 2 };
const merged = { ...a, ...b };
//C
const maxValue = (...nums) => Math.max(...nums);
//QUES 4
//A
const arr = [10, 20, 30];
const [a, b] = arr;
//B
const laptop = { brand: "Dell", ram: "8GB" };
const { brand } = laptop;
//C
const info = {};
console.log(info.data?.name);

//QUES 5
//A
5
//B
0
1
2
//C
const prevents reassignment ,so the value stays fixed and cannot be overwritten.

//QUES 6
//A
let speed = kmph > 60 ? "Fast" : "Normal";
//B
age >= 18 ? "Adult" : "Minor";
//C
num > 0 
  ? "Positive" 
  : num === 0 
    ? "Zero" 
    : "Negative";
    //QUES 7
    //A
  const nums = [1,2,3];
const updated = [...nums, 4, 5];
//B
const combined = [...a, ...b];
//C
function printNames(...names) {
  return names;
}
// printNames("A","B","C") → ["A","B","C"]
//Ques 8
//A
const user = { id: 101, status: "active" };
const { id, status } = user;
//B
const id = 101;
const role = "admin";

const user = { id, role };
//C
const name = "Sam";
const score = 90;

const obj = {
  name,
  score,
  greet() {
    return Hello ${name};
  }
};
//QUES9
//A
console.log(`Today's date: ${new Date().toDateString()}`);
//B
const NAME = "John";
const SCORE = 85;
console.log(`Hello ${NAME}, your score is ${SCORE}/100`);
//QUES 10
//A
const add = (a, b) => a + b;
//B
const isAdult = age => age >= 18;
//C
const double = n => n * 2;
//QUES 11
//A
const clone = [...arr];
//B
const updated = [100, ...arr];
//C
const merged = { ...obj1, ...obj2, name: "Updated" };
  //QUES 12
  //A
  user.address?.city;
  //B
  user.job?.title;
  //C
  const person = {};
console.log(person.details?.age);