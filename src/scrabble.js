class Scrabble {
  constructor(word) {
    if (typeof word === 'string' || word instanceof String)
      this._word = word.trim().toUpperCase();
    else
      this._word = '';

    this._score = 0;
    this._calculateScore();
  }

  score() {
    return this._score;
  }

  _calculateScore() {
    const letterPoints = { "A": 1, "B": 3, "C": 3, "D": 2, "E": 1, "F": 4, "G": 2, "H": 4, "I": 1, "J": 8, "K": 5, "L": 1, "M": 3, "N": 1, "O": 1, "P": 3, "Q": 10, "R": 1, "S": 1, "T": 1, "U": 1, "V": 4, "W": 4, "X": 8, "Y": 4, "Z": 10 };

    const wordArray = Array.from(this._word);

    for (let i = 0; i < wordArray.length; i++) {
      const letter = wordArray[i];
      this._score += letterPoints[letter];
    }
  }


}

export default Scrabble;
