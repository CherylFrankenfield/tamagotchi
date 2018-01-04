export class Haiku {

  checkSentences(sentence) {
    let sentenceArr = this.splitWords(sentence);
    let count = 0;

    for(let i = 0; i < sentenceArr.length; i++) {
      count += this.checkVowels(sentenceArr[i]);
      console.log(count);
    }
    return count;
  }

  splitWords(sentence) {
    let words = sentence.split(" ");
    return words;
  }

  checkVowels(word) {
    const vowelsList = "aeiouAEIOU";
    let count = 0;
    let lastLetter = word.slice(-1);
    console.log(lastLetter);

    for(let i = 0;i < word.length; i++) {
      for(let j = 0; j < vowelsList.length; j++) {
        if(word[i].match(vowelsList[j])) {
           count += 1;
        }
      }
    }
    if(lastLetter === "e") {
      count -= 1;
    }
    return count;
  }


}
