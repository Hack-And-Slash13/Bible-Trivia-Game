const questions = fetch(questions.json);
const question = JSON.parse(questions);
let shuffled_questions = shuffleArray([...questions]);

function checkAnswer(selected, correct) {
  if (selected === correct) {
    alert("Correct!");
  } else {
    alert("Wrong!");
  }
}

  shuffled_questions.textContent = shuffled_questions.question;
  let answers = [
    shuffled_questions.correct_answer,
    shuffled_questions.incorrect_answer1,
    shuffled_questions.incorrect_answer2,
    shuffled_questions.incorrect_answer3
  ];
  answers = shuffleArray(answers);

answerBtns.forEach((btn, x) => {
  btn.textContent = answers[x];
  btn.onclick = () => checkAnswer(btn.textContent, q.correct_answer);
});
