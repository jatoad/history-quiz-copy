# Everything History
this web page aims to provide a history quiz that tests all aspects of history for the user. It is a quick fun and challenging quiz that aims to teach some fun facts swell as test the user. 

![screen shot of website on different size screens](/assets/images/amiresponsive.png)
- Showing how the website fits on all screen sizes

## - Features

### - Answer Question Alert

![screen shot of alert telling user to answer question](/assets/images/answer.png)
- To complete the quiz, the user must fill in all the answers. if not, an alert will pop up telling them to fill in 
and answers thta ave been left blank. This is to allow the user to get the top score they can. All questions are multiple choice with 4 selections available, meaining even if they are not sure, they will still have a 25% chance of success  

### - scrolable questions

![screen shot of website question area](/assets/images/mainstructure.png)
- Having to scroll to reach the next queston means that the user is prompted to take each question in turn, before moving immediately ont the later questions. Tis helps to prevent questions from being left out by accident. 

### - score

![screen shot of website score boxes](/assets/images/score.png)
- When submit button is pressed, score is gathered and posted as an alert for the user to see.   

### - Future Additions to the Website
- in the future i would like to add a sign up section, where the user can enter a username into the quiz, and score is displayed on the alert with the username. 

## - Testing

- Website was tested on Safari and Chrome and ran with no issues 
- each question was tested to see if the score worked aswell as the answer button alert 
- page was tested using dev tools to make sure that it was suitable for all screen sizes 
-console.logs used to make sure that the getElements were all working correctly. this was done for each section of code. 

### Validating HTML and CSS
- CSS passed the [W3C jigsaw CSS](https://jigsaw.w3.org/css-validator/) with no issues 
- HTML passed the [W3C Validator](https://validator.w3.org/) on second attempt after space was removed in image-jpeg file.
- JavaScript runs through JShint no major errors [jshint validator](https://jshint.com/)

### Bug fixes 
- multiple issues fixed with file paths when creating the live site
- wrong file path for js, corrected

## - Credits 

### Code
- javascript from love maths, code institute 
<!-- document.addEventListener("DOMContentLoaded", function() {

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

}); -->
### Fonts 
- All fonts from [Google Fonts](https://fonts.google.com/)