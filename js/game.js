import { formatData } from "./helper.js";

const loader = document.getElementById("loader");
const container = document.getElementById("container");
const questionText = document.getElementById("question-text");
const answerList = document.querySelectorAll(".answer-list");
const scoreText = document.getElementById("score");
const questionNumberText = document.getElementById("question-number");
const nextButton = document.getElementById("next-button");
const finishButton = document.getElementById("finish-button");

const URL =
  "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";
let formatedData = null;
let questionIndex = 0;
let questionNumber = 1;
let correctAnswer = null;
let score = 0;
let isAccepted = true;

const saveUserPoint = (point) => {
  localStorage.setItem("user-point", point);
};

const fetchData = async () => {
  const response = await fetch(URL);
  const json = await response.json();
  formatedData = formatData(json.results);
  start();
};

const start = () => {
  showQuestion();
  loader.style.display = "none";
  container.style.display = "block";
};

const showQuestion = () => {
  const { question, answer, correctAnswerIndex } = formatedData[questionIndex];
  correctAnswer = correctAnswerIndex;
  questionText.innerText = question;
  answerList.forEach((button, index) => {
    button.innerText = answer[index];
  });
};

const checkAnswer = (index) => {
  if (!isAccepted) return;
  isAccepted = false;
  if (index === correctAnswer) {
    answerList[index].style.background = "#27FE21 ";
    score += 10;
    scoreText.innerText = score;
  } else {
    answerList[index].style.background = "#FE2121";
    answerList[correctAnswer].style.background = "#27FE21 ";
  }
};

const nextHandler = () => {
  questionNumber++;
  questionIndex++;
  answerList.forEach((button) => (button.style.background = "#dddddd"));
  isAccepted = true;
  questionNumberText.innerText = questionNumber;
  if (questionIndex === formatedData.length) {
    score = 0;
    if (score === formatData.length) {
      window.location.assign("../html/end.html");
    }
  } else {
    showQuestion();
  }
};

const finishHandler = () => {
  window.location.assign("../html/end.html");
  saveUserPoint(score);
};

window.addEventListener("load", fetchData);
answerList.forEach((button, index) =>
  button.addEventListener("click", () => checkAnswer(index))
);
nextButton.addEventListener("click", nextHandler);
finishButton.addEventListener("click", finishHandler);
