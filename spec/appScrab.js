//I've added some notes at the end


//VERSION 1 - straightforward scoring of a word, without double or triple anything


function check(word) {
    let score = 0;
    if (word != null) {
        wordU = word.toUpperCase();
        scoring(wordU);
    }
    else {
        return 0
    }

    function scoring(wordU) {

        for (let i = 0; i < wordU.length; i++) {
            if (wordU[i] === "A" || wordU[i] === "E" || wordU[i] === "I" || wordU[i] === "O" || wordU[i] === "U" || wordU[i] === "L" || wordU[i] === "N" || wordU[i] === "R" || wordU[i] === "S" || wordU[i] === "T") {
                score += 1;
            }
            if (wordU[i] === "D" || wordU[i] === "G") {
                score += 2
            }
            else if (wordU[i] === "B" || wordU[i] === "C" || wordU[i] === "M" || wordU[i] === "P") {
                score += 3;
            }
            else if (wordU[i] === "F" || wordU[i] === "H" || wordU[i] === "V" || wordU[i] === "W" || wordU[i] === "Y") {
                score += 4;
            }
            else if (wordU[i] === "K") {
                score += 5;
            }
            else if (wordU[i] === "J" || wordU[i] === "X") {
                score += 8;
            }
            else if (wordU[i] === "Q" || wordU[i] === "Z") {
                score += 10;
            }
            else {
                score += 0;
            }

        }

    }
    return score;

};

//-----------------------------------------------------------------------------------------------------
// VERSION 2 - with a multiplier for double and triple word scores
/*

let multiplier = 1;

function check(word, multiplier) {
    let score = 0;
    if (word != null) {
        wordU = word.toUpperCase();
        scoring(wordU);
    }
    else {
        return 0
    }

    function scoring(wordU) {

        for (let i = 0; i < wordU.length; i++) {
            if (wordU[i] === "A" || wordU[i] === "E" || wordU[i] === "I" || wordU[i] === "O" || wordU[i] === "U" || wordU[i] === "L" || wordU[i] === "N" || wordU[i] === "R" || wordU[i] === "S" || wordU[i] === "T") {
                score += 1;
            }
            if (wordU[i] === "D" || wordU[i] === "G") {
                score += 2
            }
            else if (wordU[i] === "B" || wordU[i] === "C" || wordU[i] === "M" || wordU[i] === "P") {
                score += 3;
            }
            else if (wordU[i] === "F" || wordU[i] === "H" || wordU[i] === "V" || wordU[i] === "W" || wordU[i] === "Y") {
                score += 4;
            }
            else if (wordU[i] === "K") {
                score += 5;
            }
            else if (wordU[i] === "J" || wordU[i] === "X") {
                score += 8;
            }
            else if (wordU[i] === "Q" || wordU[i] === "Z") {
                score += 10;
            }
            else {
                score += 0;
            }

        }

    }
    return wordU + " scores " + score * multiplier + ".";


};

console.log(check("quirky", 1));
*/


//-------------------------------------------------------------------------------------------------------

/*I'm delighted I got this to work. I realise it's clunky and inelegant but thought it more important to deliver something sooner rather than later, given time pressures around booking a chat. I am wondering about whether I could put the scrabble scores in an object literal...
const scores = {
1: [A, E, I, O, U... etc]
}
...so that I could then loop through those and shorten my epic 'else if' statement and maybe also use it for double and triple letter scores. I wouldn't know how to search values to return a key name though - yet. 


*/