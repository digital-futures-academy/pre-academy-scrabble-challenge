//current final version - Alx-Askew

class Scrabble {

  //this iteration of the scrabble file has other parameters pass for the bonus challenges
  constructor(word, letterMod = [], letterModIndex = [], wordMod = 1){
    this.word = (word || ' ').toUpperCase(); // added the uppercase method here as I removed the variable word from below | perhaps make || ' ' to ''?
    
    //bonus challenge declarations
    this.letterMod = letterMod || []; //an array of the different modifiers defaulted to none
    this.wordMod = wordMod || 1; //the multiplier for whole words
    this.letterModIndex = letterModIndex || []; //should be the same length as the letterMod array as this tells the algorithm where the modified letters should be
  }
  
  letterMultipliers(currentScore = []){ //this can take a mulitplier of any size, in scrabble/bonus task is should be double or triple
    let letterAccumulator = currentScore;
    if (this.letterModIndex.length > currentScore.length || this.letterModIndex.length < 1 || currentScore.length < 1){
      return console.error("index out of range");} //attempt to handle any errors that could occur if there are more letters to change than in the word itself
    for (let i = 0; i < this.letterModIndex.length; i++){
      currentScore[this.letterModIndex[i]] *= this.letterMod[i]; //goes through index array and changed the value to reflect the multiplication
    }
    return letterAccumulator.reduce(function(x, y){ return x + y}, 0); //the reduce method on the arrays produces the sum of the arrays values which we return | we work out the individual letters score before muliplying the whole word.
  }


  wordMultiplier(currentScore = 0){
    return currentScore * this.wordMod; //mulitply word score by, what should be, double or triple
  }

  score() {
      //condensed each of the lines in vscode buy highlighting each block and pressing f1 and join lines. just make sure to have ; between each statements
      //also word was previously defined in a variable but to get it to 5 lines I referenced the object itself with this.word rather than word = this.word
      const letterScoreMap = { 'A' : 1, 'E' : 1, 'I' : 1, 'O' : 1, 'U' : 1, 'L' : 1, 'N' : 1, 'R' : 1, 'S' : 1, 'T' : 1, 'D' : 2, 'G' : 2, 'B' : 3, 'C' : 3, 'M' : 3, 'P' : 3, 'F' : 4, 'H' : 4, 'V' : 4, 'W' : 4, 'Y' : 4, 'K' : 5, 'J' : 8, 'X' : 8, 'Q' : 10, 'Z' : 10, }
      let scoreAccumulator  = []; // init array for adding up a score later on, used an array here so it can be passed through to the individual multplier method
  
      if(typeof this.word !== 'string'){ return 0; } else if (this.word.trim() === ''){  return 0; } //handles white space and string - whitespace was the hardest bit but using the trim method means ' ' will be trimmed to '' which is evaluated against ''
      for (let i = 0; i < this.word.length; i++){ scoreAccumulator.push(letterScoreMap[this.word[i]]); } //iterating through word and adding the individual character's score to the scoreAccumulator
      if (this.letterMod.length > 0 && this.letterModIndex.length > 0) {
        scoreAccumulator = this.letterMultipliers(scoreAccumulator ); //if there are letter modifiers, this line of code passes the array of scores to the letter mulitplier function which in turn returns the overall score with updated scores 
      } else {  scoreAccumulator  = scoreAccumulator .reduce(function(x, y){return x + y}, 0);} // if there are no modification to individual letters then array of scores is turned into a single number, a sum of the scores
      if (this.wordMod > 1) {return (this.wordMultiplier(scoreAccumulator ));} else { return scoreAccumulator ;}; //if the whole words needs to be mulitplied, its done here | however, if the whole word modifier is defaulted to 1, then there is not need for if statement here?
      
      //I'm not sure how the double/triple work in this example vs how they work on a board
  }



}

export default Scrabble;
