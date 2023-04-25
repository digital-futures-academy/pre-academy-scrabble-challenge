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

export default Scrabble;
