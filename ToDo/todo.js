const input = document.getElementById("todo");
const submitBtn = document.querySelector(".submit-btn");
const list = document.querySelector(".todo-list");

// Add To List
function addToList() {
  const inputValue = input.value.trim();
  const listItem = document.createElement("li");
  if (inputValue !== "") {
    listItem.textContent = inputValue;
    list.appendChild(listItem);
    let deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "X";
    deleteBtn.addEventListener("click", deleteFromList);
    listItem.appendChild(deleteBtn);
  }
  input.value = "";
}

// Delete from List
function deleteFromList(e) {
  const listItem = e.target.parentElement;
  list.removeChild(listItem);
}
