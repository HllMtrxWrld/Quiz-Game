
let time = document.getElementById("time");
let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("start");
let questionsArea = document.getElementById("questions");
let endScreen = document.getElementById("end-screen");
let question = document.getElementById("question-title");
let choiseBox = document.getElementById("choices");
let timer = document.getElementById("time");
let questionIndex = 0;
let timerCounting = 0;
let scores = [];
let timeInterval;
let finalScore = document.getElementById("final-score");
let initialEl = document.getElementById("initials");
let submitButton = document.getElementById("submit");


function nextQuestion() {
  winOrLose();
  if (questionIndex === questions.length) {
    clearInterval(timeInterval);
    return;
  }
  startButton.disabled = true;
  question.textContent = questions[questionIndex].question;
  for (let i = 0; i < questions[questionIndex].options.length; i++) {
    let option = document.createElement("button");
    option.className = "option";
    option.textContent = questions[questionIndex].options[i];
    choiseBox.appendChild(option);
      option.addEventListener("click", function (event) {
        let button1 = event.target;
        if (button1.textContent === questions[questionIndex].rightOption) {
        const correctSound = new Audio("assets/sfx/correct.wav");
        correctSound.play();
        console.log("you won");
        questionIndex++;
        choiseBox.innerText = "";
        nextQuestion();
        } else {
        const incorrectSound = new Audio("assets/sfx/incorrect.wav");
        incorrectSound.play();
        console.log("wrong");
        questionIndex++;
        choiseBox.innerText = "";
        timerCounting -= 15;
        nextQuestion();
        };
        // winOrLose();
      });
      
  };
  

};


function countdown() {
    timerCounting = 60;
    timeInterval = setInterval(function () {
      timerCounting--;
      timer.textContent = timerCounting;
      if (timerCounting <= 0) {
        clearInterval(timeInterval);
      }
    }, 1000);
  };

function setScore() {
  
}

function begin() {
        questionsArea.classList.remove("hide");
        startScreen.classList.add("hide");
        countdown();
        nextQuestion();
    };


  function winOrLose() {
    if (questions[questionIndex] === undefined && timerCounting > 0) {
 
      questionsArea.classList.add("hide");
      endScreen.classList.remove("hide");
      startButton.disabled = false;
      finalScore.textContent = timerCounting;
    } else if (timerCounting <= 0) {
      
      startButton.disabled = false;
      questionsArea.classList.add("hide");
      endScreen.classList.remove("hide");
      finalScore.textContent = timerCounting;
    };
  };

// save results
submitButton.addEventListener("click", function () {
const initials = initialEl.value.trim();
if (initials !== ""){

  let scores = JSON.parse(localStorage.getItem("scores")) || [];

  const newScore = {
    initials: initials,
    score: timerCounting
  };
  scores.push(newScore);
    localStorage.setItem("scores", JSON.stringify(scores));

  }
  endScreen.classList.add("hide");
  startScreen.classList.remove("hide");
  location.reload()
  });




  startButton.addEventListener("click", function () {
    begin();
    console.log(questionIndex);
  });

  

