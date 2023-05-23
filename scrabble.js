class Scrabble {
    constructor(word) {
        this.word = word; // Constructor initializes objects within a class
    }

    score() {

        const points = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1, 'l': 1, 'n': 1, 'r': 1, 's': 1, 't': 1, 'd': 2, 'g': 2, 'b': 3, 'c': 3, 'm': 3, 'p': 3, 'f': 4, 'h': 4, 'v': 4, 'w': 4, 'y': 4, 'k': 5, 'j': 8, 'x': 8, 'q': 10, 'z': 10 }
        // This is for each point which is defined by each letter

        let chr = this.word.trim() // trims the word to remove white spaces

        if (chr == '') { // returns to 0 if left empty = no word entered
            return 0
        }

        chr = chr.toUpperCase() // Applies uppercase 

        if (this.word - null) { // Checks if its null and returns to 0
            return 0
        }

        let score = 0
        for (let i = 0; i < chr.length; i++) { // Using looping through arrays to calculate 
            score += values[chr[i]]              // to calculate the scores in a word
        }

        return score // returns the score
    }
}