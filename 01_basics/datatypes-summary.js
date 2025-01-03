//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
  name: "hitesh",
  age: 22,
};

const myFunction = function () {
  console.log("Hello world");
};

console.log(typeof anotherId);

/* JavaScript is a dynamically typed language. 
    This means that:
        Type checking happens at runtime: The type of a variable is determined when the code is executed, not when it's written. 
        Variables can hold values of any type: You don't need to declare the type of a variable explicitly. 
        Flexibility: You can easily change the type of a variable by assigning it a new value of a different type. */


// https://262.ecma-international.org/5.1/#sec-11.4.3
