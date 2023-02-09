
// code from love maths walkthrough project
document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");

    console.log('addEventListener ', buttons)

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                alert('Submit not clicked')
            }
        });
    }

});
// code from love maths walkthrough project

function showScore(){

    console.log('showScore ')
    let submitButton = document.getElementsByClassName('submit-button');
    submitButton.addEventListener('',function(){

    })

}

function checkAnswer(){

    console.log('checkAnswer ')

    let score = 0
    const NOT_SET = 'not_set'

    var q = document.getElementsByName('question1');
    var a1 = NOT_SET
    for (let i of q) {

        if (i.checked) {
            a1 = i.id
        }
    }
  
    var q = document.getElementsByName('question2');
    var a2 = NOT_SET
    for (let i of q) {

        if (i.checked) {
            a2 = i.id
        }
    }

    var q = document.getElementsByName('question3');
    var a3 = NOT_SET
    for (let i of q) {

        if (i.checked) {
            a3 = i.id
        }
    }

    var q = document.getElementsByName('question4');
    var a4 = NOT_SET
    for (let i of q) {

        if (i.checked) {
            a4 = i.id
        }
    }

    var q = document.getElementsByName('question5');
    var a5 = NOT_SET
    for (let i of q) {

        if (i.checked) {
            a5 = i.id
        }
    }

    var q = document.getElementsByName('question6');
    var a6 = NOT_SET
    for (let i of q) {

        if (i.checked) {
            a6 = i.id
        }
    }

    var q = document.getElementsByName('question7');
    var a7 = NOT_SET
    for (let i of q) {

        if (i.checked) {
            a7 = i.id
        }
    }

    var q = document.getElementsByName('question8');
    var a8 = NOT_SET
    for (let i of q) {

        if (i.checked) {
            a8 = i.id
        }
    }

    var q = document.getElementsByName('question9');
    var a9 = NOT_SET
    for (let i of q) {

        if (i.checked) {
            a9 = i.id
        }
    }

    var q = document.getElementsByName('question10');
    var a10 = NOT_SET
    for (let i of q) {

        if (i.checked) {
            a10 = i.id
        }
    }

    if (a1 == NOT_SET) {
        alert('Answer Q1')
        return;
    }

    if (a2 == NOT_SET) {
        alert('Answer Q2')
        return;
    }

    if (a3 == NOT_SET) {
        alert('Answer Q3')
        return;
    }

    if (a4 == NOT_SET) {
        alert('Answer Q4')
        return;
    }

    if (a5 == NOT_SET) {
        alert('Answer Q5')
        return;
    }

    if (a6 == NOT_SET) {
        alert('Answer Q6')
        return;
    }

    if (a7 == NOT_SET) {
        alert('Answer Q7')
        return;
    }

    if (a8 == NOT_SET) {
        alert('Answer Q8')
        return;
    }

    if (a9 == NOT_SET) {
        alert('Answer Q9')
        return;
    }

    if (a10 == NOT_SET) {
        alert('Answer Q10')
        return;
    }

    if (a1 == 'correct1') {
        score++
    }
    

    if (a2 == 'correct2') {
        score++
    }

    if (a1 == 'correct1') {
        score++
    }
    

    if (a2 == 'correct2') {
        score++
    }

    if (a3 == 'correct3') {
        score++
    }
    

    if (a4 == 'correct4') {
        score++
    }

    if (a5 == 'correct5') {
        score++
    }
    

    if (a6 == 'correct6') {
        score++
    }

    if (a7 == 'correct7') {
        score++
    }
    

    if (a8 == 'correct8') {
        score++
    }

    if (a9 == 'correct9') {
        score++
    }
    

    if (a10 == 'correct10') {
        score++
    }

    alert(`Score = ${score} out of 10`)
    
}
