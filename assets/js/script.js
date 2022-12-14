const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerEl = document.getElementById('question-container')
const startTitleEl = document.getElementById('start-title')
const startTextEl = document.getElementById('start-text')
const questionEl = document.getElementById('question')
const answerButtonsEl = document.getElementById('answer-buttons')
const resultEl = document.getElementById('result')
const endGameEl = document.getElementById('end-game')
let endGameScore = document.getElementById('user-score')
let scoreNumber = document.getElementById('score-number')
const reloadEl = document.getElementById('reload')
const usernameContainerEl = document.getElementById('username-container')
const scoreButton = document.getElementById('score-btn')
const scoreCard = document.getElementById('view-score')
const highscoreText = document.getElementById('highscore-text')


let score = 0

let questionOrder, currentQuestionIndex

function timer(){
    let sec = 120;
    var timer = setInterval(function(){
        document.getElementById('countdown').innerHTML= sec;
        sec--;
        if (sec < 0 || startButton.innerText === 'Restart') {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

startButton.addEventListener('click', startQuiz)
startButton.addEventListener('click', timer)

// Couldn't get the highscore button to work
/* scoreButton.addEventListener('click', () => {
    saveUsername()
    scoreCard.classList.remove('hide')
    highscoreText.innerText = localStorage.getItem('highScore[]')
    
}) */

nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


// starts the quiz
function startQuiz () {
    startButton.classList.add('hide')
    startTitleEl.classList.add('hide')
    startTextEl.classList.add('hide')
    questionOrder = questions.sort(() => Math.random() - .5)
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
    clearClassColor(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild(answerButtonsEl.firstChild)
    }
}

function selectAnswer (e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    if (selectedButton.dataset.correct) {
        score++ 
        scoreNumber.innerText = score
        
    } else {
        sec -= 10
    }
    setClassColor(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setClassColor(button, button.dataset.correct)
    })
    if (questionOrder.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
      } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
      }
}
   
function setClassColor(element, correct) {
    clearClassColor(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
  }
  
function clearClassColor(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    resultEl.classList.add('hide')
}

function endGame () {
    startButton.classList.add('hide')
    questionContainerEl.classList.add('hide')
    endGameEl.classList.remove('hide')
    reloadEl.classList.remove('hide')
    document.getElementById('countdown').innerHTML= '0'
    saveUsername()
}


// Couldn't get the highscore storage to work

/* function saveUsername () {
    usernameContainerEl.classList.remove('hide')
    const username = document.getElementById('username')
    const saveScoreBtn = document.getElementById('saveScoreBtn')
    const finalScore = scoreNumber
    const mostRecentScore = finalScore

    const highScores = JSON.parse(localStorage.getItem('highScores')) || [];

    const MAX_HIGH_SCORES = 5;

    finalScore.innerText = mostRecentScore;

    username.addEventListener('keyup', () => {
        saveScoreBtn.disabled = !username.value;
});

    saveHighScore = (e) => {
        e.preventDefault();

        const scoreObject = {
            score: mostRecentScore,
            name: username.value,
        };
        highScores.push(scoreObject);
        highScores.sort((a, b) => b.score - a.score);
        highScores.splice(5);

        localStorage.setItem('highScores', JSON.stringify(highScores));
        window.location.assign('/');
};
}
*/




const questions = [
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