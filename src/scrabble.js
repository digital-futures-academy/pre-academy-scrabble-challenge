class Scrabble {
        constructor(str) {
            //if statement or ternary operator(cleaner code) can be used here  
            //Test 4 - 7 is lower case so they must be converted to upper case
            (str == null) ? (this.str = '') : (this.str = str.toUpperCase());
        }
    //score() {
    //    Write your implementation here
    //    return [...this.str].reduce((sum, letter) => (sum += pointsSystem[letter] || 0), 0);
    //    The .reduce() method iterates through an array and returns a single value.
    //}

    /*The .reduce() method iterates through an array and returns a single value.
    Concise Body Arrow Functions is another way to create function
    Arrow function expressions were introduced in ES6. 
    These expressions are clean and concise.The syntax for an arrow function expression does not require the function keyword and uses a fat arrow => 
    to separate the parameter(s) from the body.
    Arrow functions with a single expression can use the concise function body which returns the result of the expression without the return keyword.*/

    score = (str) => [...this.str].reduce((sum, letter) => (sum += pointsSystem[letter] || 0), 0);

}
//The point system can be created using const, let or var ! const + let are new features (ES6)
    var pointsSystem = {
        A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
        D: 2, G: 2,
        B: 3, C: 3, M: 3, P: 3,
        F: 4, H: 4, V: 4, W: 4, Y: 4,
        K: 5,
        J: 8, X: 8,
        Q: 10, Z: 10
    };

export default Scrabble;

//Acceptance Criteria
let test1 = new Scrabble('')
console.log(test1.score()) // => 0

let test2 = new Scrabble(" \t\n")
console.log(test2.score()) // => 0

let test3 = new Scrabble(null)
console.log(test3.score()) // => 0

let test4 = new Scrabble('a')
console.log(test4.score()) // => 1

let test5 = new Scrabble('f')
console.log(test5.score()) // => 4

let test6 = new Scrabble('street')
console.log(test6.score()) // => 6

let test7 = new Scrabble('quirky')
console.log(test7.score()) // => 22

let test8 = new Scrabble('OXYPHENBUTAZONE')
console.log(test8.score()) // => 41
