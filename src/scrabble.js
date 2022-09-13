import promptSync from 'prompt-sync';
const prompt = promptSync();

const aB = { a: 1, e: 1, i: 1, o: 1, u: 1, l: 1, l: 1, n: 1, r: 1, s: 1, t: 1, d: 2, g: 2, p: 3, b: 3, c: 3, m: 3, f: 4, h: 4, v: 4, w: 4, y: 4, k: 5, j: 8, x: 8, q: 10, z: 10 }
const nB = { "2": 2, "3": 3 }
let m = prompt("Please input the multiplier for each letter of your word: ")

class Scrabble {

  constructor(word) {
    this.word = word;
  }

  score() {

    let score = 0;
    for (let i = 0; i < (this.word || 0).length; i++) { // gives i < 0 if cannot read length (i.e., no loop for null)
      score += aB[this.word[i].toLowerCase()] * m[i] || 0; // may not pass test if multiplier not input
      score *= nB[this.word[i]] || 1; // scores triple/double word 
    }
    return score;
  }
}
export default Scrabble;


const scrabble = new Scrabble("hello");
console.log(scrabble.score());

// write triple word as "hello3"
// write double word as "hello2"
// if e is a double letter in hello, write multiplier as 12111
//use prompt to enter multiplier for double/triple letter 
