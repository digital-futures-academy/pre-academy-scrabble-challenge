const totalScore = {  //initializing score as a global object variable with key values
  A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
  D: 2, G: 2,
  B: 3, C: 3, M: 3, P: 3,
  F: 4, H: 4, V: 4, W: 4, Y: 4,
  K: 5,
  J: 8, X: 8,
  Q: 10, Z: 10
} 
class Scrabble { //class function initiated 
  constructor(word) {  //properties assigned inside constructor method.
    if (word == null) { 
       this.word = '';
       } else {
      this.word = word.toUpperCase();
       }
    }  //if statement will check if the entry is null, if not, it will capitalize the word
       //so it can be read by the for loop below acccording to the values declared in the 
       //global variable.
       
  score() { 
    sum = 0; //initial score
    for (let i = 0; i < this.word.length; i++) { //loop will run through each letter/index, 
      sum += totalScore[this.word[i]] || 0; //add the points from each index to sum variable. If invalid character, score will be 0
      } console.log(sum);
      }
}
export default Scrabble; 
