// 1. Create a factory function that generates person objects with the following properties: name, age,
// and job. Also, add a method called introduce that logs a message introducing the person.
function person(name, age, job) {
  return {
    name: name,
    age: age,
    job: job,
    introduce: function () {
      console.log(
        "Hi, my name is: " +
          this.name +
          "My age is: " +
          this.age +
          "I am a " +
          this.job
      );
    },
  };
}

console.log(person("Elnur", 28, "Developer"));

// 2. Create a factory function that generates bank account objects with properties accountNumber,
// accountHolder, and balance. Implement methods for depositing and withdrawing funds from the
// account.
function bank(accountNumber, accountHolder, balance) {
  return {
    accountNumber: accountNumber,
    accountHolder: accountHolder,
    balance: balance,
    depositing: function (amount) {
      this.balance += amount;
    },
    withdrawing: function (amount) {
      this.balance -= amount;
    },
  };
}

console.log(bank(20000, "Elnur", 100));

// 3. Create a constructor function named Animal that takes species, name, and sound as parameters and creates animal objects. Include a method called makeSound that logs the sound the animal makes.

function Animal(species, name, sound) {
  this.species = species;
  this.name = name;
  this.sound = sound;

  this.makeSound = function () {
    console.log(this.sound);
  };
}

const lion = new Animal("Lion", "Aga", "pppppssshh");
lion.makeSound();

// 4. Create a constructor function named Book that takes title, author, and pages as parameters and
// creates book objects. Implement a method called read that logs a message indicating the book
// has been read.

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = function () {
    console.log(`You have read a book called ${this.title}`);
  };
}

const newBook = new Book("Minimalism", "Duda", 238);
newBook.read();

// 5.Create a class called Student with a constructor that takes name, age, and grade as parameters. Add a method called study that logs a message indicating the student is studying.
class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  study() {
    console.log(`The ${this.name} is in the ${this.grade}th grade`);
  }
}

const studentExample = new Student("Elnur", 28, 5);
studentExample.study();

// 6.Create a shape hierarchy using classes in JavaScript. Implement a base class called Shape and
// two derived classes called Circle and Rectangle. Each class should have appropriate constructors
// and methods. Should have methods for getting area and circumference
class Shape {
  constructor() {
    this.type = "Shape";
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.type = "Circle";
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.type = "Rectangle";
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
  getCircumference() {
    return 2 * (this.width + this.height);
  }
}

const circle = new Circle(3);
const rectangle = new Rectangle(5, 7);

console.log(circle);
console.log(circle.getArea(), circle.getCircumference());
console.log(rectangle.getArea(), rectangle.getCircumference());

// 7.Create a class hierarchy representing products in an online shop. Use inheritance to create a base
// class Product and derived classes like Book, Electronics, and Clothing. Each class should have
// appropriate properties and methods. Should have name and price and specific Add properties and
// methods specific to each type of product.Implement a method to apply a discount to the price for
// each type.
class Product {
  constructor(name, price, discountPercentage) {
    this.name = name;
    this.price = price;
    this.discountPercentage = discountPercentage;
  }
  ApplyDiscount() {
    const discount = (this.discountPercentage / 100) * this.price;
    this.price -= discount;
  }
}

class Books extends Product {
  constructor(name, price, page, discountPercentage) {
    super(name, price, discountPercentage);
    this.page = page;
  }
}

const myBook = new Books("Minimalism", 100, 381, 10);
myBook.ApplyDiscount();
console.log(myBook);
