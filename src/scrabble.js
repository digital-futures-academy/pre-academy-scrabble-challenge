class Scrabble {
  constructor(word) {
    this.word = word;
  }

  score() {
    let points = 0
    if (!this.word || this.word.includes(' ')) {
      points = 0;
    } else if (this.word.includes('a') ||
      this.word.includes('e') ||
      this.word.includes('i') ||
      this.word.includes('o') ||
      this.word.includes('u') ||
      this.word.includes('l') ||
      this.word.includes('n') ||
      this.word.includes('r') ||
      this.word.includes('s') ||
      this.word.includes('t')) {
      points = points + 1
    }
    else if (this.word.includes('d') ||
      this.word.includes('g')) {
      points = points + 2
    }
    else if (this.word.includes('b') ||
      this.word.includes('c') ||
      this.word.includes('m') ||
      this.word.includes('p')) {
      points = points + 3
    }
    else if (this.word.includes('f') ||
      this.word.includes('h') ||
      this.word.includes('v') ||
      this.word.includes('w') ||
      this.word.includes('y')) {
      points = points + 4
    }
    else if (this.word.includes('k')) {
      points = points + 5
    }
    else if (this.word.includes('j') ||
      this.word.includes('x')) {
      points = points + 8
    }
    else if (this.word.includes('q') ||
      this.word.includes('z')) {
      points = points + 10
    }
    return points;
  }

}

export default Scrabble;
