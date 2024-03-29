// JS file for Memory Game
/* PLAN
     - Have three different difficulties
     - Each difficulty has a different array of images, less to more
     - forEach image in an array render a div (in a grid) that can be flipped to see the image
     - array needs to be shuffled each time
     - when 2 images are flipped, check to see if they are the same
     - if they are they stay flipped, if not they flip back
     - score = timer
     - leaderboard score, local storage?
*/

// Variables from html
const easyBtn = document.getElementById("easy");
const mediumBtn = document.getElementById("medium");
const hardBtn = document.getElementById("hard");
const gameContainer = document.querySelector(".game-grid");
const timer = document.querySelector(".timer");
const leaderboardDisplayTest = document.querySelector(".test-display");

// Arrays
const easy = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];

// Global Variables
let scores = [6789, 3982, 7236];
let testScore = 0;
let time = 0;
let interval;

// Functions
function startTimer() {
  if (interval) {
    clearInterval(interval);
  }
  interval = setInterval(() => {
    time += 10;
    updateTimerDisplay();
  }, 10);
}

function updateTimerDisplay() {
  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor(time % 1000);
  timer.innerHTML =
    minutes.toString().padStart(2, "0") +
    ":" +
    seconds.toString().padStart(2, "0") +
    ":" +
    milliseconds.toString().padStart(3, "0");
}

function stopTimer() {
  clearInterval(interval);
  interval = null;
}

function gameLogic(array) {
  // Shuffles array randomly
  let randomGenerator = array.sort(() => 0.5 - Math.random());
  console.log(randomGenerator);

  let squares = [];

  //   Render a div for each item
  array.forEach((item) => {
    const square = document.createElement("div");
    square.innerText = `${item}`;
    square.style.height = "100px";
    square.style.width = "100px";
    square.style.border = "2px solid red";
    gameContainer.appendChild(square);

    squares.push(square);
  });

  // Make squares clickable
  let clickedSquares = [];

  squares.forEach((square, index) => {
    square.addEventListener("click", () => {
      if (clickedSquares.length < 2 && !clickedSquares.includes(squares)) {
        console.log(`Square at index ${index} clicked`);
        square.style.backgroundColor =
          square.style.backgroundColor === "red" ? "white" : "red";

        clickedSquares.push(square);

        if (clickedSquares.length === 2) {
          let firstValue = clickedSquares[0].textContent;
          let secondValue = clickedSquares[1].textContent;

          if (firstValue === secondValue) {
            console.log("Values Match");
            testScore++;
            console.log(testScore);
          } else {
            console.log("Values don't match");
            clickedSquares[0].style.backgroundColor = "white";
            clickedSquares[1].style.backgroundColor = "white";
          }

          clickedSquares = [];

          if (array.length / 2 === testScore) {
            // Stop timer
            stopTimer();
            console.log(time);
            scores.push(time);
          }
        }
      }
    });
  });
  console.log(scores);
}

// Event Listeners
easyBtn.addEventListener("click", () => {
  console.log("Easy btn clicked");
  startTimer();
  gameLogic(easy);
});

// Turn into times and remove semi-colons
leaderboardDisplayTest.textContent = scores.sort((a, b) => b - a);
