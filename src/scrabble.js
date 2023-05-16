class Scrabble {
  constructor(word) {
    this.word = word;
  }

  score() {
    let score = 0

    if (this.word === '' || this.word === null) {
      return score
    }
  }
}

export default Scrabble;
