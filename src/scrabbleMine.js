
const LetterScore = {
    a: 1,
    b: 3,
    c: 3,
    d: 2,
    e: 1,
    f: 4,
    g: 2,
    h: 4,
    i: 1,
    j: 8,
    k: 5,
    l: 1,
    m: 3,
    n: 1,
    o: 1,
    p: 3,
    q: 10,
    r: 1,
    s: 1,
    t: 1,
    u: 1,
    v: 4,
    w: 4,
    x: 8,
    y: 4,
    z: 10
}

class Scrabble {

    constructor(word) {

        this.word = word;

    }

    get getWord() {

        return this.word;

    }

    get getTrim() {

        return this.word.trim();

    }

    doubleWord() {

        if (this.checkInput() === 0) {

            return 0

        }

        return (this.score() * 2)

    }

    tripleWord() {

        if (this.checkInput() === 0) {

            return 0

        }

        return (this.score() * 3)

    }

    doubleLetter(letter) {

        if (this.checkInput() === 0) {

            return 0

        }


        if (this.getWord.match(letter)) {

            return this.pointSystem(letter) + this.score()

        } else {

            return this.score();

        }

    }

    tripleLetter(letter) {

        // this.checkInput() === 0 && 0;

        if (this.checkInput() === 0) {

            return 0

        }





        if (this.getWord.match(letter)) {

            return (this.pointSystem(letter) * 2) + this.score()

        } else {

            return this.score();

        }


    }

    pointSystem(letter) {
        //let score = 0;

        return LetterScore[letter]

        /*
          if (letter.match(/[aeioulnrst]/)) {
            score = score + 1;
          } else if (letter.match(/[dg]/)) {
            score = score + 2;
          } else if (letter.match(/[bcmp]/)) {
            score = score + 3;
          } else if (letter.match(/[fhvwy]/)) {
            score = score + 4;
          } else if (letter.match(/[k]/)) {
            score = score + 5;
          } else if (letter.match(/[jx]/)) {
            score = score + 8;
          } else if (letter.match(/[qz]/)) {
            score = score + 10;
          } else {
            score = 0;
            return score;
          }
        
            return score
        
            */
    }

    checkInput() {

        if (this.getWord === null || this.getWord === '' || this.getWord.match("[^A - z]")) {

            return 0;

        }
    }

    score() {

        let score = 0;


        if (this.checkInput() === 0) {
            return 0
        }



        //this.checkInput() && 0;



        /*


        if (this.getWord === null || this.getWord === '' || this.getWord.match["(^A-z)"]) {
            return 0;
        }
*/
        //let word = this.getWord.toLowerCase()
        //console.log('current word: ' + word)
        //let letter = '';

        for (let loop = 0; loop < this.getWord.length; loop++) {
            //let letter = this.getWord.toLowerCase().substr(loop, 1);

            //console.log('current letter:' + letter)

            score = score + this.pointSystem(this.getWord.toLowerCase().substr(loop, 1));

            //console.log('running total: ' + score)

        }
        //console.log('final total: ' + score)
        return score
    }

}

let scrabble = new Scrabble('abba')
console.log(scrabble.score())// => 0
console.log(scrabble.doubleWord())
console.log(scrabble.tripleWord())
console.log(scrabble.doubleLetter('a'))
console.log(scrabble.doubleLetter('z'))
console.log(scrabble.tripleLetter('a'))
console.log(scrabble.tripleLetter('z'))


export default Scrabble;




