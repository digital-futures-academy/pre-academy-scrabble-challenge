
    function scrabbleScore(str) {
    let one = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
    let two = ["d", "g"];
    let three = ["b", "c", "m", "p"];
    let four = ["f", "h", "v", "w", "y"];
    let five = ["k"];
    let eight = ["j", "x"];
    let ten = ["q", "z"]

    let score = 0;

    let arr = str.toLowerCase().split('');

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
}

