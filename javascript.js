var startButton = document.getElementById("start");
var timerButton = document.getElementById("timer");

var secondsLeft = 30;

function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timerButton.textContent = secondsLeft + " test";

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }

  }, 1000);
}

function sendMessage() {
  timerButton.textContent = "Time Expired";
}

setTime();
    
//startEl.addEventListener("click", function(){
  //setTime();
//}

    
    

     

    //prompt("questions");
    //reset("score to 0")
    //}

    //Timer to 0
    // Alert time expired, Prompt Initials

    //All questions answered
    // Alert quiz complete, Prompt Initials

    //Submit button resets everything

    //declare variables as arrays
    //var correctAnswers1 = (correctAnswer1);
    //var incorrectAnswers1 = [incorrectAnswer11, incorrectAnswer12, incorrectAnswer13];

    //var correctAnswers2 = (correctAnswer2);
    //var incorrectAnswers2 = [incorrectAnswer21, incorrectAnswer22, incorrectAnswer23];

    //var correctAnswers3 = (correctAnswer3);
    //var incorrectAnswers3 = [incorrectAnswer31, incorrectAnswer32, incorrectAnswer33];

    //var correctAnswers4 = (orrectAnswer4);
    //var incorrectAnswers4 = [incorrectAnswer41, incorrectAnswer42, incorrectAnswer43];


    //if (correctAnswers === true) {

      //alert("Correct");
      //alert(Score + 1)
      //prompt("next question");
    //}

    //else {
      //alert("Incorrect");
      //decrement 5 seconds
      //prompt("same question");

    //};
    //var questionOne = ["The boy walked to the park", "Girl likes to play golf", "Man", "Woman"];
    //for (key in questionOne) {
      //$(".question-1")[key].textContent = questionOne[key];
    //}

    //$(".question-1").on("click", function () {
      //console.log($(this).text())
    //})
  //})
//}
