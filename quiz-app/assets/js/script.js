const questions = [
    { 
        question: "Türkiye'nin yüzölçümü en büyük ili hangisidir?", 
        answers: [
            { text: "Ankara", correct: false }, 
            { text: "Konya", correct: true }, 
            { text: "Erzurum", correct: false }, 
            { text: "Sivas", correct: false }
        ] 
    },
    { 
        question: "Hangi gezegen Güneş'e en yakındır?", 
        answers: [
            { text: "Venüs", correct: false }, 
            { text: "Mars", correct: false }, 
            { text: "Merkür", correct: true }, 
            { text: "Dünya", correct: false }
        ] 
    },
    { 
        question: "Dünya kupasını en çok kazanan ülke hangisidir?", 
        answers: [
            { text: "Almanya", correct: false }, 
            { text: "Brezilya", correct: true }, 
            { text: "Arjantin", correct: false }, 
            { text: "Fransa", correct: false }
        ] 
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft;
let timerInterval;

// DOM Elemanları
const questionText = document.getElementById('question-text');
const answerButtons = document.getElementById('answer-buttons');
const progressBar = document.getElementById('progress-bar');
const timerDisplay = document.getElementById('timer');
const resultArea = document.getElementById('result-area');
const questionArea = document.getElementById('question-area');
const scoreText = document.getElementById('score-text');
const qNumberDisplay = document.getElementById('question-number');

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    resultArea.classList.add('d-none');
    questionArea.classList.remove('d-none');
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    
    // UI Güncelleme
    questionText.innerText = currentQuestion.question;
    qNumberDisplay.innerText = `Soru ${currentQuestionIndex + 1}/${questions.length}`;
    progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;

    // Seçenekleri Oluştur
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn-option');
        button.onclick = () => selectAnswer(answer, button);
        answerButtons.appendChild(button);
    });
    
    startTimer();
}

function resetState() {
    clearInterval(timerInterval);
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function startTimer() {
    timeLeft = 10;
    timerDisplay.innerText = `${timeLeft}s`;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDisplay.innerText = `${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            handleTimeUp();
        }
    }, 1000);
}

function selectAnswer(answer, button) {
    clearInterval(timerInterval);
    const correct = answer.correct;
    
    // Butonları Kilitle
    Array.from(answerButtons.children).forEach(btn => btn.disabled = true);

    if (correct) {
        score++;
        button.classList.add('correct');
    } else {
        button.classList.add('wrong');
        highlightCorrectAnswer();
    }
    
    setTimeout(nextQuestion, 1200);
}

function highlightCorrectAnswer() {
    Array.from(answerButtons.children).forEach(btn => {
        const isCorrect = questions[currentQuestionIndex].answers.find(a => a.text === btn.innerText).correct;
        if (isCorrect) btn.classList.add('correct');
    });
}

function handleTimeUp() {
    highlightCorrectAnswer();
    setTimeout(nextQuestion, 1200);
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    questionArea.classList.add('d-none');
    resultArea.classList.remove('d-none');
    progressBar.style.width = "100%";
    timerDisplay.innerText = "0s";
    scoreText.innerText = `${questions.length} soruda ${score} doğru cevap verdin!`;
}

// İlk başlatma
startQuiz();