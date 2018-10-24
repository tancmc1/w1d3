var rawInput = "lighthouse in the house";
var input = rawInput.replace(/\s+/g, "")
var myObject = {};

function countLetters(input){
  var count = 0
  for (var i = 0; i < input.length; i++) {
    if(myObject[input[i]] === undefined) {
       myObject[input[i]] = [];
    }
    myObject[input[i]].push(i);
  }
  return myObject;
}
console.log(countLetters(input));