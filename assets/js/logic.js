// DOM elements
const scoreElement = document.querySelector("#final-score");
const timerElement = document.querySelector(".timer");
const startButton = document.querySelector("#start");
const questionContainer = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const choicesContainer = document.querySelector("#choices");
var feedbackElement = document.getElementById("feedback");
var finalScoreElement = document.getElementById("final-score");
var initialInputElement = document.getElementById("initials");
var submitButton = document.getElementById("submit");

var highScoresList = document.getElementById("highscores");
var clearButton = document.getElementById("clear");

// Questions
var javascriptQuiz = [
  {
    question: "What is the result of the expression: 2 + 2 * 2?",
    choices: ["4", "6", "8", "10"],
    correctChoice: "6",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    choices: ["var", "let", "const", "variable"],
    correctChoice: "var",
  },
  {
    question: "What does the 'DOM' stand for?",
    choices: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Model",
      "Document Oriented Model",
    ],
    correctChoice: "Document Object Model",
  },
  {
    question: "How do you check the type of a variable in JavaScript?",
    choices: ["typeof", "type", "typeOf", "instanceof"],
    correctChoice: "typeof",
  },
  {
    question:
      "Which method is used to add elements to the end of an array in JavaScript?",
    choices: ["push()", "append()", "addToEnd()", "insertEnd()"],
    correctChoice: "push()",
  },
];

// Game variables
let timerOnDisplay = 0;
let currentQuestionIndex = 0;
let finalScore = 0;
let isPlaying = false;
let timer;

// A start button that when clicked a timer starts and the first question appears.
startButton.addEventListener("click", function () {
  if (isPlaying) {
    return;
  }
  finalScore = 0;
  isPlaying = true;
  timerOnDisplay = 75;

  startTimer();
  document.getElementById("start-screen").classList.add("hide");
  document.getElementById("questions").classList.remove("hide");
});

function startTimer() {
  timer = setInterval(function () {
    timerOnDisplay--;
    timerElement.textContent = timerOnDisplay;

    if (
      timerOnDisplay === 0 ||
      currentQuestionIndex === javascriptQuiz.length
    ) {
      clearInterval(timer);
      document.getElementById("questions").classList.add("hide");
      document.getElementById("end-screen").classList.remove("hide");
      console.log("Timer reached 0. End screen is now visible.");
    } else {
      showQuestion();
    }
  }, 1000);
}

// Questions contain buttons for each answer.
function showQuestion() {
  var currentQuestion = javascriptQuiz[currentQuestionIndex];

  questionTitle.textContent = currentQuestion.question;

  choicesContainer.innerHTML = ""; // Clear previous options

  // When answer is clicked, the next question appears
  currentQuestion.choices.forEach((choice) => {
    var button = document.createElement("button");
    button.textContent = choice;
    button.addEventListener("click", function () {
      checkAnswer(choice);
    });
    choicesContainer.appendChild(button);
  });
  questionContainer.classList.remove("hide");
}

// If the answer clicked was incorrect then subtract time from the clock
function checkAnswer(selectedChoice) {
  var currentQuestion = javascriptQuiz[currentQuestionIndex];

  if (selectedChoice === currentQuestion.correctChoice) {
    finalScore++;
    document.getElementById("feedback").classList.remove("hide");
    feedbackElement.textContent = "Correct!";

    // If the answer clicked was incorrect then subtract time from the clock
  } else {
    timerOnDisplay -= 5;
    timerElement.textContent = timerOnDisplay;
    document.getElementById("feedback").classList.remove("hide");
    feedbackElement.textContent = "Incorrect, lose 5 seconds!";
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < javascriptQuiz.length) {
    showQuestion();
    // The quiz should end when all questions are answered or the timer reaches 0.
  } else {
    document.getElementById("questions").classList.add("hide");
    document.getElementById("end-screen").classList.remove("hide");
    finalScoreElement.textContent = finalScore;
    displayHighScores(); // Call the displayHighScores function here
  }
}

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
}

// When the game ends, it should display their score and give the user the ability to save their initials and their score
submitButton.addEventListener("click", function () {
  var initials = initialInputElement.value.trim().slice(0, 3);

  if (initials) {
    var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
    highScores.push({ initials, score: finalScore });

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.href = "highscores.html";
  } else {
    alert("Please enter initials");
  }
});

// Add this load event listener
window.addEventListener("load", function () {
  displayHighScores();
});
