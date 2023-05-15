//Object to store the score value of all letters
const letterPoints = {

  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  x: 8,
  z: 10,
  w: 4,
  y: 4,

};

class Scrabble {
  constructor(str) {
    /*make sure the string is lowercase and split the word into individual letters and assign it to the class
    if str isnt a string then we set a default value that evaluates to 0. this value is an array so we can use it
    with array.reduce();*/
    this.word = typeof str === "string" ? this.word = str.toLowerCase().split("") : [""];
  }

  //Compute the score with no modifiers
  score() {
    //Use the reduce iterator to sum the total value of the word.
    let total = this.word.reduce((total, currLetter) => total + letterPoints[currLetter], 0);
    //Make sure the value of total isnt NaN and return it
    return Number.isNaN(total) ? 0 : total;

  }
}

class ScrabbleMultiWord extends Scrabble {
  //Compute the score with multiplier on the entire word. Anything false is double word, anything true is triple word.
  score(multiWord) {
    //Use the reduce iterator to sum the total value of the word.
    let total = this.word.reduce((total, currLetter) => total + letterPoints[currLetter], 0);
    //Make sure the value of total isnt NaN and return it
    return Number.isNaN(total) ? 0 : total * (multiWord ? 3 : 2);
  }
}

export default Scrabble;
