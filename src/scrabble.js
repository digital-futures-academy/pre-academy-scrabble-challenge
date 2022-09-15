class Scrabble {
  constructor(word) {
    if (word != null && word.toUpperCase().match(/[A-Z]/i)) {
      this.scrabbleString = word;
    }
    else {
      this.scrabbleString = "";
    }
  }
  score() {
    //var onePointLetter = ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"];
    var twoPointLetter = ["D", "G"];
    var threePointLetter = ["B", "C", "M", "P"];
    var fourPointLetter = ["F", "H", "V", "W", "Y"];
    var fivePointLetter = ["K"];
    var eightPointLetter = ["J", "X"];
    var tenPointLetter = ["Q", "Z"];

    let points = 0;
    let scrabbleUp = this.scrabbleString.toUpperCase();

    for (let i = 0; i < scrabbleUp.length; i++) {
      if (tenPointLetter.includes(scrabbleUp[i])) {
        points += 10;
      }
      else if (twoPointLetter.includes(scrabbleUp[i])) {
        points += 2;
      }
      else if (threePointLetter.includes(scrabbleUp[i])) {
        points += 3;
      }
      else if (fourPointLetter.includes(scrabbleUp[i])) {
        points += 4;
      }
      else if (fivePointLetter.includes(scrabbleUp[i])) {
        points += 5;
      }
      else if (eightPointLetter.includes(scrabbleUp[i])) {
        points += 8;
      }
      else {
        points += 1;
      }
    }
    return points;
  }
}

export default Scrabble