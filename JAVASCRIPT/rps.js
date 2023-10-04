// Variables from html
const userInput = document.getElementById("user");
const userWelcome = document.querySelector("h3");
const showResult = document.querySelector(".show-result");
const showScore = document.querySelector(".score");
const showQuote = document.querySelector(".quote");
// Button Variables
const paperBtn = document.getElementById("paper");
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");

// Hide buttons initially
paperBtn.style.visibility = "hidden";
rockBtn.style.visibility = "hidden";
scissorsBtn.style.visibility = "hidden";

// Store user input in a variable
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let inputValue = e.target.value;

    // Show buttons
    paperBtn.style.visibility = "visible";
    rockBtn.style.visibility = "visible";
    scissorsBtn.style.visibility = "visible";

    //   Add text content to h3
    userWelcome.textContent = `Hello ${inputValue}, I want to play a game`;
  }
});

// Player button choice
paperBtn.addEventListener("click", () => gameLogic("paper"));
rockBtn.addEventListener("click", () => gameLogic("rock"));
scissorsBtn.addEventListener("click", () => gameLogic("scissors"));

// Reset score
const restartBtn = document.createElement("button");
restartBtn.innerText = "Restart Game";
restartBtn.style.display = "none";
document.body.appendChild(restartBtn);

// Reset btn event listener
restartBtn.addEventListener("click", () => {
  showResult.style.display = "none";
  showScore.style.display = "none";
});

// Variable for score
let score = 0;

// Variable for result of game
let result;

// Variable for quotes
let quote;

// Game Logic
function gameLogic(userChoice) {
  // Array of possible choice
  let choices = ["rock", "paper", "scissors"];

  // Computer picks a choice from array at random
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  console.log(computerChoice);

  // check user input against computer
  if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    result = `You win!`;
    score += 1;
  } else if (userChoice === computerChoice) {
    result = "Tie!";
  } else {
    result = "Jigsaw wins!";
    score -= 1;
  }

  // Show results and score
  showResult.textContent = `You chose ${userChoice}, Jigsaw chose ${computerChoice}. Therefore ${result}`;
  showScore.textContent = `Your current score: ${score}`;

  // Quotes dependent on score
  let plusScoreQuotes = ["great", "excellent", "good"];
  let minusScoreQuotes = ["bad", "worse", "awful"];
  // Random quote picker
  const plusQuote =
    plusScoreQuotes[Math.floor(Math.random() * plusScoreQuotes.length)];
  const minusQuote =
    minusScoreQuotes[Math.floor(Math.random() * minusScoreQuotes.length)];

  if (score > 0) {
    quote = plusQuote;
  } else if (score < 0) {
    quote = minusQuote;
  } else {
    quote = "Choose wisely";
  }

  showQuote.textContent = quote;

  // Show reset button on game start
  if (score !== 0 && restartBtn.style.display === "none") {
    restartBtn.style.display = "block";
    restartBtn.style.position = "absolute";
    restartBtn.style.bottom = "10px";
    restartBtn.style.right = "10px";
  }
}
