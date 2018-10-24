//get values from the input
var rawInput = "lighthouse in the house";
var input = rawInput.replace(/\s+/g, "")
var myObject = {};

function countLetters(input){
  var count = 0
  for (i = 0; i < input.length; i++) {
    var currentLetter = input[i];
    if (myObject[currentLetter] === undefined) {
        myObject[currentLetter] = 1;
    } else {
      myObject[currentLetter] += 1
    }
  }
  return myObject;
}
console.log(countLetters(input));
