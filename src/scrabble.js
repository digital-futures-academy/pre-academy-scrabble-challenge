class Scrabble 
{
  constructor(word)
  {
	this._word=word;
  }
  letterScore(letter)
  {
	  const lookUp=[["A","E","I","O","U","L","N","R","S","T","D","G","B","C","M","P","F","H","V","W","Y","K","J","X","Q","Z"],[1,1,1,1,1,1,1,1,1,1,2,2,3,3,3,3,4,4,4,4,4,5,8,8,10,10]];
	  let letterIndex = lookUp[0].findIndex((x)=>x===letter.toUpperCase());
	  if (letterIndex===-1)
	  {
		  return 0;
	  }
	  return lookUp[1][letterIndex];
  }
  calculateScore()
  {
	  let total = 0;
	  for (let i=0;i<this._word.length;i++)
	  {
		  total+=this.letterScore(this._word[i]);
	  }
	  return total;
  }
  score() 
  {
	  if (typeof this._word !== "string")
	  {
		  return 0;
	  }
	  return this.calculateScore();
  }
}
export default Scrabble;
