//First set each character a value

const charval = [
  [null],
  ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  ['D', 'G'],
  ['B', 'C', 'M', 'P'],
  ['F', 'H', 'V', 'W', 'Y'],
  ['K'],
  [],
  [],
  ['J', 'X'],
  [],
  ['Q', 'Z']
];


class Scrabble {

  constructor(word) {
    if (word == null) {
      this.word = '';
    }
    else {
      this.word = word.toUpperCase();
    }
  };

  score() {
    // Write your implementation here

    let total = 0;
    for (let i = 0; i < this.word.length; i++) {
      for (let j = 0; j < charval.length; j++) {
        if (charval[j].includes(this.word[i])) {
          total += j;
        }
      }
    }

    return total
  }
}

export default Scrabble;
