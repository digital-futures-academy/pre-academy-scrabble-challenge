class Scrabble {
    
    static letterScores = {
        aeioulnrst: 1,
        dg: 2,
        bcmp: 3,
        fhvwy: 4,
        k: 5,
        jx: 8,
        qz: 10,
    }
    
    constructor(word) {
        this.word = word?.trim().toLowerCase();
    }
    
    score() {
        let wordScore = 0;
        if (!this.word) return wordScore;
        wordScore += this.scoreWordOnly();
        return wordScore;
    }
    
    scoreWordOnly() {
        let score = 0;
        this.word.split("").forEach(letter => {
            for(const [key, value] of Object.entries(Scrabble.letterScores)) {
                if(key.includes(letter)) {
                    score += value;
                    break;
                }
            }
        });
        return score;
    }
}

export default Scrabble;
