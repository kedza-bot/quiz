// beginner level  Q and A functions


Q1 = "research,design,develop,test,deploy,maintain";
Q = "research design develop test deploy maintain";
// you want it like how it was before
// one sec gonna have to re-write

const getResultMessage = (answer, result) => result ? "Correct!":`Incorrect. The correct answer is: ${answer}`
function checkUserAnswer(questionNumber){
    const userAnswer = document.getElementById(`answer${questionNumber}`).value;

    const answers = [
        'research,design,develop,test,deploy,maintain',
        "Native App,Web App,Hybrid App,Progressive Web App",
        "Software Development Life Cycle",
        "button, inputbox, dropdown, checkbox, radio button",
        "HTML, CSS and JavaScript"
    ]
    let result = false;
    if (questionNumber === 1|| questionNumber === 5) {
        const wordsInUserAnswer = userAnswer.match(/[a-zA-Z]+/g); // I changed this part, it only looks for words ([a-zA-Z] means match any letter from a-z or A-Z, the + means 1 or more and the g means as many matches as possible
        result = wordsInUserAnswer.every((word) =>
        answers[questionNumber-1].split(",").includes(word.toLowerCase())
        );
    } else if (questionNumber === 4) {
        result = wordsInUserAnswer.some((word) =>
            answers[questionNumber-1].split(",").includes(word.toLowerCase())
        );
    } else result = userAnswer.toLowerCase() === answers[questionNumber-1].toLowerCase()
    
    document.getElementById(`result${questionNumber}` ).innerHTML = getResultMessage(answers[questionNumber  - 1], result);
}//can i add more answers to this aray ?

// function checkQAswer1() {
//     if (document.getElementById("answer1").value === Q1 || document.getElementById("answer1").value === Q) {
//         document.getElementById("result").innerHTML = "Correct!";
//     } else {
//         document.getElementById("result").innerHTML = "Incorrect. The correct answer is: " + Q1;
//     }
// }

// Q2 = "Native App,Web App,Hybrid App,Progressive Web App";

// function checkQAnswer2() {
//     if (document.getElementById("answer2").value.trim().toLowerCase() === Q2.toLowerCase()) {
//         document.getElementById("result2").innerHTML = "Correct!";
//     } else {
//         document.getElementById("result2").innerHTML = " Incorrect. The correct answer is: " + Q2;
//     }
// }


// Q3 = "Software Development Life Cycle";

// function checkQAnswer3() {
//     document.getElementById("result3").innerHTML = "";
//     if (document.getElementById("answer3").value.trim().toLowerCase() === Q3.toLowerCase()) {
//         document.getElementById("result3").innerHTML = "Correct!";
//     } else {
//         document.getElementById("result3").innerHTML = "Incorrect. The correct answer is: " + Q3;
//     }
// }

// Q4 = "button, inputbox, dropdown, checkbox, radio button";
// function checkQAnswer4() {
//     document.getElementById("result4").innerHTML = "";
//     if (document.getElementById("answer4").value.trim().toLowerCase() === Q4.toLowerCase()) {
//         document.getElementById("result4").innerHTML = "Correct!";
//     } else if (document.getElementById("answer4").value.trim().toLowerCase() === "button") {
//         document.getElementById("result4").innerHTML = "correct";
//     } else if (document.getElementById("answer4").value.trim().toLowerCase() === "inputbox") {
//         document.getElementById("result4").innerHTML = "correct";
//     } else if (document.getElementById("answer4").value.trim().toLowerCase() === "dropdown") {
//         document.getElementById("result4").innerHTML = "correct";
//     } else if (document.getElementById("answer4").value.trim().toLowerCase() === "checkbox") {
//         document.getElementById("result4").innerHTML = "correct";
//     } else if (document.getElementById("answer4").value.trim().toLowerCase() === "radio button") {
//         document.getElementById("result4").innerHTML = "correct";
//     } else {
//         document.getElementById("result4").innerHTML = "Incorrect. The correct answer is: " + Q4;
//     }
// }
// Q5 = "HTML, CSS and JavaScript";
// function checkQAnswer5() {
//     if (document.getElementById("answer5").value.trim().toLowerCase() === Q5.toLowerCase()) {
//         document.getElementById("result5").innerHTML = "Correct!";
//     }else{
//         document.getElementById("result5").innerHTML = "Incorrect. The correct answer is: " + Q5;
//     }
// }


// beginner level multiple choice answers function



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

//Intermediate Q and A section//

//Intermediate MC section//

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

//Advanced level Q and A section//
function checkAdvancedAnswer(index) {
    const answers = [
        "create,read,update,delete",
        "Flask",
        "Application programming interface"
    ]// add the answers in order
    
    const userAnswer = document.getElementById(`advanced_answer${index}`).value.toLowerCase();
    const correctAnswer = answers[index-1].toLowerCase();

    let result;
    if(index===1){
        const wordsInUserAnswer = userAnswer.match(/[a-zA-Z]+/g); 
        result = wordsInUserAnswer.every((word) => correctAnswer.split(",").includes(word));
    } else result = userAnswer == correctAnswer;
    document.getElementById(`advanced_result${index}`).innerHTML = getResultMessage(correctAnswer, result);
}
//Advanced level MC section//<

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
//4 c, 5 a, 6 b, 7 a , 8 c, 9 b, 10 c, 11 c, 12 c
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


// 4 c, 5 a, 6 b, 7 a , 8 c, 9 b, 10 c, 11 c, 12 c //answers for django m_c
//let me check 4c,
// do the answers a b c ill do the check  ohk
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

