const pointsSystem = {
  AEIOULNRST: 1,
  DG: 2,
  BCMP: 3,
  FHVWY: 4,
  K: 5,
  JX: 8,
  QZ: 10
};

class Scrabble {

  constructor(word) {
    if (word == null) {
      this.word = "";
    } else {
      this.word = word.toUpperCase();
    }
  }

  score() {
    let points = 0;
    for (const letter of this.word) {
      for (const key in pointsSystem) {
        points += key.indexOf(letter) !== -1 ? pointsSystem[key] : 0
      }
    }
    return points
  }
}

export default Scrabble;
