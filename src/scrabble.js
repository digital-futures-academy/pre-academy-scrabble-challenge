
function scrabbleScore(str) {
    let one = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
    let two = ["d", "g"];
    let three = ["b", "c", "m", "p"];
    let four = ["f", "h", "v", "w", "y"];
    let five = ["k"];
    let eight = ["j", "x"];
    let ten = ["q", "z"]

    // Neaten the number of individual arrays - reduce number of loops in score
    const scores = {
        one: ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"],
        two: ["d", "g"]
    }

    let score = 0;

    // let arr = str.toLowerCase().split('');
    let arr = this.str?.toLowerCase().split('') ?? [];

    for (let i of arr) {
        one.forEach(item => {
            if (i === item) { score += 1 }
        })
    }

    for (let i of arr) {
        two.forEach(item => {
            if (i === item) { score += 2 }
        })
    }

    for (let i of arr) {
        three.forEach(item => {
            if (i === item) { score += 3 }
        })
    }

    for (let i of arr) {
        four.forEach(item => {
            if (i === item) { score += 4 }
        })
    }

    for (let i of arr) {
        five.forEach(item => {
            if (i === item) { score += 5 }
        })
    }

    for (let i of arr) {
        eight.forEach(item => {
            if (i === item) { score += 8 }
        })
    }

    for (let i of arr) {
        ten.forEach(item => {
            if (i === item) { score += 10 }
        })
    }


    return score

}
//   }
// }

console.log(scrabbleScore(``) === 0);
console.log(scrabbleScore(` \t\n`) === 0);
console.log(scrabbleScore(null) === 0);
console.log(scrabbleScore(`a`) === 1);
console.log(scrabbleScore(`f`) === 4);
console.log(scrabbleScore(`street`) === 6);
console.log(scrabbleScore(`quirky`) === 22);
console.log(scrabbleScore(`OXYPHENBUTAZONE`) === 41);

/* --- As a class --- */
const one = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
const two = ["d", "g"];
const three = ["b", "c", "m", "p"];
const four = ["f", "h", "v", "w", "y"];
const five = ["k"];
const eight = ["j", "x"];
const ten = ["q", "z"];

class Scrabble {
    constructor(str) {
        this.str = str;
    }

    score() {
        let score = 0;

        // let arr = this.str.toLowerCase().split('');
        // let arr = this.str?.toLowerCase().split('') ?? [];

        for (let i of arr) {
            one.forEach(item => {
                if (i === item) { score += 1 }
            })
        }

        for (let i of arr) {
            two.forEach(item => {
                if (i === item) { score += 2 }
            })
        }

        for (let i of arr) {
            three.forEach(item => {
                if (i === item) { score += 3 }
            })
        }

        for (let i of arr) {
            four.forEach(item => {
                if (i === item) { score += 4 }
            })
        }

        for (let i of arr) {
            five.forEach(item => {
                if (i === item) { score += 5 }
            })
        }

        for (let i of arr) {
            eight.forEach(item => {
                if (i === item) { score += 8 }
            })
        }

        for (let i of arr) {
            ten.forEach(item => {
                if (i === item) { score += 10 }
            })
        }


        return score
    }
}

export default Scrabble;