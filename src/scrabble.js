class Scrabble {
  /*Constructor to initialize the class variables
  --lettterScores-- is an object that contains the scores for each letter.
  --word-- is the word that we need to compute the score for, if this is not null,
  we convert the word to upper case letters.
  */
  constructor(word) {
    this.letterScores = {
      "A": 1, "B": 3, "C": 3, "D": 2, "E": 1, "F": 4, "G": 2, "H": 4, "I": 1, "J": 8, "K": 5, "L": 1, "M": 3, "N": 1, "O": 1, "P": 3, "Q": 10, "R": 1, "S": 1, "T": 1, "U": 1, "V": 4, "W": 4, "X": 8, "Y": 4, "Z": 10, " ": 0, "\n": 0, "\t": 0
    };

    this.word = word;
    if (this.word != null) {
      this.word = this.word.toUpperCase();
    }
  }
  /* --score-- method used to compute the score for the given word
  if the word is null, the answer must be 0.
  if the word contains characters that are not allowed , the answer must be 0.
  if the word is valid, we sum up the scores for each letter.
  Also we use == and != instead of === and !== to capture both undefined and null.
  */
  score() {
    if (!this.validate()) {
      return 0;
    }
    return this.computeValidScore();
  }

  validate() {
    return this.validateNull() && this.validateLetters();
  }

  validateNull() {
    return this.word != null;
  }

  validateLetters() {
    for (let letter = 0; letter < this.word.length; ++letter) {
      if (!this.letterScores[this.word[letter]]) {
        return false;
      }
    }
    return true;
  }

  computeValidScore() {
    let answer = 0;
    for (let letter = 0; letter < this.word.length; ++letter) {
      answer += this.letterScores[this.word[letter]];
    }
    return answer;
  }
}

export default Scrabble;
