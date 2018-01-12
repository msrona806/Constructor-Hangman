// function to display a placeholder for letters in current word

// array to hold letters guessed 
var lettersGuessed = [];

var Letter = function(letter) {
  this.character = letter.toLowerCase(); // make sure all the letters are lower case
  
  // compare letter guessed to letter in word
  this.compareCharacter = function(aLetter) {
    if (aLetter.character === this.character) {
      console.log(aLetter.character);
    }

    else { 
      console.log('_');  // display a _ placeholder for letters in the word
    }
  }
}

// code to push letters into letters guessed array

// test letters to see if code works
var testLetter1 = new Letter('F');
var testLetter2 = new Letter('R');
testLetter1.compareCharacter(testLetter2);
console.log(testLetter1.character + testLetter2.character);

// guesses remaining counter
var guessRmn = 0;

// logic to determine if win or lose

// export file
exports.Letter = Letter;