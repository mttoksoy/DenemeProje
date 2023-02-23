"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let el = document.querySelector(".check");

el.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  if (!guess) {
    document.querySelector(".message").textContent = "❗ No Number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number";

    document.querySelector("body").style.backgroundColor = "#60b347";

    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
      localStorage.setItem("highScore", highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > score ? "📈 Too High" : "📉 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "🤯You Lost The Game";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  window.location.reload();
});
async function uniq() {
  document.querySelector(".highscore").textContent =
    localStorage.getItem("highScore");
  highScore = localStorage.getItem("highScore");
}
uniq();
