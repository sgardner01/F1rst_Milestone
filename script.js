const submitButton = document.getElementById('submit-btn')
const questionBoxElement = document.getElementById('questions-box')
const questionElement = document.getElementById('question')

let currentQuestionIndex

submitButton.addEventListener('click' , submitAnswer)
// trueButton.addEventListener('click', checkAnswer)
// falseButton.addEvenetListener('click', checkAnswer)

//Code runs when sub button is clicked
function submitAnswer() {
  console.log('submitted')
  for (let i = 0; i < questionList.length; i++) {
    console.log(questionList[i]);
  }
  setNextQuestion()
}

function setNextQuestion() {
}

//showing of questions
function selectAnswer() {
  showQuestion(currentQuestionIndex)
}

//Move to next quuestion
function showQuestion(questionsList) {
}

let questionList = [
  'question1', 
  'question2', 
  'question3',
  'question4',
  'question5'
]