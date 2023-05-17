class Scrabble {
constructor(word) {
    this.word = word; // Store the word passed to the constructor as a property of the instance
  }

  score() {
    if (!this.word || typeof this.word !== 'string') {
      return 0; // If the word is falsy or not a string, return 0 as the score
    }
  
}

export default Scrabble;
