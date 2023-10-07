const cowbellAudio = document.getElementById("cowbell");
const cowbellBtn = document.querySelector(".cowbell");

cowbellBtn.addEventListener("click", () => {
  cowbellAudio.play();
});
