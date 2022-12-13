class Scrabble {
  constructor(word) {
    this._word = word;
  }

  score() {
    // Write your implementation here
    const pointStructure = {
      e:1, a:1, i:1, o:1, n:1, r:1, t:1, l:1, s:1, u:1,
      d:2, g:2,
      b:3, c:3, m:3, p:3,
      f:4, h:4, v:4, w:4, y:4,
      k:5,
      j:8, x:8,
      q:10, z:10
    }; //assign each letter a score
    let totalScore = 0; //initiate variable for score of the word
    this._word = this._word.toLowerCase(); //converts the word to lowercase
    for (let ch of this._word)  { //for loop to go through each character in a word
      totalScore += pointStructure[ch]; //adds the character value to the total score
    }
    return totalScore; // returns the total score
  }
}

export default Scrabble;
