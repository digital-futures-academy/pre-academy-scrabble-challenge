const values = {  // from my learning i  python i realise i could use dictonaires which store key:value pairs that can be called later  
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1,
  R: 1, S: 1, T: 1, D: 2, G: 2, B: 3, C: 3,
  M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5, J: 8, X: 8, Q: 10, Z: 10
};

class Scrabble {
  // returns '' if the word is blank or empty otherwise makes it captial to compare with values dictionary 
  constructor(word) {
    if (word == null) {
      this.word = ' '
    } else {
      this.word = word.toUpperCase();
    }
  }

  score() { // .reduce method will go through each element and add the current arr value to the result from the previous until it finishes 
    return [...this.word].reduce((accumulator, char) => (accumulator += values[char] || 0), 0);

  }
}

export default Scrabble;

