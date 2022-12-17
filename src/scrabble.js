class Scrabble {

  // const letterObject = {
  //   A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1, D: 2, G: 2, B: 3, C: 3, M: 3, P: 3, F: 4, H: 4, V: 4, W: 4, Y: 4, K: 5, J: 8, X: 8, Q: 10, Z: 10
  // }

  // word = "hello"
  // splitWord = "h","e","l","l","o"

  score(word) {
    // Write your implementation here
    // string object, for, split string, if, sum
    //
    let totalPoints = 0;

    // lowercase, split
    let splitWord = word.toUpperCase().split("");

    // check word length
    for (let indexCounter = 0; indexCounter < splitWord.length; indexCounter++) {
      // compare index to letter
      if (splitWord[indexCounter] === "A" || "E" || "I" || "O" || "U" || "L" || "N" || "R" || "S" || "T") {
        totalPoints = totalPoints + 1;
      }
      else if (splitWord[indexCounter] === "D" || "G") {
        totalPoints = totalPoints + 2;
      }
      else if (splitWord[indexCounter] === "B" || "C" || "M" || "P") {
        totalPoints = totalPoints + 3;
      }
      else if (splitWord[indexCounter] === "F" || "H" || "V" || "W" || "Y") {
        totalPoints = totalPoints + 4;
      }
      else if (splitWord[indexCounter] === "K") {
        totalPoints = totalPoints + 5;
      }
      else if (splitWord[indexCounter] === "J" || "X") {
        totalPoints = totalPoints + 8;
      }
      else if (splitWord[indexCounter] === "Q" || "Z") {
        totalPoints = totalPoints + 10;
      }
      else {
        totalPoints = totalPoints + 0;
        console.log("not a letter");
      }
    }
    return totalPoints;
  }

}

export default Scrabble;
