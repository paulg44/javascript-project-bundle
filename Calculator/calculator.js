// JavaScript file for Calculator App

/* Plan
    - store each button click until equals button clicked, array??
    - then run function that takes into account whats been stored
    - example 2 clicked, the add clicked, then 2 clicked should store in a variable thats displayed on the screen 2+2
    - then when equals in clicked a function runs from left to right and does the calculation?
*/

// Variables from HTML
// Digits
const digitOne = document.querySelector(".btn-one");
const digitTwo = document.querySelector(".btn-two");
const addBtn = document.querySelector(".btn-add");
const equalsBtn = document.querySelector(".btn-equals");

const displayCalc = document.querySelector(".display-calc");

// Store btn clicks to a variable
