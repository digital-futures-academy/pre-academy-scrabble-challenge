

class Scrabble {
  constructor(word) {
    if (word == null){
      this.word = ""
    }else{
    this.word = word}
    this.letterValues = {"a": 1, "e": 1, "i": 1, "o": 1, "u": 1, "l": 1, "n": 1, "r": 1, "s": 1, "t": 1,
    "d": 2, "g": 2,
    "b": 3, "c": 3, "m": 3, "p": 3,
    "f": 4, "h": 4, "v": 4, "w": 4, "y": 4,
    "k": 5,
    "j": 8, "x": 8,
    "q": 10, "z": 10
  };
  }

  score() {
    const letters = this.word.toLowerCase().split("");

    let score = 0;

  // Iterate over the array of letters, adding the score of each letter to the total score, and 0 if the array finds an empty space or anything that's not a letter
  for (const letter of letters) {
    score += this.letterValues[letter] || 0;
  }

  return score;
  }
}

export default Scrabble;

/*First attempt at solving the challenge:
    for (let i=0; i< arr.length; i++){
      if (arr[i] == "a"||arr[i] =="e"|| arr[i] =="i"||arr[i] =="o"||arr[i] =="u"||arr[i] =="l"||arr[i] =="n"||arr[i] =="r"||arr[i] =="s"||arr[i] =="t"){
        counter += 1;
      } else if (arr[i] == "d"||arr[i] =="g"){
        counter += 2;
      } else if (arr[i] == "b"||arr[i] =="c"||arr[i] =="m"||arr[i] =="p"){
        counter += 3;
      } else if (arr[i] == "f"||arr[i] =="h"||arr[i] =="v"||arr[i] =="w"||arr[i] =="y"){
        counter += 4;
      } else if (arr[i] == "k"){
        counter += 5;
      } else if (arr[i] == "j"||arr[i] =="x"){
        counter += 8;
      } else if (arr[i] == "q"||arr[i] =="z"){
        counter += 10;
      }}*/