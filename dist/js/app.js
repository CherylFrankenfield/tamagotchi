(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Tamagotchi = exports.Tamagotchi = function () {
  function Tamagotchi(name) {
    _classCallCheck(this, Tamagotchi);

    this.name = name;
    this.foodLevel = 10;
    this.sleepLevel = 10;
    this.playLevel = 10;
  }

  _createClass(Tamagotchi, [{
    key: "setHunger",
    value: function setHunger() {
      var _this = this;

      setInterval(function () {
        if (_this.foodLevel === 0) {
          return _this.foodLevel;
        } else {
          _this.foodLevel--;
        }
      }, 2000);
    }
  }, {
    key: "setPlay",
    value: function setPlay() {
      var _this2 = this;

      setInterval(function () {
        if (_this2.playLevel === 0) {
          return _this2.playLevel;
        } else {
          _this2.playLevel--;
        }
      }, 4000);
    }
  }, {
    key: "setEnergy",
    value: function setEnergy() {
      var _this3 = this;

      setInterval(function () {
        if (_this3.sleepLevel === 0) {
          return _this3.sleepLevel;
        } else {
          _this3.sleepLevel--;
        }
      }, 5000);
    }
  }, {
    key: "amIHungry",
    value: function amIHungry() {
      if (this.foodLevel > 0) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "amITired",
    value: function amITired() {
      if (this.sleepLevel > 0) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "amIBored",
    value: function amIBored() {
      if (this.playLevel > 0) {
        return false;
      } else {
        return true;
      }
    }
  }, {
    key: "feedMe",
    value: function feedMe() {
      this.foodLevel = 10;
    }
  }, {
    key: "sleepMe",
    value: function sleepMe() {
      this.sleepLevel = 10;
    }
  }, {
    key: "playMe",
    value: function playMe() {
      this.playLevel = 10;
    }
  }, {
    key: "areYouDead",
    value: function areYouDead() {
      if (this.foodLevel === 0 && this.sleepLevel === 0 && this.playLevel === 0) {
        return true;
      } else {
        return false;
      }
    }
  }]);

  return Tamagotchi;
}();

},{}],2:[function(require,module,exports){
'use strict';

var _tamagotchi = require('./../src/js/tamagotchi.js');

var newPet = new _tamagotchi.Tamagotchi();

$(document).ready(function () {
  $('form#start').submit(function (event) {
    event.preventDefault();
    var nameInput = $('#name').val();
    newPet.name = nameInput;
    newPet.setHunger();
    newPet.setPlay();
    newPet.setEnergy();
    newPet.areYouDead();
    $('.game-play').show();
    $('.start-game').hide();
    $('.petName').append(nameInput);
    $('.foodLevel').append('F:' + newPet.foodLevel);
    $('.sleepLevel').append('S:' + newPet.sleepLevel);
    $('.playLevel').append('P:' + newPet.playLevel);

    var test = setInterval(function () {
      $('.foodLevel').text('F:' + newPet.foodLevel);
      $('.sleepLevel').text('S:' + newPet.sleepLevel);
      $('.playLevel').text('P:' + newPet.playLevel);
      newPet.areYouDead();
      if (newPet.areYouDead() === true) {
        $('.game-play').hide();
        alert('You Killed ' + nameInput);
        clearInterval(test);
      };
    }, 1001);
  });
  $('#feed').click(function () {
    newPet.feedMe();
    $('.foodLevel').text('F:' + newPet.foodLevel);
    $('.sleepLevel').text('S:' + newPet.sleepLevel);
    $('.playLevel').text('P:' + newPet.playLevel);
  });
  $('#sleep').click(function () {
    newPet.sleepMe();
    $('.foodLevel').text('F:' + newPet.foodLevel);
    $('.sleepLevel').text('S:' + newPet.sleepLevel);
    $('.playLevel').text('P:' + newPet.playLevel);
  });
  $('#play').click(function () {
    newPet.playMe();
    $('.foodLevel').text('F:' + newPet.foodLevel);
    $('.sleepLevel').text('S:' + newPet.sleepLevel);
    $('.playLevel').text('P:' + newPet.playLevel);
  });
});

},{"./../src/js/tamagotchi.js":1}]},{},[2]);
