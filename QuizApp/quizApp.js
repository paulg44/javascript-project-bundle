// JavaScript file for quiz app

// Parse wrong answers and correct answer and add into an array of all answers
// Turn array answers into checkbox for each answer
// Assign each checkbox an answer and mix answer using Math random?

// Variable from HTML
const generateBtn = document.querySelector(".generate");
const question = document.querySelector(".question");
const answerOne = document.querySelector(".answer-one");
const answerTwo = document.querySelector(".answer-two");
const answerThree = document.querySelector(".answer-three");
const answerFour = document.querySelector(".answer-four");
const nextBtn = document.querySelector(".next");
const scoreDisplay = document.querySelector(".score");

// API for quiz
async function generateQuiz() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=21&type=multiple"
  );
  const data = await response.json();
  return data;
}

// Array that has all answers in
let allAnswersArray = [];
// Variable for correct answer
let correctAnswer;
// Empty score array
let score = 0;
// quizData to use throughout
let quizData;
// Variable for nex question
let currentQuestionIndex = 0;

// Function that generates quiz data on button click
generateBtn.addEventListener("click", async () => {
  quizData = await generateQuiz();
  console.log(quizData);

  //   currentQuestionIndex = 0;

  //   question.textContent = quizData.results[currentQuestionIndex].question;

  //   addQuestionsToLabels(quizData);

  //   correctAnswer = quizData.results[0].correct_answer;
  //   console.log(correctAnswer);
  if (quizData.results.length > 0) {
    // Check if there are any questions
    currentQuestionIndex = 0; // Reset currentQuestionIndex
    question.textContent = quizData.results[currentQuestionIndex].question;
    addQuestionsToLabels(quizData);

    correctAnswer = quizData.results[currentQuestionIndex].correct_answer;
    console.log(correctAnswer);
  } else {
    question.textContent = "No questions available.";
  }
});

// Function to add questions to labels
function addQuestionsToLabels(quizData) {
  const currentQuestion = quizData.results[currentQuestionIndex];

  // Combine all answers
  allAnswersArray = [
    ...currentQuestion.incorrect_answers,
    currentQuestion.correct_answer,
  ];

  // This shuffles the answers randomly
  allAnswersArray.sort(() => Math.random() - 0.5);

  // Add an answer to a label
  answerOne.textContent = allAnswersArray.pop();
  answerTwo.textContent = allAnswersArray.pop();
  answerThree.textContent = allAnswersArray.pop();
  answerFour.textContent = allAnswersArray.pop();
}

// Function to get selected answer
function getSelectedAnswer() {
  const checkboxes = document.querySelectorAll(".answer-checkbox");

  for (const checkbox of checkboxes) {
    if (checkbox.checked) {
      const label = document.querySelector(`[for="${checkbox.id}"]`);
      return label.textContent;
    }
  }

  return null;
}

// Function to reset checkboxes and go to next question
function goToNextQuestion(quizData) {
  // Reset Checkboxes
  answerOne.checked = false;
  answerTwo.checked = false;
  answerThree.checked = false;
  answerFour.checked = false;

  // Update question
  currentQuestionIndex++;

  // Check if there are more questions
  if (currentQuestionIndex < quizData.results.length) {
    question.textContent = quizData.results[currentQuestionIndex].question;
    addQuestionsToLabels(quizData);

    correctAnswer = quizData.results[currentQuestionIndex].correct_answer;
    console.log(correctAnswer);
  } else {
    // If there are no more questions, display a message or handle it as needed
    question.textContent = "Your score:";
  }
}

// Function to find out if answer selected is correct
nextBtn.addEventListener("click", () => {
  console.log("test btn clicked");
  const selectedAnswer = getSelectedAnswer();
  console.log(selectedAnswer);

  if (selectedAnswer === correctAnswer) {
    console.log("This is the correct answer");
    score += 1;
  } else {
    console.log("Wrong!!!");
  }

  scoreDisplay.textContent = score;
  goToNextQuestion(quizData);
});
