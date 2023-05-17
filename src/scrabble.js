class Scrabble {
    constructor(name) {
        this.totalScore = 0
        this._name = name;
        this._string = name;
        this.alphabetScore = [['a', 1], ['b', 3], ['c', 3], ['d', 2], ['e', 1], ['f', 4], ['g', 2], ['h', 4], ['i', 1], ['j', 8], ['k', 5], ['l', 1], ['m', 3], ['n', 1], ['o', 1], ['p', 3], ['q', 10], ['r', 1], ['s', 1], ['t', 1], ['u', 1], ['v', 4], ['w', 4], ['x', 8], ['y', 4], ['z', 10]];
    }
    notNullOrEmpty() {
        if (this._string === null || this._string.trim() === "") {
            return false;
        } else {
            return true;
        }
    }

    lettersOnly() {
        this.nonLetters = 0;
        for (let i = 0; i < this._string.length; i++) {
            if (/[a-z]/i.test(this._string[i])) {
                this.nonLetters = this.nonLetters;
            }
            else {
                this.nonLetters = this.nonLetters + 1;
            }
        }
        if (this.nonLetters === 0) {
            return true;
        }
        else {
            return false;
        }
    }

    addLetterScore(array, char) {
        for (let p = 0; p < array.length; p++) {
            if (array[p][0] === char.toLowerCase()) {
                this.totalScore = this.totalScore + (array[p][1]);
                break;
            }
        }
    }

    score() {
        if (!this.notNullOrEmpty(this._string)) {
            return 0;
        }
        else if (!this.lettersOnly(this._string)) {
            return 0;
        }
        else {
            for (let i = 0; i < this._string.length; i++) {
                this.addLetterScore(this.alphabetScore, this._string[i]);
            }
            return this.totalScore;
        }
    }

}


export default Scrabble;