//-----------------------------------//
//--------------Questions------------//
//-----------------------------------//

let questions = [
    {
      title: "Commonly used data types DO NOT include:",
      choices: ["strings", "booleans", "alerts", "numbers"],
      answer: "alerts"
    },
    {
      title: "The condition in an if / else statement is enclosed within ____.",
      choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
      answer: "parentheses"
    },
    {
      title: "Repeats until a specific condition becomes false:",
      choices: ["What is the DOM?", "Do While Loop", "For Loop Example", "What is a variable?"],
      answer:  "For Loop Example"
    },
    {
      title: "Removes the first element of an array and returns that element",
      choices: ["Dynamic Typing", "shift()", "Function", "push()"],
      answer: "shift()"
    },
    {
      title: "Returns the first Element within the document that matches the specified selector, or group of selectors, or null, if no matches are found.",
      choices: ["What is variable 'Hoisting'", "document.querySelectorAll()", "Multi Paradigm Language", "document.querySelector()"],
      answer: "document.querySelector()"
    },
    {
      title: "Can read and alter the elements on a webpage",
      choices: ["addEventListener", "For Loop Example", "intervalid", ".innerHTML"],
      answer: ".innerHTML"
    },
    {
      title: "True or False",
      choices: ["What kind of value does Boolean take", "What will an undeclared variable return?", "What are the Strings within Datatypes?", "What are the two ways to add JS to your site?"],
      answer: "What kind of value does Boolean take"
    }, 
    {
      title: "Integer: Whole Number (-1,450) Float: Decimal Point (0.1, 12.454)",
      choices: ["What happens if you call the 'document.write' function after the document has fully loaded?", "What are the two types of Numbers within Datatypes?", "What are the two ways to add JS to your site?","What type of language is JavaScript?"],
      answer: "What are the two types of Numbers within Datatypes?"
    },
    {
      title: "Representation of HTML Page...",
      choices: ["What is the DOM?", "What is DOM?", "What is a variable", "Math.random()"],
      answer: "What is DOM?"
    },
    {
      title: "Adds new elements to the beginning of an array, and returns the new length",
      choices: ["unshift()", "Operators", ".innerHTML", "Do While Loop"],
      answer: "unshift()"
    },

];

//-----------------------------------//
//--------------Let Variables--------//
//-----------------------------------//

let timeEl = document.getElementById("timer");
let secondsLeft = 70;
let timerInterval;

let questionTitle = document.getElementById("Question");
let btnAnswer1 = document.getElementById("btnAnswer1");
let btnAnswer2 = document.getElementById("btnAnswer2");
let btnAnswer3 = document.getElementById("btnAnswer3");
let btnAnswer4 = document.getElementById("btnAnswer4");
let sQuiz = document.getElementById("takeQuiz");
let finalScoreEl = document.getElementById("finalScore");
let startQuizMain = document.getElementById("startQuiz");
let msgResult = document.getElementById("result");
let msgDone = document.getElementById("msgQuizDone");
let msgScoreEl = document.getElementById("msgScore");

let numCorrectAnswers = 0;
let numTotalQuestions = 0;
let idxQuestion = 0;  // first question starts at 0
let blnCorrect = false;
let finalscore = 0;
let blnFinalQuestion = false;

//-----------------------------------//
//-----Clicking on answer button-----//
//-----------------------------------//

sQuiz.addEventListener("click", function  (event) {
    let element = event.target;
    if (element.matches("button")) {

        msgResult.textContent = element.getAttribute("data-answered");
        msgResult.style.color = "red";

        if (element.getAttribute("data-answered") === "Correct") {
            blnCorrect = true;
            msgResult.style.color = "green";
            numCorrectAnswers++;
        } else {
            secondsLeft -= 15;
            checkTimeRemaining ();
        }
        idxQuestion++;
        loadQuestion();
    }
});

function loadQuestion() {
    let idxCorrect = -99;
    if (questions[idxQuestion] === undefined) {

        blnFinalQuestion = true;

        stopQuiz();
        return;
    }

    let correctAnswer = questions[idxQuestion].answer;
    numTotalQuestions++;

    questionTitle.textContent = questions[idxQuestion].title;

    questions[idxQuestion].choices.sort(function() {
        return 0.5 - Math.random();
    });

//-----------------------------------//
//----Find which answer is correct---//
//-----------------------------------//


    for (i = 0; i < questions[idxQuestion].choices.length; i++) {
        if (questions[idxQuestion].choices[i] === correctAnswer) {
            idxCorrect = i;
        }
    }

    btnAnswer1.textContent = questions[idxQuestion].choices[0];
    btnAnswer2.textContent = questions[idxQuestion].choices[1];
    btnAnswer3.textContent = questions[idxQuestion].choices[2];
    btnAnswer4.textContent = questions[idxQuestion].choices[3];

    btnAnswer1.setAttribute("data-answered", "Incorrect");
    btnAnswer2.setAttribute("data-answered", "Incorrect");
    btnAnswer3.setAttribute("data-answered", "Incorrect");
    btnAnswer4.setAttribute("data-answered", "Incorrect");

    switch (idxCorrect) {
        case 0:
            btnAnswer1.setAttribute("data-answered", "Correct");
            break;
        case 1:
            btnAnswer2.setAttribute("data-answered", "Correct");
            break;
        case 2:
            btnAnswer3.setAttribute("data-answered", "Correct");
            break;
        case 3:
            btnAnswer4.setAttribute("data-answered", "Correct");
    }
}

//-----------------------------------//
//--------Timer Functions------------//
//-----------------------------------//

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;

        if (!secondsLeft > 0) {
            secondsLeft = 0;
        }
        timeEl.textContent = "Time: " + secondsLeft.toString().padStart(2, '0');
        checkTimeRemaining();
    }, 1000);
}

function checkTimeRemaining() {

    if (secondsLeft <= 0 || blnFinalQuestion) {
        stopQuiz();
        clearInterval(timerInterval);
        displayFinalScore();
    }
}

//-----------------------------------//
//--------Display Finalscore---------//
//-----------------------------------//

function displayFinalScore() {

    sQuiz.classList.add("d-none")

    finalScoreEl.classList.remove("d-none");
    document.getElementById("msgQuizDone").textContent = "Quiz Finished!";
    if (!secondsLeft > 0) {
        secondsLeft = 0;
    }

    finalscore = 0;
    if (numCorrectAnswers > 0) {

        finalscore = Math.round(100 * (numCorrectAnswers / numTotalQuestions) + (0.2 * secondsLeft));
        if (finalscore > 100) {
            finalscore = 100;
        }
    }
    console.log("note: Total questions = " + numTotalQuestions + "\n correct answers= " + numCorrectAnswers + "\n seconds left= " + secondsLeft + "\n final score = " + finalscore);

    document.getElementById("msgScore").textContent = "Your final score is " + finalscore;
}

//-----------------------------------//
//---------Take Quiz Function--------//
//-----------------------------------//

function startQuiz() {
    idxQuestion = 0;
    loadQuestion();

    startQuizMain.classList.add("d-none");
    sQuiz.classList.remove("d-none");

    setTime();
}

//-----------------------------------//
//---------Stop Quiz Function--------//
//-----------------------------------//
function stopQuiz() {
    btnAnswer1.disabled = true;
    btnAnswer1.classList.remove("btn-primary");
    btnAnswer1.classList.add("btn-secondary");
    btnAnswer2.disabled = true;
    btnAnswer2.classList.remove("btn-primary");
    btnAnswer2.classList.add("btn-secondary");
    btnAnswer3.disabled = true;
    btnAnswer3.classList.remove("btn-primary");
    btnAnswer3.classList.add("btn-secondary");
    btnAnswer4.disabled = true;
    btnAnswer4.classList.remove("btn-primary");
    btnAnswer4.classList.add("btn-secondary");
}

//-----------------------------------//
//-------Submit Quiz Function--------//
//-----------------------------------//

document.querySelector("#startBtn").onclick = function (event) {

    if (event === null) {
        return;
    }

    startQuiz();
}

document.querySelector("#submitBtn").onclick = function (event) {

    if (event === null) {
        return;
    }

    if (document.getElementById("xInitials").value.length === 0) {
        alert("Please enter your initials to submit your quiz score.");
        return;
    }
    if (finalscore === 0) {
        alert("Sorry, your score must be above a zero to be saved.");
        return;
    }

    Scores = JSON.parse(localStorage.getItem('highscores'));

    if (Scores !== null) {

        Scores.push({
            'initials': document.getElementById("xInitials").value,
            'highscore': finalscore
        });
    } else {

        Scores = [];
        Scores.push({
            'initials': document.getElementById("xInitials").value,
            'highscore': finalscore
        });
    }
    localStorage.setItem('highscores', JSON.stringify(Scores));
    document.getElementById("submitBtn").disabled = true;
    document.getElementById("submitBtn").remove("btn-primary");

    finalScoreEl.classList.add("d-none");
    document.location.href= "index.html";
}