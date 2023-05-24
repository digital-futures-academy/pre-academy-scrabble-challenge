class Scrabble {

    constructor(word) {
    
    this._score=0;
    if (typeof word !== 'string'||/[^a-zA-Z]/.test(word)) {
        return this._word=''   // word is not a string/null/empty
    }
    
    else{
    this._word=word
    }
    }
    

    letterVal (char){

        char=char.toUpperCase()


        let points = {
            A:1,E:1,I:1,O:1,U:1,L:1,N:1,R:1,S:1,T:1,
            D:2,G:2,
            B:3,C:3,M:3,P:3,
            F:4,H:4,V:4,W:4,Y:4,
            K:5,
            J:8,X:8,
            Q:10,Z:10
            }

            return points[char]
    }


    score(){

        
        for (let i=0; i<this._word.length;i+=1){
        //this._score+= points[this._word[i]]
        this._score+= this.letterVal(this._word[i])
        }
    
    return this._score
    }  //score() 

   

    doubleWord(){
        return 2*this._score
    }


    tripleWord(){
        return 3*this._score
    }

    doubleLetter(lett){
        return this._score+this.letterVal(lett)
    }

    tripleLetter(lett){
        return this._score+(2*this.letterVal(lett))
    }



    }  // class
