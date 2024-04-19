let choices = ["rock", "paper", "scissors"];
let computerChoice;
let score = 0;

document.getElementById("rock").addEventListener("click", function() {
  play("rock");
});

document.getElementById("paper").addEventListener("click", function() {
  play("paper");
});

document.getElementById("scissors").addEventListener("click", function() {
  play("scissors");
});

function play(userChoice) {
  computerChoice = getComputerChoice();
  let result = determineWinner(userChoice, computerChoice);
  displayResult(userChoice, computerChoice, result);
  updateScore(result);
}

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "It's a tie! 🤝";
  } else if ((userChoice === "rock" && computerChoice === "scissors") ||
             (userChoice === "paper" && computerChoice === "rock") ||
             (userChoice === "scissors" && computerChoice === "paper")) {
    return "You win! 🎉";
  } else {
    return "Computer wins! 😔";
  }
}

function displayResult(userChoice, computerChoice, result) {
  let userEmoji;
  let computerEmoji;

  switch (userChoice) {
    case "rock":
      userEmoji = "🌎";
      break;
    case "paper":
      userEmoji = "📝";
      break;
    case "scissors":
      userEmoji = "✂️";
      break;
  }

  switch (computerChoice) {
    case "rock":
      computerEmoji = "🌎";
      break;
    case "paper":
      computerEmoji = "📝";
      break;
    case "scissors":
      computerEmoji = "✂️";
      break;
  }

  document.getElementById("result").innerHTML = `You chose ${userEmoji}&nbsp;&nbsp;, computer chose ${computerEmoji}&nbsp;&nbsp;. ${result}`;
}

function updateScore(result) {
  if (result.includes("You win!")) {
    score++;
  }
  document.getElementById("score").innerHTML = score;
}