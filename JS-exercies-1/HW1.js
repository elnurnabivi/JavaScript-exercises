// Request a user’s name and display the response “Hello, [name]”.
let name = prompt("What is your name");
console.log("Hello " + name);

// Request a user’s year of birth, count his age, and display the result. Store the current year as a constant.
let year = prompt("Date of birth");
age = 2023 - year;
console.log(age);

// Request a length of a side of a square from a user and display the perimeter of the square.
let length = prompt("Tell me a length of a side of a square");
let square = 4 * length;
console.log(square);

// Request a radius of a circle and display the area of such a circle.
let radius = prompt("Tell me a radius of a circle");
const pi = 3.14;
let area = pi * radius ** 2;
console.log(area);

// Request a distance in km between the two cities from a user, and the time they want to cover it within. Count the speed needed to be on time.
let distance = prompt("Tell me the distance between the two cities");
let time = prompt("How much time do you want to cover it within?");
speed = distance / time;
console.log(
  "You need to go with " +
    speed +
    " km/h to cover " +
    distance +
    " km" +
    " if you want to go in " +
    time +
    " hour"
);

// Request user’s name, age, country of birth and display them in the console in different lines with different colors to be easily visible
let userName = prompt("Please enter your name:");
let userAge = prompt("Please enter your age:");
let countryOfBirth = prompt("Please enter your country of birth:");

console.log("%cName: " + userName, "color: blue");
console.log("%cAge: " + userAge, "color: red");
console.log("%cCountry of Birth: " + countryOfBirth, "color: green");

// Ask 10 questions and display the answers in a short text in an alert
let q1 = prompt("What's your name?");
let q2 = prompt("What's your surname?");
let q3 = prompt("What's your mother's name?");
let q4 = prompt("What's your father's name?");
let q5 = prompt("What's your grandma's name?");
let q6 = prompt("What's your grandpa's name?");
let q7 = prompt("What's your aunt's name?");
let q8 = prompt("What's your uncle's name?");
let q9 = prompt("What's your best friend's name?");
let q10 = prompt("What's your enemy's name?");
let message = `Name is ${q1}, surname is ${q2}, mother's name is ${q3}, father's name is ${q4}, grandpa's name is ${q5}, grandpa's name is ${q6}, aunts' name is ${q7}, uncle's name is ${q8}, best friend's name is ${q9}, enemy's name is ${q10}`;
alert(message);

// Show in the console what is going to be your age in 2025, 2029 and 2050, using a single variable
let myAge = prompt("How old are you?");
myAge = Number(myAge);
console.log(
  "In 2025 I will be: " +
    (2 + myAge) +
    ". In 2029 I will be: " +
    (6 + myAge) +
    ". In 2050 I will be: " +
    (27 + myAge)
);
