const trueButton = document.getElementById('true-btn')
const falseButton = document.getElementById('false-btn')
const questionBoxElement = document.getElementById('questions-box')
const questionElement = document.getElementById('question')


document.getElementById("questions-box").innerHTML = "New text!"

let currentQuestionIndex

trueButton.addEventListener('click' , submitAnswer)
falseButton.addEventListener('click', submitAnswer)

//Code runs when sub button is clicked
function submitAnswer() {
  console.log('submitted')
  // for (let i = 0; i < questionList.length; i++) {
  //   console.log(questionList[i]);
  }

// function setNextQuestion() {
// }

// //showing of questions
// function selectAnswer() {
//   showQuestion(currentQuestionIndex)
// }

// //Move to next quuestion
// function showQuestion(questionsList) {
// }

let questionList = [
  "question1", 
  "question2", 
  "question3",
  "question4",
  "question5"
]