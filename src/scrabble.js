class Scrabble {

  constructor(input){
    this.input = input;
  }

  score() {

    // Map each letter to their respective value. 
    const scoreMap = {
      'A': 1, 'E': 1, 'I': 1, 'O': 1,
      'U': 1, 'L': 1, 'N': 1, 'R': 1,
      'S': 1, 'T': 1, 'D': 2, 'G': 2,
      'B': 3, 'C': 3, 'M': 3, 'P': 3,
      'F': 4, 'H': 4, 'V': 4, 'W': 4,
      'Y': 4, 'K': 5, 'J': 8, 'X': 8,
      'Q': 10, 'Z': 10,
    };

    // If word is null, not a string or is blank: returns 0.
    if ((this.input === null) || (typeof this.input !== 'string') || (this.input === '')) {
      return 0;
    }
    
    // Declares letters, trims the whitespace and converts them to uppercase.
    let letters = this.input.trim().toUpperCase();

    // Iterates over the letters of the word, compares these to their value and then sums the final score.
    let totalScore = 0;
    for (let i = 0; i < letters.length; i++) {
      totalScore += scoreMap[letters[i]];
    }
    return totalScore;
  }
}
export default Scrabble;