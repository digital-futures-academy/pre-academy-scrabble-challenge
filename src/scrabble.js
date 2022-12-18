class Scrabble {

  // starting values
  scoreSum = 0;
  word = "";

  //change the word
  constructor(inputWord) {
    if (inputWord === null || inputWord === "") {
      return this.scoreSum;
    } else {
      this.word = inputWord;
    }
  }


  // work out total points
  totalPoints() {
    // lowercase and changestring  into array
    const updatedWord = this.word.toLowerCase().split("");

    //loop for points per letter then add to total points
    updatedWord.forEach((letter) => {
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
          this.scoreSum += 1;
          break;
        case "g":
        case "d":
          this.scoreSum += 2;
          break;
        case "b":
        case "m":
        case "p":
        case "c":
          this.scoreSum += 3;
          break;
        case "y":
        case "w":
        case "v":
        case "f":
        case "h":
          this.scoreSum += 4;
          break;
        case "k":
          this.scoreSum += 5;
          break;
        case "x":
        case "j":
          this.scoreSum += 8;
          break;
        case "z":
        case "q":
          this.scoreSum += 10;
          break;
      }
    });
    return this.scoreSum;
  }

  totalScore(){
   return this.totalPoints();
  }
}
