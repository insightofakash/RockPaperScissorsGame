let scorePlayer = 0;
let scoreComputer = 0;

// Function that randomly outputs rock paper scissor
function computerPlay() {
  rps = ["ROCK", "PAPER", "SCISSOR"];

  randNum = Math.round(Math.random() * 2);
  return rps[randNum];
}

function theRpsGame(playerSelection, computerSelection = computerPlay()) {
  // Getting player input
  playerSelection = prompt("Please select: ").toUpperCase();
  // Printing out player and computer selection
  console.log(`Player selected ${playerSelection}`);
  console.log(`Computer selected ${computerSelection}`);

  // Game Logic
  if (playerSelection === computerSelection) {
    return `This is a draw between ${playerSelection} and ${computerSelection}.`;
  } else if (
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSOR" && computerSelection === "PAPER") ||
    (playerSelection === "ROCK" && computerSelection === "SCISSOR")
  ) {
    scorePlayer++;
    return `You win! ${playerSelection} wins against ${computerSelection}.`;
  } else if (
    (playerSelection === "ROCK" && computerSelection === "PAPER") ||
    (playerSelection === "PAPER" && computerSelection === "SCISSOR") ||
    (playerSelection === "SCISSOR" && computerSelection === "ROCK")
  ) {
    scoreComputer++;
    return `You lose! ${playerSelection} loses against ${computerSelection}.`;
  }
}

// Game loop
function game() {
  for (i = 0; i < 5; i++) {
    console.log(theRpsGame());
    console.log(`Player score is: ${scorePlayer}\nComputer score is: ${scoreComputer}`);
  }

  // Count of score
  if (scorePlayer > scoreComputer) {
    console.log(`Player has won by ${scorePlayer} to ${scoreComputer} points.`);
  } else if (scoreComputer > scorePlayer) {
    console.log(`Player has lost by ${scoreComputer} to ${scorePlayer} points.`);
  } else {
    console.log(`It is a draw. Score is ${scorePlayer} to ${scoreComputer}`);
  }
}

game();
