
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

const game1 = new Hangman('cat', 2);

puzzleEl.textContent = game1.getPuzzle();
guessesEl.textContent = game1.remainingGuesses;
console.log(game1.status);

window.addEventListener('keypress', function(e) {
   const guess = String.fromCharCode(e.charCode);
   game1.makeGuess(guess);

   puzzleEl.textContent = game1.getPuzzle();
   guessesEl.textContent = game1.remainingGuesses;

   console.log(game1.status);
});



// NOTES
// primitive values: string, number, boolean, null, undefined,

// prototype chains:

// object: myObject --> Object.prototype --> null
// array: myArray --> Array.prototype --> Object/prototype --> null
// function: myFunc --> Function.prototype --> Object.prototype --> null
// string: myString --> String.prototype --> Object.prototype --> null
// number: myNum --> Number.prototype --> Object.prototype --> null
// boolean: myBool --> Boolean.prototype --> Object.prototype -- null
