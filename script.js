const trueButton = document.getElementById('true-btn')
const falseButton = document.getElementById('false-btn')
const questionBoxElement = document.getElementById('questions-box')
// const questionElement = getElementById('question')
let shuffledQuestions, currentQuestionIndex

document.getElementById("questions-box").innerHTML = "New text!"



trueButton.addEventListener('click' , submitAnswer)
falseButton.addEventListener('click', submitAnswer)

//Code runs when T/F buttons clicked
function submitAnswer() {
  console.log('submitted')
  }

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
}
//showing of questions



let questionList = {question: "Question0", question: "Question1", question: "Question2"}
// for (let i = 0; i < questionList.length; i++ )
// console.log(questionList[0])

//TO DO

//Show questions
//Increment questions
//Button functions