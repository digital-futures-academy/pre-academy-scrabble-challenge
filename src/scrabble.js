//Object to store the score value of all letters
const letterPoints = {

  a: 1,
  b: 3,
  c: 3,
  d: 2,
  e: 1,
  f: 4,
  g: 2,
  h: 4,
  i: 1,
  j: 8,
  k: 5,
  l: 1,
  m: 3,
  n: 1,
  o: 1,
  p: 3,
  q: 10,
  r: 1,
  s: 1,
  t: 1,
  u: 1,
  v: 4,
  x: 8,
  z: 10,
  w: 4,
  y: 4,

};


/*This scrabble class is capabale of calculating the score of a word and also of double and triple word and letter operations
Input for the score function should be left blank for no double or triples, otherwise a falsy or truthy value should be provided
for the worldMulti var and a 2 value array consisting of a letter in the supplied word and a falsy or truthy value to determine 
whether or not it should be doubled or tripled.
*/
class Scrabble {
  constructor(str) {
    /*make sure the string is lowercase and split the word into individual letters and assign it to the class
    if str isnt a string then we set a default value that evaluates to 0. this value is an array so we can use it
    with array.reduce();*/
    this.word = typeof str === "string" ? this.word = str.toLowerCase().split("") : [""];
  }

  //Compute the score with no modifiers, 
  score(wordMulti, letterMulti) {

    //Use the reduce iterator to sum the total value of the word.
    let total = this.calcTotal(letterMulti);

    //Make sure the value of total isnt NaN and return it
    if (wordMulti !== undefined)
      return Number.isNaN(total) ? 0 : total * (wordMulti ? 3 : 2);
    else
      return Number.isNaN(total) ? 0 : total;

  }

  //Calulate the total score with double or triple letters
  calcTotal(letterMulti) {


    //if the letter array wasnt supplied or is invalid, return an unmodified total
    if (letterMulti === undefined || !Array.isArray(letterMulti) || !this.word.includes(letterMulti[0]))
      return this.word.reduce((total, currLetter) => total + letterPoints[currLetter], 0);
    else {
      return this.word.reduce((total, currLetter) => total + letterPoints[currLetter], 0) + (letterPoints[letterMulti[0]] * (letterMulti[1] ? 3 : 2));
    }

  }
}


//Scrabble class for just the basic Acceptance Criteria
/*
class Scrabble {
  constructor(str) {
    //make sure the string is lowercase and split the word into individual letters and assign it to the class
    //if str isnt a string then we set a default value that evaluates to 0. this value is an array so we can use it
    //with array.reduce();
    this.word = typeof str === "string" ? this.word = str.toLowerCase().split("") : [""];
  }

  //Compute the score with no modifiers, 
  score(wordMulti, letterMulti) {

    //Use the reduce iterator to sum the total value of the word.
    let total = this.word.reduce((total, currLetter) => total + letterPoints[currLetter], 0);

    return Number.isNaN(total) ? 0 : total;

  }
}
*/

export default Scrabble;
