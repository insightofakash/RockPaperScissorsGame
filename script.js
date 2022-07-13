let scorePlayer = 0;
let scoreComputer = 0;
let roundCount = 0;
let playerOptionsDiv = document.querySelector(".playerOptions");
let resultText = document.querySelector(".resultText");
let finalResultText = document.querySelector(".finalResultText");
let roundCountText = document.querySelector(".roundCountText");
let currentPlayerScore = document.querySelector(".currentPlayerScore");
let currentComputerScore = document.querySelector(".currentComputerScore");
let playerImg = document.querySelector(".playerImg");
let computerImg = document.querySelector(".computerImg");

// Function that randomly outputs rock paper scissor
function computerPlay() {
  rps = ["ROCK", "PAPER", "SCISSOR"];

  randNum = Math.round(Math.random() * 2);
  return rps[randNum];
}

function theRpsGame(playerSelection, computerSelection = computerPlay()) {
  if (computerSelection == "ROCK") {
    computerImg.src = "img/Rock.png";
  } else if (playerSelection == "PAPER") {
    computerImg.src = "img/Paper.png";
  } else if (playerSelection == "SCISSOR") {
    computerImg.src = "img/Scissor.png";
  }
  if (playerSelection == "ROCK") {
    playerImg.src = "img/Rock.png";
  } else if (playerSelection == "PAPER") {
    playerImg.src = "img/Paper.png";
  } else if (playerSelection == "SCISSOR") {
    playerImg.src = "img/Scissor.png";
  }

  if (scorePlayer == 5) {
    finalResultText.textContent = `Player wins. Score is ${scorePlayer} - ${scoreComputer}.`;
  } else if (scoreComputer == 5) {
    finalResultText.textContent = `Computer wins. Score is ${scorePlayer} - ${scoreComputer}.`;
  } else {
    if (playerSelection === computerSelection) {
      // Game Logic
      roundCount++;
      resultText.textContent = `This is a draw between ${playerSelection} and ${computerSelection}.`;
    } else if (
      (playerSelection === "PAPER" && computerSelection === "ROCK") ||
      (playerSelection === "SCISSOR" && computerSelection === "PAPER") ||
      (playerSelection === "ROCK" && computerSelection === "SCISSOR")
    ) {
      roundCount++;
      scorePlayer++;
      resultText.textContent = `You win! ${playerSelection} wins against ${computerSelection}.`;
      currentPlayerScore.textContent = scorePlayer;
    } else if (
      (playerSelection === "ROCK" && computerSelection === "PAPER") ||
      (playerSelection === "PAPER" && computerSelection === "SCISSOR") ||
      (playerSelection === "SCISSOR" && computerSelection === "ROCK")
    ) {
      roundCount++;
      scoreComputer++;
      resultText.textContent = `You lose! ${playerSelection} loses against ${computerSelection}.`;
      currentComputerScore.textContent = scoreComputer;
    }
  }
  roundCountText.textContent = `Round : ${roundCount}`;
}

// Options for player's selection
const playRound = playerOptionsDiv.addEventListener("click", function (e) {
  playerSelection = e.target.innerText.toUpperCase();
  theRpsGame(playerSelection);
});
