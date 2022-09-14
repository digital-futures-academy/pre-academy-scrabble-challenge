 let values = {
  'A': 1,
  'E': 1,
  'I': 1,
  'O': 1,
  'U': 1,
  'L': 1,
  'N': 1,
  'R': 1,
  'S': 1,
  'T': 1,
  'D': 2,
  'G': 2,
  'B': 3,
  'C': 3,
  'M': 3,
  'P': 3,
  'F': 4,
  'H': 4,
  'V': 4,
  'W': 4,
  'Y': 4,
  'K': 5,
  'J': 8,
  'X': 8,
  'Q': 10,
  'Z': 10 ,
};
class Scrabble {   // The Scrabble class is used as a template to create the object.
  //The puropse of constructor is to initialize an object within a class.
  //The constructor is esentially a function and gets called each time a new object gets initiated with the keyword 'new'.
  constructor(word){ // 
    if (word == null ) {this.word = '' ;} 
    else if (word == ' \t\n') {this.word = '';}
    else  { this.word = word.toUpperCase() ;}  
 }
 // A for loop with respect to this project is used within the score method to iterate through each letter of the word (index) given ; by increments of 1. 
 // during the iteration process each character present in the string is associated with the according 'score value',
 // given in the values obejct and is totalled up to output the points of the word. 
 score () {
  // Write your implementation here 
   let points = 0;
   let i =0 ;
    for ( i = 0 ;i < this.word.length; i++ ) {
      points += values[this.word[i]];
    } 

    console.log(points);
    return(points);
  }

}
let test1 = new Scrabble('');
test1.score(); // => 0

let test2 = new Scrabble(' \t\n');
test2.score(); // => 0

let test3 = new Scrabble(null);
test3.score(); // => 0

let test4 = new Scrabble('a');
test4.score(); // => 1

let test5 = new Scrabble('f');
test5.score(); // => 4

let test6 = new Scrabble('street');
test6.score(); // => 6

let test7 = new Scrabble('quirky');
test7.score(); // => 22

let test8 = new Scrabble('OXYPHENBUTAZONE');
test8.score(); // => 41

export default Scrabble;
