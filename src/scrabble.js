class Scrabble {

    constructor(word, doubleLetterIndexes = [], tripleLetterIndexes = [], doubleWord = false, tripleWord = false) {
        this.word = word;
        this.doubleLetterIndexes = doubleLetterIndexes;
        this.tripleLetterIndexes = tripleLetterIndexes;
        this.doubleWord = doubleWord;
        this.tripleWord = tripleWord;
    }

    letters = new Map([
        ["A", 1],
        ["E", 1],
        ["I", 1],
        ["O", 1],
        ["U", 1],
        ["L", 1],
        ["N", 1],
        ["R", 1],
        ["S", 1],
        ["T", 1],
        ["D", 2],
        ["G", 2],
        ["B", 3],
        ["C", 3],
        ["M", 3],
        ["P", 3],
        ["F", 4],
        ["H", 4],
        ["V", 4],
        ["W", 4],
        ["Y", 4],
        ["K", 5],
        ["J", 8],
        ["X", 8],
        ["Q", 10],
        ["Z", 10],
    ]);


    score() {
        let score = 0;

        if (!this.isValidInput()) {
            return 0;
        }

        for (let i = 0; i < this.word.length; i++) {
            score += this.getTileValue(i);
        }

        score = this.applyFullWordMultiplier(score);
        return score;
    }

    // Returns true if the input is valid else returns false.
    isValidInput() {
        if (this.word === undefined || this.word === null) {
            return false;
        } else if (this.word.trim().length === 0) {
            return false;
        } else return true;
    }

    // This gets the tile value of each character in the provided word.
    getTileValue(tileIndex) {
        let char = this.word[tileIndex].toUpperCase();
        let tileValue = this.letters.get(char);

        if (this.doubleLetterIndexes.includes(tileIndex)) {
            tileValue *= 2;
        }
        if (this.tripleLetterIndexes.includes[tileIndex]) {
            tileValue *= 3;
        }
        return tileValue;
    }

    // This deals with multiplying the entire word. Applies double word or triple word score.
    applyFullWordMultiplier(score) {
        if (this.doubleWord) {
            score *= 2;
        }
        if (this.tripleWord) {
            score *= 3;
        }
        return score;
    }

}

export default Scrabble;
