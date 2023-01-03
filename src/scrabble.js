class Scrabble {
  constuctor(word) {
    this.word = word;
  }
  
 const score = (word) => {
  let points = 0;
   if this.word == '' || this.word == null) {
     return points = 0
   } else {
  for (let i = 0; i < this.word.length; i++) {
    if (word[i].toUpperCase() === 'A' || 'E' || 'I' ||'O' || 'U' || 'L' || 'N' || 'R' || 'S' || 'T') {
      points ++;
    } else if (word[i].toUpperCase() === 'D' || 'G') {
      points += 2;
     } else if (word[i].toUpperCase() === 'B' || 'C' || 'M' || 'P') {
        points += 3;
     } else if (word[i].toUpperCase() === 'F' || 'H' || 'V' || 'W' || 'Y') {
       points += 4;
      }  else if (word[i].toUpperCase() === 'K') {
          points += 5;
        } else if (word[i].toUpperCase() === 'J' || 'X') {
          points += 8;
        } else if (word[i].toUpperCase() === 'Q' || 'Z') {
          points += 10 ;
        } else {
          points += 0;
        }
}
   }
return points






export default Scrabble;
