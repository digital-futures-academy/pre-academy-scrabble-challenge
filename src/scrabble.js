const lettersToPointsMap = {
  AEIOULNRST: 1,
  DG: 2,
  BCMP: 3,
  FHVWY: 4,
  K: 5,
  JX: 8,
  QZ: 10,
};

class Scrabble {
  constructor(input, bonusObj) {
    this.input = input;
    this.bonusObj = bonusObj;
  }

  isValid() {
    return !(
      typeof this.input !== "string" ||
      this.input.length === 0 ||
      /\s/g.test(this.input)
    );
  }

  getPoints(char) {
    for (const [key, value] of Object.entries(lettersToPointsMap)) {
      if (key.includes(char.toUpperCase())) return value;
    }
  }

  score() {
    if (!this.isValid()) return 0;
    let points = 0;
    let charArr = this.input.split("");
    let wordMultiplier =
      this.bonusObj !== undefined ? this.bonusObj.wordMultiplier : 1;

    for (let i = 0; i < charArr.length; i++) {
      if (this.bonusObj !== undefined) {
        points +=
          this.getPoints(charArr[i]) * this.bonusObj.letterMultipliers[i];
      } else {
        points += this.getPoints(charArr[i]);
      }
    }
    return points * wordMultiplier;
  }
}

export default Scrabble;
