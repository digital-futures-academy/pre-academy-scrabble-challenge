const calcScrabbleScore = (letter) => {
  switch (letter) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "l":
    case "n":
    case "r":
    case "s":
    case "t":
      return 1;
    case "d":
    case "g":
      return 2;
    case "b":
    case "c":
    case "m":
    case "p":
      return 3;
    case "f":
    case "h":
    case "v":
    case "w":
    case "y":
      return 4;
    case "k":
      return 5;
    case "j":
    case "x":
      return 8;
    case "q":
    case "z":
      return 10;
  }
};

const score = (string) => {
  if (string === null || string === "" || string === " \t\n") {
    return 0;
  }
  let score = 0;
  string = string.toLowerCase();
  for (let i = 0; i < string.length; i++) {
    score += calcScrabbleScore(string[i]);
  }
  return score;
};
const result = score("");
console.log(result);
