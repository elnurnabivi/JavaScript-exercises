// +1. Create an object that describes a car (manufacturer, model, year of release, average speed) and the following methods for working with this object:
// A method that displays the car info
// A method for counting a time frame necessary to cover a given distance with the average speed. Note that every 4 hours the driver has to take a 1-hour break.

const car = {
  manufacturer: "Tesla",
  model: "Model Y",
  "year of release": 2021,
  speed: 100,
  info() {
    console.log(
      this.manufacturer,
      this.model,
      this["year of release"],
      this.speed
    );
  },
  timeFrame(distance) {
    let drivingTime = Math.floor(distance / this.speed);
    let breaks = Math.floor(drivingTime / 4);
    return drivingTime + breaks;
  },
};

car.info();
let distance = 500;
console.log(
  `You will need ${car.timeFrame(
    distance
  )} hours to drive ${distance} km with ${car.speed} km/h`
);

// +3. Create an object that describes time (hours, minutes, seconds), and the following methods for working with this object:

// -A method for displaying the time.
// -A method for changing the time by a given amount of seconds.
// -A method for changing the time by a given amount of minutes.
// -A method for changing the time by a given amount of hours.
// Note that in the last three methods changing one part may influence another. For example, if we add 30 seconds to «20:30:45», we should get «20:31:15», not «20:30:75».

function Clock(hour, minute, second) {
  //this is a constructor function
  this.hour = hour;
  this.minute = minute;
  this.second = second;
}

Clock.prototype.display = function () {
  return `${String(this.hour).padStart(2, "0")}:${String(this.minute).padStart(
    2,
    "0"
  )}:${String(this.second).padStart(2, "0")}`;
};

Clock.prototype.addHour = function (hr) {
  this.hour += hr;
  if (this.hour >= 24) {
    this.hour -= 24;
  }
  if (this.hour < 0) {
    this.hour += 24;
  }
  return this;
};

Clock.prototype.addMinute = function (min) {
  this.minute += min;
  if (this.minute >= 60) {
    this.minute -= 60;
    this.addHour(1);
  }
  if (this.minute < 0) {
    this.minute += 60;
    this.addHour(-1);
  }
  return this;
};

Clock.prototype.addSecond = function (sec) {
  this.second += sec;
  if (this.second >= 60) {
    this.second -= 60;
    this.addMinute(1);
  }
  if (this.second < 0) {
    this.second += 60;
    this.addMinute(-1);
  }
  return this;
};

const clock = new Clock(20, 30, 45);
console.log(clock.display());

clock.addSecond(30);
console.log(clock.display());
clock.addMinute(34);
console.log(clock.display());
clock.addHour(-2);
console.log(clock.display());

// 4.Create 5 dogs - John, Ivan, Teddy, Rocco and Sparky. All of them should have unique ids, ages and addresses. Show which is the oldest and which is the youngest.
const john = {
  name: "john",
  id: 1,
  age: 1,
  address: "Lisbon",
};

const ivan = {
  name: "ivan",
  id: 2,
  age: 2,
  address: "Krakow",
};

const teddy = {
  name: "teddy",
  id: 3,
  age: 3,
  address: "Warsaw",
};

const rocco = {
  name: "rocco",
  id: 4,
  age: 4,
  address: "Madrid",
};

const sparky = {
  name: "sparky",
  id: 5,
  age: 5,
  address: "Washington",
};

let oldest = john;
let youngest = john;
oldest = ivan.age > oldest.age ? ivan : oldest;
oldest = teddy.age > oldest.age ? teddy : oldest;
oldest = rocco.age > oldest.age ? rocco : oldest;
oldest = sparky.age > oldest.age ? sparky : oldest;

console.log(`The oldest dog is ${oldest.name}`);

youngest = ivan.age < youngest.age ? ivan : youngest;
youngest = teddy.age < youngest.age ? teddy : youngest;
youngest = rocco.age < youngest.age ? rocco : youngest;
youngest = sparky.age < youngest.age ? sparky : youngest;

console.log(`The youngest dog is ${youngest.name}`);

// +5. Use the previous objects and show a list with their names and ages
console.log(`${john.name} is ${john.age} years old`);
console.log(`${ivan.name} is ${ivan.age} years old`);
console.log(`${teddy.name} is ${teddy.age} years old`);
console.log(`${rocco.name} is ${rocco.age} years old`);
console.log(`${sparky.name} is ${sparky.age} years old`);

// + 6. Create 2 people - Joye and Rachel. They have to have age and a greeting which will say “Hi, my name is  <NAME> and I am <AGE> old. Nice to meet you!”
const joye = { name: "Joye", age: 20 };
const rachel = { ...joye, name: "Rachel", age: 72 };
console.log(
  `Hi, my name is  ${joye.name} and I am ${joye.age} old. Nice to meet you!`
);
console.log(
  `Hi, my name is  ${rachel.name} and I am ${rachel.age} old. Nice to meet you!`
);

// +7. Create an object circle with a property radius and a method calculateArea. The calculateArea method should calculate and return the area of the circle using the formula: area = π * radius^2. Now, create another object smallCircle with its own radius, and use the bind method to bind the calculateArea method from circle to smallCircle. Call the calculateArea method on smallCircle and print the area.
const circle = {
  radius: 5,
  calculateArea() {
    return Math.PI * this.radius * this.radius;
  },
};
console.log(circle.calculateArea());

const smallCircle = {
  radius: 2,
};
smallCircle.calculateArea = circle.calculateArea.bind(smallCircle);
console.log(smallCircle.calculateArea());

// +8. Create an object with properties. These properties cannot be deleted
const objProperty = {};
Object.defineProperty(objProperty, "newproperty", {
  value: "Initial value",
  writable: true,
  enumerable: true,
  configurable: false,
});

delete objProperty.newproperty;
console.log(objProperty.newproperty);

// +9. Create an object with properties. These properties cannot be changed
const objProperty2 = {};
Object.defineProperty(objProperty2, "new property", {
  value: "Initial value",
  writable: false,
  enumerable: true,
  configurable: true,
});

objProperty2["new property"] = "Changing";
console.log(objProperty2["new property"]);
