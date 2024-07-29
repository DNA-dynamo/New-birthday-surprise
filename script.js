
document.getElementById('startButton').addEventListener('click', startQuiz);

const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Berlin", "Madrid"],
        correct: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: "Pacific Ocean"
    }
];

let currentQuestion = 0;
const quizContainer = document.getElementById('quiz');
const questionContainer = document.getElementById('question');
const answersContainer = document.getElementById('answers');
const nextButton = document.getElementById('nextButton');

function startQuiz() {
    document.getElementById('startButton').classList.add('hidden');
    quizContainer.classList.remove('hidden');
    showQuestion();
}

function showQuestion() {
    questionContainer.innerText = quizData[currentQuestion].question;
    answersContainer.innerHTML = '';

    quizData[currentQuestion].answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer;
        button.addEventListener('click', () => selectAnswer(answer));
        answersContainer.appendChild(button);
    });
}

function selectAnswer(answer) {
    if (answer === quizData[currentQuestion].correct) {
        nextButton.classList.remove('hidden');
    }
}

nextButton.addEventListener('click', () => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
        nextButton.classList.add('hidden');
    } else {
        showVideo();
    }
});

function showVideo() {
    quizContainer.classList.add('hidden');
    document.getElementById('video').classList.remove('hidden');
    document.getElementById('birthdayVideo').src = 'YOUR_VIDEO_URL_HERE'; // Replace with your video URL
}
