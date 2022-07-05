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
    return `This is a draw between ${playerSelection} and ${computerSelection}`;
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    return `You win! ${playerSelection} wins against ${computerSelection}`;
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    return `You lose! ${playerSelection} loses against ${computerSelection}`;
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSOR") {
    return `You lose! ${playerSelection} loses against ${computerSelection}`;
  } else if (playerSelection === "SCISSOR" && computerSelection === "PAPER") {
    return `You win! ${playerSelection} wins against ${computerSelection}`;
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSOR") {
    return `You win! ${playerSelection} wins against ${computerSelection}`;
  } else if (playerSelection === "SCISSOR" && computerSelection === "ROCK") {
    return `You lose! ${playerSelection} loses against ${computerSelection}`;
  }
}

theRpsGame();
