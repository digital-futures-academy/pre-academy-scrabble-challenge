class Scrabble {

  constructor(word) {
    this.word = word?.toUpperCase();
  }

  score() {
    var totalPoints = 0
    if (this.word == '' || this.word == null) {
      return totalPoints = 0
    } else {
      for (let i = 0; i < this.word.length; i++) {
        if (this.word[i] == 'A' || this.word[i] == 'E' || this.word[i] == 'I' || this.word[i] == 'O' || this.word[i] == 'U' || this.word[i] == 'L' || this.word[i] === 'N' || this.word[i] === 'R' || this.word[i] === 'S' || this.word[i] === 'T') {
          totalPoints += 1;
        } else if (this.word[i] == 'D' || this.word[i] == 'G') {
          totalPoints += 2;
        } else if (this.word[i] == 'B' || this.word[i] == 'C' || this.word[i] == 'M' || this.word[i] == 'P') {
          totalPoints += 3
        } else if (this.word[i] == 'F' || this.word[i] == 'H' || this.word[i] == 'V' || this.word[i] == 'W' || this.word[i] == 'Y') {
          totalPoints += 4
        } else if (this.word[i] == 'K') {
          totalPoints += 5
        } else if (this.word[i] == 'J' || this.word[i] == 'X') {
          totalPoints += 8
        } else if (this.word[i] == 'Q' || this.word[i] == 'Z') {
          totalPoints += 10
        }
      }
    }
    return totalPoints
  }
}

export default Scrabble;
