class Scrabble {

  constructor(word) {
    if (this.isValidWord(word)){
      this.word = word.toUpperCase();
    }
  }


  isValidWord(string) {
    if (typeof string != "string" || string.trim() == "") {
      return false;
    }
    return true;
  }

   score() {
    if (typeof this.word !== "undefined") {
      return this.getWordScore(this.word);
    }
    return 0;
  }

  getWordScore(word) {
     let counter = 0
    for (let i = 0; i < word.length; i++){
      counter += this.scrabble(word[i])
    }
    return counter;
  }
  scrabble(char) {
    const scrabbleDict = { "A": 1, "B": 3, "C": 3, "D": 2, "E": 1, "F": 4, "G": 2, "H": 4, "I": 1, "J": 8, "K": 5, "L": 1, "M": 3, "N": 1, "O": 1, "P": 3, "Q": 10, "R": 1, "S": 1, "T": 1, "U": 1, "V": 4, "W": 4, "X": 8, "Y": 4, "Z": 10 };
    return scrabbleDict[char];
  }
}

let scrabble1 = new Scrabble('')
console.log(scrabble1.score()) // => 0

let scrabble2 = new Scrabble(" \t\n")
console.log(scrabble2.score()) // => 0

let scrabble3 = new Scrabble(null)
console.log(scrabble3.score()) // => 0

let scrabble4 = new Scrabble('a')
console.log(scrabble4.score()) // => 1

let scrabble5 = new Scrabble('f')
console.log(scrabble5.score()) // => 4

let scrabble6 = new Scrabble('street')
console.log(scrabble6.score())// => 6

let scrabble7 = new Scrabble('quirky')
console.log(scrabble7.score()) // => 22

let scrabble8 = new Scrabble('OXYPHENBUTAZONE')
console.log(scrabble8.score()) // => 41
export default Scrabble;
