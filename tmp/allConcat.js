import { Tamagotchi } from './../src/js/tamagotchi.js';

$(document).ready(function() {
  $('form#start').submit(function(event) {
    event.preventDefault();
    const nameInput = $('#name').val();
    const newPet = new Tamagotchi(nameInput);
    newPet.setHunger();
    newPet.setPlay();
    newPet.setEnergy();
    $('.game-play').show();
    $('.start-game').hide();
    $('.petName').append(nameInput);
    $('.foodLevel').append(newPet.foodLevel);
    $('.sleepLevel').append(newPet.sleepLevel);
    $('.playLevel').append(newPet.playLevel);
    if(newPet.foodLevel < 10){
      document.getElementsByClassName('.foodLevel').innerHTML = "Food Level: " + this.foodLevel;
    };
    console.log(newPet.foodLevel);
  });
});
