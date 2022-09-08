class Scrabble {
  constructor(word) {
    this.word = word;
    if (word == null) this.word = ""; //don't allow null words, use empty string instead
  }

  score() {
    const letterValues = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10]; //scores of scrabble letters in alphabetical order
    //the idea is to convert each character in the word to its corresponding ascii code, subtract off the necessary value to let a = 0, and then use that as an index in the above score array to get the score for that letter
    let wordScore = 0;
    let wordArray = Array.from(this.word.toLowerCase().trim()); //change word to lower case, trim whitespace and convert to array for ease of iterating over
    wordArray = wordArray.map(char => char.charCodeAt() - 97); //convert character to ascii code and subtract 97 (since "a" is at ascii position 97)
    for (let i = 0; i < wordArray.length; i++) {
      wordScore += letterValues[wordArray[i]];
    }
    return wordScore;
    //this won't account for non-alphabetic characters within the word itself but according to the spec it doesn't need to
  }
}


export default Scrabble;
