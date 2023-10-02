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
let userInput = document.getElementById("user");
let userWelcome = document.querySelector("h3");

// Store user input in a variable
userInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    let inputValue = e.target.value;

    //   Add text content to h3
    userWelcome.textContent = `Welcome ${inputValue}`;
  }
});
