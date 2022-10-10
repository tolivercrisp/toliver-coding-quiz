const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
    startButton.addEventListener('click', startQuiz)
const questionContainerEl = document.getElementById('question-container')
const startTitleEl = document.getElementById('start-title')
const startTextEl = document.getElementById('start-text')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

// starts the quiz
function startQuiz () {
    startButton.classList.add('hide')
    startTitleEl.classList.add('hide')
    startTextEl.classList.add('hide')
    questionOrder = questions
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

// pulls up the next question after previous answer is selected
function setNextQuestion () {
    resetState()
    showQuestion(questionOrder[currentQuestionIndex])

}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function selectAnswer () {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })

}

function setStatusClass(element, correct)

function enterName () {

}

function displayScore () {

}






var questions = [
    {
    question: 'Commonly used data types DO NOT include:',
    answers: [
      { text: '1. strings', correct: false },
      { text: '2. booleans', correct: false },
      { text: '3. alerts', correct: true },
      { text: '4. numbers', correct: false }
    ]
    },
    {
    question: 'The condition in an if / else statement is enclosed within _____.',
    answers: [
        { text: '1. quotes', correct: false },
        { text: '2. curly brackets', correct: false },
        { text: '3. parenthesis', correct: false },
        { text: '4. square brackets', correct: true }
    ]
    },
    {
    question: 'Arrays in Javascript can be used to store _____.',
    answers: [
        { text: '1. numbers and strings', correct: false },
        { text: '2. other arrays', correct: false },
        { text: '3. booleans', correct: false },
        { text: '4. all of the above', correct: true }
    ]
    },
    {
    question: 'String values must be enclosed within _____ when being assigned to variables.',
    answers: [
        { text: '1. commas', correct: false },
        { text: '2. curly brackets', correct: false },
        { text: '3. quotes', correct: false },
        { text: '4. parenthesis', correct: true }
    ]
    },
    {
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:',
    answers: [
        { text: '1. Javascript', correct: false },
        { text: '2. terminal / bash', correct: false },
        { text: '3. for loops', correct: false },
        { text: '4. console.log', correct: true }
    ]
    }

]