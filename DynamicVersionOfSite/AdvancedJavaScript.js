let quizData = {};

window.onload = () => {
  fetch('Questions.json')
    .then(res => res.json())
    .then(data => {
      quizData = data;
      ["beginner", "intermediate", "advanced"].forEach(level => {
        renderTextQuestions(level);
        renderMCQuestions(level);
      });
    })
    .catch(err => {
      console.error("Failed to load quiz data:", err);
    });
};

const getResultMessage = (answer, result) => result ? "Correct!" : `Incorrect. The correct answer is: ${answer}`

function checkTextAnswer(index, difficulty = "beginner") {
  let userAnswer, correctAnswer, resultElementId, result = false;

  switch (difficulty) {
    case "intermediate":
      userAnswer = document.getElementById(`intermediate_answer${index}`).value.trim().toLowerCase();
      correctAnswer = quizData.questions.intermediate.textQuestions[index].answer.toLowerCase();
      resultElementId = `intermediate_result${index}`;
      result = userAnswer === correctAnswer;
      break;
    case "advanced":
      userAnswer = document.getElementById(`advanced_answer${index}`).value.trim().toLowerCase();
      correctAnswer = quizData.questions.advanced.textQuestions[index].answer.toLowerCase();
      resultElementId = `advanced_result${index}`;
      result = userAnswer === correctAnswer;
      break;
    default: // beginner
      userAnswer = document.getElementById(`answer${index}`).value;
      correctAnswer = quizData.questions.beginner.textAnswers[index];
      resultElementId = `result${index}`;
      const wordsInUserAnswer = userAnswer.match(/[a-zA-Z]+/g) || [];
      if (index === 0) {
        result = wordsInUserAnswer.every((e) =>
          correctAnswer.split(",").includes(e.toLowerCase())
        );
      } else if (index === 3) {
        result = wordsInUserAnswer.some((e) =>
          correctAnswer.split(",").includes(e.toLowerCase())
        );
      } else if (
        userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()
      ) {
        result = true;
      }
      break;
  }

  document.getElementById(resultElementId).innerHTML = getResultMessage(correctAnswer, result);
}

function checkMCAnswer(index, difficulty = "beginner") {
  let namePrefix
  let resultID

  switch (difficulty) {
    case 'intermediate':
      namePrefix = "ux"
      resultID = `resultm_cux${index}`
      break;
    case 'advanced':
      namePrefix = "advMC"
      resultID = `resultadvMC${index}`
      break;
    default:
      namePrefix = "choice"
      resultID = `resultm_c${index}`
      break;
  }

  const choices = document.getElementsByName(`${namePrefix}${index}`);
  const selected = Array.from(choices).find(choice => choice.checked);

  if (!selected) {
    alert("Please select an answer!");
    return;
  }

  const selectedIndex = parseInt(selected.value);

  let dataSet;
  switch (difficulty) {
    case "beginner":
      dataSet = quizData.questions.beginner.mc;
      break;
    case "intermediate":
      dataSet = quizData.questions.intermediate.mc;
      break;
    case "advanced":
      dataSet = quizData.questions.advanced.mc;
      break;
    default:
      dataSet = [];
  }

  const correctChoice = dataSet[index]?.answer;
  const correctText = dataSet[index]?.choices[correctChoice];

  const result = selectedIndex === correctChoice;

  document.getElementById(resultID).innerHTML = getResultMessage(correctText, result);
}

function renderTextQuestions(difficulty) {
  let questions, containerId, inputPrefix, resultPrefix;
  switch (difficulty) {
    case "intermediate":
      questions = quizData.questions.intermediate.textQuestions;
      containerId = "intermediate_questions";
      inputPrefix = "intermediate_answer";
      resultPrefix = "intermediate_result";
      break;
    case "advanced":
      questions = quizData.questions.advanced.textQuestions;
      containerId = "advanced_questions";
      inputPrefix = "advanced_answer";
      resultPrefix = "advanced_result";
      break;
    default:
      questions = quizData.questions.beginner.text;
      containerId = "beginner_questions";
      inputPrefix = "answer";
      resultPrefix = "result";
      break;
  }

  questions.forEach((q, index) => {
    let questionText = typeof q === "string" ? q : q.question;
    document.getElementById(containerId).innerHTML += `
      <br/><br/>
      <div class="QandA">
        <p>${difficulty !== "beginner" ? `<strong>Q${index + 1}.</strong> ` : ""}${questionText}</p>
        <input type="text" id="${inputPrefix}${index}" placeholder="Your answer here">
        <button onclick="checkTextAnswer(${index}, '${difficulty}')">Submit</button>
        <p id="${resultPrefix}${index}" class="result"></p>
      </div>
    `;
  });
}

function renderMCQuestions(difficulty) {
  let questions, containerId, namePrefix, resultPrefix;
  switch (difficulty) {
    case "intermediate":
      questions = quizData.questions.intermediate.mc;
      containerId = "intermediate_mc_questions";
      namePrefix = "ux";
      resultPrefix = "resultm_cux";
      break;
    case "advanced":
      questions = quizData.questions.advanced.mc;
      containerId = "advanced_mc_questions";
      namePrefix = "advMC";
      resultPrefix = "resultadvMC";
      break;
    default:
      questions = quizData.questions.beginner.mc;
      containerId = "beginner_mc_questions";
      namePrefix = "choice";
      resultPrefix = "resultm_c";
      break;
  }

  questions.forEach((q, index) => {
    document.getElementById(containerId).innerHTML += `
      <br/><br/>
      <div class="m-c">
        <p><strong>Q${difficulty === "beginner" ? "." : index + 1 + "."}</strong> ${q.question}</p>
        ${q.choices.map((choice, i) => `
          <label>
            <input type="radio" name="${namePrefix}${index}" value="${i}">
            <strong>${difficulty === "advanced" ? index + 1 : i + 1})</strong> ${choice}
          </label>
          <br/>
        `).join("")}
        <button onclick="checkMCAnswer(${index}, '${difficulty}')">Check your Answer</button>
        <p id="${resultPrefix}${index}"></p>
      </div>
      ${difficulty === "beginner" ? "<br/>" : ""}
    `;
  });
}
