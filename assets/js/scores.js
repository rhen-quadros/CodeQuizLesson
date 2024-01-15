// scores.js

var highScoresList = document.getElementById("highscores");
var clearButton = document.getElementById("clear");

// Display high scores on the page
function displayHighScores() {
  console.log("Displaying high scores...");
  var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
  console.log("High scores from local storage:", highScores);

  highScoresList.innerHTML = ""; // Clear previous high scores

  highScores.forEach((score) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${score.initials} - ${score.score}`;
    highScoresList.appendChild(listItem);
  });

  console.log("Finished displaying high scores.");
}
displayHighScores()

// Clear high scores button
clearButton.addEventListener("click", function () {
  console.log("Clear button clicked.");

  // Clear local storage
  localStorage.removeItem("highScores");

  // Log the updated high scores after clearing
  var updatedHighScores = JSON.parse(localStorage.getItem("highScores")) || [];
  console.log("Updated high scores after clearing:", updatedHighScores);

  // Refresh the displayed high scores after clearing
  displayHighScores();
});
