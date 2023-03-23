// code from love maths walkthrough project. 

let answers = []

document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");

    // Store answers for later checking againt user selection
    answers = document.getElementsByClassName("answer").textContent;

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "check-answers") {
                checkAnswers();
            } else if (this.getAttribute("data-type") === "show-answers") {
                showAnswers();
            } else if (this.getAttribute("data-type") === "reset-answers") {
                resetAnswers();
            }
        });
    }

});


/*
*loops through all correct answers 
*returns answers to the function
*/
function showAnswers(){

    answers = document.getElementsByClassName("answer").textContent;

    for(let i = 0;i < answers.length; i++){
        answers[i].style.color = "green";
        };  
}

function resetAnswers(){

    console.log('resetAnswers ');

    // Reset each button
    var elements = document.getElementsByTagName("input");

    for (var i = 0; i < elements.length; i++) {
            if (elements[i].type == "radio") {
                elements[i].checked = false;
            }
        }

}

function checkAnswers(){

    console.log('checkAnswers ');

    input_selections = []
    let score = 0;
    for (let num = 1 ; num < 11;num++ ) {

        let q_txt = 'question'+num.toString()
        console.log(q_txt)
        var this_q = document.getElementsByName(q_txt);

        // Loop round each possible answer
        for (let selection of this_q) {

            // If selection is checked store the answer
            if (selection.checked) {
                // Store answer -1 to match actual answers i.e. from 0
                input_selections[num-1] = selection.id;
                console.log(selection.id)
            } 
        }

        // See if answer checked
        if (!input_selections[num-1]) {
            alert('Please answer Q'+num.toString());
            return;
        }

    }

    // Now check the input selections against the answers

    for (ans_idx = 0;ans_idx< answers.length;ans_idx++) {
        console.log(`answer ${ans_idx} actual = ${answers[ans_idx].id}, selection = ${input_selections[ans_idx]}`)
        if (answers[ans_idx].id == input_selections[ans_idx]) {
            score++
        }
    }

    alert(`You scored ${score} out of 10.`)
}
