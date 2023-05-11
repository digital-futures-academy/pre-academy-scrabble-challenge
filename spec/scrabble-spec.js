// Note: you shouldn't need to change anything in this file.

import Scrabble from '../src/scrabble.js';
let scrabble;

describe("Scrabble", () => {
  it('returns 0 for empty words', () => {
    scrabble = new Scrabble('');

    expect(scrabble.score()).toEqual(0);
  });

  it('returns 0 for whitespace', () => {
    scrabble = new Scrabble(" \t\n");

    expect(scrabble.score()).toEqual(0);
  });

  it('returns 0 for null', () => {
    scrabble = new Scrabble(null);

    expect(scrabble.score()).toEqual(0);
  });

  it('scores short word', () => {
    scrabble = new Scrabble('a');

    expect(scrabble.score()).toEqual(1);
  });

  it('scores short word', () => {
    scrabble = new Scrabble('f');

    expect(scrabble.score()).toEqual(4);
  });

  it('scores a simple word', () => {
    scrabble = new Scrabble('street');

    expect(scrabble.score()).toEqual(6);
  });

  it('scores a more complicated word', () => {
    scrabble = new Scrabble('quirky');

    expect(scrabble.score()).toEqual(22);
  });

  it('scores a case-insensitive word', () => {
    scrabble = new Scrabble('OXYPHENBUTAZONE');

    expect(scrabble.score()).toEqual(41);
  });

  //Added tests of bonus tasks

  it('playing a double word', () => {
    scrabble = new Scrabble('street', undefined, undefined, 2);

    expect(scrabble.score()).toEqual(12)
  });

    it('playing a double word a second time', () => {
    scrabble = new Scrabble('quirky', undefined, undefined, 2);

    expect(scrabble.score()).toEqual(44)
  });

  it('playing a triple word', () => {
    scrabble = new Scrabble('quirky', undefined, undefined, 3);

    expect(scrabble.score()).toEqual(66)
  });

  it('playing a double letter (first letter)', () => {
    scrabble = new Scrabble('quirky', [2], [0], undefined);

    expect(scrabble.score()).toEqual(32)
  });

  it('playing two triple letters (first and third letter)', () => { // 22 - 10 (q) = 12 - 1 (i) = 11; 1 * 3 + 10 * 3 + 11 = 
    scrabble = new Scrabble('quirky', [3,3], [0, 2], undefined);

    expect(scrabble.score()).toEqual(44)
    
  });

  it('playing two triple letters (first and third letter) as well as double word', () => { 
    scrabble = new Scrabble('quirky', [3, 3], [0, 2], 2);

    expect(scrabble.score()).toEqual(88)
    
  });

  // maybe add test to see if the length of the modifier array is longer than the actual word to test my error handling
});
