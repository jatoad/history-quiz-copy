// code from love maths walkthrough project. 

document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "check-answers") {
                getAnswers();
            } else if (this.getAttribute("data-type") === "show-answers") {
                showAnswers();
            } else if (this.getAttribute("data-type") === "reset-answers") {
                resetAnswers();
            }
        });
    }

});


function getAnswers(){
    let printAnswerToConsole = document.getElementsByClassName("answer");
    for(let i = 0;i < printAnswerToConsole.length; i++){
    console.log("Answers:" + printAnswerToConsole[i].textContent);
    };
}

// function showAnswers(){

//     console.log('showAnswers ');

//     // Show answers
//     var elements = document.getElementsByTagName("input");

//     for (var i = 0; i < elements.length; i++) {
//             if (elements[i].id == "correct1" ||
//                 elements[i].id == "correct2" ||
//                 elements[i].id == "correct3" ||
//                 elements[i].id == "correct4" ||
//                 elements[i].id == "correct5" ||
//                 elements[i].id == "correct6" ||
//                 elements[i].id == "correct7" ||
//                 elements[i].id == "correct8" ||
//                 elements[i].id == "correct9" ||
//                 elements[i].id == "correct10") {
//                 elements[i].checked = true;
//             }
//         }
// }

// function resetAnswers(){

//     console.log('resetAnswers ');

//     // Reset each button
//     var elements = document.getElementsByTagName("input");

//     for (var i = 0; i < elements.length; i++) {
//             if (elements[i].type == "radio") {
//                 elements[i].checked = false;
//             }
//         }

// }

// // code from love maths walkthrough project

// function checkAnswers(){

//     console.log('checkAnswers ');

//     let score = 0;
//     const NOT_SET = 'not_set';

//     var q = document.getElementsByClassName('questions');
//     var a1 = NOT_SET;
//     for (let i of q) {

//         if (i.checked) {
//             a1 = i.id;
//         }
//     }
  
//     var q = document.getElementsByName('question2');
//     var a2 = NOT_SET;
//     for (let i of q) {

//         if (i.checked) {
//             a2 = i.id;
//         }
//     }

//     var q = document.getElementsByName('question3');
//     var a3 = NOT_SET;
//     for (let i of q) {

//         if (i.checked) {
//             a3 = i.id;
//         }
//     }

//     var q = document.getElementsByName('question4');
//     var a4 = NOT_SET;
//     for (let i of q) {

//         if (i.checked) {
//             a4 = i.id;
//         }
//     }

//     var q = document.getElementsByName('question5');
//     var a5 = NOT_SET;
//     for (let i of q) {

//         if (i.checked) {
//             a5 = i.id;
//         }
//     }

//     var q = document.getElementsByName('question6');
//     var a6 = NOT_SET;
//     for (let i of q) {

//         if (i.checked) {
//             a6 = i.id;
//         }
//     }

//     var q = document.getElementsByName('question7');
//     var a7 = NOT_SET;
//     for (let i of q) {

//         if (i. checked) {
//             a7 = i.id;
//         }
//     }

//     var q = document.getElementsByName('question8');
//     var a8 = NOT_SET;
//     for (let i of q) {

//         if (i.checked) {
//             a8 = i.id;
//         }
//     }

//     var q = document.getElementsByName('question9');
//     var a9 = NOT_SET;
//     for (let i of q) {

//         if (i.checked) {
//             a9 = i.id;
//         }
//     }

//     var q = document.getElementsByName('question10');
//     var a10 = NOT_SET;
//     for (let i of q) {

//         if (i.checked) {
//             a10 = i.id;
//         }
//     }

//     if (a1 == NOT_SET) {
//         alert('Answer Q1');
//         return;
//     }

//     if (a2 == NOT_SET) {
//         alert('Answer Q2');
//         return;
//     }

//     if (a3 == NOT_SET) {
//         alert('Answer Q3');
//         return;
//     }

//     if (a4 == NOT_SET) {
//         alert('Answer Q4');
//         return;
//     }

//     if (a5 == NOT_SET) {
//         alert('Answer Q5');
//         return;
//     }

//     if (a6 == NOT_SET) {
//         alert('Answer Q6');
//         return;
//     }

//     if (a7 == NOT_SET) {
//         alert('Answer Q7');
//     }

//     if (a8 == NOT_SET) {
//         alert('Answer Q8');
//         return;
//     }

//     if (a9 == NOT_SET) {
//         alert('Answer Q9');
//         return;
//     }

//     if (a10 == NOT_SET) {
//         alert('Answer Q10');
//         return;
//     }

//     if (a1 == 'correct1') {
//         score++;
//     }
    

//     if (a2 == 'correct2') {
//         score++;
//     }

//     if (a3 == 'correct3') {
//         score++;
//     }
    

//     if (a4 == 'correct4') {
//         score++;
//     }

//     if (a5 == 'correct5') {
//         score++;
//     }
    

//     if (a6 == 'correct6') {
//         score++;
//     }

//     if (a7 == 'correct7') {
//         score++;
//     }
    

//     if (a8 == 'correct8') {
//         score++;
//     }

//     if (a9 == 'correct9') {
//         score++;
//     }
    

//     if (a10 == 'correct10') {
//         score++;
//     }

//     alert(`Score = ${score} out of 10`);

//     // Reset each button
//     var elements = document.getElementsByTagName("input");

//     for (var i = 0; i < elements.length; i++) {
//             if (elements[i].type == "radio") {
//                 elements[i].checked = false;
//             }
//         }
// }
