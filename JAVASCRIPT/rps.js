/* The first step in breaking down the game of rock, paper, scissors might look something like this:

- Run the game loop
  - Store a move choice from a user (rock, paper, or scissors) in a variable
  - Randomly generate the computer's move and store that in a variable
  - Compare the two moves using the rock, paper, scissors rules to decide who won
    - Rock beats scissors
    - Scissors beats paper
    - Paper beats rock
- Alert the winner and update the scores accordingly (wins, losses, and draws)
- Ask the player whether they want to play again */

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
  showResult.textContent = result;
  showScore.textContent = score;
}
