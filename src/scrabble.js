const points = {
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1,
  R: 1, S: 1, T: 1, D: 2, G: 2, B: 3, C: 3,
  M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5, J: 8, X: 8, Q: 10, Z: 10
};
class Scrabble {
  constructor(word) { 
    if (word == null) {
      this.word = ""; //assigning the word to be empty if it's found to be null
    } else {
      this.word = word.toUpperCase(); //formatting word to be uppercase so that we can compare against the points map later
    }
  }
  score() {    
    return [...this.word].reduce((accumulator, letter) => (accumulator += points[letter] || 0), 0);
    //use ... to iterate through an array (strings can be treated as arrays) and then .reduce to sum the values where accumulator is the counter and letter is the current value, the first zero is if no score is found in the map and second zero is the initial value
  }
}

export default Scrabble;

let test1 = new Scrabble('')
console.log(test1.score()) // => 0

let test2 = new Scrabble(" \t\n")
console.log(test2.score()) // => 0

let test3 = new Scrabble(null)
console.log(test3.score()) // => 0

let test4 = new Scrabble('a')
console.log(test4.score()) // => 1

let test5 = new Scrabble('f')
console.log(test5.score()) // => 4

let test6 = new Scrabble('street')
console.log(test6.score()) // => 6

let test7 = new Scrabble('quirky')
console.log(test7.score()) // => 22

let test8 = new Scrabble('OXYPHENBUTAZONE')
console.log(test8.score()) // => 41
