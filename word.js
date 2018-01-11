// Required 
var Letter = require("./letter.js");
var words = require ("./words.js")


var Word = function() {
  this.Letters = [];

  this.addLetter = function(aLetter) {
    this.Letters.push(aLetter);
  }

  this.getCount = function() {
    console.log(this.Letters.length)
  }

  this.logLetters = function() {
    console.log(this.Letters);
  }
}

// create a Letter using the Letter constructor
var testLetter = new Letter();

var testWord = new Word();
// testWord.addLetter(testLetter);
// testWord.getCount();
// console.log(testWord);
// Constructor to create an object to hold the current word that is being guessed and contain all of the logic to check the letters guessed versus the random word selected

var wordBank = words; 
var randomIndex = Math.floor(Math.random() * words.length);
var currentWord = ""; // holds random word picked

console.log(currentWord = wordBank[randomIndex]);

// dashes used as place holders for the random word
var dashes = [];
for (d=0; d < currentWord.length; d++) { 
  dashes.push(" _ ");
  dashes.join(" ");
} console.log(dashes);

// export file
module.exports = Word;