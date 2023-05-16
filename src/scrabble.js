class Scrabble {

  constructor(word) {
    this.word = (word || ' '); //returns if blank
  }

  score() {
    let word = this.word.toUpperCase();
    const POINTS = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];

    let score = 0;

    for (let i = 0; i < word.length; i++) {
      const charCode = word.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { // check if uppercase letter
        score += POINTS[charCode - 65];
      } else if (charCode >= 97 && charCode <= 122) { // check if lowercase letter
        score += POINTS[charCode - 97];
      }
    }
    return score;

  }
}

export default Scrabble;
