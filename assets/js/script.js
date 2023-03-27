// code from love maths walkthrough project. 

let anwers = []
document.addEventListener("DOMContentLoaded", function() {

    answers = document.getElementsByClassName("answer");
    let buttons = document.getElementsByTagName("button");

    //console.log('Answers = ', answers[0].id)

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "check-answers") {
                checkAnswers()
            } else if (this.getAttribute("data-type") === "reset-answers") {
                resetAnswers();
            }
        });
    }

});


/*
// *loops through all correct answers 
// *returns answers to the function
// */
function showAnswers(){

    document.getElementById("question-one").style.color = "green";

    document.getElementById("Lincoln").style.color = "green";

    //console.log(answers)
    for (var i = 0; i < answers.length; i++) {
        console.log(`elemet ${i} = ${answers[i].id}`)

        document.getElementById(answers[i].id).style.backgroundColor = "green";
    }

}

function resetAnswers(){

    console.log('resetAnswers ');

    // Reset each button
    var elements = document.getElementsByClassName("input");

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
    
    for (let q_num = 1 ; q_num < 11;q_num++ ) {

        let q_txt = 'question'+q_num.toString()
        console.log(q_txt)
        var this_q = document.getElementsByName(q_txt);

        // Loop round each possible answer
        for (let selection of this_q) {

            // If selection is checked store the answer
            if (selection.checked) {
                // Store answer -1 to match actual answers i.e. from 0
                input_selections[q_num-1] = selection.id;
                console.log(selection.id)
            } 
        }

        // See if answer selected
        if (!input_selections[q_num-1]) {
            alert('Please answer Q'+q_num.toString());
            return;
        }

    }

    // Now check the input selections against the answers


    let incorrect = []
    for (ans_idx = 0;ans_idx< answers.length;ans_idx++) {
        console.log(`answer ${ans_idx} actual = ${answers[ans_idx].id}, selection = ${input_selections[ans_idx]}`)
        if (answers[ans_idx].id == input_selections[ans_idx]) {
            score++
        } else {
            wrong_answer = ans_idx + 1
            incorrect.push(wrong_answer.toString())
        }
    }

    alert(`You scored ${score} out of 10. Incorrect Answers ${incorrect}`)
}
