class Scrabble {
  
  constructor(input) {
    this.input = input;
  }
  score() {
    const lettersValue = {
      A: 1,
      E: 1,
      I: 1,
      O: 1,
      U: 1,
      L: 1,
      N: 1,
      R: 1,
      S: 1,
      T: 1,
      D: 2,
      G: 2,
      B: 3,
      C: 3,
      M: 3,
      P: 3,
      F: 4,
      H: 4,
      V: 4,
      W: 4,
      Y: 4,
      K: 5,
      J: 8,
      X: 8,
      Q: 10,
      Z: 10,
    };
    
    let word = this.input;
    
    let totalPoints = 0;

    if(!word || word.includes(" ")){
      return totalPoints;
    }
    else {
      
      word = word.toUpperCase();

      for(var i = 0; i < word.length; i++){
        totalPoints += lettersValue[word[i]];
        
      }
      return totalPoints;
    }
  }
}

export default Scrabble;

// let scrabble = new Scrabble('');
// console.log(scrabble.score()); // => 0

// let scrabble = new Scrabble(" \t\n")
// console.log(scrabble.score()) // => 0

// let scrabble = new Scrabble(null)
// console.log(scrabble.score()) // => 0

// let scrabble = new Scrabble('a')
// scrabble.score() // => 1

// let scrabble = new Scrabble('f')
// scrabble.score() // => 4

// let scrabble = new Scrabble('street')
// scrabble.score() // => 6

// let scrabble = new Scrabble('quirky')
// scrabble.score() // => 22

// let scrabble = new Scrabble('OXYPHENBUTAZONE')
// scrabble.score() // => 41