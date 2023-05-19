class Scrabble {

  score() {
    var letters = { 
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 
      2: ['D', 'G'], 
      3: ['B', 'C', 'M', 'P'],  
      4: ['F', 'H', 'V', 'W', 'Y'], 
      5: ['K'],   
      8: ['J', 'X'], 
      10: ['Q', 'Z'] };
    let sum=0;
    function lettersToScore(letter) {
      for (var i in letters)
      {
        if (Object.keys(letters).indexOf((letters[i].indexOf(letter) !== -1) ? i.toString() : '-1') !== -1) 
           return parseInt(i);
      }}
    var score = function(input) {
       if (input === null || input === "")
         return sum;
      else
        input.toUpperCase().split("").forEach(function(elem, index, array) 
        sum += lettersToScore(elem);
        return sum;
  }
}

export default Scrabble;
