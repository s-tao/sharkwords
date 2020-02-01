const ALPHABET = 'abcdefghijklmnopqrstuvwxyz';
const WORDS = [
  'strawberry', 'orange', 'apple', 'banana', 'pineapple', 'kiwi',
  'peach', 'pecan', 'eggplant', 'durian', 'peanut', 'chocolate'
];


let numWrong = 0;


/** Loop over the chars in `word` and create divs. */
const createDivsForChars = (word) => {
  // Replace this with your code

  for (const letter in word) {
    $('#word-container').append(`<div class="letter-box ${letter}"></div>`);
  }
  
};


/** Loop over each letter in `ALPHABET` and generate buttons. */
const generateLetterButtons = () => {
  // Replace this with your code
  const listLetters =  ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  for (const button of listLetters){
    $('#letter-buttons').append(`<button> ${button} </button>`);
  }
  
};


/** Set the `disabled` property of `buttonEl` to `true.
 *
 * `buttonEl` is an `HTMLElement` object.
 */
const disableLetterButton = (buttonEl) => {
  // Replace this with your code
 
  const button = $(buttonEl);

  // Disable the button here...
  //button.disable=true;
  button.prop('disabled', true);

};



/** Return `true` if `letter` is in the word. */
const isLetterInWord = (letter) => {
  // Replace this with your code

 const elements = $(letter);
 console.log(elements[0]);
 console.log(elements[0] === undefined);

 let buttonLetter = `<div class="letter-box ${letter}"></div>`
 $('.${letter}').
};


/** Called when `letter` is in word. Update contents of divs with `letter`. */
const handleCorrectGuess = (letter) => {
  // Replace this with your code
};


/** Called when `letter` is not in word.
 *
 * If the shark gets the person, disable all buttons and show the "play again"
 * message. Otherwise, increment `numWrong` and update the shark image.
 */
const handleWrongGuess = () => {
  // Replace this with your code
};


/** Reset game state. Called before restarting the game. */
const resetGame = () => {
  // Replace this with your code
};



/** This is like if __name__ == '__main__' in Python */

(function startGame() {
  // For now, we'll hardcode the word that the user has to guess.
  const word = 'hello';

  createDivsForChars(word);
  generateLetterButtons();

  $('button').on('click', (evt) => {
    const clickedBtn = $(evt.target);
    disableLetterButton(clickedBtn);

    const letter = clickedBtn.html();

    if (isLetterInWord(letter)) {
      handleCorrectGuess(letter);
    } else {
      handleWrongGuess(letter);
    }
  });

  $('#play-again').on('click', () => {
    resetGame();
    startGame();
  });
})();
