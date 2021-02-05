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
  //data types
  var someNumber = 5
  var someString = '5'

  console.log(someNumber + 5)
  console.log(someString + '5')

// boolean

//var buttonClicked = false

//console.log(buttonClicked)

//$'.boolean-example'.on('click', function() {
//  buttonClicked = true;
  // to set buttonClicked to the opposite of what it was

//  if(buttonClicked === true){
//    console.log('button is on')
//  } else{
//    console.log('button is off')
//  }
//})

// array
var myFamily = ['Annmarie', 'Jenny', 'Leo', 'Eric', 'Alexander', 'Irene', 'little-man']

console.log(myFamily[0])
console.log(myFamily.length)


//object
var myFamilyObject = {
  mother: 'Jenny',
  father: 'Leo',
  brother1: 'Eric',
  brother2: 'Alexander',
  sister1: 'Irene',
  baby1: 'little-man'
}

console.log('logging my family object', myFamilyObject)

console.log('show me mother', myFamilyObject.mother)

// array of objects
{}
