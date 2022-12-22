class Scrabble {

  constructor(word) {
    this._word = word;
    this._scrabbleDictionary = {
      "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1,
      "D": 2, "G": 2,
      "B": 3, "C": 3, "M": 3, "P": 3,
      "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4,
      "K": 5,
      "J": 8, "X": 8,
      "Q": 10, "Z": 10
    };
  }

  score() {
    // Write your implementation here
    if (!this.validWord(this._word)) {
      return 0;
    }

    let wordScore = 0;

    for (let i = 0; i < this._word.length; i++) {
      let currentLetter = this._word.charAt(i).toUpperCase();
      if (currentLetter in this._scrabbleDictionary) {
        wordScore += this._scrabbleDictionary[currentLetter];
      }
    }

    return wordScore;
  }

  validWord(word) {
    if (!(typeof word === "string") || word.length < 1 || word.includes("\\")) {
      return false;
    }

    return true;
  }
}

export default Scrabble;
