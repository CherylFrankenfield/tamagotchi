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
    $('.foodLevel').append(newPet.foodLevel);
    $('.sleepLevel').append(newPet.sleepLevel);
    $('.playLevel').append(newPet.playLevel);

    let test = setInterval(function(){
      $('.foodLevel').text(newPet.foodLevel);
      $('.sleepLevel').text(newPet.sleepLevel);
      $('.playLevel').text(newPet.playLevel);
      newPet.areYouDead();
      if(newPet.areYouDead() === true){
        $('.game-play').hide();
        alert('Game Over');
        clearInterval(test);
      };
    }, 1001);
  });
  $('#feed').click(function() {
    newPet.feedMe();
    $('.foodLevel').text(newPet.foodLevel);
    $('.sleepLevel').text(newPet.sleepLevel);
    $('.playLevel').text(newPet.playLevel);
  });
  $('#sleep').click(function() {
    newPet.sleepMe();
    $('.foodLevel').text(newPet.foodLevel);
    $('.sleepLevel').text(newPet.sleepLevel);
    $('.playLevel').text(newPet.playLevel);
  });
  $('#play').click(function() {
    newPet.playMe();
    $('.foodLevel').text(newPet.foodLevel);
    $('.sleepLevel').text(newPet.sleepLevel);
    $('.playLevel').text(newPet.playLevel);
  });

});
