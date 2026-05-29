const quizData = [
  {
    question: "What is the capital of France?",
    a: "Berlin",
    b: "Madrid",
    c: "Paris",
    d: "Rome",
    correct: "c"
  },
  {
    question: "Which language runs in a web browser?",
    a: "Python",
    b: "Java",
    c: "C",
    d: "JavaScript",
    correct: "d"
  },
  {
    question: "What does HTML stand for?",
    a: "HyperText Markup Language",
    b: "Home Tool Markup Language",
    c: "Hyperlinks and Text Markup Language",
    d: "Hyper Transfer Markup Language",
    correct: "a"
  }
];

let currentQuiz = 0;
let score = 0;

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const nextBtn = document.getElementById('next-btn');

function loadQuiz() {
  deselectAnswers();
  const currentData = quizData[currentQuiz];
  questionEl.textContent = currentData.question;
  a_text.textContent = currentData.a;
  b_text.textContent = currentData.b;
  c_text.textContent = currentData.c;
  d_text.textContent = currentData.d;
}

let selectedAnswer = null;

function selectAnswer(answer) {
  selectedAnswer = answer;
  const correct = quizData[currentQuiz].correct;
  if (answer === correct) {
    score++;
  }
  nextBtn.style.display = 'inline';
}

function deselectAnswers() {
  selectedAnswer = null;
  nextBtn.style.display = 'none';
}

function nextQuestion() {
  currentQuiz++;
  if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    document.getElementById('quiz').innerHTML = `
      <h2>You answered ${score}/${quizData.length} correctly!</h2>
      <button onclick="location.reload()">Reload</button>
    `;
  }
}

loadQuiz();