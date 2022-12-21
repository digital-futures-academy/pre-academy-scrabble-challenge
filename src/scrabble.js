//Mo Razavi Code

class Scrabble{
  //constructor 
  constructor(word){
      this._word = word
    if (this._word === null){
      return this._word = ''
    }else{
      return this._word
    }
  }
  //getter
  get word(){
      return this._word
  }

  score(){
    let result = 0;
    //lets make an object => key : value (letter)
    const myObject  = {
            1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
            2: ['D', 'G'],
            3: ['B', 'C', 'M', 'P'],
            4: ['F', 'H', 'V', 'W', 'Y'],
            5: ['K'],
            8: ['J', 'X'],
            10: ['Q', 'Z'],
    };
    for (let letter of this._word) {
        for (let key in myObject) {
          //if it has those letters we (true or flase) if flase it returns zero or NaN
            if (myObject[key].includes(letter.toUpperCase()))
              //adding the keys using parseInt function
                result += parseInt(key);
            }
        }
    return result;
 
  }
}

export default Scrabble;
