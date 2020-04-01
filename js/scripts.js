function isVowel(char) { //to determine if letter is a variable
  return ["a", "e", "i", "o", "u"].indexOf(char.toLowerCase()) !==1
}

function splitInput(input){ //splits input
  return input.split(",");
}

function splitLetter(word){
  return word.split(",");
}

$(document).ready(function(){
  $("#results").hide();
  $("form#user-input").submit(function(event){
    event.preventDefault();
    var userInput = $("#sentence").val();
    var splitWords = splitInput(userInput);
    var splitLetters = splitLetter(splitWords);



    console.log(splitLetters); 
    // splitLetter(userInput);
    // console.log(userInput);

    $("#results").show();
  })
})