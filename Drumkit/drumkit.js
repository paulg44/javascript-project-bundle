const cowbellAudio = document.getElementById("cowbell");
const cowbellBtn = document.querySelector(".cowbell");

// Drum audio button clicks
cowbellBtn.addEventListener("click", () => {
  cowbellAudio.play();
});

// Drum audio key stroke
document.addEventListener("keydown", (e) => {
  if (e.key === "y") {
    cowbellAudio.play();
  }
});
