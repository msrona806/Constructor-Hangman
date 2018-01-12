// Required 
var Letter = require("./letter.js");
var words = require ("./words.js")

// Constructor to create an object to hold the current word that is being guessed and contain all of the logic to check the letters guessed versus the random word selected
var wordBank = words; 

var randomIndex = Math.floor(Math.random() * wordBank.length);
var currentWord = ""; // holds random word picked

console.log(currentWord = wordBank[randomIndex]);

//Break the word into letters
var lettersInWord	= currentWord.split("");

// create a Letter using the Letter constructor




// export file
// module.exports = Word;