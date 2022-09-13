class Scrabble {
  constructor(word) {
    this.letter = word;
  }
  score() {
    // Write your implementation here
    if (this.letter == " \t\n") {
      return 0
    } else if (this.letter == '') {
      return 0
    }
    else if (this.letter == null) {
      return 0
    } else {
      this.letter = this.letter.toUpperCase()
      let score = 0;
      for (let i = 0; i < this.letter.length; i++) {
        if (this.letter[i] === 'D' || this.letter[i] === 'G') {
          score += 2
        }
        else if (this.letter[i] === 'B' || this.letter[i] === 'C' || this.letter[i] === 'M' || this.letter[i] === 'P') {
          score += 3
        }
        else if (this.letter[i] === 'F' || this.letter[i] === 'H' || this.letter[i] === 'V' || this.letter[i] === 'W' || this.letter[i] === 'Y') {
          score += 4
        }
        else if (this.letter[i] === 'K') {
          score += 5
        }
        else if (this.letter[i] === 'J' || this.letter[i] === 'X') {
          score += 8
        }
        else if (this.letter[i] === 'Q' || this.letter[i] === 'Z') {
          score += 10
        }
        else {
          score += 1
        }

      }
      return score;
    }
  }
}
export default Scrabble;

