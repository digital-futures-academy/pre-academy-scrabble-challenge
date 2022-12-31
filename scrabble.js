/*class Scrabble {

  score() {
    if (score === ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]) {
      return 1
    } else if (score === ["D", "G"]) {
      return 2
    } else if (score === ["B", "C", "M", "P"]) {
      return 3
    } else if (score === ["F", "H", "V", "W", "Y"]) {
      return 4
    } else if (score === ["k"]) {
      return 5
    } else if (score === ["J", "X"]) {
      return 8
    } else if (score === ["Q", "Z"]) {
      return 10
    } else {
      return 0
    }
  }
}

export default Scrabble;*/



function scrabble(score) {
  score = score.toLowerCase();
  var count = 0;
  for (var i = 0; i < score.length; ++i) {
    if (score[i] == 'a' || score[i] == 'e' || score[i] == 'i' || score[i] == 'o' || score[i] == 'u' || score[i] == 'l' || score[i] == 'n' || score[i] == 'r' || score[i] == 's' || score[i] == 't')
      count++;
    if (score[i] == 'd' || score[i] == 'g')
      count += 2;
    if (score[i] == 'b' || score[i] == 'c' || score[i] == 'm' || score[i] == 'p')
      count += 3;
    if (score[i] == 'f' || score[i] == 'h' || score[i] == 'v' || score[i] == 'w' || score[i] == 'y')
      count += 4;
    if (score[i] == 'k')
      count += 5;
    if (score[i] == 'j' || score[i] == 'x')
      count += 8;
    if (score[i] == 'q' || score[i] == 'z')
      count += 10;
  }

  return count;
}

export default scrabble.score;