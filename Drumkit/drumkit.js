// A more concise way to write the code fromm the bottom of the page, using less code and utilising the forEach method
const drumData = [
  { audio: "snare", btnClass: ".snare", key: "s" },
  { audio: "hi-hat-open", btnClass: ".hi-hat-open", key: "h" },
  { audio: "hi-hat-closed", btnClass: ".hi-hat-closed", key: "c" },
  { audio: "bass", btnClass: ".bass-pedal", key: "b" },
  { audio: "tom-low", btnClass: ".tom-low", key: "t" },
  { audio: "tom-mid", btnClass: ".tom-mid", key: "m" },
  { audio: "tom-high", btnClass: ".tom-high", key: "x" },
  { audio: "crash", btnClass: ".crash", key: "r" },
  { audio: "splash", btnClass: ".splash", key: "l" },
  { audio: "cowbell", btnClass: ".cowbell", key: "o" },
  { audio: "sticks", btnClass: ".sticks", key: "k" },
];

function playAudio(audioElement) {
  audioElement.currentTime = 0;
  audioElement.play();
}

drumData.forEach(({ audio, btnClass, key }) => {
  const audioElement = document.getElementById(audio);
  const buttonElement = document.querySelector(btnClass);

  buttonElement.addEventListener("click", () => {
    playAudio(audioElement);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key.toLowerCase() === key) {
      playAudio(audioElement);
    }
  });
});

// This is my first way of doing this code, it worked perfectly fine but seemed like I was repeating myself. So I had a look at making the code shorter through research and chatgpt.

// // Audio Variables
// const snareAudio = document.getElementById("snare");
// const hiHatOpenAudio = document.getElementById("hi-hat-open");
// const hiHatClosedAudio = document.getElementById("hi-hat-closed");
// const bassAudio = document.getElementById("bass");
// const tomLowAudio = document.getElementById("tom-low");
// const tomMidAudio = document.getElementById("tom-mid");
// const tomHighAudio = document.getElementById("tom-high");
// const crashAudio = document.getElementById("crash");
// const splashAudio = document.getElementById("splash");
// const cowbellAudio = document.getElementById("cowbell");
// const sticksAudio = document.getElementById("sticks");

// // Button Variables
// const snareBtn = document.querySelector(".snare");
// const hiHatOpenBtn = document.querySelector(".hi-hat-open");
// const hitHatClosedBtn = document.querySelector(".hi-hat-closed");
// const bassBtn = document.querySelector(".bass-pedal");
// const tomLowBtn = document.querySelector(".tom-low");
// const tomMidBtn = document.querySelector(".tom-mid");
// const tomHighBtn = document.querySelector(".tom-high");
// const crashBtn = document.querySelector(".crash");
// const splashBtn = document.querySelector(".splash");
// const cowbellBtn = document.querySelector(".cowbell");
// const sticksBtn = document.querySelector(".sticks");

// // Drum audio button clicks
// snareBtn.addEventListener("click", () => {
//   snareAudio.play();
// });
// hiHatOpenBtn.addEventListener("click", () => {
//   hiHatOpenAudio.play();
// });
// hitHatClosedBtn.addEventListener("click", () => {
//   hiHatClosedAudio.play();
// });
// bassBtn.addEventListener("click", () => {
//   bassAudio.play();
// });
// tomLowBtn.addEventListener("click", () => {
//   tomLowAudio.play();
// });
// tomMidBtn.addEventListener("click", () => {
//   tomMidAudio.play();
// });
// tomHighBtn.addEventListener("click", () => {
//   tomHighAudio.play();
// });
// crashBtn.addEventListener("click", () => {
//   crashAudio.play();
// });
// splashBtn.addEventListener("click", () => {
//   splashAudio.play();
// });
// cowbellBtn.addEventListener("click", () => {
//   cowbellAudio.play();
// });
// sticksBtn.addEventListener("click", () => {
//   sticksAudio.play();
// });

// // Drum audio key stroke
// document.addEventListener("keydown", (e) => {
//   if (e.key === "y") {
//     cowbellAudio.play();
//   }
// });
