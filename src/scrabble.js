class Scrabble {
  constructor(word) {
    this.word = word;
    this.points = {
      'A': 1,
      'B': 3,
      'C': 3,
      'D': 2,
      'E': 1,
      'F': 4,
      'G': 2,
      'H': 4,
      'I': 1,
      'J': 8,
      'K': 5,
      'L': 1,
      'M': 3,
      'N': 1,
      'O': 1,
      'P': 3,
      'Q': 10,
      'R': 1,
      'S': 1,
      'T': 1,
      'U': 1,
      'V': 4,
      'W': 4,
      'X': 8,
      'Y': 4,
      'Z': 10,
    }
  }

  score() {
    if (this.isWordEmpty()) {
      return 0
    }

    let score = 0
    const letters = this.word.split('')

    letters.forEach(letter => {
      if (this.isALetter(letter)) {
        score += this.points[letter.toUpperCase()]
      } else {
        return 0
      }
    });

    return score
  }

  isWordEmpty() {
    return this.word === '' || this.word === null
  }

  isALetter(character) {
    return /^[A-Za-z]$/.test(character);
  }
}

export default Scrabble;
