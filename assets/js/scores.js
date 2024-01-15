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

// When the game ends, it should display their score and give the user the ability to save their initials and their score
submitButton.addEventListener("click", function () {
  console.log("Submit button clicked.");

  var initials = initialInputElement.value.trim().slice(0, 3);

  if (initials) {
    console.log("Initials entered:", initials);

    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ initials, score: finalScore });

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.href = "highscores.html";
  } else {
    alert("Please enter initials");
  }
});

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
