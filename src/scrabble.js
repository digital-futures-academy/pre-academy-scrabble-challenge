// Save the letters with their values

const letter_value = {
  a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, b: 3, c: 3, m: 3, p: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10, A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1, D: 2, G: 2, B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10, Z: 10,
};

// Iterate through the given word, to give each letter value and sum. Iteration variable = 0, length is the number of items in the array, go from 0 to the length of the array. Assign 0 if unknown characters are found. 

class Scrabble {
  constructor(word) { //Constructor initialises an object within a class, called when a new object is initialised with 'new'.
    if (word == null || word == ' \t\n') { this.word = ''; }
    else this.word = word;                        // needed to set value of this.word
  }
  score() {
    const word = this.word.toUpperCase(); // needed to set or use this.word and convert to uppercase
    let i,
      points = 0;
    for (i = 0; i < word.length; i++) {
      points += letter_value[word[i]] || 0;
    }
    return points;
  }
}

// Acceptance Criteria
let scrabbleA = new Scrabble('');
scrabbleA.score(); // => 0 

let scrabbleB = new Scrabble(" \t\n")
scrabbleB.score() // => 0

let scrabbleC = new Scrabble(null)
scrabbleC.score() // => 0

let scrabbleD = new Scrabble('a')
scrabbleD.score() // => 1

let scrabbleE = new Scrabble('f')
scrabbleE.score() // => 4

let scrabbleF = new Scrabble('street')
scrabbleF.score() // => 6

let scrabbleG = new Scrabble('quirky')
scrabbleG.score() // => 22

let scrabbleH = new Scrabble('OXYPHENBUTAZONE')
scrabbleH.score() // => 41

export default Scrabble;