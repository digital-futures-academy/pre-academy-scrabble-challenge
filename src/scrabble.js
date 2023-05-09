class Scrabble {
  constructor(word) {
    this.word = word.toUpperCase();
    this.letterValueTable = {
      'AEIOULNRST': 1,
      'DG': 2,
      'BCMP': 3,
      'FHVWY': 4,
      'K': 5,
      'JX': 8,
      'QZ': 10
    }
  }

  score() {
    let totalScore = 0;
    for (let i = 0; i < this.word.length; i++) {
      for (let letters in this.letterValueTable) {
        if (letters.includes(this.word[i])) {
          totalScore += this.letterValueTable[letters];
          break;
        }
      }
    }
  }
}

export default Scrabble;
