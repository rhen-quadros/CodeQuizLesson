// <!DOCTYPE html>
// <html>
//   <head>
//     <title>CSS Box Styling</title>
//     <meta charset="UTF-8" />
//     <meta name="viewport" content="width=device-width, initial-scale=1" />
//     <link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
//   </head>
//   <body>
//     <header>
//       <div class= "large-font">Word Guess Game</div>
//       <button class="start-button">Start</button>
//     </header>

//     <main>
//       <section>
//         <div class="card word-guess">
//           <div class="large-font word-blanks">J _ v _ S c r_ _t</div>
//         </div>
//       </section>

//       <section>
//         <div class="card results">
//           <div class = "win-loss-container">
//           <div>
//           <h2>Wins: <span class="win">0 </span> </h2>
//           <h2>Losses: <span class="lose">0</span></h2>
//         </div>
//           <button class="reset-button">Reset Score</button>
//       </div>
//           <div class= "card timer">
//             <div class = "timer-text">
//             <div class="large-font timer-count">10</div>
//             <h3>seconds remaining</h3>
//           </div>

//           </div>
//         </div>
//       </section>
//     </main>
//     <script src="assets/js/script1.js"></script>
//   </body>
// </html>

var score = document.querySelector("#final-score");
var timerElement = document.querySelector(".timer");
var startButton = document.querySelector("#start");

var javascriptQuiz = [
  {
    question: "What is the result of the expression: 2 + 2 * 2?",
    options: ["4", "6", "8", "10"],
    correctOption: "6",
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    options: ["var", "let", "const", "variable"],
    correctOption: "var",
  },
  {
    question: "What does the 'DOM' stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Model",
      "Document Oriented Model",
    ],
    correctOption: "Document Object Model",
  },
  {
    question: "How do you check the type of a variable in JavaScript?",
    options: ["typeof", "type", "typeOf", "instanceof"],
    correctOption: "typeof",
  },
  {
    question:
      "Which method is used to add elements to the end of an array in JavaScript?",
    options: ["push()", "append()", "addToEnd()", "insertEnd()"],
    correctOption: "push()",
  },
];

var timerOnDisplay = 0;
// var numberOfBlanks = 0;
// var selectedWord = "";
// var blanksOnDisplay = "";
// var timer;
// var winCount = 0;
// var loseCount = 0;
var finalScore = 0;
// var userInput = "";
// var savedWinCount = 0;
var isPlaying = false;
// var savedLoseCount = 0;

// A start button that when clicked a timer starts and the first question appears.
startButton.addEventListener("click", function () {
  if (isPlaying) {
    return;
  }
  finalScore = 0;
  isPlaying = true;
  timerOnDisplay = 75;

  startTimer();
});

function startTimer() {
  timer = setInterval(function () {
    timerOnDisplay--;
    timerElement.textContent = timerOnDisplay;

    if (timerOnDisplay === 0) {
      clearInterval(timer);
      document.getElementById("end-screen").classList.remove("hide");
      console.log("Timer reached 0. End screen is now visible.");
    }
  }, 1000);
}

// Questions contain buttons for each answer.

// When answer is clicked, the next question appears

// If the answer clicked was incorrect then subtract time from the clock

// The quiz should end when all questions are answered or the timer reaches 0.

// When the game ends, it should display their score and give the user the ability to save their initials and their score
