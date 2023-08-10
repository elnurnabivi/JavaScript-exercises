// + 1. Write a program that requests a number from a user and finds the summation of every number from 1 to num. For example, for number 4 it is 1 + 2 + 3 + 4 = 10.
let requestedNumber = parseInt(prompt("Please write a number: "));
let i;
let sum = 0;
for (i = 1; i <= requestedNumber; i++) {
  sum += i;
}

console.log(sum);

// +2. Request two numbers and find only their largest common divisor.
let requestN1 = parseInt(prompt("Write a number: "));
let requestN2 = parseInt(prompt("Write another number: "));
let min = Math.min(requestN1, requestN2);
let lcd = 1;
for (i = 1; i <= min; i++) {
  if (requestN1 % i === 0 && requestN2 % i === 0) {
    lcd = i;
  }
}
console.log(
  `The largest common divisor of ${requestN1} and ${requestN2} is ${lcd}`
);

// +3.Request a number and display all the divisors of it. For example, for number 8 it would be 2, 4, and 8.
let askNumber = parseInt(prompt("Write a number: "));
console.log(`Divisors of ${askNumber} are: `);
for (i = 1; i <= askNumber; i++) {
  if (askNumber % i === 0) {
    console.log(i);
  }
}

// + 4.Define the number of digits in a requested number. For example, there are 4 digits in the number 6834.
let requestNumber = prompt("Write a number: ");
let requestNumberLength = (requestNumber + "").length;
console.log(requestNumberLength);

// +5. Request 10 numbers from a user and count, how many are positive, negative, or zero. Also, count odd and even. Display the statistics. There’s only one variable (not 10) needed for input by a user.
let positiveNumbers = 0;
let negativeNumbers = 0;
let zero = 0;
let oddNumbers = 0;
let evenNumbers = 0;

for (let i = 0; i < 10; i++) {
  let r = parseInt(prompt("Please write 10different numbers"));

  if (r % 2 !== 0) {
    oddNumbers++;
  } else if (r % 2 == 0) {
    evenNumbers++;
  }

  if (r == 0) {
    zero++;
  } else if (r > 0) {
    positiveNumbers++;
  } else if (r < 0) {
    negativeNumbers++;
  }
}

console.log(positiveNumbers + ` out of 10 numbers are positive numbers`);
console.log(negativeNumbers + ` out of 10 numbers are negative numbers`);
console.log(zero + ` out of 10 numbers are 0`);
console.log(oddNumbers + ` out of 10 numbers are odd numbers`);
console.log(evenNumbers + ` out of 10 numbers are even numbers`);

// + 6. Request favourite fruit from user. If it is Peach, Apple or Banana show message that it is your favourite food, if it is Pear or Grapefruit show message that you hate it otherwise show message that you have not tried this fruit
let fruit = prompt("Please write your fav fruit: ");
if (fruit == "Peach" || fruit == "Apple" || fruit == "Banana") {
  console.log(`${fruit} is my favorite fruit`);
} else if (fruit == "Pear" || fruit == "Grapefruit") {
  console.log(`Sorry, I hate ${fruit}`);
} else {
  console.log(`What is even ${fruit}? I have never tried ${fruit} `);
}

// 7. Request a number and check if the number is odd, even or zero. Use switch.
// THE FIRST SOLUTION BELOW DIDN'T WORK, I NEEDED TO ADD TRUE TO MAKE IT WORK

// let askNewNumber = parseInt(prompt("Tell me one number: "));
// // askNewNumber = 6;
// switch (askNewNumber) {
//   case askNewNumber === 0:
//     console.log("Your number is zero");
//     break;
//   case askNewNumber % 2 === 0:
//     console.log("The number you wrote is even");
//     break;
//   default:
//     console.log("The number you wrote is odd");
//     break;
// }

let askNewNumber = parseInt(prompt("Tell me one number: "));
switch (true) {
  case askNewNumber === 0:
    console.log("Your number is zero");
    break;
  case askNewNumber % 2 === 0:
    console.log("The number you wrote is even");
    break;
  default:
    console.log("The number you wrote is odd");
    break;
}
