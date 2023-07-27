// Create a currency converter. A user types in USD and the program converts them to EUR. The exchange rate should be stored as a constant.
let usd = prompt("USD: ");
const eur = usd * 0.91;
alert(usd + " USD is " + eur + " EUR");

// A user states a flash drive memory in GB. The program has to count how many 820MB files can be stored on this flash drive.
let memory = prompt("State your flash drive memory in GB");
let drive = memory / 0.82;
alert(drive);

// A user types in an amount of money in a wallet and the price of one chocolate bar. The program counts how many chocolate bars the user can buy, and how much change will he/she have left.
let amount = prompt("Write the amount of money you have");
let price = prompt("Write the price of the chocolate");
let quantity = Math.floor(amount / price);
let change = amount % price;
alert("You can buy " + quantity + " and you will left " + change + " USD");

// The user types in a sum of bank deposits for 2 months with a yearly interest rate of 5%. The program counts the sum of interest.
let deposit = prompt("Write how much do you want to deposit?");
deposit = Number(deposit);
const interestRate = 0.05;
let interest = (deposit / 2) * interestRate;
let totalAmount = deposit + interest;
alert(
  "You will receive a total of " +
    totalAmount +
    " out of which " +
    interest +
    " will be interest"
);
