class Scrabble {
  constructor(word) {
    if (word === null) {
      this.word = '';
    } else {
      this.word = word.toUpperCase();
    }
  }

  score() {
    let total = 0;

    let points = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      2: ['D', 'G'],
      3: ['B', 'C', 'M', 'P'],
      4: ['F', 'H', 'V', 'W', 'Y'],
      5: ['K'],
      8: ['J', 'X'],
      10: ['Q', 'Z'],
    };
    for (let i = 0; i < this.word.length; i++) {
      const letters = this.word.slice(i);
      for (let key in points) {
        if (letters[i] === points[1]) {
          total += 1
        } else if (letters[i] === points[2]) {
          total += 2
        } else if (letters[i] === points[3]) {
          total += 3
        } else if (letters[i] === points[4]) {
          total += 4
        } else if (letters[i] === points[5]) {
          total += 5
        } else if (letters[i] === points[8]) {
          total += 8
        } else if (letters[i] === points[10]) {
          total += 10
        }
      }
      return total;
    }
  }
}
export default Scrabble;
