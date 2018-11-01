const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1;

window.addEventListener('keypress',(e) => {
   const guess = String.fromCharCode(e.charCode);
   game1.makeGuess(guess);
   render();
});

const render = () => {
   puzzleEl.textContent = game1.puzzle;
   guessesEl.textContent = game1.statusMessage;
}

const startGame = async () => {
   const puzzle = await getPuzzle('2');
   game1 = new Hangman(puzzle, 5);
   render();
}

document.querySelector('#reset').addEventListener('click', startGame);
startGame();

// getPuzzle('2').then((puzzle) => {
//    console.log(puzzle);
// }).catch((err) => {
//    console.log(`error: ${err}`);
// });

// getCurrentCountry().then((country) => {
//    console.log(country.name);
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
