// code from love maths walkthrough project. 

let answers = []

document.addEventListener("DOMContentLoaded", function() {

    let buttons = document.getElementsByTagName("button");

    getAnswers();

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "check-answers") {
                checkAnswers();
            } else if (this.getAttribute("data-type") === "show-answers") {
                getQuestions();
                //showAnswers();
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
function getAnswers(){

    answers = document.getElementsByClassName("answer");

    for(let i = 0;i < answers.length; i++){
        console.log(answers[i].id);
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

/*
*
*/
function checkAnswers(value){



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

            if (selection.checked) {
                input_selections[num] = selection.id;
                console.log(selection.id)
            } 
        }

        // See if answer checked
        if (!input_selections[num]) {
            alert('Please answer Q'+num.toString());
            return;
        }

    }

    // Now check the input selections against the answersk

    // if (a1 == 'correct1') {
    //     score++;
    // }
    

    // if (a2 == 'correct2') {
    //     score++;
    // }

    // if (a3 == 'correct3') {
    //     score++;
    // }
    

    // if (a4 == 'correct4') {
    //     score++;
    // }

    // if (a5 == 'correct5') {
    //     score++;
    // }
    

    // if (a6 == 'correct6') {
    //     score++;
    // }

    // if (a7 == 'correct7') {
    //     score++;
    // }
    

    // if (a8 == 'correct8') {
    //     score++;
    // }

    // if (a9 == 'correct9') {
    //     score++;
    // }
    

    // if (a10 == 'correct10') {
    //     score++;
    // }

    // alert(`Score = ${score} out of 10`);

    // Reset each button
    // var elements = document.getElementsByTagName("input");

    // for (var i = 0; i < elements.length; i++) {
    //         if (elements[i].type == "radio") {
    //             elements[i].checked = false;
    //         }
    //     }
}
