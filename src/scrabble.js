class Scrabble {
  constructor(word) {
    this.word = word ? word.toUpperCase() : '';
  
    // Define the letterScores object containing the scores of each letter in the Scrabble game
    this.letterScores = {
      'A': 1,
      'E': 1,
      'I': 1,
      'O': 1,
      'U': 1,
      'L': 1,
      'N': 1,
      'R': 1,
      'S': 1,
      'T': 1,
      'D': 2,
      'G': 2,
      'B': 3,
      'C': 3,
      'M': 3,
      'P': 3,
      'F': 4,
      'H': 4,
      'V': 4,
      'W': 4,
      'Y': 4,
      'K': 5,
      'J': 8,
      'X': 8,
      'Q': 10,
      'Z': 10,
      '': 0,
      '\t': 0,
      '\n': 0
    }
  }

  score() {
    if (!this.checkWordChars()) {
      return 0
    }
    return this.getScore();
  }

  checkWordChars() {
    // Loop through each character of the word
    for (let i = 0; i < this.word.length; i++) {
      // Use hasOwnProperty() method to determine whether the character being checked is a valid key in the letterScores object
      if (!this.letterScores.hasOwnProperty(this.word[i])) {
        return false;
      }
    }
    // If all characters are valid, return true
    return true;
  }

  getScore() {
    let total = 0;
    // Loop through each character of the word
    for (let i = 0; i < this.word.length; i++) {
      // Add the score of the character to the total score
      total += this.letterScores[this.word[i]];
    }
    return total;
  }
}

export default Scrabble;