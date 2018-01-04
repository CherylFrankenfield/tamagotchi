import { Haiku } from './../src/js/haiku.js';

describe('Haiku', function() {
  it('it checks for vowels in silent', function() {
    let haiku = new Haiku();

    expect(haiku.checkVowels("silent")).toEqual(2);
  });

  it('it checks for last letter to be silent', function() {
    let haiku = new Haiku();

    expect(haiku.checkVowels("ignore")).toEqual(2);
  });

  it('it checks for words and sentence', function() {
    let haiku = new Haiku();

    expect(haiku.splitWords("An old silent pond")).toEqual([ 'An', 'old', 'silent', 'pond' ]);
  });

  it('it checks for vowels in sentences', function() {
    let haiku = new Haiku();

    expect(haiku.checkSentences("An old silent pond")).toEqual(5);
  });
});
