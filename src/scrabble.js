class Scrabble {
constructor(word) {
    this.word = word; // Store the word passed to the constructor as a property of the instance
  }

  score() {
    if (!this.word || typeof this.word !== 'string') {
      return 0; // If the word is falsy or not a string, return 0 as the score
    }
  let score = 0; // Initialize the score to 0
    for (let letter of this.word.toUpperCase()) {
      // Iterate over each letter of the word converted to uppercase
      switch (letter) {
        case 'A': case 'E': case 'I': case 'O': case 'U': case 'L': case 'N': case 'R': case 'S': case 'T':
          score += 1; // Add 1 to the score for the letters A, E, I, O, U, L, N, R, S, T
          break;
        case 'D': case 'G':
          score += 2; // Add 2 to the score for the letters D and G
          break;
        case 'B': case 'C': case 'M': case 'P':
          score += 3; // Add 3 to the score for the letters B, C, M, and P
          break;
        case 'F': case 'H': case 'V': case 'W': case 'Y':
          score += 4; // Add 4 to the score for the letters F, H, V, W, and Y
          break;
        case 'K':
          score += 5; // Add 5 to the score for the letter K
          break;
        case 'J': case 'X':
          score += 8; // Add 8 to the score for the letters J and X
          break;
        case 'Q': case 'Z':
          score += 10; // Add 10 to the score for the letters Q and Z
          break;
      }
    }
    return score;
}

export default Scrabble;
