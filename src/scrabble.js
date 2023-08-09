class Scrabble {

  // Create input object
  constructor(input){
    this.input = input;
  }

  score() {
    // Create map of letter > point values
    const points = {
      A : 1,
      B : 3,
      C : 3,
      D : 2,
      E : 1,
      F : 4,
      G : 2,
      H : 4,
      I : 1,
      J : 8,
      K : 5,
      L : 1,
      M : 3,
      N : 1,
      O : 1,
      P : 3,
      Q : 10,
      R : 1,
      S : 1,
      T : 1,
      U : 1,
      V : 4,
      W : 4,
      X : 8,
      Y : 4,
      Z : 10
    };

    // Create score count
    let count = 0; 

    // If input is null or whitespace, return 0
    if ((this.input === null) || this.input.trim() === '' ) {
      return 0;
    } else {
      // Convert input to uppercase
      let word = this.input.toUpperCase();
      // Loop through each letter of word input
      for(let i = 0; i < word.length; i++) {
        // Get value of letter from points using letter as key; add value to count
        count += points[word[i]];
      }
        
      return count;
    }
    
  }

  }

export default Scrabble;
