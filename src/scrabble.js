class Scrabble {
  score(word) {
    // Write your implementation here
    const letterValues = {
      'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
      'D': 2, 'G': 2,
      'B': 3, 'C': 3, 'M': 3, 'P': 3,
      'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
      'K': 5,
      'J': 8, 'X': 8,
      'Q': 10, 'Z': 10
    };

    let score = 0;
    if (word) {
      for (let i = 0; i < word.length; i++) {
        const letter = word[i].toUpperCase();
        const letterScore = letterValues[letter];
        score += letterScore ? letterScore : 0;
      }
    }

    return score;
  }
}


let scrabble1 = new Scrabble();
scrabble1.score('');          // => 0

let scrabble2 = new Scrabble();
scrabble2.score(' \t\n');     // => 0

let scrabble3 = new Scrabble();
scrabble3.score(null);        // => 0

let scrabble4 = new Scrabble();
scrabble4.score('a');         // => 1

let scrabble5 = new Scrabble();
scrabble5.score('f');         // => 4

let scrabble6 = new Scrabble();
scrabble6.score('street');    // => 6

let scrabble7 = new Scrabble();
scrabble7.score('quirky');    // => 22

let scrabble8 = new Scrabble();
scrabble8.score('OXYPHENBUTAZONE');    // => 41


export default Scrabble;