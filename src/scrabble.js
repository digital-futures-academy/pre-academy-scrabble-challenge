class Scrabble {

  constructor(word) {
    this._word = word;
  }

  score() {
    if (this._word == null) {
      return 0;
    }
    let arr = this._word.toUpperCase().split("");
    
    var array1 = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'];
    var array2 = ['D', 'G'];
    var array3 = ['B', 'C', 'M', 'P'];
    var array4 = ['F', 'H', 'V', 'W', 'Y'];
    var array5 = ['K'];
    var array6 = ['J', 'X'];
    var array7 = ['Q', 'Z'];

let totalScore = 0;
for (let i = 0; i < arr.length; i++){
    if (array1.includes(arr[i])){
        totalScore +=1;
    } else if (array2.includes(arr[i])) {
        totalScore += 2;
    } else if (array3.includes(arr[i])) {
        totalScore += 3;
    } else if (array4.includes(arr[i])) {
        totalScore += 4;
    } else if (array5.includes(arr[i])) {
        totalScore += 5;
    } else if (array6.includes(arr[i])) {
        totalScore += 8;
    } else if (array7.includes(arr[i])) {
        totalScore += 10;
    }
    }
    return totalScore;

  }
}

export default Scrabble;
