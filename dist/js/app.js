(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Haiku = exports.Haiku = function () {
  function Haiku() {
    _classCallCheck(this, Haiku);

    this.fiveSyllable = ['I am over you', 'and I fall in love', 'I was in that fire', 'Sea breeze blows ahead', 'Perfect summer day', 'for all life on earth', 'so make life last lon', 'Water runs down stream', 'Life moving along'];

    this.sevenSyllable = ['The room was dark and somber', 'The book flows and the sun glows', 'Scorching sun rays, blazing winds', 'Scorching sun rays, blazing winds', 'Fish swimming with the current', 'After school I laugh like crazy'];
  }

  _createClass(Haiku, [{
    key: 'checkSentences',
    value: function checkSentences(sentence) {
      var sentenceArr = this.splitWords(sentence);
      var count = 0;

      for (var i = 0; i < sentenceArr.length; i++) {
        count += this.checkVowels(sentenceArr[i]);
        // console.log(count);
      }
      return count;
    }
  }, {
    key: 'splitWords',
    value: function splitWords(sentence) {
      var words = sentence.split(" ");
      return words;
    }
  }, {
    key: 'checkVowels',
    value: function checkVowels(word) {
      var vowelsList = "aeiouAEIOU";
      var diphthong = ['oi', 'oy', 'ou', 'ow', 'au', 'aw', 'oo', "ea", 'ai', 'ee'];
      var count = 0;
      var lastLetter = word.slice(-1);
      // console.log(lastLetter);

      for (var i = 0; i < word.length; i++) {
        for (var j = 0; j < vowelsList.length; j++) {
          if (word[i].match(vowelsList[j])) {
            count += 1;
          }
        }
      }
      for (var h = 0; h < diphthong.length; h++) {
        // console.log(diphthong[h]);
        if (word.includes(diphthong[h])) {
          count -= 1;
        }
      }
      if (lastLetter === "e" && count > 1) {
        count -= 1;
      }
      return count;
    }
  }]);

  return Haiku;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _haiku = require('./../src/js/haiku.js');

$(document).ready(function () {
  $('#form').submit(function (event) {
    event.preventDefault();
    var line1 = $('#line1').val();
    var line2 = $('#line2').val();
    var line3 = $('#line3').val();
    var check = new _haiku.Haiku();
    var check1 = check.checkSentences(line1);
    var check2 = check.checkSentences(line2);
    var check3 = check.checkSentences(line3);
    console.log(check1);
    if (check1 != 5 || check3 != 5 || check2 != 7) {
      alert("This is not a Haiku");
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

  $('#generate').click(function () {
    var Generate = new _haiku.Haiku();
    var i = Math.floor(Math.random() * 9);
    var y = Math.floor(Math.random() * 9);
    var x = Math.floor(Math.random() * 6);

    console.log(i);
    console.log(y);

    var random1 = Generate.fiveSyllable[i];
    var random2 = Generate.sevenSyllable[x];
    var random3 = Generate.fiveSyllable[y];
    $('.line1').empty();
    $('.line2').empty();
    $('.line3').empty();

    $('.line1').append(random1);
    $('.line2').append(random2);
    $('.line3').append(random3);
  });
});

},{"./../src/js/haiku.js":1}]},{},[2]);
