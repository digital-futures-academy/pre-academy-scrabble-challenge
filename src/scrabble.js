class Scrabble {
  constructor(word) {
    this.word = word;
    this.scoringPoints = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      2: ['D', 'G'],
      3: ['B', 'C', 'M', 'P'],
      4: ['F', 'H' , 'V', 'W', 'Y'],
      5: ['K'],
      8: ['J', 'X'],
      10: ['Q', 'Z']
    }
  }
  
  score() {
    // Write your implementation here
  }

  transformScoringPoints() {
    let transformedScoring = {}
    for (const letterValue in this.scoringPoints) {
      for (let i = 0; i < this.scoringPoints[letterValue].length;i ++) {
          transformedScoring[this.scoringPoints[letterValue][i]] = letterValue;
      }
    }
    return transformedScoring;
  }

  isEmptyWord = () => (this.word === '') ? true : false;

  isNull = () =>  (this.word === null) ? true : false;

  isWhiteSpace = () => (' \t\n\r\v'.indexOf(this.word) > -1) ? true : false;

  wordLetters() {
    let letters = this.word.split('').map(letter => letter.toUpperCase());
    return letters;
  }
}
export default Scrabble;
const game = new Scrabble;
console.log(game.transformScoringPoints());