const input = document.getElementById("todo");
const submitBtn = document.querySelector(".submit-btn");
const list = document.querySelector(".todo-list");

// Add Task
submitBtn.addEventListener("click", () => {
  const inputValue = input.value.trim();
  if (inputValue !== "") {
    let listItem = document.createElement("li");
    listItem.textContent = inputValue;
    list.appendChild(listItem);
  }
  input.value = "";
});
