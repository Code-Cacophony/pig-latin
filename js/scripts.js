function isVowel(char) { //to determine if letter is a variable
  return ["a", "e", "i", "o", "u"].indexOf(char.toLowerCase()) !==1
}

function splitInput(input){ //splits input
  return input.split(" ");
}

function splitLetter(words){
  newArray = [];
  // var myString = document.getElementById("first").innerHTML;
  for (var i = 0; i < words.length; i++) {
    newArray.push(words[i].split(""));
    // alert(words[i]);
  }
  return newArray;
}

//have a loop for each word in split words - console.log the word then loop

$(document).ready(function(){
  $("#results").hide();
  $("form#user-input").submit(function(event){
    event.preventDefault();
    var userInput = $("#sentence").val();
    var splitWords = splitInput(userInput);
    console.log(splitWords);
    var splitLetters = splitLetter(splitWords);



    console.log(splitLetters); 
    // splitLetter(userInput);
    // console.log(userInput);

    $("#results").show();
  })
})

