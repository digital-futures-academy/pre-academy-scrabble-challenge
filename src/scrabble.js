class Scrabble {
  constructor(word) {
    this.word = (typeof word === "string" ? word.toLowerCase().trim() : "");
  }

  score = () => {
    let s = 0;
    for (let l of this.word) {
      if (!(l in letterValues)) return 0;
      s += letterValues[l];
    }
    return s;
  }
}

const letterValues = {
  a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4,
  i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3,
  q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8,
  y: 4, z: 10
};

export default Scrabble;

/*
let scrabble0 = new Scrabble('');
console.log(scrabble0.score()); // => 0

let scrabble1 = new Scrabble(" \t\n");
console.log(scrabble1.score()); // => 0

let scrabble2 = new Scrabble(null);
console.log(scrabble2.score()); // => 0

let scrabble3 = new Scrabble('a');
console.log(scrabble3.score()); // => 1

let scrabble4 = new Scrabble('f');
console.log(scrabble4.score()); // => 4

let scrabble5 = new Scrabble('street');
console.log(scrabble5.score()); // => 6

let scrabble6 = new Scrabble('quirky');
console.log(scrabble6.score()); // => 22

let scrabble7 = new Scrabble('OXYPHENBUTAZONE');
console.log(scrabble7.score()); // => 41
*/