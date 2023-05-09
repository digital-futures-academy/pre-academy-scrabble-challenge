class Scrabble {

  // `_letterData` maps each letter to its corresponding point value
  _letterData = { 1: "AEIOULNRST", 2: "DG", 3: "BCMP", 4: "FHVWY", 5: "K", 8: "JX", 10: "QZ" }
  // `_score` keeps track of the score for the current game
  _score = 0;
  // '_words' stores the words for the current game
  _words = '';


  // this constructor takes a `words` parameter and initializes the `_words` property
  constructor(words) {
    // checks if the `words` parameter is not null or undefined
    if (words) {
      // Convert the `words` parameter to uppercase and store it in `_words`
      this._words = words.toUpperCase();
    }
  }

  score() {
    // Loop through each letter in `_words`
    for (let letter of this._words) {
      // Call `_checkLetterPoint` method with the current letter
      this._checkLetterPoint(letter)
    }
    return this._score;

  }

  // checks the point value of a given letter and assigns the right point
  _checkLetterPoint(letter) {
    // Loop through each key in the `_letterData` object
    for (let value in this._letterData) {
      // Check if the current letter is in the array of letters for the current key
      if (this._letterData[value].includes(letter)) {
        // Add the current key value to the `_score`
        this._score = this._score + parseInt(value);
      }
    }
  }

}


export default Scrabble;
