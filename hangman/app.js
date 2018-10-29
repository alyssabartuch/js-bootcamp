const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');

const game1 = new Hangman('car parts', 2);

puzzleEl.textContent = game1.puzzle;
guessesEl.textContent = game1.statusMessage;

window.addEventListener('keypress',(e) => {
   const guess = String.fromCharCode(e.charCode);
   game1.makeGuess(guess);

   puzzleEl.textContent = game1.puzzle;
   guessesEl.textContent = game1.statusMessage;
});

// ASYNCHRONOUS EXECUTION
getPuzzle('3', (error, puzzle) => {
   if (error) {
      console.log(`error: ${error}`);
   } else {
      console.log(puzzle);
   }
});


const countryCode = 'MX';
getCountry(countryCode, (error, country) => {
   if (error) {
      console.log(`error: ${error}`);
   } else {
      console.log(`Country Name: ${country.name}`);
   }
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
