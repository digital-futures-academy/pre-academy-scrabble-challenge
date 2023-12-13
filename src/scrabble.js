class Scrabble {

  constructor(word) {
    if (this.word == null) {
      this.word = ''
    } else {
      this.word = word.toLowerCase();
    }
  }

  score(word) {
    // Write your implementation here
    let alphabetScores = {
      'a': 1,
      'e': 1,
      'i': 1,
      'o': 1,
      'u': 1,
      'l': 1,
      'n': 1,
      'r': 1,
      's': 1,
      't': 1,
      'd': 2,
      'g': 2,
      'b': 3,
      'c': 3,
      'm': 3,
      'p': 3,
      'f': 4,
      'h': 4,
      'v': 4,
      'w': 4,
      'y': 4,
      'k': 5,
      'j': 8,
      'x': 8,
      'q': 10,
      'z': 10
    };

    let score = 0;

    for (let i = 0; i < scrabble.word.length; i++) {
      score += alphabetScores[scrabble.word[i]] || 0;
    }

    return score;
  }
}

export default Scrabble;
