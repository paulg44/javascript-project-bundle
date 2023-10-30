// JavaScript file for Calculator App

/* Plan
    - store each button click until equals button clicked, array??
    - for the display it needs to be a string, then not a string for the calculation to work
    - then run function that takes into account whats been stored
    - example 2 clicked, the add clicked, then 2 clicked should store in a variable thats displayed on the screen 2+2
    - then when equals in clicked a function runs from left to right and does the calculation?
*/

// Variables from HTML
// Bring in all buttons with a class name of btn, instead of each individual one
const buttons = document.querySelectorAll(".btn");
// Calc display
const displayCalc = document.querySelector(".display-calc");

const equalsBtn = document.querySelector(".btn-equals");
// Buttons
const clearBtn = document.querySelector(".btn-clear");
const deleteBtn = document.querySelector(".btn-del");

let calc = "";

// Event Listener for all buttons and using the inner button text to add the correct digit or calc to display
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const buttonText = button.textContent;
    console.log(`${buttonText} pushed`);
    calc += buttonText;
    displayCalc.textContent = calc;
  });
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

// Delete
deleteBtn.addEventListener("click", () => {
  console.log("delete btn clicked");
  calc = calc.slice(1);
  displayCalc.textContent = calc;
});

/* This was my original way of doing the JavaScript, which worked absolutely fine. However it's a lot of repeated code and I knew there was a way to do it with forEach I just wasn't sure exactly how. I confess I had chatGPT to help with this part */
// Variables from HTML
// Digits
// const digitOne = document.querySelector(".btn-one");
// const digitTwo = document.querySelector(".btn-two");
// const digitThree = document.querySelector(".btn-three");
// const digitFour = document.querySelector(".btn-four");
// const digitFive = document.querySelector(".btn-five");
// const digitSix = document.querySelector(".btn-six");
// const digitSeven = document.querySelector(".btn-seven");
// const digitEight = document.querySelector(".btn-eight");
// const digitNine = document.querySelector(".btn-nine");
// const digitZero = document.querySelector(".btn-zero");
// const fullStop = document.querySelector(".btn-dot");
// // Calc Symbols
// const addBtn = document.querySelector(".btn-add");
// const subtractBtn = document.querySelector(".btn-sub");
// const divideBtn = document.querySelector(".btn-div");
// const multiplyBtn = document.querySelector(".btn-mult");
// const percentBtn = document.querySelector(".btn-percent");
// const leftBracketBtn = document.querySelector(".btn-bracket-l");
// const rightBracketBtn = document.querySelector(".btn-bracket-r");

// const displayCalc = document.querySelector(".display-calc");

// // Store btn clicks to a variable
// let calc = "";

// // Event listeners for digits
// digitOne.addEventListener("click", () => {
//   console.log("digit 1 pushed");
//   calc = calc + 1;
//   displayCalc.textContent = calc;
// });

// digitTwo.addEventListener("click", () => {
//   console.log("digit 2 pushed");
//   calc = calc + 2;
//   displayCalc.textContent = calc;
// });
// digitThree.addEventListener("click", () => {
//   console.log("digit 3 pushed");
//   calc = calc + 3;
//   displayCalc.textContent = calc;
// });
// digitFour.addEventListener("click", () => {
//   console.log("digit 4 pushed");
//   calc = calc + 4;
//   displayCalc.textContent = calc;
// });
// digitFive.addEventListener("click", () => {
//   console.log("digit 5 pushed");
//   calc = calc + 5;
//   displayCalc.textContent = calc;
// });
// digitSix.addEventListener("click", () => {
//   console.log("digit 6 pushed");
//   calc = calc + 6;
//   displayCalc.textContent = calc;
// });
// digitSeven.addEventListener("click", () => {
//   console.log("digit 7 pushed");
//   calc = calc + 7;
//   displayCalc.textContent = calc;
// });
// digitEight.addEventListener("click", () => {
//   console.log("digit 8 pushed");
//   calc = calc + 8;
//   displayCalc.textContent = calc;
// });
// digitNine.addEventListener("click", () => {
//   console.log("digit 9 pushed");
//   calc = calc + 9;
//   displayCalc.textContent = calc;
// });
// digitZero.addEventListener("click", () => {
//   console.log("digit 0 pushed");
//   calc = calc + 0;
//   displayCalc.textContent = calc;
// });
// fullStop.addEventListener("click", () => {
//   console.log("dot pushed");
//   calc = calc + ".";
//   displayCalc.textContent = calc;
// });

// // Event Listeners for calc symbols
// addBtn.addEventListener("click", () => {
//   console.log("add pushed");
//   calc = calc + "+";
//   displayCalc.textContent = calc;
// });
// subtractBtn.addEventListener("click", () => {
//   console.log("subtract pushed");
//   calc = calc + "-";
//   displayCalc.textContent = calc;
// });
// divideBtn.addEventListener("click", () => {
//   console.log("divide pushed");
//   calc = calc + "/";
//   displayCalc.textContent = calc;
// });
// multiplyBtn.addEventListener("click", () => {
//   console.log("multiply pushed");
//   calc = calc + "*";
//   displayCalc.textContent = calc;
// });
// percentBtn.addEventListener("click", () => {
//   console.log("percent pushed");
//   calc = calc + "%";
//   displayCalc.textContent = calc;
// });
// leftBracketBtn.addEventListener("click", () => {
//   console.log("left bracket pushed");
//   calc = calc + "(";
//   displayCalc.textContent = calc;
// });
// rightBracketBtn.addEventListener("click", () => {
//   console.log("right bracket pushed");
//   calc = calc + ")";
//   displayCalc.textContent = calc;
// });
