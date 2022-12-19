const scrabScore = {
  a: 1,
  e: 1,
  i: 1,
  o: 1,
  u: 1,
  l: 1,
  n: 1,
  r: 1,
  s: 1,
  t: 1,
  d: 2,
  g: 2,
  b: 3,
  c: 3,
  m: 3,
  p: 3,
  f: 4,
  h: 4,
  v: 4,
  w: 4,
  y: 4,
  k: 5,
  j: 8,
  x: 8,
  q: 10,
  z: 10,
};

class Scrabble {
  constructor(word) {
    if (word == null) { // if an empty string is presented.
      this.word = "";
    } else {
      this.word = word.toLowerCase(); //makes the given string into lower case characters
    }
  }

  score() {
    // Write your implementation here
    let i,
      sum = 0;
    for (i = 0; i < this.word.length; i++) { //iterate through the string (word) as many times as the string length.
      sum += scrabScore[this.word[i]] || 0; // sum will equal the sum of the values that are assigned to each letter in the string from the scrabScore variable. Or 0 in the case of an empty string.

    }
    return sum;
  }
}
//test commit comment
export default Scrabble;
