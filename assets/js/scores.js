let clearButton = document.getElementById("clear");
let scoresList = document.getElementById("highscores");

//The function to get scores from local storage
function getScores (){

//     for( let i = 0; i < JSON.parse(localStorage.getItem("iniArray")).length; i++ ) { 
//         let li= document.createElement("li"); 
//         console.log("testing loop ");
//         li.textContent =  JSON.parse(localStorage.getItem("iniArray"))[i] +" "  + JSON.parse(localStorage.getItem("scArray"))[i];
//         hightScoresId.appendChild(li);
//    }
let scores = localStorage.getItem("scores");
if (scores === null) {
    scores = [];
  } else {
    scores = JSON.parse(scores);
  }
  scores.sort((a, b) => b.score - a.score);
  scores.forEach(function(score) {
    const li = document.createElement("li");
    li.textContent = score.initials + " - " + score.score;
    highscores.appendChild(li);
  });

}   

//The function for clearButton
function clear (){
    scoresList.textContent = localStorage.clear(); 
}    

clearButton.addEventListener("click" , clear);

getScores();