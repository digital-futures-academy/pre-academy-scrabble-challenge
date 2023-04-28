class Scrabble {

  constructor(word){
    this.word = (word || ' '); // if empty return white space which is handled below
  }

  score() {
    let word = this.word.toUpperCase();
    const letterScoreMap = { 'A' : 1, 'E' : 1, 'I' : 1, 'O' : 1, 'U' : 1, 'L' : 1, 'N' : 1, 'R' : 1, 'S' : 1, 'T' : 1, 'D' : 2, 'G' : 2, 'B' : 3, 'C' : 3, 'M' : 3, 'P' : 3, 'F' : 4, 'H' : 4, 'V' : 4, 'W' : 4, 'Y' : 4, 'K' : 5, 'J' : 8, 'X' : 8, 'Q' : 10, 'Z' : 10, }
    
    let scoreAcummulator = 0;

    if(typeof word !== 'string'){ //the scores are use the characters in a string, so if the type of the word is not a string then it should return a 0
      return 0;
    } else if (word.trim() === ''){ //trying to handle the whitespace was the hardest bit, as it kept returning not a number (NaN) even thought i was trying to return 0. but using the trim method, gets rid of white space from either side, 
      //so if a single ' ' is passed through I can cut it down to '' and then compare it with a '' which should return true and thus the function can return 0 
      return 0;
    }
    for (let i = 0; i < word.length; i++){
      scoreAcummulator += letterScoreMap[word[i]]
      console.log(word[i])
    }
    return scoreAcummulator;
  }
}

export default Scrabble;

