var Pokedex = require('pokedex-promise-v2');
var options = {
  protocol: 'http',
  hostName: 'pokeapi.salestock.net',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}
const P = new Pokedex(options);

// P.getPokemonByName('bulbasaur') // with Promise
//    .then(function(response) {
//      console.log(response);
//    });
let poke = P.getPokemonByName('bulbasaur') // with Promise
 .then(function(response) {
   console.log(response);
   console.log(response.stats[0].stat.name);
   $("#pokename").append(response.name);
   $("#ability1").append(response.);
   $("#ability2").append(response.);
   $("#stat1").append(response.stats[0].stat.name);
   $("#stat2").append(response.stats[1].stat.name);
   $("#stat3").append(response.stats[2].stat.name);
   $("#stat4").append(response.stats[3].stat.name);
 })
 .catch(function(error) {
   console.log('There was an ERROR: ', error);
 });

import { Tamagotchi } from './../src/js/tamagotchi.js';
const newPet = new Tamagotchi();
$(document).ready(function() {
  $('form#start').submit(function(event) {
    event.preventDefault();
    const nameInput = $('#name').val();
    newPet.name = nameInput;
    newPet.setHunger();
    newPet.setPlay();
    newPet.setEnergy();
    newPet.areYouDead();
    $('.game-play').show();
    $('.start-game').hide();
    $('.petName').append(nameInput);
    $('.foodLevel').append(`F:` + newPet.foodLevel);
    $('.sleepLevel').append(`S:` + newPet.sleepLevel);
    $('.playLevel').append(`P:` + newPet.playLevel);

    let test = setInterval(function(){
      $('.foodLevel').text(`F:` + newPet.foodLevel);
      $('.sleepLevel').text(`S:` + newPet.sleepLevel);
      $('.playLevel').text(`P:` + newPet.playLevel);
      newPet.areYouDead();
      if(newPet.areYouDead() === true){
        $('.pet').hide();
        alert(`You Killed ${nameInput}`);
        clearInterval(test);
      };
    }, 1001);


  });
  $('#feed').click(function() {
    newPet.feedMe();
    $('.foodLevel').text(`F:` + newPet.foodLevel);
    $('.sleepLevel').text(`S:` + newPet.sleepLevel);
    $('.playLevel').text(`P:` + newPet.playLevel);
  });
  $('#sleep').click(function() {
    newPet.sleepMe();
    $('.foodLevel').text(`F:` + newPet.foodLevel);
    $('.sleepLevel').text(`S:` + newPet.sleepLevel);
    $('.playLevel').text(`P:` + newPet.playLevel);
  });
  $('#play').click(function() {
    newPet.playMe();
    $('.foodLevel').text(`F:` + newPet.foodLevel);
    $('.sleepLevel').text(`S:` + newPet.sleepLevel);
    $('.playLevel').text(`P:` + newPet.playLevel);
  });

});
