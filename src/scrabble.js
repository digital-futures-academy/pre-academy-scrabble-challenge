letter_value = { "A": 1, "E": 1, "I": 1, "O": 1, "U": 1, "L": 1, "N": 1, "R": 1, "S": 1, "T": 1, "D": 2, "G": 2, "B": 3, "C": 3, "M": 3, "P": 3, "F": 4, "H": 4, "V": 4, "W": 4, "Y": 4, "K": 5, "J": 8, "X": 8, "Q": 10, "Z": 10, "a": 1, "e": 1, "i": 1, "o": 1, "u": 1, "l": 1, "n": 1, "r": 1, "s": 1, "t": 1, "d": 2, "g": 2, "b": 3, "c": 3, "m": 3, "p": 3, "f": 4, "h": 4, "v": 4, "w": 4, "y": 4, "k": 5, "j": 8, "x": 8, "q": 10, "z": 10 } //library of letters and their score

class Scrabble {

  score(word): 
    points = 0 //sets the variable total to 0
    for i in word:  //passes each letter in the word
      points = points + letter_value[i]  //takes each value and adds it to the total
    return points
  }

export default Scrabble;

// Acceptance Criteria

let scrabble = new Scrabble('')
scrabble.score() // => 0

let scrabble = new Scrabble(" \t\n")
scrabble.score() // => 0

let scrabble = new Scrabble(null)
scrabble.score() // => 0

let scrabble = new Scrabble('a')
scrabble.score() // => 1

let scrabble = new Scrabble('f')
scrabble.score() // => 4

let scrabble = new Scrabble('street')
scrabble.score() // => 6

let scrabble = new Scrabble('quirky')
scrabble.score() // => 22

let scrabble = new Scrabble('OXYPHENBUTAZONE')
scrabble.score() // => 41