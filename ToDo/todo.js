const input = document.getElementById("todo");
const submitBtn = document.querySelector(".submit-btn");

// Get input value
input.addEventListener("keypress", (e) => {
  let value = e.target.value;
  console.log(value);
});

// Button submit
submitBtn.addEventListener("click", () => {
  console.log("btn clicked");
});
