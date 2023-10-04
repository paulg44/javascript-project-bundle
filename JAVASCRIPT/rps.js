// Variables from html
const userInput = document.getElementById("user");
const userWelcome = document.querySelector("h3");
const showResult = document.querySelector(".show-result");
const showScore = document.querySelector(".score");
// Button Variables
const paperBtn = document.getElementById("paper");
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");

// Store user input in a variable
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let inputValue = e.target.value;

    //   Add text content to h3
    userWelcome.textContent = `Welcome ${inputValue}, make your choice`;
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
    result = "Computer wins!";
    score -= 1;
  }

  // Show results and score
  showResult.textContent = `You chose ${userChoice}, the computer chose ${computerChoice}. Therefore ${result}`;
  showScore.textContent = `Your current score: ${score}`;

  // Show reset button on game start
  if (score !== 0 && restartBtn.style.display === "none") {
    restartBtn.style.display = "block";
  }
}
