// --------------Beginner level  Q and A functions---------------------//
const getResultMessage = (answer, result) => result ? "Correct!":`Incorrect. The correct answer is: ${answer}`
const findWords = /[a-zA-Z]+/g

function checkUserAnswer(questionNumber){
    const userAnswer = document.getElementById(`answer${questionNumber}`).value.toLowerCase();
    const answers = [
        ["research","design","develop","test","deploy","maintain"],
        ["Native","Web","Hybrid","Progressive"],
        "Software Development Life Cycle",
        ["button","inputbox","dropdown","checkbox","radio"],
        ["HTML","CSS","JavaScript"]
    ]
    let result = false;
    if (questionNumber === 1 || questionNumber === 5 || questionNumber === 2) {
        const wordsInUserAnswer = userAnswer.match(findWords); 
        result = answers[questionNumber-1].every((word) =>{
            return  wordsInUserAnswer.includes(word.toLowerCase())
        });
    } else if (questionNumber === 4) {
        const wordsInUserAnswer = userAnswer.match(findWords); 
        result = wordsInUserAnswer.every((word) =>
            answers[questionNumber-1].includes(word.toLowerCase())
        );
    } else result = userAnswer === answers[questionNumber-1].toLowerCase()
    
    document.getElementById(`result${questionNumber}` ).innerHTML = getResultMessage(answers[questionNumber  - 1], result);
}

//-------------- Beginner level multiple choice answers function-------------------//

function checkMCAnswer1() {
    var choices = document.getElementsByName("choice1");
    var checkMCAnswer1 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

    
    if (selected === checkMCAnswer1) {
        document.getElementById("resultm_c1").innerHTML = "Correct";
    } else {
        document.getElementById("resultm_c1").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer1;
    }
}
//_____________CheckMCAnswer2__________//
function checkMCAnswer2() {
    var choices = document.getElementsByName("choice2");
    var checkMCAnswer2 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

    
    if (selected === checkMCAnswer2) {
        document.getElementById("resultm_c2").innerHTML = "Correct"
    } else {
        document.getElementById("resultm_c2").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer2;
    }
}

//_____________CheckMCAnswer3__________//
function checkMCAnswer3() {
    var choices = document.getElementsByName("choice3");
    var checkMCAnswer3 = "a)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

    
    if (selected === checkMCAnswer3) {
        document.getElementById("resultm_c3").innerHTML = "Correct"
    } else {
        document.getElementById("resultm_c3").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer3;
    }
}
//_____________CheckMCAnswer4__________//
function checkMCAnswer4() {
    var choices = document.getElementsByName("choice4");
    var checkMCAnswer4 = "b)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

    
    if (selected === checkMCAnswer4) {
        document.getElementById("resultm_c4").innerHTML = "Correct"
    } else {
        document.getElementById("resultm_c4").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer4;
    }
}
//_____________CheckMCAnswer5__________//
function checkMCAnswer5() {
    var choices = document.getElementsByName("choice5");
    var checkMCAnswer5 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

    
    if (selected === checkMCAnswer5) {
        document.getElementById("resultm_c5").innerHTML = "Correct"
    } else {
        document.getElementById("resultm_c5").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer5;
    }
}
//_____________CheckMCAnswer6__________//
function checkMCAnswer6() {
    var choices = document.getElementsByName("choice6");
    var checkMCAnswer6 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

    
    if (selected === checkMCAnswer6) {
        document.getElementById("resultm_c6").innerHTML = "Correct"
    } else {
        document.getElementById("resultm_c6").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer6;
    }
}
//_____________CheckMCAnswer7__________//
function checkMCAnswer7() {
    var choices = document.getElementsByName("choice7");
    var checkMCAnswer7 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

    
    if (selected === checkMCAnswer7) {
        document.getElementById("resultm_c7").innerHTML = "Correct"
    } else {
        document.getElementById("resultm_c7").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer7;
    }
}
//_____________CheckMCAnswer8__________//
function checkMCAnswer8() {
    var choices = document.getElementsByName("choice8");
    var checkMCAnswer8 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

    
    if (selected === checkMCAnswer8) {
        document.getElementById("resultm_c8").innerHTML = "Correct"
    } else {
        document.getElementById("resultm_c8").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer8;
    }
}
//_____________CheckMCAnswer9__________//
function checkMCAnswer9() {
    var choices = document.getElementsByName("choice9");
    var checkMCAnswer9 = "a)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

    
    if (selected === checkMCAnswer9) {
        document.getElementById("resultm_c9").innerHTML = "Correct"
    } else {
        document.getElementById("resultm_c9").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer9;
    }
}

//-------------------------Intermediate Q and A section---------------------------//
const getResultIntermediateMessage = (answer, result) => result ? "Correct!":`Incorrect. The correct answer is: ${answer}`
function checkIntermediateAnswer(questionNumber){
    const userAnswer = document.getElementById(`intermediate_answer${questionNumber}`).value.toLowerCase();

    const answers = [
        ["empathize","define","ideate","prototype","test"],
        "get",
        ["array","list"],
        ["minimum","viable","product"],
        ["identify", "usability", "issues"]
    ]
    let result = false;
    if (questionNumber === 1 || questionNumber === 4) {// try now
        const wordsInUserAnswer = userAnswer.match(findWords); 
        result = answers[questionNumber-1].every((word) =>{
            return  wordsInUserAnswer.includes(word.toLowerCase())
        });
    } else if (questionNumber === 3) {
        const wordsInUserAnswer = userAnswer.match(findWords); 
        result = wordsInUserAnswer.every((word) =>
            answers[questionNumber-1].includes(word.toLowerCase())
        );
    } else if (questionNumber === 5) {
        const wordsInUserAnswer = userAnswer.match(findWords); 
        result = answers[questionNumber-1].every((word) =>
            wordsInUserAnswer.includes(word.toLowerCase())
        );
    } else result = userAnswer === answers[questionNumber-1]
    document.getElementById(`intermediate_result${questionNumber}` ).innerHTML = getResultMessage(answers[questionNumber  - 1], result);
}

//-----------------------------Intermediate MC section--------------------------------//

function checkMCAnswer10() {
    var choices = document.getElementsByName("ux5");
    var checkMCAnswer10 = "b)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer10) {
        document.getElementById("resultux5").innerHTML = "Correct"
    } else {
        document.getElementById("resultux5").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer10;
    }
}
//_____________CheckMCAnswer11__________//
function checkMCAnswer11() {
    var choices = document.getElementsByName("ux6");
    var checkMCAnswer11 = "a)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

    if (selected === checkMCAnswer11) {
        document.getElementById("resultux6").innerHTML = "Correct"
    } else {
        document.getElementById("resultux6").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer11;
    }
}
//_____________CheckMCAnswer12__________//
function checkMCAnswer12() {
    var choices = document.getElementsByName("ux7");
    var checkMCAnswer12 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer12) {
        document.getElementById("resultux7").innerHTML = "Correct"
    } else {
        document.getElementById("resultux7").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer12;
    }
}
//_____________CheckMCAnswer13__________//
function checkMCAnswer13() {
    var choices = document.getElementsByName("ux8");
    var checkMCAnswer13 = "b)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer13) {
        document.getElementById("resultux8").innerHTML = "Correct"
    } else {
        document.getElementById("resultux8").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer13;
    }
}
//_____________CheckMCAnswer14__________//
function checkMCAnswer14() {
    var choices = document.getElementsByName("ux9"); 
    var checkMCAnswer14 = "b)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer14) {
        document.getElementById("resultux9").innerHTML = "Correct"
    } else {
        document.getElementById("resultux9").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer14;
    }
}
//_____________CheckMCAnswer15__________//
function checkMCAnswer15() {
    var choices = document.getElementsByName("ux10");
    var checkMCAnswer15 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer15) {
        document.getElementById("resultux10").innerHTML = "Correct"
    } else {
        document.getElementById("resultux10").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer15;
    }
}
//_____________CheckMCAnswer16__________//
function checkMCAnswer16() {
    var choices = document.getElementsByName("ux11");
    var checkMCAnswer16 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer16) {
        document.getElementById("resultux11").innerHTML = "Correct"
    } else {
        document.getElementById("resultux11").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer16;
    }
}
//_____________CheckMCAnswer17__________//
function checkMCAnswer17() {
    var choices = document.getElementsByName("ux12");
    var checkMCAnswer17 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer17) {
        document.getElementById("resultux12").innerHTML = "Correct"
    } else {
        document.getElementById("resultux12").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer17;
    }
}
//_____________CheckMCAnswer18__________//
function checkMCAnswer18() {
    var choices = document.getElementsByName("ux13");
    var checkMCAnswer18 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

    ;
    if (selected === checkMCAnswer18) {
        document.getElementById("resultux13").innerHTML = "Correct"
    } else {
        document.getElementById("resultux13").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer18;
    }
}
//_____________CheckMCAnswer19__________//
function checkMCAnswer19() {
    var choices = document.getElementsByName("ux14");
    var checkMCAnswer19 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer19) {
        document.getElementById("resultux14").innerHTML = "Correct"
    } else {
        document.getElementById("resultux14").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer19;
    }
}
//_____________CheckMCAnswer20__________//
function checkMCAnswer20() {
    var choices = document.getElementsByName("ux15");
    var checkMCAnswer20 = "b)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer20) {
        document.getElementById("resultux15").innerHTML = "Correct"
    } else {
        document.getElementById("resultux15").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer20;
    }
}
//_____________CheckMCAnswer21__________//
function checkMCAnswer21() {
    var choices = document.getElementsByName("ux16");
    var cheMCAnswer21 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

    ;
    if (selected === checkMCAnswer21) {
        document.getElementById("resultux16").innerHTML = "Correct"
    } else {
        document.getElementById("resultux16").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer21;
    }
}

//------------------------Advanced level Q and A section----------------------------//
function checkAdvancedAnswer(index) {
    const answers = [
        ["create","read","update","delete"],
        "flask",
        "application programming interface", 
        ["ads", "content", "marketing" ,"partnerships", "seo","social","media"],
        "VCs invest through funds/companies at larger scale; angels typically invest personal funds at earlier stages."
    ]// add the answers in order

    const userAnswer = document.getElementById(`advanced_answer${index}`).value.toLowerCase();
    const correctAnswer = answers[index-1];
    const wordsInUserAnswer = userAnswer.match(findWords); 
    let result;

    if (index === 1) {
        result = answers[index - 1].every((word) =>{
            return  wordsInUserAnswer.includes(word.toLowerCase())
        });
    } else if(index === 4){
        result = wordsInUserAnswer.every((word) =>
            answers[index-1].includes(word.toLowerCase())
        );
    } else result = userAnswer == correctAnswer;
    document.getElementById(`advanced_result${index}`).innerHTML = getResultMessage(correctAnswer, result);
}

//-------------------------Advanced level MC section----------------//<
function checkMCAnswer22() {
    var choices = document.getElementsByName("crud1");
    var checkMCAnswer22 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer22) {
        document.getElementById("resultcrud1").innerHTML = "Correct"
    } else {
        document.getElementById("resultcrud1").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer22;
    }
}
//_____________CheckMCAnswer23__________//
function checkMCAnswer23() {
    var choices = document.getElementsByName("crud2");
    var checkMCAnswer23 = "b)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer23) {
        document.getElementById("resultcrud2").innerHTML = "Correct"
    } else {
        document.getElementById("resultcrud2").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer23;
    }
}
//_____________CheckMCAnswer24__________//
function checkMCAnswer24() {
    var choices = document.getElementsByName("crud3");
    var checkMCAnswer24 = "b)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer24) {
        document.getElementById("resultcrud3").innerHTML = "Correct"
    } else {
        document.getElementById("resultcrud3").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer24;
    }
}
//_____________CheckMCAnswer25__________//
function checkMCAnswer25() {
    var choices = document.getElementsByName("crud4");
    var checkMCAnswer25 = "b)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer25) {
        document.getElementById("resultcrud4").innerHTML = "Correct"
    } else {
        document.getElementById("resultcrud4").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer25;
    }
}
//_____________CheckMCAnswer26__________//
function checkMCAnswer26() {
    var choices = document.getElementsByName("django1");
    var checkMCAnswer26 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer26) {
        document.getElementById("resultdjango1").innerHTML = "Correct"
    } else {
        document.getElementById("resultdjango1").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer26;
    }
}
//_____________CheckMCAnswer27__________//
function checkMCAnswer27() {
    var choices = document.getElementsByName("django2");
    var checkMCAnswer27 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer27) {
        document.getElementById("resultdjango2").innerHTML = "Correct"
    } else {
        document.getElementById("resultdjango2").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer27;
    }
}
//_____________CheckMCAnswer28__________//
function checkMCAnswer28() {
    var choices = document.getElementsByName("django3");
    var checkMCAnswer28 = "d)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer28) {
        document.getElementById("resultdjango3").innerHTML = "Correct"
    } else {
        document.getElementById("resultdjango3").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer28; 
    }
}
//_____________CheckMCAnswer29__________//
function checkMCAnswer29() {
    var choices = document.getElementsByName("django4");
    var checkMCAnswer29 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

    if (selected === checkMCAnswer29) {
        document.getElementById("resultdjango4").innerHTML = "Correct"
    } else {
        document.getElementById("resultdjango4").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer29;
    }
}
//_____________CheckMCAnswer30__________//
function checkMCAnswer30() {
    var choices = document.getElementsByName("django5");
    var checkMCAnswer30 = "a)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer30) {
        document.getElementById("resultdjango5").innerHTML = "Correct"
    } else {
        document.getElementById("resultdjango5").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer30;
    }
}
//---------- checkMCAnswer31---------------//
function checkMCAnswer31() {
    var choices = document.getElementsByName("django6");
    var checkMCAnswer31 = "b)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer31) {
        document.getElementById("resultdjango6").innerHTML = "Correct"
    } else {
        document.getElementById("resultdjango6").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer31;
    }
}
//---------- checkMCAnswer32---------------//
function checkMCAnswer32() {
    var choices = document.getElementsByName("django7");
    var checkMCAnswer32 = "a)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer32) {
        document.getElementById("resultdjango7").innerHTML = "Correct"
    } else {
        document.getElementById("resultdjango7").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer32;
    }
}
//---------- checkMCAnswer33---------------//
function checkMCAnswer33() {
    var choices = document.getElementsByName("django8");
    var checkMCAnswer33 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer33) {
        document.getElementById("resultdjango8").innerHTML = "Correct"
    } else {
        document.getElementById("resultdjango8").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer33;
    }
}
//---------- checkMCAnswer34---------------//
function checkMCAnswer34() {
    var choices = document.getElementsByName("django9");
    var checkMCAnswer34 = "b)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer34) {
        document.getElementById("resultdjango9").innerHTML = "Correct"
    } else {
        document.getElementById("resultdjango9").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer34;
    }
}
//---------- checkMCAnswer35---------------//
function checkMCAnswer35() {
    var choices = document.getElementsByName("django10");
    var checkMCAnswer35 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer35) {
        document.getElementById("resultdjango10").innerHTML = "Correct"
    } else {
        document.getElementById("resultdjango10").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer35;
    }
}
//---------- checkMCAnswer36---------------//
function checkMCAnswer36() {
    var choices = document.getElementsByName("django11");
    var checkMCAnswer36 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer36) {
        document.getElementById("resultdjango11").innerHTML = "Correct"
    } else {
        document.getElementById("resultdjango11").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer36;
    }
}
//---------- checkMCAnswer37---------------//
function checkMCAnswer37() {
    var choices = document.getElementsByName("django12");
    var checkMCAnswer37 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer37) {
        document.getElementById("resultdjango12").innerHTML = "Correct"
    } else {
        document.getElementById("resultdjango12").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer37;
    }
}
//---------- checkMCAnswer38---------------//
function checkMCAnswer38() {
    var choices = document.getElementsByName("django13");
    var checkMCAnswer38 = "c)";
    var selected = "";

    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
        selected = choices[i].value;
        break;
        }
    }

        if (selected === checkMCAnswer38) {
        document.getElementById("resultdjango13").innerHTML = "Correct"
    } else {
        document.getElementById("resultdjango13").innerHTML = "Incorrect. The correct answer is: " + checkMCAnswer38;
    }
}

