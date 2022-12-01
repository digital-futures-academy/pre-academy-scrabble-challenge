class Scrabble {

  constructor(word) {
    if (typeof word === 'string'){
      this.word = word.toUpperCase();
    }
    else{
      this.word = '';
    }
  }

  score() {
    // Write your implementation here
    let sum = 0;
    for (let i=0; i < this.word.length; i++){
      if (['A','E','I','O','U','L','N','R','S','T'].includes(this.word[i])){
        sum += 1;
      }
      else if (['D','G'].includes(this.word[i])){
        sum += 2;
      }
      else if (['B','C','M','P'].includes(this.word[i])){
        sum += 3;
      }
      else if (['F','H','V','W','Y'].includes(this.word[i])){
        sum += 4;
      }
      else if (['K'].includes(this.word[i])){
        sum += 5;
      }
      else if (['J','X'].includes(this.word[i])){
        sum += 8;
      }
      else if (['Q','Z'].includes(this.word[i])){
        sum += 10;
      }
    }
    return sum
  }
}

export default Scrabble;
