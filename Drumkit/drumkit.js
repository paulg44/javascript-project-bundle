// Audio Variables
const snareAudio = document.getElementById("snare");
const hiHatOpenAudio = document.getElementById("hi-hat-open");
const hiHatClosedAudio = document.getElementById("hit-hat-closed");
const bassAudio = document.getElementById("bass");
const tomLowAudio = document.getElementById("tom-low");
const tomMidAudio = document.getElementById("tom-mid");
const tomHighAudio = document.getElementById("tom-high");
const crashAudio = document.getElementById("crash");
const splashAudio = document.getElementById("splash");
const cowbellAudio = document.getElementById("cowbell");
const sticksAudio = document.getElementById("stick");

// Button Variables
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
