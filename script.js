
var Allquestions = questions.length;
var quizContainer = document.getElementById("quiz-container");
var questQuiz = document.getElementById("question");
var nextBtn = document.getElementById("next");
var startBtn = document.getElementById("start");

var quest1 = document.getElementById("quest1");
var quest2 = document.getElementById("quest2");
var quest3 = document.getElementById("quest3");
var quest4 = document.getElementById("quest4");

var subBtn = document.getElementById("submit");
var result = document.getElementById("result");

var currentQuestion = 0;
var score = 0;
var count = 60;

var setTime;
function clock() {
  setTime = setInterval(myClock, 1000);
    function myClock() {
        document.getElementById("timer").innerHTML = count--;
        if (count == 0) {
        clearInterval(setTime);
       }
    }
}

function startQuestion (questionIndex){
    document.getElementById("start").disabled = true;
    var mainQuest = questions[questionIndex];
    questQuiz.textContent = (questionIndex + 1) + '. ' + mainQuest.question;
    quest1.textContent = mainQuest.option1;
    quest2.textContent = mainQuest.option2;
    quest3.textContent = mainQuest.option3;
    quest4.textContent = mainQuest.option4;
};
function NextQuestion(){
    var userChoice = document.querySelector('input[type=radio]:checked');
    if(!userChoice){
        alert("Please select answer.");
        return;
    }
    var answer = userChoice.value;
    if(questions[currentQuestion].answer === answer){
        score += 1;
    }
    userChoice.checked = false;
    currentQuestion++;
    if (currentQuestion == Allquestions){
        startBtn.style.visibility='hidden';
        nextBtn.style.visibility='hidden';
        quizContainer.style.display="none";
        result.style.display="";
        result.textContent = score;
        return;
    }
    startQuestion(currentQuestion);
}


function calcScore(){
  document.getElementById("result").score;
  return;
}