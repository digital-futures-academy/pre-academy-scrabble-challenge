class Scrabble {
  constructor(word){
    this.word = word;
    this.finalScore = 0;
  }
  score() {
    if ((typeof(this.word) === 'string') && (/^[A-Za-z]+$/.test(this.word))){
      for (let i=0; i < this.word.length;i++){
        let letter = this.word[i].toUpperCase();
        if (['A','E','I','O','U','L','N','R','S','T'].includes(letter)){
          this.finalScore += 1;
        }else if(['D','G'].includes(letter)){
          this.finalScore +=2;
        }else if(['B','C','M','P'].includes(letter)){
          this.finalScore +=3;
        }else if(['F','H','V','W','Y'].includes(letter)){
          this.finalScore +=4;
        }else if(['K'].includes(letter)){
          this.finalScore +=5;
        }else if(['J','X'].includes(letter)){
          this.finalScore +=8;
        }else if(['Q','Z'].includes(letter)){
          this.finalScore +=10;
        }else {
          this.finalScore += 0;
        }
      }
    }else{
      return this.finalScore +=0;
    }  
    return this.finalScore;
  } 
}
export default Scrabble;
