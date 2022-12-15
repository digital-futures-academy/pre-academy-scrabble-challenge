class Scrabble {
  // inital values
  sumOfScore = 0;
  word = "";

  // validate word
  constructor(givenWord) {
    if (givenWord === null || givenWord === "") {
      return this.sumOfScore;
    } else {
      this.word = givenWord;
    }
  }

  // calcuate points of the validated word
  calculatePoints() {
    // make the word lowercase using toLowerCase.
    // using split, convert the string into an array.
    const validatedWord = this.word.toLowerCase().split("");

    // loop through each letter and add to to the total score.
    validatedWord.forEach((letter) => {
      switch (letter) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
        case "l":
        case "n":
        case "r":
        case "s":
        case "t":
          this.sumOfScore += 1;
          break;
        case "d":
        case "g":
          this.sumOfScore += 2;
          break;
        case "b":
        case "c":
        case "m":
        case "p":
          this.sumOfScore += 3;
          break;
        case "f":
        case "h":
        case "v":
        case "w":
        case "y":
          this.sumOfScore += 4;
          break;
        case "k":
          this.sumOfScore += 5;
          break;
        case "j":
        case "x":
          this.sumOfScore += 8;
          break;
        case "q":
        case "z":
          this.sumOfScore += 10;
          break;
      }
    });
    return this.sumOfScore;
  }

  // gets the calculated sum of the score.
  score() {
    return this.calculatePoints();
  }
}

export default Scrabble;
