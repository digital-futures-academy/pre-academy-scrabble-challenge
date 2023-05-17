class Scrabble {


// constructor method used to set values to words that will be inputted
  constructor(word) {

// will set the value of word if truthy. if falsy, vlaue set to an empty string 
    this.word = word || '';
  }
  
  // values of letters and cannot be reassigned 
  score() {
    const letterValues = {
      "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1,
      "D": 2, "G": 2,
      "B": 3, "C": 3, "M": 3, "P": 3,
      "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4,
      "K": 5,
      "J": 8, "X": 8,
      "Q": 10, "Z": 10
    };

    let score = 0;

// loop checks each value of character of word. changed to upper case becasue case sensetive. 
    for (let i = 0; i < this.word.length; i++) {
      let letter = this.word[i].toUpperCase();
      if (letter in letterValues) {
        score += letterValues[letter];
    
  }
}

return score; 
  }
}

// input example from criteria
let scrabble = new Scrabble('');
console.log (scrabble.score());

export default Scrabble;
