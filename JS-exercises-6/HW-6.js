// 1. Create a “groceries list” array. Each element of the array is an object that contains the name of a product, an amount needed and whether it is bought or not. Write a few functions for working with this array.
const groceries = [
  { name: "egg", amount: "2kg", bought: false },
  { name: "orange", amount: "1kg", bought: true },
  { name: "pepper", amount: "1.5kg", bought: false },
];

function displayList() {
  for (let item of groceries) {
    console.log(
      `${item.name} - ${item.amount} - ${item.bought ? "Bought" : "Not Bought"}`
    );
  }
}
displayList();

function findGroceries() {
  groceries.forEach((item) => {
    item.bought
      ? console.log(`These are bought: ${item.name}`)
      : console.log(`These are not bought: ${item.name}`);
  });
}
findGroceries();

console.log(`The current list:`);

function listGroceries() {
  groceries.sort((a, b) => (a.bought === b.bought ? 0 : a.bought ? 1 : -1));
  groceries.forEach((item) => {
    console.log(
      `${item.name} - ${item.amount} - ${item.bought ? "Bought" : "Not Bought"}`
    );
  });
}

listGroceries();

// +2.Adding a purchase to the list. Note that if a product already exists, the amount needs to be increased in the existing purchase, not in a new one. Purchasing a product. The function accepts the name of a product and marks it as bought.

const purchaseList = [
  { name: "orange", amount: 5 },
  { name: "apple", amount: 3 },
  { name: "grape", amount: 10 },
];

function addProduct(productName, productAmount) {
  const inventory = purchaseList.find(
    (product) => product.name === productName
  );
  if (inventory) {
    inventory.amount += productAmount;
  } else purchaseList.push({ name: productName, amount: productAmount });
}

addProduct("orange", 41);
addProduct("banana", 4);

console.log(purchaseList);

// +3. Create an array that describes a shop receipt. Each element of the array consists of the name of the product, an amount bought, and price per item. Write the following functions.

// + Print the receipt out on the screen.
// + Counting the sum of the purchase.
// + Extracting the most expensive item on the receipt.
// + Counting an average item price on the receipt.

// + Print the receipt out on the screen:
const shopReceipt = [
  { name: "water", amount: "2", price: "1" },
  { name: "watermelon", amount: "1", price: "2" },
  { name: "melon", amount: "4", price: "8" },
];

console.log(shopReceipt);

// + Counting the sum of the purchase:
const total = shopReceipt.reduce((accumulator, item) => {
  return accumulator + Number(item.amount) * Number(item.price);
}, 0);
console.log(total);

// + Extracting the most expensive item on the receipt.
const expensiveItem = shopReceipt.reduce((maxItem, currentItem) => {
  return currentItem.price > maxItem.price ? currentItem : maxItem;
}, shopReceipt[0]);
console.log(
  `The most expensive product is: ${expensiveItem.name}. Its price is ${expensiveItem.amount} EUR per KG `
);

// + Counting an average item price on the receipt.
const totalPriceAverage = shopReceipt.reduce((sumItem, item) => {
  return sumItem + item.price;
}, 0);
const averagePrice = totalPriceAverage / shopReceipt.length;
console.log(averagePrice.toFixed(2));
