
let time = document.getElementById("time");
let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("start");
let questionsArea = document.getElementById("questions");
let question = document.getElementById("question-title");
let choiseBox = document.getElementById("choices");
let questionIndex = 0;


// init();


startButton.addEventListener("click", function startGame() {
    questionsArea.classList.remove("hide");
     startButton.disabled = true;
    question.textContent = questions[0].question;

    for (let i = 0; i < questions[questionIndex].options.length; i++) {
        const option = document.createElement("button");
        option.className = "option";
        option.textContent = questions[questionIndex].options[i];
        choiseBox.appendChild(option);

        option.addEventListener("click", function (event) {
        const button1 = event.target;
        if (button1.textContent === questions[0].rightOption) {
            console.log("you won");
            questionIndex++;
            nextQuestion();
        };
    });
   
};   
});




function nextQuestion() {
    question.textContent = questions[questionIndex].question;
    var buttonList = document.querySelectorAll(".option");
    // console.log(liList);
    
    for (let i = 0; i < questions[questionIndex].options.length; i++) {
        buttonList[i].textContent = questions[questionIndex].options[i];  
    };  
   
    option.addEventListener("click", function (event) {
        const button1 = event.target;
        if (button1.textContent === questions[0].rightOption) {
            console.log("you won");
            questionIndex++;
            nextQuestion();
        };
    });
};  


    


