// + 1. Write a function that accepts 2 numbers and returns -1 if the first one is smaller than the second, 1 if it is vice versa, and 0 if they are equal.
let askNumber1 = parseInt(prompt("Write a number"));
let askNumber2 = parseInt(prompt("Write another number"));
function askNumber(number1, number2) {
  if (number1 < number2) {
    console.log("-1");
    return;
  }
  if (number1 > number2) {
    console.log("1");
    return;
  }

  console.log("0");
}

askNumber(askNumber1, askNumber2);

// + 2. Write a function that counts the factorial of a given number.
let n = 3;
let result = 1;
function factorial(n) {
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  console.log(result);
}

factorial(n);

// +3. Write a function that accepts three separate digits and makes them a number. For example, 1, 4, and 9 will become 149.
let askN1 = prompt("Write me a number");
let askN2 = prompt("Write me another number");
let askN3 = prompt("Write me another number");
function combineNumbers(n1, n2, n3) {
  console.log(n1 + n2 + n3);
}
combineNumbers(askN1, askN2, askN3);

// OR ANOTHER SOLUTION WITH RETURN:
// let askN1 = prompt("Write me a number");
// let askN2 = prompt("Write me another number");
// let askN3 = prompt("Write me another number");

// function combineNumbers(n1, n2, n3) {
//   return n1 + n2 + n3;
// }

// console.log(combineNumbers(askN1, askN2, askN3));

// +4.Write a function that accepts the width and length of a rectangle and calculates its area. If there is only one parameter given, it counts as a square.
let askWidth = prompt("Tell me a number");
let askLength = prompt("Tell me a number");
function area(width, length) {
  if (width && length !== "") {
    console.log(width * length);
    return;
  } else if (width === "") {
    console.log(length * length);
  } else if (length === "") {
    console.log(width * width);
  }
}

area(askWidth, askLength);

// +5. Write a function that checks if the given number is perfect. A perfect number is a number equal to the sum of all its divisors. For example, the smallest perfect number is 6, which is the sum of 1, 2, and 3.
const perfectN = parseInt(
  prompt(
    "Write a number. The program will check whether it is a perfect number"
  )
);
let sum = 0;
function perfect(num) {
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}
if (perfect(perfectN)) {
  console.log(`${perfectN} is a perfect number`);
} else {
  console.log(`${perfectN} is not a perfect number`);
}

// -6.Write a function that accepts the min and max values of a range, and only puts out the perfect numbers within that range. Use the previous function to check, if numbers are perfect.

// +7.Write a function that accepts time (hours, minutes, seconds) and returns a string in the format hh:mm:ss. If the seconds are not given, they should be displayed as 00.
let h = prompt("Write an hour");
let m = prompt("Write a minute ");
let s = prompt("Write a second ") || "00";
function time(hours, minutes, seconds) {
  hours = hours.padStart(2, "0");
  minutes = minutes.padStart(2, "0");
  seconds = seconds.padStart(2, "0");
  console.log(`${hours}:${minutes}:${seconds}`);
}
time(h, m, s);

// // +8. Write a function that accepts hours, minutes, and seconds and returns that time only in seconds. For example, 1 hour 25 minutes 43 seconds returns 5145 seconds.
let h2 = parseInt(prompt("Write an hour"));
let m2 = parseInt(prompt("Write a minute"));
let s2 = parseInt(prompt("Write a second"));
function totalSeconds(h2f, m2f, s2f) {
  h2f = h2f * 3600;
  m2f = m2f * 60;
  let sumSeconds = h2f + m2f + s2f;
  return sumSeconds;
}
let resultSeconds = totalSeconds(h2, m2, s2);
console.log(resultSeconds);

// // +9.Write a function that accepts the number of seconds, translates it into hours, minutes, and seconds, and returns as a hh:mm:ss string.
let s3 = parseInt(prompt("Write a second"));
function divideSeconds(s3f) {
  let s3hours = Math.floor(s3f / 3600);
  let remainingSeconds = s3f % 3600;

  let s3minutes = Math.floor(remainingSeconds / 60);
  remainingSeconds = remainingSeconds % 60;

  s3hours = String(s3hours).padStart(2, "0");
  s3minutes = String(s3minutes).padStart(2, "0");
  let s3seconds = String(remainingSeconds).padStart(2, "0");
  return `${s3hours}:${s3minutes}:${s3seconds}`;
}

let resultOfSeconds = divideSeconds(s3);
console.log(resultOfSeconds);

// +10.Write a function that counts the difference between the dates. The function accepts 6 parameters that describe 2 dates, and returns them as hh:mm:ss. While solving this problem use the functions from the two previous ones: at first, make the dates in seconds, count the difference in seconds, and translate it back into hh:mm:ss.

let hours1 = parseInt(prompt("Write an hour"), 10);
let minutes1 = parseInt(prompt("Write a minute"), 10);
let seconds1 = parseInt(prompt("Write a second"), 10);

let hours2 = parseInt(prompt("Write an hour"), 10);
let minutes2 = parseInt(prompt("Write a minute"), 10);
let seconds2 = parseInt(prompt("Write a second"), 10);

function displayTime(fHours, fMinutes, fSeconds) {
  fHours = String(fHours).padStart(2, "0");
  fMinutes = String(fMinutes).padStart(2, "0");
  fSeconds = String(fSeconds).padStart(2, "0");
  console.log(`${fHours}:${fMinutes}:${fSeconds}`);
}
displayTime(hours1, minutes1, seconds1);
displayTime(hours2, minutes2, seconds2);

function convertToSeconds(cHours, cMinutes, cSeconds) {
  return cHours * 3600 + cMinutes * 60 + cSeconds;
}

let timeInSeconds1 = convertToSeconds(hours1, minutes1, seconds1);
let timeInSeconds2 = convertToSeconds(hours2, minutes2, seconds2);

let convertTotal = Math.abs(timeInSeconds1 - timeInSeconds2);
console.log(convertTotal);

function divideConvertedSeconds(totalSeconds) {
  let h10 = Math.floor(totalSeconds / 3600);
  let remainingConvertedSeconds = totalSeconds % 3600;
  let m10 = Math.floor(remainingConvertedSeconds / 60);
  remainingConvertedSeconds = remainingConvertedSeconds % 60;
  h10 = String(h10).padStart(2, "0");
  m10 = String(m10).padStart(2, "0");
  let s10 = String(remainingConvertedSeconds).padStart(2, "0");
  return `${h10}:${m10}:${s10}`;
}

let finalResult = divideConvertedSeconds(convertTotal);
console.log(finalResult);
