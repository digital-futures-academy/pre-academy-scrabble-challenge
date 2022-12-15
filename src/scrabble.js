class Scrabble {
    letterScore = {
        a : 1,
        b : 3,
        c : 3,
        d : 2,
        e : 1,
        f : 4,
        g : 2,
        h : 4,
        i : 1,
        j : 1,
        k : 5,
        l : 1,
        m : 3,
        n : 1,
        o : 1,
        p : 3,
        q : 10,
        r : 1,
        s : 1,
        t : 1,
        u : 1,
        v : 4,
        w : 4,
        x : 8,
        y : 4,
        z : 10
    }
    constructor(word) {

        if (word)
            this._word = word.toLowerCase();
        else  
            this._word = '';        
    }

  score () {
    
    this.wordScore = 0;
    
    for (let i = 0; i < this._word.length; i++) {
        if (!this.letterScore[this._word.charAt(i)]) {
            this.wordScore = 0;
            break;
        }
        this.wordScore += this.letterScore[this._word.charAt(i)];        
    }
    return this.wordScore;
    }
}

export default Scrabble;
