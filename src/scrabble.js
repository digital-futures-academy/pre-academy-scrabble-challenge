class Scrabble {
  
  
  score(word) {
    var scores = [1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 5, 1, 3, 1, 1, 3, 10, 1, 1, 1, 1, 4, 4, 8, 4, 10];
    var score = 0;
    word = word.toUpperCase();
    for (var i = 0; i < word.length; i++) {
      var n = word.charCodeAt(i) - 65;
      if (n < 0 || n > 25) continue;
      score += scores[n];
    }
    return score;
  }
     
  }
     
    
    // Write your implementation here
}

export default Scrabble;
