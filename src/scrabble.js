const letterScores = {
  1: ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"],
  2: ["d", "g"],
  3: ["b", "c", "m", "p"],
  4: ["f", "h", "v", "w", "y"],
  5: ["k"],
  8: ["j", "x"],
  10: ["q", "z"],
};
class Scrabble {
  constructor(word) {
    this.word = word;
  }

  score() {
    // Write your implementation here
    const wordArray = this.word.toLowerCase().split("");

    const totalScore = wordArray.reduce((acc, letter) => {
      for (const [score, letters] of Object.entries(letterScores)) {
        if (letters.includes(letter)) {
          return acc + parseInt(score);
        }
      }
    }, 0);

    return totalScore;
  }
}

export default Scrabble;

const scrabble = new Scrabble("a");
const scrabble2 = new Scrabble("cabbage");
console.log(scrabble.score());
console.log(scrabble2.score());
