let quizData = {};

window.onload = () => {
  fetch('Questions.json')
    .then(res => res.json())
    .then(data => {
      quizData = data;
      renderBeginnerQuestions();
      renderBeginnerMCQuestions();
      renderIntermediateQuestions();
      renderIntermediateMCQuestions();
      renderAdvancedQuestions();
      renderAdvancedMCQuestions();
    })
    .catch(err => {
      console.error("Failed to load quiz data:", err);
    });
  };

const getResultMessage=(answer,result)=> result ? "Correct!":`Incorrect. The correct answer is: ${answer}`

// functions to check answers
function checkUserAnswer(questionNumber) {
  const userAnswer = document.getElementById(`answer${questionNumber}`).value;
  const answers = quizData.questions.beginner.textAnswers
  const wordsInUserAnswer = userAnswer.match(/[a-zA-Z]+/g);
  let result = false;

  if (questionNumber === 0) {
    result = wordsInUserAnswer.every((e) =>
    answers[questionNumber].split(",").includes(e.toLowerCase())
    );
  } else if (questionNumber === 3) {
    result = wordsInUserAnswer.some((e) =>
    answers[questionNumber].split(",").includes(e.toLowerCase())
    );
    
  } else if (
    userAnswer.toLowerCase() === answers[questionNumber].toLowerCase()
  ) {
    result = true;
  }

  document.getElementById(`result${questionNumber}` ).innerHTML = getResultMessage(answers[questionNumber],result);
}

function checkIntermediateAnswer(index) {
  const userAnswer = document.getElementById(`intermediate_answer${index}`).value.trim().toLowerCase();
  const correctAnswer = quizData.questions.intermediate.textQuestions[index].answer.toLowerCase();
  const result = userAnswer === correctAnswer;
  document.getElementById(`intermediate_result${index}`).innerHTML = getResultMessage(correctAnswer, result);
}
function checkAdvancedAnswer(index) {
  const userAnswer = document.getElementById(`advanced_answer${index}`).value.trim().toLowerCase();
  const correctAnswer = quizData.questions.advanced.textQuestions[index].answer.toLowerCase();
  const result = userAnswer === correctAnswer;
  document.getElementById(`advanced_result${index}`).innerHTML = getResultMessage(correctAnswer, result);
}

function checkMCAnswer(index, difficulty="beginner") {
  let namePrefix
  let resultID

  switch(difficulty){
    case 'intermediate':
      namePrefix = "ux"
      resultID =   `resultm_cux${index}`
      break;
    case 'advanced':
      namePrefix = "advMC"
      resultID =   `resultadvMC${index}`
      break;
    default:
      namePrefix = "choice"
      resultID =   `resultm_c${index}`
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
  switch(difficulty) {
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


// Functions to render questions
function renderBeginnerQuestions() {
  quizData.questions.beginner.text.forEach((question, questionNumber) => {
    document.getElementById("beginner_questions").innerHTML += `
      <br/><br/>
      <div class="QandA">
        <p>${question}</p>
        <input type="text" id="answer${questionNumber}" placeholder="Your answer here">
        <button onclick="checkUserAnswer(${questionNumber})">Submit</button>
        <p id="result${questionNumber}" class="result"></p>
      </div>`;
  });
}

function renderBeginnerMCQuestions() {
  quizData.questions.beginner.mc.forEach((q, questionNumber) => {
    document.getElementById("beginner_mc_questions").innerHTML += `
      <br/>
      <div class="m-c">
        <p><strong>Q.</strong> ${q.question}</p>
        ${q.choices.map((choice, index) => `
          <label>
            <input type="radio" name="choice${questionNumber}" value="${index}">
            <strong>${index + 1})</strong> ${choice}
          </label>
          <br/>
        `).join("")}
        <button onclick="checkMCAnswer(${questionNumber})">Check your Answer</button>
        <p id="resultm_c${questionNumber}"></p>
      </div><br/>
    `;
  });
}

function renderIntermediateQuestions() {
  quizData.questions.intermediate.textQuestions.forEach((questionObject,index)=>{
    document.getElementById("intermediate_questions").innerHTML += `
      <br/><br/>
      <div class="QandA">
        <p><strong>Q${index + 1}.</strong> ${questionObject.question}</p>
        <input type="text" id="intermediate_answer${index}" placeholder="Your answer here">
        <button onclick="checkIntermediateAnswer(${index})">Submit</button>
        <p id="intermediate_result${index}" class="result"></p>
      </div>
    `;
  });
}

function renderIntermediateMCQuestions(){
  quizData.questions.intermediate.mc.forEach((q,index)=>{
    document.getElementById("intermediate_mc_questions").innerHTML+=`
    <br/><br/>
      <div class="m-c">
        <p><strong>Q${index + 1}.</strong> ${q.question}</p>
        ${q.choices.map((choice, i) => `
        <label>
        <input type="radio" name="ux${index}" value="${i}">
        <strong>${i + 1})</strong> ${choice}
        </label>
        <br/>
        `).join('')}
        <button onclick="checkMCAnswer(${index},'intermediate')">Check your Answer</button>
        <p id="resultm_cux${index}"></p>
      </div>
    `;
  })
}
function renderAdvancedQuestions() {
  quizData.questions.advanced.textQuestions.forEach((questionObject,index)=>{
    document.getElementById("advanced_questions").innerHTML += `
      <br/><br/>
      <div class="QandA">
        <p><strong>Q${index + 1}.</strong> ${questionObject.question}</p>
        <input type="text" id="advanced_answer${index}" placeholder="Your answer here">
        <button onclick="checkAdvancedAnswer(${index})">Submit</button>
        <p id="advanced_result${index}" class="result"></p>
      </div>
    `;
  });
}

function renderAdvancedMCQuestions(){
  quizData.questions.advanced.mc.forEach((questionObject,index)=>{
    document.getElementById("advanced_mc_questions").innerHTML += `
    <br/><br/>
      <div class="m-c">
        <p><strong>Q${index + 1}.</strong> ${questionObject.question}</p>
        ${questionObject.choices.map((choice, i) => `
          <label>
            <input type="radio" name="advMC${index}" value="${i}">
            <strong>${index + 1})</strong> ${choice}
          </label>
          <br/>
        `).join('')}
        <button onclick="checkMCAnswer(${index}, 'advanced')">Check your Answer</button>
        <p id="resultadvMC${index}"></p>
      </div>
    `;
  });
  
}