class Scrabble {
  constructor(word) {
    this._word = word;
  }


  score() {
    const letterValues = {
      e: 1, a: 1, i: 1, o: 1, n: 1, r: 1, t: 1, l: 1, s: 1, u: 1,
      d: 2, g: 2,
      b: 3, c: 3, m: 3, p: 3,
      f: 4, h: 4, v: 4, w: 4, y: 4,
      k: 5,
      j: 8, x: 8,
      q: 10, z: 10
    };
  }
}

let totalScore = 0;
if (typeof this._word != 'string') {
  return totalScore;
}
this._word = this._word.toLowerCase().trim();
for (let ch of this._word) {
  totalScore += letterValues[ch];
}
return totalScore; 
  }
}


export default Scrabble;




