class Scrabble {
  constructor(word) {
    this.word = word;
  }

  score() {
    if (!this.word) {
      return 0;
    }

    let score = 0;
    const letterValues = {
      'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
      'D': 2, 'G': 2,
      'B': 3, 'C': 3, 'M': 3, 'P': 3,
      'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
      'K': 5,
      'J': 8, 'X': 8,
      'Q': 10, 'Z': 10
    };

    for (let i = 0; i < this.word.length; i++) {
      let letter = this.word[i].toUpperCase();
      if (letter in letterValues) {
        score += letterValues[letter];
      }
    }

    return score;
  }
}

// Test cases
let scrabble1 = new Scrabble('');
console.log(scrabble1.score()); // Output: 0

let scrabble2 = new Scrabble(" \t\n");
console.log(scrabble2.score()); // Output: 0

let scrabble3 = new Scrabble(null);
console.log(scrabble3.score()); // Output: 0

let scrabble4 = new Scrabble('a');
console.log(scrabble4.score()); // Output: 1

let scrabble5 = new Scrabble('f');
console.log(scrabble5.score()); // Output: 4

let scrabble6 = new Scrabble('street');
console.log(scrabble6.score()); // Output: 6

let scrabble7 = new Scrabble('quirky');
console.log(scrabble7.score()); // Output: 22

let scrabble8 = new Scrabble('OXYPHENBUTAZONE');
console.log(scrabble8.score()); // Output: 41
export default Scrabble;