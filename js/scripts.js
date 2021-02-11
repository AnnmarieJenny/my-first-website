// function to calculate the result of the survey
function tabulateAnswers() {
  // initialize variables for each choice's score
  // If you add more choices and outcomes, you must add another variable here.
  var a1score = 0;
  var a2score = 0;
  var b1score = 0;
  var b2score = 0;
  var c1score = 0;
  var c2score = 0;

  // get a list of the income inputs on the page
  var choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i=0; i<choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'a1') {
        a1score = a1score + 1;
      }
      if (choices[i].value == 'a2') {
        a2score = a2score + 1;
      }

      // If you add more choices and outcomes, you must add another if statement below.
    }
  }
  
  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the variable here.
  var maxscore = Math.max(c1score,c2score);

  // Display answer corresponding to that choice
  var answerbox = document.getElementById('answer');
  if (yes_score == a1 + b1 + c1) { // If user chooses the first choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You are eligible for benefits! See below for more information.";}

  if (c2score == a1 + b1 + c2) { // If user chooses the first choice the most, this outcome will be displayed.
    answerbox.innerHTML = "You may be eligible for benefits, however, you will need to provide evidence of adverse impact from COVID-19. Please visit the following webpage to contact a housing counselor for assistance on what you can do to fulfill this requirement.";
  }
  if (c3score == a2 + b2 + c2) { // If user chooses the second choice the most, this outcome will be displayed.
    answerbox.innerHTML = "Unfortunately, you are not eligible for benefits at this time. Please check back at a later date when more funds may be available.";
  }
  // If you add more choices, you must add another response below.
}

// program the reset button
function resetAnswer() {
  var answerbox = document.getElementById('answer');
  answerbox.innerHTML = "Your result will show up here!";
}
