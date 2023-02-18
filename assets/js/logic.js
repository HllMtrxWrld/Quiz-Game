
let time = document.getElementById("time");
let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("start");
let questionsArea = document.getElementById("questions");
let question = document.getElementById("question-title");
let choiseBox = document.getElementById("choices");
let timer = document.getElementById("time");
let questionIndex = 0;
let timerCounting = 0;




function nextQuestion() {
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
        console.log("you won");
        questionIndex++;
        choiseBox.innerText = "";
        nextQuestion();
        } else {
        console.log("wrong");
        questionIndex++;
        choiseBox.innerText = "";
        timerCounting -= 15;
        nextQuestion();
        };
      });
  };
};


function countdown() {
    timerCounting = 60;
      var timeInterval = setInterval(function () {
        timerCounting--;
     timer.textContent = timerCounting;
    }, 1000);
  };



    function begin() {
        questionsArea.classList.remove("hide");
        countdown();
        

    }




  startButton.addEventListener("click", function () {
    begin();
    nextQuestion();

  });
