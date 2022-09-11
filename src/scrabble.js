class Scrabble {
  constructor(str) {
    try {
      this.word = str.replaceAll(/\s/g, '');
    } catch (e) {
      this.word = " ";
    }
  }
  score() {
    var points = 0;
    for (let i = 0; i < this.word.length; i++) {
      let letter = this.word[i].toLowerCase();
      if ((letter == "a") || (letter == "e") || (letter == "i") || (letter == "l") || (letter == "n") || (letter == "o") || (letter == "r") || (letter == "s") || (letter == "t") || (letter == "u")) {
        points += 1;
      } else if ((letter == "d") || (letter == "g")) {
        points += 2;
      } else if ((letter == "b") || (letter == "c") || (letter == "m") || (letter == "p")) {
        points += 3;
      } else if ((letter == "f") || (letter == "h") || (letter == "v") || (letter == "w") || (letter == "y")) {
        points += 4;
      } else if (letter == "k") {
        points += 5;
      } else if ((letter == "j") || (letter == "x")) {
        points += 8;
      } else if ((letter == "q") || (letter == "z")) {
        points += 10;
      } else {
        console.log(letter);
      }
    }
    return points;
  }
}

export default Scrabble;