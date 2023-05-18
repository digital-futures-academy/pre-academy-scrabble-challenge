class Scrabble {

  totalScore = 0;


  letterValues = { 'AEIOULNRST': 1, 'DG': 2, 'BCMP': 3, 'FHVWY': 4, 'K': 5, 'JX': 8, 'QZ': 10 };

  _word = '';
  constructor(word) {
    this._word = word ? word.toUpperCase() : '';
  }
  score() {

    for (let letter of this._word) {
      for (const letters in this.letterValues) {
        if (letters.includes(letter)) {
          const letterScore = this.letterValues[letters];
          this.totalScore += letterScore;
          break;
        }
      }
    }
    return this.totalScore;
  }
}

export default Scrabble;