// JavaScript file for quiz app

// Parse wrong answers and correct answer and add into an array of all answers
// Turn array answers into checkbox for each answer
// Assign each checkbox an answer and mix answer using Math random?

// Variable from HTML
const generateBtn = document.querySelector(".generate");
const question = document.querySelector(".question");
const options = document.querySelector(".options");
const answerOne = document.querySelector(".answer-one");
const answerTwo = document.querySelector(".answer-two");
const answerThree = document.querySelector(".answer-three");
const answerFour = document.querySelector(".answer-four");
const nextBtn = document.querySelector(".next");

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

// Generate quiz data on button click
generateBtn.addEventListener("click", async () => {
  const quizData = await generateQuiz();
  console.log(quizData);
  question.textContent = quizData.results[0].question;

  // Combine all answers
  allAnswersArray = [
    ...quizData.results[0].incorrect_answers,
    quizData.results[0].correct_answer,
  ];

  options.textContent = allAnswersArray;
  // This shuffles the answers randomly
  allAnswersArray.sort(() => Math.random() - 0.5);

  // Add an answer to a label
  answerOne.textContent = allAnswersArray.pop();
  answerTwo.textContent = allAnswersArray.pop();
  answerThree.textContent = allAnswersArray.pop();
  answerFour.textContent = allAnswersArray.pop();
});
