var vowels = ["a", "e", "i", "o", "u"]
function isVowel(char) { //to determine if letter is a variable
  var firstLetter = char.charAt(0);
  var lowercaseLetter = firstLetter.toLowerCase();

  if(lowercaseLetter == 'a' || lowercaseLetter == 'e' || lowercaseLetter == 'i' || lowercaseLetter == 'o' || lowercaseLetter == 'u') {
  char = char + "ay";
  console.log("there is a vowel");
  return true
  } else {
    for (var i = 0; i < char; i++) {
      //for (var j = 0; j < 5; j++) {
        if(char.charAt(i) == vowel[j]) {
          char = char.substring(i + 1) + char.substring(i) + "ay";
        //}
      }
    }
  }
  
  
  
  
  // if(vowels.indexOf(char) > -1) {
  //   console.log("there is a vowel");
  //   return true;
  // } else if(vowels.indexOf(char) === -1) {
  //   console.log("there is not a vowel");
  //   return false;
  // } else {
  //   alert("There was an error in determining vowels");
  // }
  
  
  //return ["a", "e", "i", "o", "u"].indexOf(char.toLowerCase()) !==1
}

function splitInput(input){ //splits input
  return input.split(" ");
  }

function splitLetter(words){
  var newArray = [];
  for (var i = 0; i < words.length; i++) {
    newArray.push(words[i].split(""));
  }
  return newArray;
}

$(document).ready(function(){
  $("#results").hide();
  $("form#user-input").submit(function(event){
    event.preventDefault();
    var userInput = $("#sentence").val();
    isVowel(userInput);
    var splitWords = splitInput(userInput);
    console.log(splitWords);
    var splitLetters = splitLetter(splitWords);
    console.log(splitLetters); 
    $("#results").show();
  })
})

