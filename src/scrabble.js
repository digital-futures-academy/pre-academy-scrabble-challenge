class Scrabble {

  totalScore = 0; // stores cumulative score of the letters in the word

  // associates each letter or group of letters with a specific value
  letterValues = { 'AEIOULNRST': 1, 'DG': 2, 'BCMP': 3, 'FHVWY': 4, 'K': 5, 'JX': 8, 'QZ': 10 };

  _word = ''; // stores word from the user
  constructor(word) {
    this._word = word ? word.toUpperCase() : ''; // converts "word" to uppercase and passes it to "_word"
  }
  score() {

    for (let letter of this._word) { // loops through each letter in "_word"
      for (const letters in this.letterValues) { // loops through the property in the "letterValue" object
        if (letters.includes(letter)) { // checks the current "letter" is included in the current property's letters
          const letterScore = this.letterValues[letters]; // gets the score for the current property's letters
          this.totalScore += letterScore;
          break;
        }
      }
    }
    return this.totalScore; // returns total score for the word
  }
}

export default Scrabble;