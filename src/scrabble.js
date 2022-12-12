class Scrabble {

  //constructor for scrabble word
  constructor(newWord) {
    this.word = newWord;
  }

  //method for calculating the score of the scrabble word
  score() {
    const letterScores = { A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1, D: 2, G: 2, B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10, Z: 10 };
    var score = 0;
    // The first statement checks for strings with no values scoring any null strings 0, the second statement scores any word including whitespace 0.
    if (!this.word) {
      return 0;
    } else if (this.word.includes(" ")) {
      return 0;
    }
    //for loop for each letter in the word
    for (let i = 0; i < this.word.length; i++) {
      //for each letter in the word, the letter is found using the loop index and .charAt() method, the char is converted to upper case letters using toUpperCase() method. 
      score += letterScores[this.word.charAt(i).toUpperCase()];
    }
    return score
  }
}

export default Scrabble;