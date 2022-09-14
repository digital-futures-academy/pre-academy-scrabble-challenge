class Scrabble {

  constructor(word) {
    this.word = word;

  }

  score() {
    const letterScore = {
      A: 1, E: 1, I: 1, O: 1, U: 1, R: 1, T: 1, L: 1, S: 1, N: 1,
      D: 2, D: 2,
      B: 3, C: 3, M: 3, P: 3,
      F: 4, H: 4, V: 4, W: 4, Y: 4,
      K: 5,
      J: 8, X: 8,
      Q: 10, Z: 10
    }


    let result = 0



    if (this.word == null) {
      return result = 0
    }
    else {

      let splitWord = this.word.toUpperCase().split('')

      for (let i = 0; i < splitWord.length; i++) {


        if (splitWord[i].match(/[A-Z]/i)) {




          result += letterScore[splitWord[i]]


        }
        else result = 0;
      }
    }

    return result;

  }
}

export default Scrabble;
