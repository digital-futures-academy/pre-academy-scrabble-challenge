class Scrabble {

  constructor(inputWord) {
    this.scrabbleWord = inputWord;
  }
  total = 0;

  pointsMap = new Map([
    ['a', 1], ['b', 3], ['c', 3], ['d', 2], ['e', 1], ['f', 4], ['g', 2], ['h', 4], ['i', 1], ['j', 8], ['k', 5], ['l', 1], ['m', 3], ['n', 1], ['o', 1], ['p', 3], ['q', 10], ['r', 1], ['s', 1], ['t', 1], ['u', 1], ['v', 4], ['w', 4], ['x', 8], ['y', 4], ['z', 10]
  ]);

  score() {
    if (this.scrabbleWord === null) return 0;
    this.calculateScore();
    return this.total;
  }

  calculateScore() {
    let array = this.scrabbleWord.toLowerCase().trim().split(''); // ['s','m','u','d','g','e']
    for (let i in array) {
      this.total = this.total + this.pointsMap.get(array[i]);
    }
  }
}

export default Scrabble;
