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
getPuzzle('2').then((puzzle) => {
   console.log(puzzle);
}).catch((err) => {
   console.log(`error: ${err}`);
});


const countryCode = 'MX';
getCountry(countryCode).then((country) => {
   console.log(country.name);
}).catch((err) => {
   console.log(err);
});

// fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
//    if (response.status === 200) {
//       return response.json();
//    } else {
//       throw new Error('unable to fetch the puzzle');
//    }
// }).then((data) => {
//    console.log(data.puzzle);
// }).catch((err) => {
//    console.log(err);
// })


// NOTES
// primitive values: string, number, boolean, null, undefined,

// prototype chains:

// object: myObject --> Object.prototype --> null
// array: myArray --> Array.prototype --> Object/prototype --> null
// function: myFunc --> Function.prototype --> Object.prototype --> null
// string: myString --> String.prototype --> Object.prototype --> null
// number: myNum --> Number.prototype --> Object.prototype --> null
// boolean: myBool --> Boolean.prototype --> Object.prototype -- null
