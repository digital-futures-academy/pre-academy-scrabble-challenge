class Scrabble {

  constructor(word) {
    this.word = word;
  }

  checkValue(char){
      /*
      | Letter                        | Value  |
      | ----                          |  ----  |
      | A, E, I, O, U, L, N, R, S, T  |     1  |
      | D, G                          |     2  |
      | B, C, M, P                    |     3  |
      | F, H, V, W, Y                 |     4  |
      | K                             |     5  |
      | J, X                          |     8  |
      | Q, Z                          |     10 |
      */
      const letterValue = { aeioulnrst: 1, dg: 2, bcmp: 3, fhvwy: 4, k: 5, jx: 8, qz: 10 }

      for(const k in letterValue)
      {
        if(k.includes(char.toLowerCase()))
        {
          return letterValue[k]
        }
      }
      return 0
  }

  score() {

    if (!this.word) { return 0 }
    //console.log(this.word.toLowerCase())
    let value = 0

    for(let i=0; i < this.word.length; i++)
    {
      value += this.checkValue(this.word[i])
    }
    return value
  }
}

export default Scrabble;
