console.log('Hello, looks like the javascript files is loading properly')
//Initialize a variable to store user selectios:
var result=""

//Create a function that responds to the user clicking
//any of the quiz answers by changing the question and
//storing the selection in the 'result' variable
//Code adapted from classmate Kelsey Nanan
$(".answer").click(function() {

	if($(this).attr('id')=='answer-1-1'){result+="1";
  $("#question-1").hide();
  $("#question-2").show()}
  if($(this).attr('id')=='answer-1-2'){result+="2";
  $("#question-1").hide();
  $("#question-2").show()}
  if($(this).attr('id')=='answer-2-1'){result+="1";
  $("#question-2").hide();
  $("#question-3").show()}
  if($(this).attr('id')=='answer-2-2'){result+="2";
  $("#question-2").hide();
  $("#question-3").show()}
  if($(this).attr('id')=='answer-3-1'){result+="1";
  $("#question-3").hide();
  $("h3").hide()}
  if($(this).attr('id')=='answer-3-2'){result+="2";
  $("#question-3").hide();
  $("h3").hide()}

  if(result=="111"){$("#result-1").show()}
  if(result=="112"){$("#result-2").show()}
  if(result=="121"){$("#result-3").show()}
  if(result=="122"){$("#result-3").show()}
  if(result=="211"){$("#result-3").show()}
  if(result=="221"){$("#result-3").show()}
  if(result=="222"){$("#result-3").show()}
  })
  
