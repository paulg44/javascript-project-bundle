// Variables from html
const userInput = document.getElementById("user");
const userWelcome = document.querySelector("h3");
const showResult = document.querySelector(".show-result");
const showScore = document.querySelector(".score");
const showQuote = document.querySelector(".quote");
const removeAll = document.querySelector(".easy-remove-all");
// Button Variables
const paperBtn = document.getElementById("paper");
const rockBtn = document.getElementById("rock");
const scissorsBtn = document.getElementById("scissors");
// Audio Variables
const iWantAudio = document.getElementById("want-to-play-audio");
const helplessAudio = document.getElementById("helpless-audio");
const hurryAudio = document.getElementById("hurry-audio");
const haAudio = document.getElementById("ha-audio");
const congratsAudio = document.getElementById("congrats-audio");
// Background Audio Variable to control volume
document.getElementById("background-audio").volume = 0;

// Hide buttons initially
paperBtn.style.visibility = "hidden";
rockBtn.style.visibility = "hidden";
scissorsBtn.style.visibility = "hidden";

// Fade-in Function
function fadeIn(element) {
  let opacity = 0;
  let interval = setInterval(function () {
    if (opacity < 1) {
      opacity = 1;
      element.style.opacity = opacity;
    } else {
      clearInterval(interval);
    }
  });
}

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
    fadeIn(userWelcome, paperBtn);
    // Play Audio
    iWantAudio.play();
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
  location.reload();
});

// Variable for score
let score = 0;

// Variable for result of game
let result;

// Variable for quotes
let quote;

// Set jump scare to false so can then set it to true once happened so it can only happen once
let negativeScare = false;
let positiveScare = false;

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
  fadeIn(showResult);
  showScore.textContent = `Your current score: ${score}`;

  // Quotes dependent on score
  let plusScoreQuotes = [
    "If your good at anticipating the human mind it leave's nothing to chance",
    "It will be like finding a needle in a haystack",
    "Most people are so ungrateful to be alive...but not you, not anymore",
    "Don't worry, you're sound asleep and can't feel a thing",
    "How you play the cards you're dealt is all that matters",
  ];
  let minusScoreQuotes = [
    "Live or die. Make your choice",
    "The rules of the game have been made very clear",
    "Death is a surprise party. Unless of course, you're already dead on the inside",
    "You're probably wondering where you are. I'll tell you where you might be. You might be in the room you die in",
    "Once you are in hell, only the devil can help you out",
    "I'm sick of it all",
  ];
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
    restartBtn.style.backgroundColor = "transparent";
    restartBtn.style.color = "red";
    restartBtn.style.border = "2px solid red";
  }

  // Mid game scare for negative score
  if (score === -2 && !negativeScare) {
    helplessAudio.play();
    document.body.style.transition = "background-image 0.3s ease";
    document.body.style.backgroundImage = 'url("./IMG/test_image.jpg")';

    setTimeout(function () {
      document.body.style.backgroundImage = 'url("./IMG/saw_home.jpg")';
    }, 200);

    negativeScare = true;
  }

  // Mid game scare for positive score
  if (score === 2 && !positiveScare) {
    hurryAudio.play();
    document.body.style.transition = "background-image 0.3s ease";
    document.body.style.backgroundImage = 'url("./IMG/positive_score.jpg")';

    setTimeout(function () {
      document.body.style.backgroundImage = 'url("./IMG/saw_home.jpg")';
    }, 200);

    positiveScare = true;
  }

  // Game over
  if (score === -4) {
    haAudio.play();
    document.body.style.transition = "background-image 0.5s ease";
    document.body.style.backgroundImage = 'url("./IMG/saw_end.jpg")';
    removeAll.remove();

    // Create game over header
    const gameOverHeader = document.createElement("h2");
    gameOverHeader.textContent = "GAME OVER";
    gameOverHeader.style.color = "black";
    gameOverHeader.style.fontSize = "6rem";
    gameOverHeader.style.fontFamily = "Saw-original";

    document.body.appendChild(gameOverHeader);
  }

  // Win Game
  if (score === 4) {
    congratsAudio.play();
    document.body.style.transition = "background-image 0.5s ease";
    document.body.style.backgroundImage = 'url("./IMG/saw_win.jpg")';
    removeAll.remove();

    // Create game over header
    const winnerHeader = document.createElement("h2");
    winnerHeader.textContent = "YOU WIN";
    winnerHeader.style.color = "white";
    winnerHeader.style.fontSize = "6rem";
    winnerHeader.style.fontFamily = "Saw-original";

    document.body.appendChild(winnerHeader);
  }
}
