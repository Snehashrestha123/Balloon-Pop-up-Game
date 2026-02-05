let score = 0;
let timeLeft = 60;
let gameInterval;
let timerInterval;

function startGame() {
  score = 0;
  timeLeft = 60;
  document.getElementById("score").textContent = "Score: " + score;
  document.getElementById("timer").textContent = "Time: " + timeLeft;
  document.getElementById("scoreboard").classList.add("hidden");

 
  gameInterval = setInterval(spawnHeart, 1000);


  timerInterval = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").textContent = "Time: " + timeLeft;
    if (timeLeft <= 0) endGame();
  }, 1000);
}

function spawnHeart() {
  const game = document.getElementById("game");
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.style.left = Math.random() * (window.innerWidth - 60) + "px";


  heart.onclick = () => {
    score++;
    document.getElementById("score").textContent = "Score: " + score;
    heart.classList.add("pop");
    setTimeout(() => heart.remove(), 300);
  };

  game.appendChild(heart);


  setTimeout(() => {
    if (heart.parentNode) heart.remove();
  }, 6000);
}

function endGame() {
  clearInterval(gameInterval);
  clearInterval(timerInterval);
  document.getElementById("finalScore").textContent = score;
  document.getElementById("scoreboard").classList.remove("hidden");
}

function restartGame() {
  document.getElementById("game").innerHTML = "";
  startGame();
}

window.onload = startGame;
