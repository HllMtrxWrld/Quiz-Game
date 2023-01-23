
let time = document.getElementById("time");
let startScreen = document.getElementById("start-screen");
let startButton = document.getElementById("start");
let questionsArea = document.getElementById("questions");

// init();

startButton.addEventListener("click", function startGame() {
    
    startScreen.setAttribute("style", "display: none");
    questionsArea.setAttribute("style", "display: block");
});