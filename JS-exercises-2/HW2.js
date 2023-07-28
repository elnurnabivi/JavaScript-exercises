// 1. Request a username and show a greeting using string template
let userName = prompt("Write your username");
let greeting = `Hello, ${userName}`;
alert(greeting);

// 2. Request names and ages for two children. Check if child 1 is older and if its name is Tim
let name1 = prompt("Write the name of first kid");
let age1 = parseInt(prompt("How old is the first kid?"));
let name2 = prompt("Write the name of second kid");
let age2 = parseInt(prompt("How old is the second kid?"));

let older = age1 > age2 && alert(`${name1} is older than ${name2}`);
let notOlder = age1 <= age2 && alert(`${name1} is not older than ${name2}`);

let checkName1 =
  (name1 === "Tim" && alert(`yes, the name of the first kid is Tim`)) ||
  (!(name1 === "Tim") && alert(`No, the name of the first kid is not Tim`));

// 3. Request a color and check if the color is on the flag of the Republic of South Africa
let flagColors = ["black", "yellow", "green", "red", "white", "blue"];
let chooseColor = prompt("Write a color: ").toLowerCase();
flagColors.includes(chooseColor) &&
  alert(`Yes, ${chooseColor} is part of the color of South African flag`);
!flagColors.includes(chooseColor) &&
  alert(`No, ${chooseColor} is not part of the color of South African flag`);

// 4. Request a number and check if it is an odd number
let chooseNumber = parseInt(prompt("Write a number:"));
chooseNumber % 2 === 1 && alert(`${chooseNumber} is an odd number`);
chooseNumber % 2 === 0 && alert(`${chooseNumber} is even number`);

// 5. Request two numbers, divide them and the result must be an integer(whole number)
let a = parseInt(prompt("Write a number:"));
let b = parseInt(prompt("Write a number"));
let c = Math.round(a / b);
alert(parseFloat(c));

// 6. Request date of birth, calculate age and show if the person is over 18
let dateOfBirth = parseInt(prompt("Write your date of birth: "));
let currentAge = 2023 - dateOfBirth;
currentAge >= 18 && alert(`Yes, your are over 18`);
currentAge < 18 && alert(`No, your are not over 18`);

// 7. Declare a variable without initializing it and check if it is of type null or undefined
let varF;
let type = typeof varF;
alert(type);

// 8.Request a number, check if it is a number and if it is between 10 and 50
let requestedNumber = prompt("Write a number:");
typeof requestedNumber === "number" &&
  alert(`Yes, ${requestedNumber} is a number`);
typeof requestedNumber !== "number" &&
  alert(
    `${requestedNumber} is a string. Even your input was a number, "prompt" built-in function will always return values as string.`
  );

requestedNumber > 10 &&
  requestedNumber < 50 &&
  alert(`Yes, ${requestedNumber} is between 18 and 50`);

!(requestedNumber > 10 && requestedNumber < 50) &&
  alert(`No, ${requestedNumber} is not between 18 and 50`);
