///Scrabble Challenge - Oonagh-Alice Parker

///Create a function score that calculates the score of the inputted word
function points(word) {
    ///Make sure all the letters in the word are lower case
    word = word.toLowerCase()
    ///Split the word into its individual letters and store it in an array letters
    const letters = word.split('')
    ///Set the initial points sum to 0
    let sum = 0;
    for (i = 0; i < letters.length; ++i) {
        ///If the letter matches 'a' or 'e' or etc.. add 1 to the points sum
        if (letters[i] === 'a' || 'e' || 'i' || 'o' || 'u' || 'l' || 'n' || 'r' || 's' || 't') {
            sum += 1
        }
        else if (letters[i] === 'd' || 'g') {
            sum += 2
        }
        else if (letters[i] === 'b' || 'c' || 'm' || 'p') {
            sum += 3
        }
        else if (letters[i] === 'f' || 'h' || 'v' || 'w' || 'y') {
            sum += 4
        }
        else if (letter[i] === 'k') {
            sum += 5
        }
        else if (letter[i] === 'j' || 'k') {
            sum += 8
        }
        else if (letter[i] === 'q' || 'z') {
            sum += 10
        }
    }
    ///Returns the total sum of points for that word
    return sum
}

///Store the points the word scored in the constant score
const score = points(word)

///Create scrabble class
class Scrabble {
    constructor(word, score) {
        this._word = word
        this._score = score
    }
}

///Note: I know the tests fail when run but cannot see where I have gone wrong,
///I have run the code just using the function and that has worked but its
///putting it into a class where I have really struggled. I attempted to put the whole
///function into the class as a method called 'score', I have also tried calling the 
/// function inside the class. Here you can see I have tried to define score outside 
///the class and input it into the class so it can be called that way.