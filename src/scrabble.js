class Scrabble {
  constructor(word) {
    if (word === null) {
      this.word = '';
    } else {
      this.word = word.toUpperCase();
    }
  }

  score() {
    let points = 0;

    // Point totals
    const onePoints = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
    const twoPoints = ['D', 'G'];
    const threePoints = ['B', 'C', 'M', 'P'];
    const fourPoints = ['F', 'H', 'V', 'W', 'Y'];
    const fivePoints = ['K'];
    const eightPoints = ['J', 'X'];
    const tenPoints = ['Q', 'Z'];

    for (let i = 0; i < this.word.length; i++) {
      const letters = this.word.slice(i);

      for (let j = 0; j < onePoints.length; j++) {
        if (letters[i] === onePoints[j]) {
          points += 1;
        }
      }


      for (let k = 0; k < twoPoints.length; k++) {
        if (letters[i] === twoPoints[k]) {
          points += 2;
        }
      }

      for (let l = 0; l < threePoints.length; l++) {
        if (letters[i] === threePoints[l]) {
          points += 3;
        }
      }


      for (let m = 0; m < fourPoints.length; m++) {
        if (letters[i] === fourPoints[m]) {
          points += 4;
        }
      }

      for (let n = 0; n < fivePoints.length; n++) {
        if (letters[i] === fivePoints[n]) {
          points += 5;
        }
      }

      for (let o = 0; o < eightPoints.length; o++) {
        if (letters[i] === eightPoints[o]) {
          points += 8;
        }
      }

      for (let p = 0; p < tenPoints.length; p++) {
        if (letters[i] === onePoints[p]) {
          points += 10;
        }
      }
    }
    return points;
  }
}
export default Scrabble;
