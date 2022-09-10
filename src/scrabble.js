/*TASK

Given a word, compute the scrabble score for that word.

Letter Values
You'll need these:

Letter	Value
A, E, I, O, U, L, N, R, S, T	1
D, G	2
B, C, M, P	3
F, H, V, W, Y	4
K	5
J, X	8
Q, Z	10
Example "cabbage" should be scored as worth 14 points:

3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E
And to total:

                    3 + 2x1 + 2x3 + 2 + 1
= 3 + 2 + 6 + 3
= 14*/

/*Pseudo-code

create a function called 'score' with a word as its parameter
set values for each letter of the alphabet and name the variable pointScore
make sure all words are set to UPPERCASE, the same as the letters i've assigned the values to.
set the total to 0 so that the sum begins at 0
use for loop to loop through each letter of the word adding up the total of each letter score
return the total of the sum
create a prompt to ask the user to input a word and console log outcome(to help me check this code works!)
*/

class Scrabble {

    //create a function called 'score' with a word as its parameter
    score(word) {
        //set values for each letter of the alphabet and name the variable pointScore    
        var pointScore = {
            A: 1, E: 1, I: 1, O: 1, U: 1, L: 1, N: 1, R: 1, S: 1, T: 1,
            D: 2, G: 2,
            B: 3, C: 3, M: 3, P: 3,
            F: 4, H: 4, V: 4, W: 4, Y: 4,
            K: 5,
            J: 8, X: 8,
            Q: 10, Z: 10
        }
        //make sure all words are set to UPPERCASE, the same as the letters i've assigned the values to.
        const uppercase = word.toUpperCase();
        const length = uppercase.length;
        //set the total to 0 so that the sum always begins at 0    
        var total = 0;
        //use for loop to loop through each letter of the word adding up the total of each letter score
        for (let i = 0; i < length; i++) {
            total += pointScore[uppercase.charAt(i)];
        }

        //create an if statement to deal with the edge cases
        if (!word.match(/^[a-z]+$/i)) {
            return 0;
        } else if (word === 'null') {
            return 0;
        }

        //return the total of the sum
        return total;


    }
}
export default Scrabble;

        //create a prompt to ask the user to input a word and console log outcome

        // let letter = prompt("Enter a scrabble word please: ");

        // console.log(score(letter));
