
const LetterScore = {
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
  w: 4,
  x: 8,
  y: 4,
  z: 10
}



class Scrabble {

  constructor(word) {

    this.word = word;
    this.currentScore = 0;

  }

  get getWord() {

    return this.word;

  }

  set setWord(word) {

    this.word = word;

  }

  set setScore(score) {

    this.currentScore = score;

  }

  doubleWord() {

    if (this.checkInput() === 0) {

      return 0;

    }

    return (this.score() * 2)

  }

  tripleWord() {

    if (this.checkInput() === 0) {

      return 0;

    }

    return (this.score() * 3)

  }

  doubleLetter(letter) {

    if (this.checkInput() === 0) {

      return 0;

    }

    return this.getWord.match(letter) ? this.pointSystem(letter) + this.score() : this.score();

  }

  tripleLetter(letter) {

    if (this.checkInput() === 0) {

      return 0;

    }

    return this.getWord.match(letter) ? (this.pointSystem(letter) * 2) + this.score() : this.score();

  }

  pointSystem(letter) {

    if (this.checkInput() === 0) {

      return 0

    }

    return LetterScore[letter]

  }

  checkInput() {

    this.resetScore();

    if (this.checkNull() === 0 || this.checkWhiteSpace() === 0 || this.checkDigit() === 0 || this.checkCharacter() === 0) {

      return 0;

    }
  }

  resetScore() {

    this.setScore = 0;

  }

  checkNull() {

    if (this.getWord === null) {

      return 0;

    } else {

      this.setWord = this.getWord.toLowerCase().trim();

    }

  }

  checkWhiteSpace() {

    if (this.getWord === '') {

      return 0;

    }

  }

  checkDigit() {

    if (this.getWord.match(/\d/)) {

      return 0;

    }
  }

  checkCharacter() {

    if (this.getWord.match(/\W/)) {

      return 0;

    }

  }


  score() {

    if (this.checkInput() === 0) {

      return 0;

    }

    for (let loop = 0; loop < this.getWord.trim().length; loop++) {

      this.currentScore = this.currentScore + this.pointSystem(this.getWord.substr(loop, 1));

    }

    return this.currentScore
  }

}

let scrabble = new Scrabble('OXYPHENBUTAZONE')
//let scrabble = new Scrabble(null)
//let scrabble = new Scrabble('')
//let scrabble = new Scrabble('   ')
//let scrabble = new Scrabble('    a   ')
//let scrabble = new Scrabble('   a5   ')
//let scrabble = new Scrabble('   a/   ')

console.log(scrabble.score())
console.log(scrabble.doubleWord())
console.log(scrabble.tripleWord())
console.log(scrabble.doubleLetter('a'))
console.log(scrabble.doubleLetter('z'))
console.log(scrabble.tripleLetter('a'))
console.log(scrabble.tripleLetter('z'))

//this change

export default Scrabble;




