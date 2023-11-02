// Exercise1:
// JOIN
const countries = ["Argentina", "Georgia", "Belarus"];
const cJoin = countries.join("+");
console.log(cJoin);

// Exercise2:
// Write a JavaScript function that reverses a number.
// Sample Data and output:
// Example x = 32243;
// Expected Output: 34223
const x = 32243;
const xSeperate = x.toString().split("").join("");
console.log(xSeperate);
// const reversex = x.reverse();
// console.log(reversex);

const y = 56756099;
reverseY = y.toString().split("").join("");
console.log(reverseY);

// Exercise3:
// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.
const askUser = prompt("Write a word");

splitInput = askUser.split("");
console.log(splitInput);
reverseInput = splitInput.slice().reverse();
console.log(reverseInput);

if (splitInput.join("") === reverseInput.join("")) {
  console.log(`${askUser} is a palindrome word`);
} else {
  console.log(`${askUser} is not a palindrome word`);
}

// Exercise 4:
// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'

const askWord = prompt("Write a word");
const askWord2 = askWord.split("").sort().join("");
console.log(askWord2);

// Exercise 5:
// Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
// Example string : 'the quick brown fox'
// Expected Output : 'The Quick Brown Fox '

const askSentence = prompt("Write a sentece");
const words = askSentence.split(" ");
capslockWords = words.map(
  (word) => word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()
);
console.log(capslockWords.join(" "));

// Exercise 6:
// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.
// Example string : 'Web Development Tutorial'
// Expected Output : 'Development'
function longestWord(word) {
  const sentence = "Web Development Tutorial";
  const divideSentence = sentence.split(" ");

  const longOne = divideSentence.reduce((longest, currectOne) => {
    return currectOne.length > longest.length ? currectOne : longest;
  }, "");
  return console.log(longOne);
}
longestWord();

// Exercise 7:
// Find the shortest word

function shortWord() {
  const sentence = "Web Development Tutorial";
  const seperatedSentence = sentence.split(" ");
  const shortest = seperatedSentence.reduce((shortestWord, currentWord) => {
    return shortestWord.length < currentWord.length
      ? shortestWord
      : currentWord;
  });
  return console.log(shortest);
}

shortWord();

// Exercise 8:
// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here.
// Example string : 'The quick brown fox'
// Expected Output : 5

function findWowels() {
  const askPeople = prompt("Enter word");
  const wowels = "aeiouAEIOU";
  let vCount = 0;
  for (let i = 0; i < askPeople.length; i++) {
    if (wowels.includes(askPeople[i])) {
      vCount += 1;
    }
  }
  return console.log(vCount);
}
findWowels();

// Exercise 9:
// 9. Write a JavaScript function that accepts an argument and returns the type.
// Note : There are six possible values that typeof returns: object, boolean, function, number, string, and undefined.
function types(value) {
  const checkedType = typeof value;
  console.log(checkedType);
}
types(42);
types("string");

// Exercise 10:
// Write a JavaScript function that takes an array of numbers and finds the  lowest and the greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 1,5

function findSmall() {
  const array1 = [1, 2, 3, 4, 5, -6, 7];
  const reducedArray = array1.reduce((small, current) => {
    return small < current ? small : current;
  });
  return console.log(reducedArray);
}
findSmall();
function findBig() {
  const array1 = [1, 2, 3, 4, 5, -6, 7];
  const reducedArray = array1.reduce((big, current) => {
    return big > current ? big : current;
  });
  return console.log(reducedArray);
}
findBig();

function findExtremes() {
  const array1 = [1, 2, -3, 4, 5, -6, 7];
  let smallest = array1[0];
  let largest = array1[0];

  for (let i = 1; i < array1.length; i++) {
    if (array1[i] < smallest) {
      smallest = array1[i];
    }
    if (array1[i] > largest) {
      largest = array1[i];
    }
  }

  console.log(
    `The smallest number in the array is ${smallest}, and the biggest number is ${largest}`
  );
}
findExtremes();

// Exercise 11:
// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
// Sample array : [1,2,3,4,5]
// Expected Output : 2,4
function findSecondExtremes() {
  const array1 = [1, 2, -3, 4, 5, -6, 7];
  const sortedArray = array1.sort((a, b) => a - b);
  let secondSmallest = sortedArray[1];
  let secondLargest = sortedArray[sortedArray.length - 2];
  console.log(
    `The second smallest number in the array is ${secondSmallest}, and the second biggest number is ${secondLargest}`
  );
}
findSecondExtremes();

// Exercise 12:
// Write a JavaScript function to extract unique characters from a string.
// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"
function extractCharacters() {
  const exampleString = "thequickbrownfoxjumpsoverthelazydog";
  const charCount = {};
  let uniqueChars = "";
  for (let i = 0; i < exampleString.length; i++) {
    let char = exampleString[i];
    if (!charCount[char]) {
      charCount[char] = 1;
      uniqueChars += char;
    }
  }
  const countLetter = uniqueChars.split("");
  const totalIndexes = countLetter.length;

  return console.log(
    `${uniqueChars}, totally there are ${totalIndexes} unique letters`
  );
}
extractCharacters();

// Example 13:
// Write a JavaScript function to find the first not repeated character.
// Sample arguments : 'abacddbec'
// Expected output : 'e'
function notRepeatedCharacter() {
  const argument = "abacddbec";
  for (let i = 0; i < argument.length; i++) {
    let character = argument[i];
    let firstIndex = argument.indexOf(character);
    let lastIndex = argument.lastIndexOf(character);

    if (firstIndex === lastIndex) {
      return console.log(character);
    }
  }
}
notRepeatedCharacter();
