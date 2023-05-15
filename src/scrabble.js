// Code to determine the total score of a word in the game of Scrabble

class Scrabble {
  constructor(word = '') {
    this.word = word;
  }

  score() {
    // Here is the value of each letter of the alphabet in the Scrabble game
    const letterValues = {
      A: 1, B: 3, C: 3, D: 2, E: 1, F: 4, G: 2, H: 4,
      I: 1, J: 8, K: 5, L: 1, M: 3, N: 1, O: 1, P: 3,
      Q: 10, R: 1, S: 1, T: 1, U: 1, V: 4, W: 4, X: 8,
      Y: 4, Z: 10
    };

    let score = 0;
    // Here we check if the current Scrabble word is 'truthy' and if it is converts it into upper case to match the letterValues
    const uppercaseWord = (this.word || '').toUpperCase();

    // For loop which iterates through each letter of 'word' and totals the sum
    for (let i = 0; i < uppercaseWord.length; i++) {
      const letter = uppercaseWord[i];
      if (letter in letterValues) {
        score += letterValues[letter];
      }
    }

    return score;
  }
}

export default Scrabble;


// Acceptance criteria \\

let scrabble = new Scrabble('');
scrabble.score(); // => 0

let scrabble1 = new Scrabble(" \t\n");
scrabble1.score(); // => 0

let scrabble2 = new Scrabble(null);
scrabble2.score(); // => 0

let scrabble3 = new Scrabble('a');
scrabble3.score(); // => 1

let scrabble4 = new Scrabble('f');
scrabble4.score(); // => 4

let scrabble5 = new Scrabble('street');
scrabble5.score(); // => 6

let scrabble6 = new Scrabble('quirky');
scrabble6.score(); // => 22

let scrabble7 = new Scrabble('OXYPHENBUTAZONE');
scrabble7.score(); // => 41
