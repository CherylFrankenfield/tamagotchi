import { RomanNumerals } from './../src/js/roman.js';

describe('the romanNumerals object and it\'s prototypes', function() {
  var reusableOutput;

  // beforeEach(function() {
  //   const newRomanNumerals = new RomanNumerals();
  //   reusableOutput = newRomanNumerals.numberCruncher;
  // });

  it('should test if any character that is not a number will not return anything', function() {
    
    expect(newRomanNumerals.numberCruncher("a")).toEqual('');

  });

  it('should test if any number higher than 3999 will return an error message', function() {

    expect(newRomanNumerals.numberCruncher(4000)).toEqual("There are no Roman Numerals higher than 3999, try again.");

  })

  it('should test positive for output of "I"', function() {

    expect(newRomanNumerals.numberCruncher(1)).toEqual("I");

  });

  it('should test positive for output of "II"', function() {

    expect(newRomanNumerals.numberCruncher(2)).toEqual("II");

  });

  it('should test positive for output of "IV"', function() {

    expect(newRomanNumerals.numberCruncher(4)).toEqual("IV");

  });

  it('should test if two numbers convert to a roman numeral', function() {

    expect(newRomanNumerals.numberCruncher(10)).toEqual("X");

  });

  it('should test if three numbers convert to a roman numeral', function() {

    expect(newRomanNumerals.numberCruncher(836)).toEqual("DCCCXXXVI");

  });

  it('should test if four numbers 3999 or lower convert to a roman numeral', function() {

    expect(newRomanNumerals.numberCruncher(3999)).toEqual("MMMCMXCIX");

  });
});
