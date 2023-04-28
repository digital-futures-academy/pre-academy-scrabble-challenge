class Scrabble {

    constructor(word){
      this.word = (word || ' ').toUpperCase(); // added the uppercase method here as I removed the variable word from below
    }
    
    score() {
        //condensed each of the lines in vscode buy highlighting each block and pressing f1 and join lines. just make sure to have ; between each statements
        //also word was previously defined in a variable but to get it to 5 lines I referenced the object itself with this.word rather than word = this.word
        const letterScoreMap = { 'A' : 1, 'E' : 1, 'I' : 1, 'O' : 1, 'U' : 1, 'L' : 1, 'N' : 1, 'R' : 1, 'S' : 1, 'T' : 1, 'D' : 2, 'G' : 2, 'B' : 3, 'C' : 3, 'M' : 3, 'P' : 3, 'F' : 4, 'H' : 4, 'V' : 4, 'W' : 4, 'Y' : 4, 'K' : 5, 'J' : 8, 'X' : 8, 'Q' : 10, 'Z' : 10, }
        let scoreAcummulator = 0;
    
        if(typeof this.word !== 'string'){ return 0; } else if (this.word.trim() === ''){  return 0; }
        for (let i = 0; i < this.word.length; i++){ scoreAcummulator += letterScoreMap[this.word[i]]; }
        return scoreAcummulator;
        //I'm not sure how the double/triple work in this example vs how they work on a board
    }
  }

  export default Scrabble;
  