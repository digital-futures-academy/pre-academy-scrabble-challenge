class Scrabble {
//Constructor takes parameter word and sets it to uppercase string. 
//If parameter not passed, empty string is assigned.
  constructor(word) {
    this.word = (word || '').toUpperCase();
  }
//Score method calculates the score of the 'word'. scoreSum is set to zero.
// For loop iterates over each letter of word.
  score() {
   let scoreSum = 0;

   for (let i = 0; i < this.word.length; i++) {
//Switch statement calculates score for the letter and adds it to scoreSum.
    const letter = this.word[i];
    switch(letter) {
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
      case 'L':
      case 'N':
      case 'R':
      case 'S':
      case 'T':
      scoreSum += 1;
      break;
      case 'D':
      case 'G':
      scoreSum +=2;
      break;
      case 'B':
      case 'C':
      case 'M':
      case 'P':
      scoreSum += 3;
      break;
      case 'F':
      case 'H':
      case 'V':
      case 'W':
      case 'Y':
      scoreSum += 4;
      break;
      case 'K':
      scoreSum += 5;
      break;
      case 'J':
      case 'X':
      scoreSum += 8;
      break;
      case 'Q':
      case 'Z':
      scoreSum += 10;
      break;
      default:
        break;

    }
   }
   //scoreSum contains total score of the word.
   return scoreSum;
  }
}
//Testing code
let scrabble = new Scrabble('quirky');
console.log(scrabble.score()); 


//Extended Criteria Attempt(1st piece of the Extended Criteria)

//Attempt at extended criteria with slightly different class: Scrabble_new

class Scrabble_new {
  
  constructor(word) {
    this.word = (word || '').toUpperCase();
  }
  //Score method calculates the score of the word according to letter values in variable letterPoints.
  score(){
    const letterPoints = {A:1, E:1, I:1, O:1, U:1, L:1, N:1, R:1, S:1, T:1, D:2, G:2, B:3,C:3,M:3,P:3,F:4,H:4,V:4,W:4,Y:4,K:5,J:8,X:8,Q:10,Z:10};
    let scoreSum = 0;
  //For...of loop to loop through each character in this.word.
    for(const letter of this.word) {
      scoreSum += letterPoints[letter] || 0;
    }
    return scoreSum;
  }
}
//Testing code
let scrabble1 = new Scrabble_new('street');
console.log(scrabble1.score());

export default Scrabble;
