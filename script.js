// Get the buttons from the HTML by their IDs
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

// Add event listener for rock button
rockButton.addEventListener("click", function () {
  console.log("You chose: Rock 🪨");
});

// Add event listener for paper button
paperButton.addEventListener("click", function () {
  console.log("You chose: Paper 📄");
});

// Add event listener for scissors button
scissorsButton.addEventListener("click", function () {
  console.log("You chose: Scissors ✂️");
});

// Function to randomly select Rock, Paper, or Scissors for the computer
function getComputerChoice() {
  // Create an array with the choices
  const choices = ["Rock 🪨", "Paper 📄", "Scissors ✂️"];

  // Generate a random index between 0 and 2
  const randomIndex = Math.floor(Math.random() * 3);

  // Return the choice at the random index
  return choices[randomIndex];
}

// Example usage of the function
console.log("Computer chose:", getComputerChoice());

// Function to determine the winner
function determineWinner(playerChoice, computerChoice) {
  // Check for a tie
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  // Check for player win conditions
  if (
    (playerChoice === "Rock 🪨" && computerChoice === "Scissors ✂️") ||
    (playerChoice === "Paper 📄" && computerChoice === "Rock 🪨") ||
    (playerChoice === "Scissors ✂️" && computerChoice === "Paper 📄")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }

  // If none of the above, the computer wins
  return "Computer wins!";
}

// Function to handle the player's choice and display results
function playGame(playerChoice) {
  // Get the computer's choice
  const computerChoice = getComputerChoice();

  // Determine the winner
  const resultMessage = determineWinner(playerChoice, computerChoice);

  // Get the result element from the HTML
  const resultElement = document.getElementById("result");

  // Display the player's and computer's choices along with the result
  resultElement.textContent = `You chose: ${playerChoice}. Computer chose: ${computerChoice}. ${resultMessage}`;
}

// Update event listeners to call playGame with the player's choice
rockButton.addEventListener("click", function () {
  playGame("Rock 🪨");
});

paperButton.addEventListener("click", function () {
  playGame("Paper 📄");
});

scissorsButton.addEventListener("click", function () {
  playGame("Scissors ✂️");
});
