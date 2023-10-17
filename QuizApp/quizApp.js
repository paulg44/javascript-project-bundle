// JavaScript file for quiz app

// Parse wrong answers and correct answer and add into an array of all answers

// Variable from HTML
const generateBtn = document.querySelector(".generate");
const question = document.querySelector(".question");
const options = document.querySelector(".options");
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

  allAnswersArray.push(quizData.results[0].incorrect_answers);
  allAnswersArray.push(quizData.results[0].correct_answer);

  options.textContent = allAnswersArray;
});
