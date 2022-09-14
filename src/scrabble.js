const points = [
    [['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'], 1],
    [['D', 'G'], 2],
    [['B', 'C', 'M', 'P'], 3],
    [['F', 'H', 'V', 'W', 'Y'], 4],
    [['K'], 5],
    [['J', 'X'], 8],
    [['Q', 'Z'], 10]
];

class Scrabble {
    constructor(word) {
        if (word === null) {
            this.word = "";
        } else {
            this.word = word.replace(/\s+/g, '');
        }
    }
    score = () => [...this.word.toUpperCase()].reduce((pointsTally, currentLetter) => points.find(([letterList]) => letterList.includes(currentLetter))[1] + pointsTally, 0);
}

export default Scrabble;