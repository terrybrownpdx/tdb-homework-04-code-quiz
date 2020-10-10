$(document).ready(function () {

    $("#start").on("click", function () {
        setTime();
        setAnswers();
    });

    //var startButton = document.getElementById("start");
    var timerButton = document.getElementById("timer");

    var secondsLeft = 60;

    function setTime() {
        var timerInterval = setInterval(function () {
            secondsLeft--;
            timerButton.textContent = secondsLeft + "";

            if (secondsLeft === 0) {
                clearInterval(timerInterval);
                sendMessage();
            }

        }, 1000);
    }
    //Timer to 0//
    // Alert time expired, Prompt Initials//    
    function sendMessage() {
        timerButton.textContent = "Time Expired";
        prompt("Write in Initials");
    }
    function setAnswers() {
        //for (var i = 0; i < allAnswers1.length; i++) {
        //document.querySelectorAll("button")[i].innerText = allAnswers1[i];
        var question1 = ("question number 1");
        var correctAnswers1 = ("correctAnswer");
        var incorrectAnswers1 = ["incorrectAnswer11", "incorrectAnswer12", "incorrectAnswer13"];
        var allAnswers1 = ["correctAnswer", "incorrectAnswer11", "incorrectAnswer12", "incorrectAnswer13"];

        var questionOne = document.getElementById('questions');
        var button1 = document.getElementById('button1');
        var button2 = document.getElementById('button2');
        var button3 = document.getElementById('button3');
        var button4 = document.getElementById('button4');

        questionOne.innerText = question1;
        button1.innerText = allAnswers1[0];
        button2.innerText = allAnswers1[1];
        button3.innerText = allAnswers1[2];
        button4.innerText = allAnswers1[3];
    }
    function setAnswers2() {
        var question2 = ("question number 2");
        var correctAnswers2 = ("correctAnswer2");
        var incorrectAnswers2 = ["incorrectAnswer21", "incorrectAnswer22", "incorrectAnswer23"];
        var allAnswers2 = ["correctAnswer2", "incorrectAnswer21", "incorrectAnswe22", "incorrectAnswer23"];

        var questionTwo = document.getElementById('questions');
        var button1 = document.getElementById('button1');
        var button2 = document.getElementById('button2');
        var button3 = document.getElementById('button3');
        var button4 = document.getElementById('button4');

        questionTwo.innerText = question2;
        button1.innerText = allAnswers2[0];
        button2.innerText = allAnswers2[1];
        button3.innerText = allAnswers2[2];
        button4.innerText = allAnswers2[3];
    }
    function setAnswers3() {
        var question3 = ("question number 3");
        var correctAnswers3 = ("correctAnswer3");
        var incorrectAnswers3 = ["incorrectAnswer31", "incorrectAnswer32", "incorrectAnswer33"];
        var allAnswers3 = ["correctAnswer3", "incorrectAnswer31", "incorrectAnswe32", "incorrectAnswer33"];

        var questionThree = document.getElementById('questions');
        var button1 = document.getElementById('button1');
        var button2 = document.getElementById('button2');
        var button3 = document.getElementById('button3');
        var button4 = document.getElementById('button4');

        questionThree.innerText = question3;
        button1.innerText = allAnswers3[0];
        button2.innerText = allAnswers3[1];
        button3.innerText = allAnswers3[2];
        button4.innerText = allAnswers3[3];
    }
    function setAnswers4() {
        var question4 = ("question number 4");
        var correctAnswers4 = ("correctAnswer4");
        var incorrectAnswers4 = ["incorrectAnswer41", "incorrectAnswer42", "incorrectAnswer43"];
        var allAnswers4 = ["correctAnswer43", "incorrectAnswer41", "incorrectAnswer42", "incorrectAnswer43"];

        var questionFour = document.getElementById('questions');
        var button1 = document.getElementById('button1');
        var button2 = document.getElementById('button2');
        var button3 = document.getElementById('button3');
        var button4 = document.getElementById('button4');

        questionFour.innerText = question4;
        button1.innerText = allAnswers4[0];
        button2.innerText = allAnswers4[1];
        button3.innerText = allAnswers4[2];
        button4.innerText = allAnswers4[3];
    }

    //Need help with aligning answer to proper response.  on click generates correct answer
    $(".button").on("click", function () {
        //pass event value
        //if event.data === true then run correct answer function else 
        if ('correctAnswers1') {
            alert("Correct");
            setAnswers2();
        }
        else {
            alert("Incorrect");
            //decrement(5 seconds);
            setAnswers();
            //for (var i = 0; i < allAnswers1.length; i++) {
            //document.querySelectorAll("button")[i].innerText = allAnswers1[i];
        }
    })

    $(".button").on("click", function () {
        //pass event value
        //if event.data === true then run correct answer function else 
        if ('correctAnswers2') {
            alert("Correct");
            setAnswers3();
        }
        else {
            alert("Incorrect");
            //decrement(5 seconds);
            setAnswers2();
        }
    })

    $(".button").on("click", function () {
        //pass event value
        //if event.data === true then run correct answer function else 
        if ('correctAnswers3') {
            alert("Correct");
            setAnswers4();
        }
        else {
            alert("Incorrect");
            //decrement(5 seconds);
            setAnswers3();
        }
    })

    $(".button").on("click", function () {
        //pass event value
        //if event.data === true then run correct answer function else 
        if ('correctAnswers4') {
            alert("Correct");
            alert("Quiz Complete");
            prompt("Write in Initials");
        }
        else {
            alert("Incorrect");
            //decrement(5 seconds);
            setAnswers4();
        }
    })

})