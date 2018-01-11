// function to display a placeholder for letters in current word

// array to hold letters guessed 
var lettersGuessed = [];

var Letter = function(letter) {
  this.character = letter;
  
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
var testLetter1 = new Letter('l');
var testLetter2 = new Letter('l');
testLetter1.compareCharacter(testLetter2);

// guesses remaining counter
// logic to determine if win or lose
// export file
module.exports = Letter;