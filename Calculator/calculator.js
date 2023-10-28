// JavaScript file for Calculator App

/* Plan
    - store each button click until equals button clicked, array??
    - for the display it needs to be a string, then not a string for the calculation to work
    - then run function that takes into account whats been stored
    - example 2 clicked, the add clicked, then 2 clicked should store in a variable thats displayed on the screen 2+2
    - then when equals in clicked a function runs from left to right and does the calculation?
*/

// Variables from HTML
// Digits
const digitOne = document.querySelector(".btn-one");
const digitTwo = document.querySelector(".btn-two");
const digitThree = document.querySelector(".btn-three");
const digitFour = document.querySelector(".btn-four");
const digitFive = document.querySelector(".btn-five");
const digitSix = document.querySelector(".btn-six");
const digitSeven = document.querySelector(".btn-seven");
const digitEight = document.querySelector(".btn-eight");
const digitNine = document.querySelector(".btn-nine");
const digitZero = document.querySelector(".btn-zero");
const fullStop = document.querySelector(".btn-dot");
// Calc Symbols
const addBtn = document.querySelector(".btn-add");
const subtractBtn = document.querySelector(".btn-sub");
const divideBtn = document.querySelector(".btn-div");
const multiplyBtn = document.querySelector(".btn-mult");
const equalsBtn = document.querySelector(".btn-equals");
// Buttons
const clearBtn = document.querySelector(".btn-clear");

const displayCalc = document.querySelector(".display-calc");

// Store btn clicks to a variable
let calc = "";

digitOne.addEventListener("click", () => {
  console.log("digit 1 pushed");
  calc = calc + 1;
  displayCalc.textContent = calc;
});

digitTwo.addEventListener("click", () => {
  console.log("digit 2 pushed");
  calc = calc + 2;
  displayCalc.textContent = calc;
});

addBtn.addEventListener("click", () => {
  console.log("add pushed");
  calc = calc + "+";
  displayCalc.textContent = calc;
});

// Do the calculation
equalsBtn.addEventListener("click", () => {
  console.log("equals btn clicked");
  let result;
  try {
    // Using the eval built in function to calculate what the user has inputted into the calc variable
    result = eval(calc);
    displayCalc.textContent = result;
  } catch (error) {
    displayCalc.textContent = "Error";
  }
});

// Clear
clearBtn.addEventListener("click", () => {
  console.log("clear btn clicked");
  calc = "";
  displayCalc.textContent = "";
});
