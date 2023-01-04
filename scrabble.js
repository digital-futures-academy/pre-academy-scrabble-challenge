/*class Scrabble { }

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




export default Scrabble;*/

class Scrabble {
  score() {

    function list(letter) {
      Array = letter.toUpperCase().split('')
      score = 0

      const abc = {
        " ": 0,
        "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1,
        "D": 2, "G": 2,
        "B": 3, "C": 3, "M": 3, "P": 3,
        "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4,
        "K": 5,
        "J": 8, "X": 8,
        "Q": 10, "Z": 10
      }
    }
  }
}
export default Scrabble;