export class Haiku {

  constructor() {
    this.fiveSyllable = [
      'I am over you', 'and I fall in love', 'I was in that fire', 'Sea breeze blows ahead', 'Perfect summer day', 'for all life on earth', 'so make life last lon', 'Water runs down stream', 'Life moving along'
      ];

    this.sevenSyllable = [
      'The room was dark and somber', 'The book flows and the sun glows', 'Scorching sun rays, blazing winds', 'Scorching sun rays, blazing winds',
      'Fish swimming with the current', 'After school I laugh like crazy'
      ];
  }



  checkSentences(sentence) {
    let sentenceArr = this.splitWords(sentence);
    let count = 0;

    for(let i = 0; i < sentenceArr.length; i++) {
      count += this.checkVowels(sentenceArr[i]);
      // console.log(count);
    }
    return count;
  }

  splitWords(sentence) {
    let words = sentence.split(" ");
    return words;
  }

  checkVowels(word) {
    const vowelsList = "aeiouAEIOU";
    const diphthong = ['oi','oy','ou','ow','au','aw', 'oo', "ea", 'ai', 'ee'];
    let count = 0;
    let lastLetter = word.slice(-1);
    // console.log(lastLetter);

    for(let i = 0;i < word.length; i++) {
      for(let j = 0; j < vowelsList.length; j++) {
        if(word[i].match(vowelsList[j])) {
           count += 1;
        }
      }
    }
    for(let h = 0; h < diphthong.length; h++){
      // console.log(diphthong[h]);
      if(word.includes(diphthong[h])){
        count -= 1;
      }
    }
    if(lastLetter === "e" && count > 1) {
      count -= 1;
    }
    return count;
  }


}
