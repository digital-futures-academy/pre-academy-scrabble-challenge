class Scrabble {

  score() {
    const POINTS = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];

    function computeScore(word) {
      let score = 0;
      for (let i = 0; i < word.length; i++) {
        const charCode = word.charCodeAt(i);
        if (charCode >= 65 && charCode <= 90) { // check if uppercase letter
          score += POINTS[charCode - 65];
        } else if (charCode >= 97 && charCode <= 122) { // check if lowercase letter
          score += POINTS[charCode - 97];
        }
      }
      return score;
    }

    // Get input words from both players
    let word = [];
    word[0] = prompt("Player 1: ");
    word[1] = prompt("Player 2: ");

    // Score both words
    let score1 = computeScore(word[0]);
    let score2 = computeScore(word[1]);

    // Print the winner
    if (score1 > score2) {
      console.log("Player 1 wins!");
    } else if (score1 < score2) {
      console.log("Player 2 wins!");
    } else {
      console.log("Tie!");
    }
  }
}

export default Scrabble;
