// let firstName = "Nantelo";
// let lastName = "Kath";

// console.log(firstName + " " + lastName);

// O
// let age = 21;

// console.log(age);
// console.log(typeof age);

// let str = "Hello";
// let num = 100;
// let isStudent = true;
// let data;
// let value = null;

// console.log(typeof str);
// console.log(typeof num);
// console.log(typeof isStudent);
// console.log(typeof data);
// console.log(typeof value);


// let a = 20;
// let b = 5;

// console.log("Sum =", a + b);
// console.log("Difference =", a - b);
// console.log("Product =", a * b);
// console.log("Division =", a / b);


// let price = 99.99;

// console.log(typeof price);


// console.log(typeof null);
// console.log(typeof undefined);


// let x = 10;
// let y = "10";

// console.log(x == y);
// console.log(x === y);
// console.log(x != y);
// console.log(x !== y);
// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);


// console.log(10 == "10");
// console.log(10 === "10");


// console.log(null == undefined);
// console.log(null === undefined);



// let age1 = 21;
// let age2 = 25;

// if (age1 > age2) {
//     console.log("Person 1 is older");
// } else if (age2 > age1) {
//     console.log("Person 2 is older");
// } else {
//     console.log("Both are the same age");
// }

// let num = -8;

// if (num >= 0) {
//     console.log("Positive");
// } else {
//     console.log("Negative");
// }

// let marks = 45;

// if (marks >= 40) {
//     console.log("Pass");
// } else {
//     console.log("Fail");
// }

// let a = 30;
// let b = 50;

// if (a > b) {
//     console.log(a);
// } else {
//     console.log(b);
// }

// let a = 20;
// let b = 60;
// let c = 40;

// if (a >= b && a >= c) {
//     console.log(a);
// } else if (b >= a && b >= c) {
//     console.log(b);
// } else {
//     console.log(c);
// }

// let number = 17;

// if (number % 2 === 0) {
//     console.log("Even");
// } else {
//     console.log("Odd");
// }
// let marks = 82;

// if (marks > 90) {
//     console.log("Excellent");
// } else if (marks >= 75) {
//     console.log("Good");
// } else if (marks >= 50) {
//     console.log("Average");
// } else {
//     console.log("Fail");
// }

// let arr = ["Hello", 25, true, null, undefined];

// console.log(arr);

// let arr = ["Hello", 25, true, null, undefined];

// console.log(arr[0]);
// console.log(arr[arr.length - 1]);
// console.log(arr.length);

// let arr = [1, 2, 3];

// arr.push(4);
// arr.push(5);

// console.log(arr);

// let arr = [1, 2, 3, 4];

// arr.pop();

// console.log(arr);

// let arr = ["Apple", "Banana", "Orange"];

// arr[2] = "Dimapur";


// let numbers = [10, 20, 30, 40, 50];

// console.log(numbers.length);

// numbers.push(60);

// numbers.pop();

// numbers[2] = 100;

// console.log(numbers);

// Output

// 5
// [10, 20, 100, 40, 50]

// let data = [1, 2, [3, 4, 5], 6];

// console.log(data[2][0]);
// console.log(data[2][2]);
// console.log(data[2].length);


// let x = 10;
// let y = "10";

// console.log(x == y);
// console.log(x === y);

// Output

// true
// false
// 2.
// let arr = [1, 2, 3];

// arr.push(4);
// arr.pop();

// console.log(arr);

// Output

// [1, 2, 3]
// 3.
// let arr = ["A", "B", "C"];

// arr[1] = "Z";

// console.log(arr);

// Output

// ["A", "Z", "C"]

let arr = [1,2,3,4,5,6,7,8,9,10];

for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
        arr[i] = "JavaScript";
    }
}

console.log(arr);

Output

[
'JavaScript',2,
'JavaScript',4,
'JavaScript',6,
'JavaScript',8,
'JavaScript',10
]

let name = "Nantelo";
let age = 21;
let city = "Dimapur";

console.log("My name is " + name + ". I am " + age + " years old and I live in " + city + ".");


let arr = ["JavaScript", 100, true, null, undefined, "AI"];

let count = 0;

for (let element of arr) {
    count++;
}

console.log("Number of elements =", count);