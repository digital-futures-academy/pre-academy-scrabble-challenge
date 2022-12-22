class Scrabble {
  // object constructor instance
  constructor(word) {
    this.word = word;
  }


  score() {
    // beginning of version1
    let totalPoints = 0;
    let splitWord;

    // uppercase, split
    // let splitWord = this.word.toUpperCase().split("");
    if (this.word === "" || this.word === " \t\n" || this.word === null) {
      return 0;
    }
    else {
      splitWord = this.word.toUpperCase().split("");
    }
    console.log(splitWord);

    // check word length
    for (let indexCounter = 0; indexCounter < splitWord.length; indexCounter++) {
      // compare index to letter
      if (splitWord[indexCounter] === "A" || splitWord[indexCounter] === "E" || splitWord[indexCounter] === "I" || splitWord[indexCounter] === "O" || splitWord[indexCounter] === "U" || splitWord[indexCounter] === "L" || splitWord[indexCounter] === "N" || splitWord[indexCounter] === "R" || splitWord[indexCounter] === "S" || splitWord[indexCounter] === "T") {
        totalPoints = totalPoints + 1;
        console.log(splitWord[indexCounter]);
      }
      else if (splitWord[indexCounter] === "D" || splitWord[indexCounter] === "G") {
        totalPoints = totalPoints + 2;
        console.log(splitWord[indexCounter]);
      }
      else if (splitWord[indexCounter] === "B" || splitWord[indexCounter] === "C" || splitWord[indexCounter] === "M" || splitWord[indexCounter] === "P") {
        totalPoints = totalPoints + 3;
        console.log(splitWord[indexCounter]);
      }
      else if (splitWord[indexCounter] === "F" || splitWord[indexCounter] === "H" || splitWord[indexCounter] === "V" || splitWord[indexCounter] === "W" || splitWord[indexCounter] === "Y") {
        totalPoints = totalPoints + 4;
        console.log(splitWord[indexCounter]);
      }
      else if (splitWord[indexCounter] === "K") {
        totalPoints = totalPoints + 5;
        console.log(splitWord[indexCounter]);
      }
      else if (splitWord[indexCounter] === "J" || splitWord[indexCounter] === "X") {
        totalPoints = totalPoints + 8;
        console.log(splitWord[indexCounter]);
      }
      else if (splitWord[indexCounter] === "Q" || splitWord[indexCounter] === "Z") {
        totalPoints = totalPoints + 10;
        console.log(splitWord[indexCounter]);
      }
    }
    //
    return totalPoints;
    // end of version1

    // beginning of version2
    // const letterObject = { A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1, D: 2, G: 2, B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10, Z: 10 }
  }

}

export default Scrabble;
