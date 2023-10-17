// JavaScript file for quiz app

// Variable from HTML
const generateBtn = document.querySelector(".generate");

// API for quiz
async function generateQuiz() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=15&category=21"
  );
  const data = await response.json();
  return data;
}
generateBtn.addEventListener("click", async () => {
  console.log("btn clicked");
  const quizData = await generateQuiz();
  console.log(quizData);
});
