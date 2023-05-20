class Scrabble {

  score = (word) => {
// Write your implementation here
      
// Map each letter to their respective score
        const scores = {
        'A': 1, 'E': 1, 'I': 1, 'O': 1,
        'U': 1, 'L': 1, 'N': 1, 'R': 1,
        'S': 1, 'T': 1, 'D': 2, 'G': 2,
        'B': 3, 'C': 3, 'M': 3, 'P': 3,
        'F': 4, 'H': 4, 'V': 4, 'W': 4,
        'Y': 4, 'K': 5, 'J': 8, 'X': 8,
        'Q': 10,'Z': 10,
        };
      
// Declare "sum" as 0 to be used to add the letter scores ("scores") in the final calculation
      let sum = 0;

// Convert the letters to a uniform case
      word = word.toUpperCase();

// Loop (iterate) over the "word". Then calculate the score by using "sum" to add the scores for each letter stored in "scores".
      for (let i = 0; i < word.length; i++) {
          sum = sum + scores[word[i]];
      }
      return sum;
    }
};
export default Scrabble;