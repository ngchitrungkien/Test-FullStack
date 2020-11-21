const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "The Rio 2016 Summer Olympics held it's closing ceremony on what date?",
        answers: [
            { text: 'August 23', correct: false },
            { text: 'August 21', correct: true },
            { text: 'August 19', correct: false },
            { text: 'August 17', correct: false }
        ]
    },
    {
        question: "Who won the 2016 Formula 1 World Driver's Championship?",
        answers: [
            { text: 'Lewis Hamilton', correct: false },
            { text: 'Kimi Raikkonen', correct: false },
            { text: 'Nico Rosberg', correct: true },
            { text: 'Max Verstappen', correct: false }
        ]
    },
    {
        question: "What team did England beat to win in the 1966 World Cup final?",
        answers: [
            { text: 'West Germany', correct: true },
            { text: 'Soviet Union', correct: false },
            { text: 'Brazil', correct: false },
            { text: 'Portugal', correct: false }
        ]
    },
    {
        question: "Who won the UEFA Champions League in 2016?",
        answers: [
            { text: 'Manchester City F.C.', correct: false },
            { text: 'FC Bayern Munich', correct: false },
            { text: 'Atletico Madrid', correct: false },
            { text: 'Real Madrid C.F.', correct: true }
        ]
    },
    {
        question: "In the 2014 FIFA World Cup, what was the final score in the match Brazil - Germany?",
        answers: [
            { text: '1-5', correct: false },
            { text: '1-6', correct: false },
            { text: '1-7', correct: true },
            { text: '2-6', correct: false }
        ]
    }
]