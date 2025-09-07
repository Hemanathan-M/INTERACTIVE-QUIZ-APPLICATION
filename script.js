const quizData = [
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tabular Markup Language", "None"],
    answer: "Hyper Text Markup Language"
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "Python", "C++"],
    answer: "CSS"
  },
  {
    question: "Which is not a JavaScript Framework?",
    options: ["React", "Angular", "Vue", "Python"],
    answer: "Python"
  },
  {
    question: "Which is used for backend development?",
    options: ["Java", "Node.js", "PHP", "All of the above"],
    answer: "All of the above"
  }
];

let currentQuestion = 0;
let score = 0;

const quizContainer = document.getElementById("quiz");
const nextBtn = document.getElementById("nextBtn");
const result = document.getElementById("result");

function loadQuestion() {
  const questionData = quizData[currentQuestion];
  quizContainer.innerHTML = `
    <h2>${questionData.question}</h2>
    ${questionData.options.map(option => 
      `<div class="option" onclick="checkAnswer(this)">${option}</div>`
    ).join('')}
  `;
}

function checkAnswer(selected) {
  const questionData = quizData[currentQuestion];
  if (selected.textContent === questionData.answer) {
    selected.classList.add("correct");
    score++;
  } else {
    selected.classList.add("wrong");
  }
  const options = document.querySelectorAll(".option");
  options.forEach(option => option.style.pointerEvents = "none");
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    quizContainer.innerHTML = `<h2>Quiz Completed!</h2><p>Your Score: ${score}/${quizData.length}</p>`;
    nextBtn.style.display = "none";
  }
});

loadQuestion();
