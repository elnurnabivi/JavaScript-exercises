// 3. Execute a currency converter. A user puts in USD, chooses a currency (EUR, SEK, AUD etc.) and gets the result. S
let money = parseInt(prompt(`How much USD do you want to convert?`));
let rates = {
  EUR: 0.91,
  SEK: 10.51,
  AUD: 1.5,
};
let currency = prompt("Please enter the target currency (EUR, SEK, AUD):");
let result = money * rates[currency.toUpperCase()];
result && alert(`Your amount will be ${result}`);
!result &&
  alert(
    `Currency conversion failed. Please ensure you've entered valid USD amount and currency`
  );

//   6. Request an email, check if it bigger than 20 character and if it includes @
let mail = prompt(`Write your email: `);
let mailLength =
  (mail.length > 20 || !mail.includes("@")) &&
  alert(
    `The email provided is longer than 20 character or doesn't include @ sign`
  );

// Another solution:
// let mailLength =
//   mail.length > 20 && alert(`The email provided is longer than 20 character.`);
// let mailValid = !mail.includes("@") && alert("Your mail should include @ sign");
