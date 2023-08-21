// 1. Create a promise that resolves to the string "Hello, Promises!"
const hello = new Promise((resolve, reject) => {
  resolve("Hello, Promises");
});
hello.then((message) => {
  console.log(message);
});

// +2.Create a function that returns a promise. The promise should resolve after a random delay (between 1 to 5 seconds) with a message like "Promise resolved after X seconds".
randomInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const min = 1;
const max = 5;
const randomDelay = randomInterval(min, max);
console.log(randomDelay);

const setTimer = () => {
  const returnPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise resolved after ${randomDelay} seconds`);
    }, randomDelay * 1000);
  });
  returnPromise.then((message) => {
    console.log(message);
  });
};
setTimer();

// 3.Ask a user to submit an artist name and song and after 2 seconds add it to the screen

// (This is the solution we discusses during the class with Ivo):
// let artistName = prompt("Write your fav artist's name: ");
// let songName = prompt("Write your fav artist's song: ");
// const artistSongSetTimer = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (artistName === "" && songName === "") {
//         reject("User has not entered both values");
//       }
//       if (artistName === "") {
//         artistName = "Sia";
//       }
//       if (songName === "") {
//         songName = "Test";
//       }

//       resolve();

//       //   console.log(
//       //     `Your favorite artist is: ${artistName}. And your favorite song is: ${songName}`
//       //   );
//     }, 2000);
//   });
// };
// artistSongSetTimer()
//   .then(() => {
//     console.log(`Artist name is ${artistName}, song name is: ${songName}`);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// Solution 2:
const artistName = prompt("Write your fav artist's name: ");
const songName = prompt("Write your fav artist's song: ");
const artistSongSetTimer = () => {
  const artistPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(
        `Your favorite artist is: ${artistName}. And your favorite song is: ${songName}`
      );
    }, 2000);
  });
  artistPromise.then((message) => {
    console.log(message);
  });
};
artistSongSetTimer();

// 4. Ask a user for age, if the input is not a number or a number over 120 or below 0, show error in console, else print in on the page with a welcome message

const userAge = prompt("How old are you, dear user?");
const userAgeCalculation = () => {
  const age = new Promise((resolve, reject) => {
    if (userAge == Number || (userAge < 120 && userAge > 0)) {
      resolve();
    } else {
      reject();
    }
  });

  age
    .then(() => {
      console.log("Welcome to our page");
    })
    .catch(() => {
      console.log("Invalid page");
    });
};

userAgeCalculation();
