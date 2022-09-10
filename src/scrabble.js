class Scrabble {

  constructor(word) {
    if (word == null) {
      this.word = "";
    }
    else {
      this.word = word.toUpperCase();
    }
  }

  score() {
    // Write your implementation here

    let count = 0;

    for (let i = 0, n = this.word.length; i < n; i++) {

      //  for (let this.word[i] in this.word) {
      if (this.word[i] === 'A' || this.word[i] === 'E' || this.word[i] === 'I' || this.word[i] === 'O' || this.word[i] === 'U' || this.word[i] === 'L' || this.word[i] === 'N' || this.word[i] === 'R' || this.word[i] === 'S' || this.word[i] === 'T') {
        count += 1
      }
      else if (this.word[i] === 'D' || this.word[i] === 'G') {
        count += 2;
      }
      else if (this.word[i] === 'B' || this.word[i] === 'C' || this.word[i] === 'M' || this.word[i] === 'P') {
        count += 3;
      }
      else if (this.word[i] === 'F' || this.word[i] === 'H' || this.word[i] === 'V' || this.word[i] === 'W' || this.word[i] === 'Y') {
        count += 4;
      }
      else if (this.word[i] === 'K') {
        count += 5;
      }
      else if (this.word[i] === 'J' || this.word[i] === 'X') {
        count += 8;
      }
      else if (this.word[i] === 'Q' || this.word[i] === 'Z') {
        count += 10;
      }
    }

    return count;

  }
}

export default Scrabble;