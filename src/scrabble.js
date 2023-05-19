class Scrabble {

  //Constructor
  constructor(word){
    this.word = word;
  }

  score() {

    //Defines values for each letter
    const values = {'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
      'D': 2, 'G': 2,
      'B': 3, 'C': 3, 'M': 3, 'P': 3,
      'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
      'K': 5,
      'J': 8, 'X': 8,
      'Q': 10, 'Z': 10
    };

    //Checks if null
    if(this.word == null){
      return 0
    }

    //Removes whitespace
    let chars = this.word.trim()

    //Checks if empty
    if(chars == ''){
      return 0
    }

    //Normalizes cases
    chars = chars.toUpperCase()

    //Calculates score within a word
    let score = 0;
    for(let i = 0; i < chars.length; i++){
      score += values[chars[i]]
    }

    //Returns score
    return score
  }
}

export default Scrabble;
