class Scrabble {

  constructor(word) {
    this.word = (word || '').toUpperCase();
  }

  score() {
   let scoreSum = 0;

   for (let i = 0; i < this.word.length; i++) {
    
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
   return scoreSum;
  }
}
let scrabble = new Scrabble('street');
console.log(scrabble.score()); 

//Extended Criteria Attempt
class Scrabble_new {
  constructor(word) {
    this.word = (word || '').toUpperCase();
  }
  score(){
    const letterPoints = {A:1, E:1, I:1, O:1, U:1, L:1, N:1, R:1, S:1, T:1, D:2, G:2, B:3,C:3,M:3,P:3,F:4,H:4,V:4,W:4,Y:4,K:5,J:8,X:8,Q:10,Z:10};
    let scoreSum = 0;
    for(const letter of this.word) {
      scoreSum += letterPoints[letter] || 0;
    }
    return scoreSum;
  }
}
let scrabble1 = new Scrabble_new('street');
console.log(scrabble1.score());

export default Scrabble;
