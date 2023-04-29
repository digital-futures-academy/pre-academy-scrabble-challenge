class Scrabble {

  constructor(word) {
    this.letterScores = {
      "A": 1, "B": 3, "C": 3, "D": 2, "E": 1, "F": 4, "G": 2, "H": 4, "I": 1, "J": 8, "K": 5, "L": 1, "M": 3, "N": 1, "O": 1, "P": 3, "Q": 10, "R": 1, "S": 1, "T": 1, "U": 1, "V": 4, "W": 4, "X": 8, "Y": 4, "Z": 10
    };

    this.word = word;
    if (this.word != null) {
      this.word = this.word.toUpperCase();
    }
  }

  score() {
    // Write your implementation here
    let totalScore = 0;
    if (this.word == null) {
      return 0;
    }
    for (let i = 0; i < this.word.length; ++i) {
      if (!this.letterScores[this.word[i]]) {
        return 0;
      }
      totalScore += this.letterScores[this.word[i]];
    }
    return totalScore;
  }
}

export default Scrabble;
