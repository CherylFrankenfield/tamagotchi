import { Haiku } from './../src/js/haiku.js';

$(document).ready(function() {
  $('#form').submit(function(event) {
    event.preventDefault();
    const line1 = $('#line1').val();
    const line2 = $('#line2').val();
    const line3 = $('#line3').val();
    const check = new Haiku();
    let check1 = check.checkSentences(line1);
    let check2 = check.checkSentences(line2);
    let check3 = check.checkSentences(line3);
    console.log(check1);
    if ((check1 != 5 || check3 != 5 || check2 != 7)) {
      alert("This is not a Haiku")
    } else {
      // $('.result').append(`<li>Line 1 has : ${check.checkSentences(line1)}  syllables</li>
      // <li>Line 2 has: ${check.checkSentences(line2)}  syllables</li>
      // <li>Line 3 has: ${check.checkSentences(line3)}  syllables</li>`);
      $('.line1').empty();
      $('.line2').empty();
      $('.line3').empty();

      $('.line1').append(line1);
      $('.line2').append(line2);
      $('.line3').append(line3);
    };
  });

  $('#generate').click(function() {
    const Generate = new Haiku();
    let i = Math.floor(Math.random() * 9);
    let y = Math.floor(Math.random() * 9);
    let x = Math.floor(Math.random() * 6);

    console.log(i);
    console.log(y);

    let random1 = Generate.fiveSyllable[i];
    let random2 = Generate.sevenSyllable[x];
    let random3 = Generate.fiveSyllable[y];
    $('.line1').empty();
    $('.line2').empty();
    $('.line3').empty();

    $('.line1').append(random1);
    $('.line2').append(random2);
    $('.line3').append(random3);


  });
});
