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

// Arrays
const easy = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

// Functions
function gameLogic(array) {
  let randomGenerator = array.sort(() => 0.5 - Math.random());
  console.log(randomGenerator);
}

// Event Listeners
easyBtn.addEventListener("click", () => {
  console.log("Easy btn clicked");
  gameLogic(easy);
});
