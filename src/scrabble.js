class Scrabble {

  constructor(word) {
    this.word = word;
    this.points = 0;
    this.splittedWord = [];


    this.onePointers = ['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't']
    this.twoPointers = ['d', 'g']
    this.threePointers = ['b', 'c', 'm', 'p']
    this.fourPointers = ['f', 'h', 'v', 'w', 'y']
    this.fivePointers = ['k']
    this.eightPointers = ['j', 'x']
    this.tenPointers = ['q', 'z']
  }

  score() {
    if (this.word === '' || this.word === null) {
      return 0
    } else {
      this.splitWord()


      this.addPoints(this.onePointers, 1)
      this.addPoints(this.twoPointers, 2)
      this.addPoints(this.threePointers, 3)
      this.addPoints(this.fourPointers, 4)
      this.addPoints(this.fivePointers, 5)
      this.addPoints(this.eightPointers, 8)
      this.addPoints(this.tenPointers, 10)
      return this.points
    }
  }

  splitWord() {
    this.splittedWord = this.word.trim().toLowerCase().split('');
  }


  addPoints(lettersArray, lettersValue) {
    for (let i = 0; i < this.splittedWord.length; i++) {
      for (let j = 0; j < lettersArray.length; j++) {
        if (this.splittedWord[i] == lettersArray[j]) {
          this.points = this.points + lettersValue;
        }
      }
    }
  }
}

export default Scrabble;
