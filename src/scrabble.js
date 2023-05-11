class Scrabble {
  // creates new instance of scrabble with word input in uppercase
  constructor(word) {
    if (word === null) {
      this.word = '';
    } else {
      this.word = word.toUpperCase().split('');
    }



  }
  score() {
    //Point arrays for scrabble points
    const onePoint = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
    const twoPoint = ['D', 'G'];
    const threePoint = ['B', 'C', 'M', 'P'];
    const fourPoint = ['F', 'H', 'V', 'W', 'Y'];
    const fivePoint = 'K'
    const eightPoint = ['J', 'X'];
    const tenPoint = ['Q', 'Z'];

    let total = 0

    // for each letter check if each point array contains that letter and add points to total 

    for (let i = 0; i <= this.word.length; i++) {

      const letter = this.word[i];

      if (onePoint.includes(letter)) {
        total += 1;
      } else if (twoPoint.includes(letter)) {
        total += 2;
      } else if (threePoint.includes(letter)) {
        total += 3;
      } else if (fourPoint.includes(letter)) {
        total += 4;
      } else if (fivePoint.includes(letter)) {
        total += 5;
      } else if (eightPoint.includes(letter)) {
        total += 8;
      } else if (tenPoint.includes(letter)) {
        total += 10;
      } else {
        total += 0;
      }
    }
    return total;
  }
};

export default Scrabble;
