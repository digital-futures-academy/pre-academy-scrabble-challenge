

const aB = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, p: 3, b: 3, c: 3, m: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 }
class Scrabble {

  constructor(word) {
    this.word = word
  }

  score() {
    // Write your implementation here

    let score = 0
    for (let i = 0; i < (this.word || 0).length; i++) {
      score += aB[this.word[i].toLowerCase()] || 0;
    }
    return score

  }
}
export default Scrabble;



