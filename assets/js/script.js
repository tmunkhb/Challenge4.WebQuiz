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
