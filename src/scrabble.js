class Scrabble {

  score() {
    if (score === ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"]) {
      return (1)
    } else if (score === ["D", "G"]) {
      return (2)
    } else if (score === ["B", "C", "M", "P"]) {
      return (3)
    } else if (score === ["F", "H", "V", "W", "Y"]) {
      return (4)
    } else if (score === ["k"]) {
      return (5)
    } else if (score === ["J", "X"]) {
      return (8)
    } else if (score === ["Q", "Z"]) {
      return (10)
    } else {
      return (0)
    }
  }
}

export default Scrabble;
