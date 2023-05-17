class Scrabble {

  score(word) {
    // Write your implementation here:

    //Manage null word
    if (word == null) {
      this.word = "";
    }
    //change word letters to lowercase
    word = word.toLowerCase();
    //Partition a variable for the running sum of points
    let runningsum = 0
    //Group the points by letters so that the conditional statements below are clear and consise
    let lettergroup1 = ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"];
    let lettergroup2 = ["d", "g"];
    let lettergroup3 = ["b", "c", "m", "p"];
    let lettergroup4 = ["f", "h", "v", "w", "y"];
    let lettergroup5 = ["k"];
    let lettergroup6 = ["j", "x"];
    let lettergroup7 = ["q", "z"];

    //Iterate through the letters in the given word
    for (i = 0; i < word.length; i += 1) {
      //Conditional logic to assign the correct points. Checks what grouping the given letter is in and adds the corresponding point to the running sum of points.
      if (lettergroup1.includes(word[i])) {
        //console.log("1 point")
        runningsum += 1
      } else if (lettergroup2.includes(word[i])) {
        //console.log("2 points")
        runningsum += 2
      } else if (lettergroup3.includes(word[i])) {
        //console.log("3 points")
        runningsum += 3
      } else if (lettergroup4.includes(word[i])) {
        //console.log("4 points")
        runningsum += 4
      } else if (lettergroup5.includes(word[i])) {
        //console.log("5 points")
        runningsum += 5
      } else if (lettergroup6.includes(word[i])) {
        //console.log("8 points")
        runningsum += 8
      } else if (lettergroup7.includes(word[i])) {
        //console.log("10 points")
        runningsum += 10
      }
    }
    return runningsum

  }
}

export default Scrabble;
