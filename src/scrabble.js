class Scrabble {
  constructor(word) {
    this.word = word;
  }

  score() {
    if (!this.word || typeof this.word !== 'string') {
      return 0;
    }

    const letterValues = {
      A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
      D: 2, G: 2,
      B: 3, C: 3, M: 3, P: 3,
      F: 4, H: 4, V: 4, W: 4, Y: 4,
      K: 5,
      J: 8, X: 8,
      Q: 10, Z: 10
    };

    let score = 0;
    for (let i = 0; i < this.word.length; i++) {
      const letter = this.word[i].toUpperCase();
      if (letterValues.hasOwnProperty(letter)) {
        score += letterValues[letter];
      }
    }

    return score;
  }
}

export default Scrabble;

let scrabble = new Scrabble('DaSNi');
let score = scrabble.score();
console.log(score); // => 6

let scrabble1 = new Scrabble('');
let score1 = scrabble1.score();
console.log(score1); // => 0

let scrabble2 = new Scrabble(" \t\n");
let score2 = scrabble2.score();
console.log(score2); // => 0

let scrabble3 = new Scrabble(null);
let score3 = scrabble3.score();
console.log(score3); // => 0

let scrabble4 = new Scrabble('a');
let score4 = scrabble4.score();
console.log(score4); // => 1

let scrabble5 = new Scrabble('f');
let score5 = scrabble5.score();
console.log(score5); // => 4

let scrabble6 = new Scrabble('street');
let score6 = scrabble6.score();
console.log(score6); // => 6

let scrabble7 = new Scrabble('quirky');
let score7 = scrabble7.score();
console.log(score7); // => 22

let scrabble8 = new Scrabble('OXYPHENBUTAZONE');
let score8 = scrabble8.score();
console.log(score8); // => 41
