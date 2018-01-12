// function to display a placeholder for letters in current word

// array to hold letters guessed 
var lettersGuessed = [];

var Letter = function(letter) {
  this.character = letter.toLowerCase();
  
  this.compareCharacter = function(aLetter) {
    if (aLetter.character === this.character) {
      console.log(aLetter.character);
    }

    else { 
      console.log('_');
    }
  }
}
// compare letter guessed to current word
var testLetter1 = new Letter('R');
var testLetter2 = new Letter('T');
testLetter1.compareCharacter(testLetter2);
console.log(testLetter1.character + testLetter2.character);

// guesses remaining counter
var guessRmn = 0;

// logic to determine if win or lose

// export file
module.exports = Letter;


// var Letter = function(char) {
// 	this.charac = char.toLowerCase();
// 	this.appear = false;
// 	this.letterRender = function() {
// 		if (this.appear) {
// 			return this.charac;
// 		} else if (this.charac === " ") {
// 				this.appear = true;
// 				return this.charac;
// 		} else {
// 				return "_ ";
// 		}
// 	};
// };

exports.Letter = Letter;