class Scrabble {

    constructor(word) {
        if  (word === 'string') {
            this.word = word.toUpperCase();
        }
        else {
            this.word = '';
        }
    }

    score() {

        const onePoint = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
        const twoPoint = ['D', 'G'];
        const threePoint = ['B', 'C', 'M', 'P'];
        const fourPoint = ['F', 'H', 'V', 'W', 'Y'];
        const fivePoint = 'K'
        const eightPoint = ['J', 'X'];
        const tenPoint = ['Q', 'Z'];

        let totalPoints = 0;
        
    for (let i=0; i < this.word.length; i++){
      if ([onePoint].includes(this.word[i])){
        sum += 1;
      }
      else if ([twoPoint].includes(this.word[i])){
        sum += 2;
      }
      else if ([threePoint].includes(this.word[i])){
        sum += 3;
      }
      else if ([fourPoint].includes(this.word[i])){
        sum += 4;
      }
      else if ([fivePoint].includes(this.word[i])){
        sum += 5;
      }
      else if ([eightPoint].includes(this.word[i])){
        sum += 8;
      }
      else if ([tenPoint].includes(this.word[i])){
        sum += 10;
      }
    }
    return totalPoints
  }
}

export default Scrabble;


     

